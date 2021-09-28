import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/',
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

export default router
