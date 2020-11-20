import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        // path: '/redirect/:path',
        // http://localhost:9527/#/redirect/dashboard/
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/videos',
    children: [
      {
        path: 'videos',
        component: () => import('@/views/videos/index'),
        name: '视频管理',
        meta: { title: '视频管理', icon: 'videos' }
      }
    ]
  },
  {
    path: '/collection',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/collection/index'),
        name: '合集管理',
        meta: { title: '合集管理', icon: 'collection' }
      }
    ]
  },
  {
    path: '/subject',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/subject/index'),
        name: '专题管理',
        meta: { title: '专题管理', icon: 'subject' }
      }
    ]
  },
  {
    path: '/label',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/label/index'),
        name: '标签管理',
        meta: { title: '标签管理', icon: 'label' }
      }
    ]
  }
]

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
