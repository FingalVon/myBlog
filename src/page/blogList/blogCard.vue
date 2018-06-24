<template>
    <div>
        <el-card class="blog-card">
            <div slot="header">
                <el-button @click="testAxios">testAxios</el-button>
                <el-row>
                    <el-col :span="20" style="cursor:pointer" @click="toDetail">
                        <h2 style="text-align:left">{{title}}</h2>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown style="float:right; margin:30px 20px 0 0">
                            <span class="operation-btn">操作</span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>编辑</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                                <el-dropdown-item>分享</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                <el-row style="height:12px; color:#909399;text-align:left">
                    <span v-if="tags">{{'标签：'+tags}}</span>
                    <span style="margin-left:10px">{{date}}</span>
                </el-row>
            </div>
            <div v-if="pic.length">
                <!-- 图片展示 -->
                <img src="../../assets/logo.png" />
            </div>
            <p style="text-align:left">{{content}}</p>
        </el-card>
    </div>
</template>
<script>
    export default {
        props:{
            title:{
                type:String,
                required:true
            },
            pic:{
                type:Array,
                default:() => {return []}
            },
            content:{
                type:String,
            },
            tags:{
                type:String
            },
            date:{
                type:String
            }
        },
      methods: {
        toDetail() {
          // 去详情页，也就是跳转一个路由
          this.$router.push('/detail');
        },
        testAxios() {
            this.$axios({method:'get',url:'http://192.168.2.221:9000/api/blog/blog_article/'+'123'}).then(res => {
                console.log(">>>>>>>>>>>>>>",res.data.data)
            })
        }
      }
    }
</script>
<style scoped>
    .blog-card {
        height:400px;
        width:100%;
        margin-bottom:30px;
        padding:40px 80px;
        box-sizing: border-box;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
    }
    .blog-card:hover {
        box-shadow: 0 0 15px rgba(0,0,0,.3);
    }
    .operation-btn {
        color:#409EFF; 
        font-size:16px; 
        cursor:default;
    }
    .operation-btn:hover {
        color: rgba(64,158,255,.8);
    }
</style>

