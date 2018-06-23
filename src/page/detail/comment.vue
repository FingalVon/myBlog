<template>
  <div>
    <el-card class="box-card">
      <span style="font-size: 20px">评论：</span>
      <el-input
        style="margin-top:20px"
        type="textarea"
        :rows="2"
        placeholder="请输入内容">
      </el-input>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index.vue"
  }
</script>

<style scoped>
  .box-card {
    text-align: left;
    margin: 50px auto 30px auto; /*上、右、下、左、*/
    width: 60%;
  }
</style>
