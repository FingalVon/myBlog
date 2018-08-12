import Router from 'vue-router'
import Detail from '@/page/detail/index'
import BlogList from '@/page/blogList/index'
import EditArticle from  '@/page/editArticle/index'
import FileUpload from  '@/page/test/fileUpload'
import ContextMenu from  '@/page/test/contextmenu'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/fileUpload',
      name: 'fileUpload',
      component: FileUpload
    },
    {
      path: '/contextmenu',
      name: 'contextmenu',
      component: ContextMenu
    }
  ]
})
