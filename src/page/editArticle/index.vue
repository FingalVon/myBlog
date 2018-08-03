<template>
  <div id="editor">
    <el-form :model="blogArticle" :rules="blogArticleRules" ref="blogArticle" label-width="70px">
      <el-form-item label="标题：" prop="title">
        <el-input
          placeholder="请输入标题"
          v-model="blogArticle.title"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="标签：">
        <el-tag
          style="margin: auto 5px;"
          v-for="(label,i) in blogArticle.labels"
          :key="i"
          closable
          :disable-transitions="false"
          @close="handleClose(label)">
          {{label.name}}
        </el-tag>
        <el-autocomplete
          class="input-new-tag"
          v-if="labelInputVisible"
          placeholder="请输入标签"
          v-model="label"
          clearable
          autofocus
          size="small"
          ref="tagsInput"
          :fetch-suggestions="queryLabels"
          @select="selectLabel"
          @keyup.enter.native="setLabel"
          @blur="setLabel">
        </el-autocomplete>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-form-item>
    </el-form>

    <mavon-editor style="height: 80%" @save="save" @imgAdd="imgAdd" ref="md" :ishljs="true"/>
    <el-button style="margin-top: 20px; float:right" type="primary" @click="onSubmit('blogArticle')">发布</el-button>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import Qs from 'qs';

export default {
  // name: "index.vue",
  components: { mavonEditor },
  data() {
    return {
      editorHeight:'80%',
      allLabels: [],
      label: "",
      blogArticle: {
        title: "",
        labels: [],
        type: "",
        htmlContent: "",
        mdContent: ""
      },
      labelInputVisible: false,
      blogArticleRules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 1,
            max: 100,
            message: "长度在 1 到 100 个字符",
            trigger: "blur"
          }
        ]
      },
      tagsInSelect: false,
    };
  },
  methods: {
    selectLabel(label) {
      this.tagsInSelect = true;
      this.blogArticle.labels.push(label);
      this.label = "";
      this.tagsInSelect = false;
    },
    setLabel() {
      setTimeout(() => {
        if(this.tagsInSelect) return;
        let label = this.label;
        if (label) {
          this.blogArticle.labels.push({
            id: '',
            name: label,
            value: label
          });
        }
        this.labelInputVisible = false;
        this.label = "";
      },200);
    },
    showInput() {
      this.labelInputVisible = true;
      this.$nextTick(() => {
        this.$refs.tagsInput.focus();
      })
    },
    queryLabels(str, callback) {
      var labels = this.allLabels;
      var results = str ? labels.filter(this.createFilter(str)) : labels;
      // 调用 callback 返回建议列表的数据
      results.forEach(v => {
        v.value = v.name;
      });
      callback(results);
    },
    createFilter(str) {
      return label => {
        return label.name.toLowerCase().indexOf(str.toLowerCase()) === 0;
      };
    },
    loadAll() {
      // 这是一个异步的请求
      let result = new Promise((resolve, reject) => {
        this.$axios('get', "/api/blog/blog_label").then(res => {
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(data);
          }
        });
      });
      return result;
    },
    handleClose(label) {
      this.blogArticle.labels.pop(label);
    },
    onSubmit(blogArticle) {
      this.$refs[blogArticle].validate(valid => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      let md = this.$refs.md;
      let mdContent = md.d_value;
      let htmlContent = md.d_render;
      console.log(this.getNavigation(md));
      if (!mdContent) {
        // 没有写内容
      }
      this.blogArticle.mdContent = mdContent;
      this.blogArticle.htmlContent = htmlContent;
      let params = {
        title:this.blogArticle.title,
        type:this.blogArticle.type,
        htmlContent:this.blogArticle.htmlContent,
        mdContent:this.blogArticle.mdContent
      };

      let labelVMs = {};
      this.blogArticle.labels.forEach((label, i) => {
        params[`blogLabelVMS[${i}].id`] = label.id;
        params[`blogLabelVMS[${i}].name`] = label.name;
      });
      // this.$axios('post',"/api/blog/blog_article/publish",params).then(res => {
      //   console.log(res.data);
      // });
    },
    save(mdContent, htmlContent) {
      console.log(mdContent);
      console.log(htmlContent);
    },
    imgAdd(pos, $file){
      var _this = this;
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('image', $file);
      uploadFileRequest("/article/uploadimg", formdata).then(resp=> {
        var json = resp.data;
        if (json.status == 'success') {
//            _this.$refs.md.$imgUpdateByUrl(pos, json.msg)
          _this.$refs.md.$imglst2Url([[pos, json.msg]])
        } else {
          _this.$message({type: json.status, message: json.msg});
        }
      });
    },
    getNavigation(md) {
      let reg = /^H[1-6]{1}$/;
      let navigationContent = md.$refs.navigationContent;
      navigationContent.innerHTML = md.d_render
      let nodes = navigationContent.children;
      let navigationStr = '';
      if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
            if (reg.exec(nodes[i].tagName)) {
              navigationStr += nodes[i].outerHTML;
            }
        }
      }
      return navigationStr;
    }
  },
  mounted() {
    this.loadAll().then(data => {
      this.allLabels = data;
    });
  }
};
</script>

<style scoped>
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
  text-align: left;
}

.input-new-tag {
  width: 115px;
  margin-left: 10px;
  vertical-align: bottom;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
