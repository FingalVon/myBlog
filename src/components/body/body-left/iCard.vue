<template>
    <div class="i-card">
        <img id="iCard-img" :style="{height:imgH}" :src="imgUrl" />
        <div class="user-name">{{userName}}</div>
    </div>
</template>
<script>
    export default {
        props:{
            'img-h':{
                type:String,
                default:'30px'
            }
        },
        data() {
            return {
                imgUrl:'http://img2.imgtn.bdimg.com/it/u=3547200263,2157911065&fm=27&gp=0.jpg',
                userName:'金闪闪'
            }
        },
    }
</script>
<style scoped>
    .i-card {
        width:80%;
        margin:40px auto;
    }
    .i-card img {
        width:50%;
        border-radius: 50%;
    }
    .user-name {
        margin-top:10px;
        font-size:20px;
        font-weight:600;
    }
</style>

