<template>
    <div class="t-header">
        <div class="title-btn" 
             v-for="(btn,i) in btnList" :key="i" 
             type="text" 
             :class="{active:!!activeBtn[i]}" 
             @click="handleClick(btn.router)" 
             @mouseenter="()=>{$set(btnList[i],'showChildren',true); tempWidth = firstMaxWidth}" 
             @mouseleave="()=>{$set(btnList[i],'showChildren',false)}">
          <span>{{btn.name}}</span>
          <i v-if="btn.children && btn.children.length" class="el-icon-more btn-icon"></i>
          <div v-show="btn.showChildren" 
               class="btn-children" 
               v-for="(item,j) in btn.children" :key="j" 
               :style="{width:tempWidth+'px'}"
               @mouseenter="()=>{$set(btnList[i].children[j],'showChildren',true); tempWidth = firstMaxWidth > item.maxWidth ? firstMaxWidth : item.maxWidth}" 
               @mouseleave="()=>{$set(btnList[i].children[j],'showChildren',false); tempWidth = firstMaxWidth}">
            <span style="display:inline-block">{{item.name}}</span>
            <div v-show="item.showChildren" 
                class="btn-lv2-children" 
                v-for="(_item,k) in item.children" :key="k">
                <span style="display:inline-block">&nbsp;&nbsp;&nbsp;&nbsp;{{_item.name}}</span>
            </div>
          </div>
        </div>
        <!-- <el-button v-for="(btn,i) in btnList" :key="btn.router" type="text" :class="{active:!!activeBtn[i]}" @click="handleClick(btn.router)">{{btn.name}}</el-button> -->
        <el-button v-if="!alreadyLogin" type="text" @click="openLogin" style="float:right;margin-top:15px">登录</el-button>
        <div v-else class="float-right" style="cursor:pointer">
          <h3 class="blog-name" @click="handleClick('/')">{{userInfo.blogName}}</h3>
          <img title="进入个人中心" :src="userInfo.imgUrl" />
        </div>
        <el-dialog title="登录" :visible.sync="showLoginDialog" :append-to-body="true" :center="true" :modal="true" width="450px" :show-close="false" :close-on-click-modal="true">
            <el-form ref="login" :model="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" @keyup.enter.native="handleLogin"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password" @keyup.enter.native="handleLogin"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showLoginDialog = false">取 消</el-button>
                <el-button type="primary" @click="handleLogin">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showLoginDialog: false,
      alreadyLogin: true,
      firstMaxWidth: 0,
      tempWidth:0,
      btnList: [
        {
          name: "文章列表",
          showChildren:false,
          router: "",
          children: [
            {
              name: "近期文章aaaaaaaaaaaa",
              showChildren:false,
              router: "",
              maxWidth:0,
              children: [
                {
                  name: "近期文章1",
                  router: ""
                },
                {
                  name: "近期文章2",
                  router: ""
                },
                {
                  name: "近期文章3",
                  router: ""
                }
              ]
            },{
              name: "我的偏爱",
              showChildren:false,
              router: "",
              maxWidth:0,
              children: [
                {
                  name: "最长二十个字最长二十个字最长二十个字够了",
                  router: ""
                },
                {
                  name: "文章2",
                  router: ""
                },
                {
                  name: "文章3",
                  router: ""
                }
              ]
            }
          ]
        },
        {
          name: "写博客",
          router: "/edit",
          showChildren:false,
          children: []
        }
      ],
      activeBtn: [],
      userInfo: {
        blogName: "我的博客",
        imgUrl:"static/favicon.ico"
      },
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名！", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码！", trigger: "blur" }]
      }
    };
  },
  watch: {
    "$route.fullPath": {
      handler: function(n) {
        this.$nextTick(() => {
          for (let v of this.btnList) {
            if (n.length < 2) {
              if (v.router == n) this.activeBtn.push(1);
              else this.activeBtn.push(0);
            } else if (v.router.length < 2) this.activeBtn.push(0);
            else {
              let _v = new RegExp(v.router);
              if (_v.test(n)) this.activeBtn.push(1);
              else this.activeBtn.push(0);
            }
          }
        });
      },
      immediate: true
    }
  },
  created() {},
  mounted() {
    for(let i = 0; i < this.btnList.length; i++) {
      if(this.btnList[i].children && this.btnList[i].children.length) {
        this.getMaxWidth(i);
      }
    }
  },
  methods: {
    getMaxWidth(index) {
      let arr = document.getElementsByClassName('btn-children');
      let i = 0;
      for(let val of arr) {
        let contentEl = val.getElementsByTagName('span')[0];
        val.style.opacity = 0;
        val.style.display = 'inline-block';
        this.firstMaxWidth = contentEl.clientWidth > this.firstMaxWidth ? contentEl.clientWidth : this.firstMaxWidth;
        let _arr = val.getElementsByClassName('btn-lv2-children');
        let _maxWidth = 0;
        for(let _val of _arr) {
          let _contentEl = _val.getElementsByTagName('span')[0];
          console.log(_contentEl.clientWidth)
          _val.style.opacity = 0;
          _val.style.display = 'inline-block';
          _maxWidth = _contentEl.clientWidth > _maxWidth ? _contentEl.clientWidth : _maxWidth;
          _val.style.display = 'none';
          _val.style.opacity = 1;
        }
        this.btnList[index].children[i].maxWidth = _maxWidth;
        console.log(">>>>>>>>>>",_maxWidth)
        val.style.display = 'none';
        val.style.opacity = 1;
        i++;
      }
    },
    handleClick(router) {
      if(!router) return;
      this.$router.push(router);
      this.activeBtn = [];
      for (let v of this.btnList) {
        if (v.router == router) this.activeBtn.push(1);
        else this.activeBtn.push(0);
      }
    },
    openLogin() {
      this.showLoginDialog = true;
      this.$nextTick(() => {
        this.$refs.login.resetFields();
      });
    },
    handleLogin() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$axios("post", "/api/auth/sign_in", {
            username: this.form.username,
            password: this.form.password
          }).then(data => {
            console.log(data);
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.t-header {
  position: absolute;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  z-index: 10;
  text-align: left;
  line-height: 70px;
  padding: 0 60px 0 100px;
  box-sizing: border-box;
  background-color: #444;
  border-bottom: solid 1px #444;
  box-shadow: 0 0 8px #444;
  transition: top 0.5s;
}
.title-btn {
  display: inline-block;
  vertical-align: top;
  color: #ddd;
  margin-right: 40px;
  max-width: 64px;
  font-size: 16px;
  cursor: pointer;
}
.title-btn:hover {
  color: #fff;
}
.title-btn.active {
  color: #409eff;
}
.title-btn.active:hover {
  color: #50aeff;
}
.btn-icon {
  float:left;
  position: absolute;
  margin: -22px 0 0 24px;
}
.btn-children {
  width:200%;
  white-space:nowrap;
  display: block;
  margin-left:-20px;
  background-color: #444;
  color:#ddd;
  line-height: 40px;
  padding:5px 20px;
  font-size: 16px;
}
.btn-lv2-children {
  font-size: 14px;
  line-height: 35px;
}
/* .t-header:hover {
  top: 0;
} */
.t-header img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
  cursor: pointer;
}
.blog-name {
  display: inline-block;
  color: #ddd;
  margin: 0 20px;
  vertical-align: middle;
  cursor: pointer;
}

.float-right {
  float: right;
}
</style>
