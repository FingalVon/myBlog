<template>
  <div class="recentlyArticle">
    <el-input
      style="margin-bottom: 25px; width: 80%"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input21"></el-input>
    <div style="font-size: 20px; font-weight: bolder">近期文章</div>
    <ul style="padding-left: 5px; padding-right:20%;">
      <li v-for="o in 5" :key="o" class="articleTitle">
        <a style="text-decoration: none; color: #333" href="www.baidu.com">{{ "近期文章" + o }}</a>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "recently-article"
  }
</script>

<style scoped>
  .recentlyArticle {
    width: 70%;
    margin: auto 170px;
    text-align: left;
  }

  .articleTitle {
    list-style-type: none;
    font-size: 17px;
    padding: 6px;
    border-bottom: 1px solid rgba(73, 82, 96, 0.21);
  }
</style>
