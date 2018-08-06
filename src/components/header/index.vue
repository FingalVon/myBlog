<template>
    <div class="t-header">
        <el-button v-for="(btn,i) in btnList" :key="btn.router" type="text" :class="{active:!!activeBtn[i]}" @click="handleClick(btn.router)">{{btn.name}}</el-button>
        <el-button v-if="!alreadyLogin" type="text" @click="openLogin" style="float:right;margin-top:15px">登录</el-button>
        <div v-else class="float-right" title="进入个人中心" style="cursor:pointer">
          <h3 class="blog-name">{{userInfo.blogName}}</h3>
          <img :src="imgUrl" />
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
      alreadyLogin: false,
      btnList: [
        {
          name: "首页",
          router: "/"
        },
        {
          name: "标签",
          router: "/tags"
        },
        {
          name: "归档",
          router: "/guidang"
        },
        {
          name: "写博客",
          router: "/edit"
        },
        {
          name: "关于我",
          router: "/aboutme"
        }
      ],
      activeBtn: [],
      imgUrl: "static/favicon.ico",
      userInfo:{
        blogName:'我的博客'
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
  watch:{
    '$route.fullPath': {
      handler: function(n) {
        this.$nextTick(() => {
          for (let v of this.btnList) {
            if (v.router == n) this.activeBtn.push(1);
            else this.activeBtn.push(0);
          }
        })
      },
      immediate: true
    }
  },
  created() {
    //if(this.alreadyLogin) {
      getUserInfo();
    //}
  },
  methods: {
    handleClick(router) {
      this.$router.push(router);
      this.activeBtn = [];
      for (let v of this.btnList) {
        if (v.router == router) this.activeBtn.push(1);
        else this.activeBtn.push(0);
      }
    },
    editArticle() {
      this.$router.push("/edit");
    },
    openLogin() {
        this.showLoginDialog = true;
        this.$nextTick(() => {
            this.$refs.login.resetFields();
        })
    },
    handleLogin() {
        this.$refs.login.validate(valid => {
            if(valid) {
              this.$axios('post','/api/auth/sign_in',{
                  username:this.form.username,
                  password:this.form.password,
              }).then(data => {
                  this.showLoginDialog = false;
                  this.alreadyLogin = true;
                  console.log(data);
                  // this.userInfo.blogName = "duke";
                  // getUserInfo();
              })
            }
        })
    },
    getUserInfo() {
      this.$axios('get','/api/admin/user/info').then(data => {
        console.log(data)
        if(data.status === 200) {
          console.log(data);
          this.userInfo.blogName = data.data.realName;
        }
      })
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
.t-header button {
  color: #ddd;
  margin-right: 60px;
  font-size: 16px;
}
.t-header button:hover {
  color: #fff;
}
.t-header button.active {
  color: #409eff;
}
.t-header button.active:hover {
  color: #50aeff;
}
/* .t-header:hover {
  top: 0;
} */
.t-header img {
  height:40px;
  width:40px;
  border-radius: 50%;
  vertical-align: middle;
}
.blog-name {
  display:inline-block;
  color:#ddd;
  margin:0 10px;
  vertical-align: middle;
}

.float-right {
  float: right;
}
</style>
