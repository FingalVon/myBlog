<template>
    <div class="t-header">
        <el-button type="text" class="float-right" @click="editArticle">写博客</el-button>
        <el-button type="text" class="float-right" @click="login">登录</el-button>
        <el-dialog title="登陆" :visible.sync="showLoginDialog" :center="true" :modal="true" width="30%">
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
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            showLoginDialog: false
        }
    },
    methods: {
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
        height:40px;
        top:-30px;
        left:0;
        z-index:10;
        background-color:#fff;
        border-bottom:solid 1px #fff;
        box-shadow: 0 0 8px #444;
        transition:top .5s;
    }
    .t-header:hover {
        top:0;
    }

    .float-right {
        float: right
    }
</style>
