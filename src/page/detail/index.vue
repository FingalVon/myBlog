<template>
  <div class="detail-page">
    <article-detail></article-detail>
    <article-comment></article-comment>
  </div>
</template>
<script>
  import articleDetail from './detail.vue';
  import articleComment from './comment.vue';

  export default {
    components: {articleDetail, articleComment}
  }
</script>
<style scoped>
  .detail-page{
    width:100%;
  }
</style>

