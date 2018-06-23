<template>
    <div style="cursor:pointer" @click="toDetail">
        <el-card shadow="hover" class="blog-card">
            <div slot="header">
                <el-row>
                    <el-col :span="20">
                        <h2 style="text-align:left">{{title}}</h2>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown style="float:right; margin:30px 20px 0 0">
                            <span class="el-dropdown-link">操作</span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>编辑</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                                <el-dropdown-item>分享</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                <el-row style="height:14px; color:#909399;text-align:left">
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
                default:[]
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
    }
</style>

