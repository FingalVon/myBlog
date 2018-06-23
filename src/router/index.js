import Vue from 'vue'
import Router from 'vue-router'
import PersonalPage from '@/page/personal/index'
import BlogList from '@/page/blogList/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogList',
      component: BlogList
    }
  ]
})
