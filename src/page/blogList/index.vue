<template>
    <div class="blog-list">
         <blog-card title="HelloWorld的四种写法" content="这里是正文预览……" tags="技术" date="2018/6/23"></blog-card>
    </div>
</template>
<script>
    import blogCard from './blogCard.vue'
    export default {
        components:{blogCard}
    }
</script>
<style scoped>
    .blog-list {
        width:100%;
        box-sizing: border-box;
        padding: 0 80px;
    }
</style>

