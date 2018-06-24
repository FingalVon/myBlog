<template>
  <div class="recentlyArticle">
    <el-input
      style="margin-bottom: 25px; width: 80%"
      placeholder="输入关键字搜索"
      prefix-icon="el-icon-search"
      v-model="keyWord"></el-input>
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
    name: "recently-article",
    data() {
      return {
        keyWord:'',
      }
    }
  }
</script>

<style scoped>
  .recentlyArticle {
    width: 70%;
    margin: auto auto auto 24%;
    text-align: left;
  }

  .articleTitle {
    list-style-type: none;
    font-size: 17px;
    padding: 6px;
    border-bottom: 1px solid rgba(73, 82, 96, 0.21);
  }
</style>
