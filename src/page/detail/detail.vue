<template>
  <div>
    <el-card class="box-card">
      <h1>{{title}}</h1>
      <p>{{'发布时间：'+ time}}</p>
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
        title:'',
        time:''
      }
    },
    created(){
      this.$axios.get('http://192.168.2.221:9000/api/blog/blog_article/87aa6555-1c7f-4d27-9873-7ec263cb37af').then(data => {
        console.log("ppppppppppp",data)
        this.title = data.data.data.title;
        this.content = data.data.data.htmlContent;
        this.time = data.data.data.publishDate;
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
