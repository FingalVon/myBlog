<template>
    <div class="blog-list">
         <blog-card 
            v-for="article in articles" :key="article.id" 
            :noblog="false"
            :title="article.title"
            :content="article.summary" 
            :tags="article.labelVMS"
            :date="article.publishDate"
            :id="article.id">
        </blog-card>
        <blog-card v-if="!articles.length" :noblog="true"></blog-card>
        <el-pagination
            v-if="articles.length"
            background
            layout="prev, pager, next,jumper"
            :total="blogTotal"
            :page-size="pageSize"
            :current-page.sync="currentPage"
            style="margin: 20px auto"
            @current-change="getList"
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
                articles: [],
                blogTotal:0,
                pageSize:20,
                currentPage:1,
            }
        },
        created() {
            this.getList();
        },
        methods:{
            getList(){
                this.$axios('get','/api/blog/nologin/blog_article',{
                    page:this.currentPage,
                    size:this.pageSize,
                }).then(data => {
                    this.articles = data.data.list;
                    this.blogTotal = data.data.total;
                    this.$nextTick(() => {
                        this.$parent.$parent.resizeBody()
                    })
                })
            }
        }
    }
</script>
<style scoped>
    .blog-list {
        width:100%;
        box-sizing: border-box;
    }
</style>

