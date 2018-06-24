<template>
    <div class="i-card" style="cursor: pointer" @click="backHome">
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
<<<<<<< HEAD
                imgUrl:"static/favicon.ico",
                // imgUrl:'http://img2.imgtn.bdimg.com/it/u=3547200263,2157911065&fm=27&gp=0.jpg',
=======
                imgUrl:'static/default.png',
>>>>>>> 0e185302835e7cd765f0e4444ccbf222ff26b4bd
                userName:'金闪闪'
            }
        },
      methods: {
        backHome() {
          this.$router.push('/');
        }
      }
    }
</script>
<style scoped>
    .i-card {
        width:80%;
        margin:40px auto;
    }
    .i-card img {
        width:40%;
        border-radius: 50%;
    }
    .user-name {
        margin-top:10px;
        font-size:20px;
        font-weight:600;
    }
</style>

