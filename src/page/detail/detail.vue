<template>
  <div>
    <el-card class="box-card">
      <div v-for="o in 30" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "detail"
  }
</script>

<style scoped>
  .box-card {
    margin: 0 auto;
    width: 80%;
  }
</style>
