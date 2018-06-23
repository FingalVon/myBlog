<template>
    <div class="body-content" :style="{height:bodyHeight ? bodyHeight+'px' : bodyHeight}">
        <body-left :style="{width:(screenWidth>900 && !hideLeft)?'30%':'0'}"></body-left>
        <div class="body-right" id="bodyRight" :style="{width:screenWidth>900?'69%':'100%', 'margin-left':(screenWidth>900 && !hideLeft)?'30%':'0'}">
            <slot name="bodyright"></slot>
        </div>
    </div>
</template>
<script>
    import bodyLeft from './body-left.vue';
    export default {
        components:{bodyLeft},
        props:{
            'body-height':{
                type:[Number,String],
                default:'auto'
            },
            'hide-left':{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                screenWidth: document.documentElement.clientWidth,
            }
        },
        mounted() {
            window.onresize = () => {
                this.screenWidth = document.documentElement.clientWidth;
            };
        },
        methods:{

        }
    }
</script>
<style scoped>
    .body-content {
        position:absolute;
        left:0;
        right:0;
        top:12px;
        z-index:1;
        padding:0 10px;
        box-sizing: border-box;
        background-color: #EEEEEE;
    }
    .body-right {
        position:absolute;
        width:100%;
        height:auto;
        padding-top:30px;
        box-sizing: border-box;
        background-color: #EEEEEE;
    }
</style>

