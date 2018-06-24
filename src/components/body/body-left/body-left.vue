<template>
    <div class="body-left" id="bodyLeft" :style="{height:bodyLeftH}">
        <i-card :img-h="imgH"></i-card>
        <recently-article></recently-article>
    </div>
</template>
<script>
    import iCard from './iCard.vue';
    import recentlyArticle from './recently-article.vue';
    export default {
        components:{iCard,recentlyArticle},
        props:{
            'img-h':{
                type:String,
                default:'30px'
            }
        },
        data() {
            return {
                bodyLeftH: '100%'
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.bodyLeftH = document.getElementById('bodyLeft').offsetHeight + 40 + 'px';
            })
        },
    }
</script>
<style scoped>
    .body-left {
        float:left;
        position:fixed;
        left:0;
        padding-top:30px;
        /* box-sizing: border-box; */
        background-color: #fff;
        box-shadow: 2px -2px 12px 0 rgba(0,0,0,.1);
    }
</style>
