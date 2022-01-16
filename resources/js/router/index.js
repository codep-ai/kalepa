import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Forms')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "ui" */ '../views/Ui')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import(/* webpackChunkName: "responsive" */ '../views/Responsive')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error')
  },
  {
    meta: {
      title: 'Dataflow',
    },
    path: '/dataflow',
    name: 'dataflow',
    component: () => import('../views/Dataflow')
  },
  {
    meta: {
      title: 'Project',
    },
    path: '/project/:dataflow',
    name: 'project',
    component: () => import('../views/Build')
  },
  {
    meta: {
      title: 'Connection',
    },
    path: '/connection/:connectionId',
    name: 'connection',
    component: () => import('../views/UseConnection')
  },
  {
    meta: {
      title: 'Insight',
    },
    path: '/insight',
    name: 'insight',
    component: () => import('../views/Insight')
  },
  {
    meta: {
      title: 'Data Source',
    },
    path: '/insight/datasource',
    name: 'Data source',
    component: () => import('../views/InsightDataSource')
  },
  {
    meta: {
      title: 'Preview Data',
    },
    path: '/insight/datasource/preview',
    name: 'Preview Data ',
    component: () => import('../views/PreviewData')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router