<template>
  <div id="editor">
    <el-form :model="blogArticle" :rules="blogArticleRules" ref="blogArticle" label-width="80px">
      <el-form-item label="标题" prop="title">
        <el-input
          placeholder="请输入标题"
          v-model="blogArticle.title"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-tag
          style="margin: auto 5px;"
          :key="label.id"
          v-for="label in blogArticle.labels"
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
          ref="saveTagInput"
          size="small"
          :fetch-suggestions="queryLabels"
          @select="selectLabel"
          @keyup.enter.native="setLabel"
          @blur="setLabel">
        </el-autocomplete>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-form-item>
    </el-form>

    <mavon-editor style="height: 80%" @save="save" ref=md :ishljs="true"/>
    <el-button style="margin-top: 20px" type="primary" @click="onSubmit('blogArticle')">发布</el-button>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';

  export default {
    // name: "index.vue",
    components: {mavonEditor},
    data() {
      return {
        allLabels: [],
        label: '',
        blogArticle: {
          title: '',
          labels: [],
          type: '',
          htmlContent: '',
          mdContent: ''
        },
        labelInputVisible: false,
        blogArticleRules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      selectLabel(label) {
        this.blogArticle.labels.push(label);
        this.label = '';
      },
      setLabel() {
        let label = this.label;
        if(label) {
          this.blogArticle.labels.push({
            id: '',
            name: label,
            value: label
          });
        }
        this.labelInputVisible = false;
        this.label = '';
      },
      showInput() {
        this.labelInputVisible = true;
      },
      queryLabels(str, callback) {
        var labels = this.allLabels;
        var results = str ? labels.filter(this.createFilter(str)) : labels;
        // 调用 callback 返回建议列表的数据
        results.forEach(v => {
          v.value = v.name;
        })
        callback(results);
      },
      createFilter(str) {
        return (label) => {
          return (label.name.toLowerCase().indexOf(str.toLowerCase()) === 0);
        };
      },
      loadAll() {
        // 这是一个异步的请求
        let result = new Promise((resolve, reject) => {
          this.$axios({method: 'get', url: 'http://localhost:9000/api/blog/blog_label'}).then(res => {
            if(res.status == 200) {
              resolve(res.data);
            } else {
              reject(data);
            }
          })
        })
        return result;
      },
      handleClose(label) {
        this.blogArticle.labels.pop(label);
      },
      onSubmit(blogArticle) {
        this.$refs[blogArticle].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        let md = this.$refs.md;
        console.log(md);
        let mdContent = md.d_value;
        let htmlContent = md.d_render;
        if(!mdContent) {
          // 没有写内容
        }
        this.blogArticle.mdContent = mdContent;
        this.blogArticle.htmlContent = htmlContent;
        this.$axios({method: 'post', url: 'http://localhost:9000/api/blog/blog_article/publish', params: this.blogArticle}).then(res => {
          console.log(res.data);
        })

        console.log(this.blogArticle);
      },
      save(mdContent, htmlContent) {
        console.log(mdContent);
        console.log(htmlContent);
      }
    },
    mounted() {
      this.loadAll().then(data => {
        this.allLabels = data.data;
      });
    }
  }
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
