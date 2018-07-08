// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from './axios.js'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$axios = axios;

const store = new Vuex.Store({
  state: {
    bodyWidth:0,
    bodyHeight:0,
    imgH:'30px',
  },
  mutations: {
    windowChange(state,obj) {
      state.bodyHeight = obj.bodyHeight;
      state.bodyWidth = obj.bodyWidth;
      state.imgH = obj.imgH;
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
