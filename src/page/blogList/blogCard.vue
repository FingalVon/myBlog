<template>
    <div style="margin: 10px auto;">
        <el-card ass="blog-card">
            <div slot="header">
                <el-row>
                    <el-col :span="20">
                        <h2 style="cursor:pointer;text-align:left" @click="toDetail(id)">{{title}}</h2>
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
            id: {
                type:String,
                required:true
            },
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
        toDetail(id) {
          // 去详情页，也就是跳转一个路由
            this.$router.push({
                path: `/detail/${id}`,
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

