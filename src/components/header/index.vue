<template>
    <div class="t-header">
        <el-button type="text" class="float-right">写博客</el-button>
        <el-button type="text" class="float-right">登录</el-button>
    </div>
</template>

<script>

</script>

<style scoped>
    .t-header {
        position:absolute;
        width:100%;
        height:40px;
        top:-30px;
        left:0;
        z-index:10;
        background-color:#fff;
        border-bottom:solid 1px #fff;
        box-shadow: 0 0 8px #444;
        transition:top 1s;
    }
    .t-header:hover {
        top:0;
    }

    .float-right {
        float: right
    }
</style>