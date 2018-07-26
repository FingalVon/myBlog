<template>
    <div class="t-header">
        <el-button v-for="(btn,i) in btnList" :key="btn.router" type="text" :class="{active:!!activeBtn[i]}" @click="handleClick(btn.router)">{{btn.name}}</el-button>
        <!-- <el-button type="text" class="float-right" @click="login">登录</el-button>
        <el-dialog title="登陆" :visible.sync="showLoginDialog" :center="true" :modal="true" width="30%"> -->
            <!-- <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showLoginDialog = false">取 消</el-button>
                <el-button type="primary" @click="showLoginDialog = false">确 定</el-button>
            </div> -->
        <!-- </el-dialog> -->
    </div>
</template>

<script>
  export default {
    data(){
        return{
            showLoginDialog: false,
            btnList:[{
                name:'首页',
                router:'/',
            },{
                name:'标签',
                router:'/tags'
            },{
                name:'归档',
                router:'/guidang',
            },{
                name:'写博客',
                router:'/edit'
            },{
                name:'登录',
                router:'/login'
            },{
                name:'关于我',
                router:'/aboutme'
            }],
            activeBtn:[]
        }
    },
    created() {
        for(let v of this.btnList) {
            if(v.router == this.$route.path)  this.activeBtn.push(1);
            else this.activeBtn.push(0);
        }
    },
    methods: {
        handleClick(router) {
            this.$router.push(router);
            this.activeBtn = [];
            for(let v of this.btnList) {
                if(v.router == router)  this.activeBtn.push(1);
                else this.activeBtn.push(0);
            }
        },
      editArticle() {
        this.$router.push("/edit");
      },
      login() {
          this.showLoginDialog = true;
          console.log("登陆");
      }
    }
  }
</script>

<style scoped>
    .t-header {
        position: fixed;;
        width:100%;
        height:60px;
        top:-50px;
        left:0;
        z-index:10;
        text-align: left;
        line-height: 60px;
        padding-left:100px;
        background-color:#444;
        border-bottom:solid 1px #444;
        box-shadow: 0 0 8px #444;
        transition:top .5s;
    }
    .t-header button {
        color:#ddd;
        margin-right: 40px;
        font-size:16px;
    }
    .t-header button:hover {
        color: #fff;
    }
    .t-header button.active {
        color:#409EFF;
    }
    .t-header button.active:hover {
        color: #50AEFF;
    }
    .t-header:hover {
        top:0;
    }

    .float-right {
        float: right
    }
</style>
