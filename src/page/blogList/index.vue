<template>
    <div class="blog-list">
         <blog-card 
            v-for="article in articles.list" :key="article.id" 
            :title="article.title"
            :content="article.summary" 
            :tags="article.labelVMS"
            :date="article.publishDate"
            :id="article.id">
        </blog-card>

        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            style="margin: 40px auto;"
            >
        </el-pagination>
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
            this.$axios('get','/api/blog/blog_article').then(data => {
                console.log(">>>>>>>>>>>>",data)
               let articleList = data.data;
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

