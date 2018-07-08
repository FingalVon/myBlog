<template>
    <div class="blog-list">
         <blog-card 
            v-for="article in articles" :key="article.id" 
            :title="article.title"
            :content="article.summary" 
            tags="技术" 
            :date="article.publishDate"
            :id="article.id">
        </blog-card>
    </div>
</template>
<script>
    import blogCard from './blogCard.vue'
    export default {
        components:{blogCard},
        data(){
            return{
                articles: []
            }
        },
        created() {
            this.$axios.get('http://localhost:9000/api/blog/blog_article').then(data => {
               let articleList = data.data.data.list;
               this.articles = articleList;
               console.log(this.articles);
            })
        }
    }
</script>
<style scoped>
    .blog-list {
        width:100%;
        box-sizing: border-box;
        padding: 0 80px;
    }
</style>

