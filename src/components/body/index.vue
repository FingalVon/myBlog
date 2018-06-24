<template>
    <div class="body-content" :style="{height:bodyHeight ? bodyHeight+'px' : bodyHeight}">
        <body-left :img-h="imgH" style="width:30%" v-if="bodyWidth > 900"></body-left>
        <div class="body-right" id="bodyRight" :style="{width:bodyWidth>900?'69%':'100%', 'margin-left':(bodyWidth>900 && !hideLeft)?'30%':'0'}">
            <slot name="bodyright"></slot>
        </div>
    </div>
</template>
<script>
    import bodyLeft from './body-left/body-left.vue';
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
            },
            'body-width':{
                type:Number,
                default:901
            },
            'img-h':{
                type:String,
                default:'30px'
            }
        },
        data() {
            return {
                
            }
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

