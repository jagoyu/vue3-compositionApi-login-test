import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/404')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/components/layout'),
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/workbench')
      },
      {
        path: 'productDetail',
        name: 'productDetail',
        component: () => import('@/views/product/detail')
      },
      {
        path: 'productList',
        name: 'productList',
        component: () => import('@/views/product/list')
      },
      {
        path: 'set',
        name: 'set',
        component: () => import('@/views/set')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path !== '/') {
    const token = store.state.userInfo.token
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
