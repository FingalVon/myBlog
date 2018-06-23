<template>
  <div>
    <article-detail></article-detail>
    <article-comment></article-comment>
  </div>
</template>
<script>
  import articleDetail from '../../components/detail/index.vue';
  import articleComment from '../../components/comment/index.vue';

  export default {
    components: {articleDetail, articleComment}
  }
</script>
