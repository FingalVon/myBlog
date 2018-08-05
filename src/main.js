// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from './axios.js';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import 'mavon-editor/src/lib/css/mavon-editor.styl';
// import VueContextMenu from 'vue-contextmenu'
// import 'vue-contextmenu/style/css/font-awesome.min.css'


var browserMD5File = require('browser-md5-file');

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
// Vue.use(VueContextMenu);
Vue.prototype.$axios = axios;
Vue.prototype.$md5file = browserMD5File;

const store = new Vuex.Store({
  state: {
    bodyWidth:0,
    bodyHeight:0,
    imgH:'30px',
    scrollTop:0,
  },
  mutations: {
    windowChange(state,obj) {
      if(obj.hasOwnProperty('bodyHeight')) state.bodyHeight = obj.bodyHeight;
      if(obj.hasOwnProperty('bodyWidth')) state.bodyWidth = obj.bodyWidth;
      if(obj.hasOwnProperty('imgH')) state.imgH = obj.imgH;
      if(obj.hasOwnProperty('scrollTop')) state.scrollTop = obj.scrollTop;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
