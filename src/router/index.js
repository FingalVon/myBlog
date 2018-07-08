import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/page/detail/index'
import BlogList from '@/page/blogList/index'
import EditArticle from  '@/page/editArticle/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogList',
      component: BlogList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit',
      name: 'editArticle',
      component: EditArticle
    }
  ]
})
