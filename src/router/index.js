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
    name: 'laout',
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
  const token = store.state.token
  if (!['/login', '/'].includes(to.path)) {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (token) {
      console.log(store.state.currentMenu)
      next('/workbench')
    } else {
      next()
    }
  }
})
export default router
