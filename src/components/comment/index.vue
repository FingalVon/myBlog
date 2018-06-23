<template>
  <div>
    <el-card class="box-card">
      <span style="font-size: 20px">评论：</span>
      <el-input
        style="margin-top:20px"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
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
    margin: 50px auto 0 auto; /*上、右、下、左、*/
    width: 80%;
  }
</style>
