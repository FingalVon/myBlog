<template>
    <div style="margin: 10px auto;">
        <el-card class="blog-card" v-if="!noblog">
            <div slot="header">
                <el-row>
                    <el-col :span="20">
                        <h2 style="cursor:pointer;text-align:left" @click="toDetail(id)">{{title}}</h2>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown style="float:right; margin:30px 20px 0 0" @command="operation">
                            <i class="el-icon-caret-bottom operation-btn"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item style="font-size:18px" title="编辑" command="edit"><i class="el-icon-edit"></i></el-dropdown-item>
                                <el-dropdown-item style="font-size:18px" title="删除" command="delete"><i class="el-icon-delete"></i></el-dropdown-item>
                                <el-dropdown-item style="font-size:18px" title="分享" command="share"><i class="el-icon-share"></i></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                <el-row style="height:12px; color:#909399;text-align:left">
                    <span v-for="tag in tags" :key="tag.id" style="margin: auto 5px;">{{tag.name}}</span> |
                    <span style="margin-left:10px">{{date}}</span>
                </el-row>
            </div>
            <div v-if="pic.length">
                <!-- 图片展示 -->
                <img src="../../assets/logo.png" />
            </div>
            <p style="text-align:left">{{content}}</p>
        </el-card>
        <div v-else @click="()=>{$router.push('/edit')}">
            <el-card class="blog-card" style="cursor:pointer; text-align:left">
                <div slot="header">
                    <h2>欢迎！</h2>
                </div>
                <p>还没有开始写博客？</p>
                <p>点击我，开始你的第一篇博文创作。</p>
            </el-card>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            noblog:{
                type:Boolean
            },
            id: {
                type:String,
            },
            title:{
                type:String,
            },
            pic:{
                type:Array,
                default:() => {return []}
            },
            content:{
                type:String,
            },
            tags:{
                 type:Array
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
        },
        operation(command) {
            if(command === "edit") {
                this.$router.push({
                    path: `/detail/${id}`,
                })
            }
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
        box-shadow: 0 0 8px rgba(100,100,100,.1);
    }
    .blog-card:hover {
        box-shadow: 0 0 15px rgba(0,0,0,.1);
    }
    .operation-btn {
        /* color:#409EFF;  */
        margin-top:-10px;
        font-size:22px; 
        cursor:default;
    }
    .operation-btn:hover {
        color: rgba(64,158,255,.8);
    }
</style>

