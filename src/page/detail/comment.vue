<template>
  <div>
    <el-card class="box-card">
      <el-form :model="commentForm" status-icon :rules="rules" ref="commentForm" label-width="0px"
               class="demo-ruleForm">
        <span>评论：</span>
        <el-form-item label="" prop="content">
          <el-input type="textarea" :rows="5" v-model="commentForm.content"></el-input>
        </el-form-item>

        <span>姓名：</span>
        <el-form-item label="" prop="username">
          <el-input v-model="commentForm.username"></el-input>
        </el-form-item>

        <span>电子邮件：</span>
        <el-form-item label="" prop="email">
          <el-input v-model="commentForm.email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('commentForm')">提交</el-button>
          <el-button @click="resetForm('commentForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('邮件不可为空！'));
        } else {
          callback();
        }
      };
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不可为空！'));
        } else {
          callback();
        }
      };
      var validateContent = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入评论内容！'));
        } else {
          callback();
        }
      };
      return {
        commentForm: {
          content: '',
          username: '',
          email: ''
        },
        rules: {
          content: [
            {validator: validateContent, trigger: 'blur'}
          ],
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .box-card {
    text-align: left;
    margin: 50px auto 30px auto; /*上、右、下、左、*/
    width: 80%;
  }
</style>
