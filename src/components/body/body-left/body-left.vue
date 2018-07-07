<template>
    <div class="body-left" id="bodyLeft" :style="{height:bodyLeftH}">
        <i-card></i-card>
        <recently-article></recently-article>
    </div>
</template>
<script>
    import iCard from './iCard.vue';
    import recentlyArticle from './recently-article.vue';
    export default {
        components:{iCard,recentlyArticle},
        data() {
            return {
                bodyLeftH: '100%',
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
        box-shadow: 2px -2px 10px 0 rgba(0,0,0,.1);
        transition: box-shadow .2s;
    }
    .body-left:hover {
        box-shadow: 2px -2px 15px 0 rgba(0,0,0,.2);
    }
</style>
