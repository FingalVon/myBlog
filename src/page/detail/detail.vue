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
        navigation: '<h1><a id="0java_0"></a>一份0基础学习java的清单</h1><h4><a id="_2"></a>写在开始</h4><h2><a id="javasql_9"></a>内功篇（java基础、sql基础、前端基础）</h2><h3><a id="java_12"></a>java基础</h3><h3><a id="sql_14"></a>sql基础</h3><h3><a id="_16"></a>前端基础</h3><h2><a id="springspring_mvcmybatis_18"></a>招式片（spring、spring mvc、mybatis）</h2><h3><a id="spring_20"></a>spring</h3><h3><a id="spring_mvc_22"></a>spring mvc</h3><h3><a id="mybatis_24"></a>mybatis</h3><h2><a id="mavensvngit_26"></a>修炼篇（maven、svn\git）</h2>',
        title:'',
        time:''
      }
    },
    created(){
      this.$axios('get','/api/blog/blog_article/' + this.$route.params.id).then(data => {
        this.title = data.data.title;
        this.content = data.data.htmlContent;
        this.time = data.data.publishDate;
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
