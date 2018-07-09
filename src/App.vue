<template>
  <div id="app">
    <!-- 页面的header部分 -->
    <header-page id="headerPage"></header-page>
    <!-- 页面的body部分，其中又分了bodyLeft和bodyRight -->
    <body-page id="bodyPage" :hide-left="hideLeft">
      <div slot="bodyright">
        <router-view/>
      </div>
    </body-page>
    <!-- 页面的footer部分 -->
    <footer-page id="footerPage"></footer-page>
  </div>
</template>

<script>
import headerPage from './components/header/index.vue'
import bodyPage from './components/body/index.vue'
import footerPage from './components/footer/index.vue'
export default {
  components:{headerPage,bodyPage,footerPage},
  name: 'App',
  data() {
      return {
          bodyHeight: 0,
          hideLeft: false,
          resizeOver: true,
          bodyWidth: document.documentElement.clientWidth,
          imgH:'30px',
      }
  },
  watch:{
    '$route.fullPath': {
      handler: function(n) {
        this.hideLeft = false;
        if(n == '/' || n == '/detail') {
          this.$nextTick(() => {
            this.resizeBody();
          })
        };
      },
      immediate: true
    }
  },
  mounted() {
      this.$nextTick(() => {
        this.resizeBody();
      })
      window.onresize = () => {
        if(!this.resizeOver) return;
        return (() => {
          this.resizeOver = false;
          this.resizeBody();
          setTimeout(() => {
              this.resizeOver = true;
          },50)
        })();
      };
  },
  methods:{
    resizeBody() {
      this.screenHeight = document.documentElement.clientHeight;
      let bodyH = document.getElementById('bodyRight').offsetHeight || 0;
      let footerH = document.getElementById('footerPage').offsetHeight || 0;
      let sBodyH = document.documentElement.clientHeight > bodyH ? document.documentElement.clientHeight - 20 - footerH : bodyH;
      let sBodyW = document.documentElement.clientWidth || 0;
      let sImgH = (document.getElementById('iCard-img') ? document.getElementById('iCard-img').clientWidth : sBodyW * 0.3 * 0.8 * 0.4 ) + 'px';
      this.$store.commit('windowChange',{
        bodyHeight:sBodyH,
        bodyWidth:sBodyW,
        imgH:sImgH,
      })
      this.bodyHeight = sBodyH;
      document.getElementById('footerPage').style.top = sBodyH + 20 + 'px';
    }
  }
}
</script>

<style>
@import './css/style.css';
@import './css/github-md.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
