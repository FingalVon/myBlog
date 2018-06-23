<template>
  <div id="app">
    <header-page id="headerPage"></header-page>
    <body-page id="bodyPage" :body-height="bodyHeight">
      <div slot="bodyright">
        <router-view/>
      </div>
    </body-page>
  </div>
</template>

<script>
import headerPage from './components/header/index.vue'
import bodyPage from './components/body/index.vue'
export default {
  components:{headerPage,bodyPage},
  name: 'App',
  data() {
      return {
          bodyHeight: document.documentElement.clientHeight - 20,
          // bodyTop: 10
      }
  },
  // updated() {
  //     this.bodyTop = document.getElementById('headerPage').offsetHeight + document.getElementById('headerPage').style.top + 10;
  // },
  mounted() {
      window.onresize = () => {
          this.screenHeight = document.documentElement.clientHeight;
          let bodyH = document.getElementById('bodyPage').offsetHeight || 0;
          if(document.documentElement.clientHeight > bodyH) {
              this.bodyHeight = document.documentElement.clientHeight - 20;
          }
      };
  },
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
