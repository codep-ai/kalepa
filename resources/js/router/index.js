import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
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
    //component: () => import('../views/BI')
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
      title: 'Pipeline',
    },
    path: '/pipeline',
    name: 'pipeline',
    component: () => import('../views/Pipeline')
  },
  {
    meta: {
      title: 'View all sources',
    },
    path: '/pipeline/sources',
    name: 'pipeline_sources',
    component: () => import('../views/pipeline/sources')
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
      title: 'Select Data',
    },
    path: '/insight/datasource/select_data',
    name: 'Select Data',
    component: () => import('../views/SelectData')
  },
  {
    meta: {
      title: 'BI',
    },
    path: '/bi',
    name: 'BI',
    component: () => import('../views/BI')
  },
  {
    meta: {
      title: 'New Api',
    },
    path: '/newapi',
    name: 'Newapi',
    component: () => import('../views/Newapi')
  },
  {
    meta: {
      title: 'dbt',
    },
    path: '/dbt',
    name: 'dbt',
    component: () => import('../views/dbt')
  },
  {
    meta: {
      title: 'genAI',
    },
    path: '/genAI',
    name: 'genAI',
    component: () => import('../views/genAI')
  },
  {
    meta: {
      title: 'genAI_local',
    },
    path: '/genAI_local',
    name: 'genAI_local',
    component: () => import('../views/genAI_local')
  },
  {
    meta: {
      title: 'Preview Data',
    },
    path: '/insight/datasource/preview_data',
    name: 'Preview Data ',
    component: () => import('../views/PreviewData')
  },
  {
    meta: {
      title: 'Ingestion Mode',
    },
    path: '/pipeline/ingestion',
    name: 'Ingestion Mode',
    component: () => import('../views/pipeline/ingestion')
  },
  {
    meta: {
      title: 'Select Model',
    },
    path: '/insight/select_model',
    name: 'Select Model',
    component: () => import('../views/SelectModel')
  },
  {
    meta: {
      title: 'Configure',
    },
    path: '/pipeline/configure',
    name: 'Configure',
    component: () => import('../views/pipeline/configure')
  },
  {
    meta: {
      title: 'Query Mode',
    },
    path: '/pipeline/query_mode',
    name: 'Query Mode',
    component: () => import('../views/pipeline/configure_query_mode')
  },
  {
    meta: {
      title: 'Airflow',
    },
    path: '/Airflow',
    name: 'Pro Airflow',
    component: () => import('../views/Airflow')
  }
]

const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
