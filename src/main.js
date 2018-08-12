
import App from './App.vue'
import router from './router/index.js'
import axios from './axios.js';
import Vuex from 'vuex';
import 'mavon-editor/src/lib/css/mavon-editor.styl';

var browserMD5File = require('browser-md5-file');

Vue.config.productionTip = false
Vue.use(Vuex);

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
