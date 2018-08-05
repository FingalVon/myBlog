<template>
  <div class="recentlyArticle">
    <el-input
      class="hover100"
      placeholder="搜索文章"
      @mouseenter.native="getFocus"
      @mouseleave.native="loseFocus"
      prefix-icon="el-icon-search"
      size="mini"
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
    },
    methods:{
      getFocus() {
        document.getElementsByClassName("hover100")[0].getElementsByTagName("input")[0].focus();
      },
      loseFocus() {
        document.getElementsByClassName("hover100")[0].getElementsByTagName("input")[0].blur();
      }
    }
  }
</script>

<style scoped>
  .recentlyArticle {
    width: 100%;
    padding:10px;
    box-sizing:border-box;
    text-align: left;
  }

  .articleTitle {
    list-style-type: none;
    font-size: 17px;
    padding: 6px;
    border-bottom: 1px solid rgba(73, 82, 96, 0.21);
  }
  .hover100 {
    margin-bottom: 10px; 
    width: 45px;
    transition: width .5s;
  }
  .hover100:hover {
    width:100%;
  }
</style>
