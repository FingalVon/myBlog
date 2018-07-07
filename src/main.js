// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'   //引入axios
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$axios = axios;   //在Vue实例里加入axios

const store = new Vuex.Store({
  state: {
    bodyW:0,
    bodyH:0
  },
  mutations: {
    increment (state) {
      state.bodyW++
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
