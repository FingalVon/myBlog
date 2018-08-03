<template>
  <div>
    <el-card class="box-card">
      <h1>{{title}}</h1>
      <p>{{'发布时间：'+ time}}</p>
      <!-- 导航目录开始 -->
      <div class="v-note-wrapper markdown-body" style="width:130px;position:fixed;margin-left:810px;margin-top:-120px">
        <div class="v-note-panel shadow">
            <div class="v-note-navigation-wrapper shadow" style="width:100%">
                <div class="v-note-navigation-title">
                  导航目录<i class="fa fa-mavon-times v-note-navigation-close"
                            aria-hidden="true"></i>
                </div>
                <div class="v-note-navigation-content scroll-style" v-html="navigation"></div>
            </div>
        </div>
      </div>
      <!-- 导航目录结束 -->
      <div class="content markdown-body" v-html="content" style="text-align:left"></div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        name: "detail",
        content: '',
        navigation: '',
        title:'',
        time:''
      }
    },
    created(){
      this.$axios('get','/api/blog/nologin/blog_article/' + this.$route.params.id).then(data => {
        this.title = data.data.title;
        this.content = data.data.htmlContent;
        this.time = data.data.publishDate;
        this.navigation = data.data.navigation;
      })
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 0 auto;
    width: 80%;
  }
  .content {
    margin:40px;
  }
</style>
