<template>
  <div id="app">
    <header-page id="headerPage"></header-page>
    <body-page id="bodyPage" :body-height="bodyHeight" :hide-left="hideLeft">
      <div slot="bodyright">
        <router-view/>
      </div>
    </body-page>
    <footer-page id="footerPage" :style="{top:bodyHeight + 20 + 'px'}"></footer-page>
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
          hideLeft: false
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
          if(n == '/detail') {
            this.hideLeft = true;
          }
        };
      },
      immediate: true
    }
  },
  mounted() {
      window.onresize = () => {
        this.resizeBody();
      };
  },
  methods:{
    resizeBody() {
      this.screenHeight = document.documentElement.clientHeight;
      let bodyH = document.getElementById('bodyRight').offsetHeight || 0;
      let footerH = document.getElementById('footerPage').offsetHeight || 0;
      this.bodyHeight = document.documentElement.clientHeight > bodyH ? document.documentElement.clientHeight - 20 - footerH : bodyH;
    }
  }
}
</script>

<style>
@import './css/style.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
