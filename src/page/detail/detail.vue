<template>
  <div :style="{width:$store.state.bodyWidth>1200?($store.state.bodyWidth > 1600 ? '1200px' : '900px'):'750px'}">
    <el-card class="box-card">
      <h1>{{title}}</h1>
      <p>{{'发布时间：'+ time}}</p>
      <!-- 导航目录开始 -->
      <div class="v-note-wrapper markdown-body" :style="{right:($store.state.bodyWidth - ($store.state.bodyWidth>1200?($store.state.bodyWidth > 1600 ? 1200 : 900):750)) / 2 - 155 + 'px'}" style="width:140px;position:fixed;bottom:60px; min-width:0">
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
      this.$axios('get','/api/blog/blog_article/' + this.$route.params.id).then(data => {
        this.title = data.data.title;
        this.content = data.data.htmlContent;
        this.time = data.data.publishDate;
        this.navigation = data.data.navigation;
        this.$nextTick(() => {
            this.$parent.$parent.$parent.resizeBody()
        })
      })
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 0 auto;
    width: 100%;
  }
  .content {
    margin:40px;
  }
</style>
