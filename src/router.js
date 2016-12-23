import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/', component: () => import('./views/Index.vue') },
  { path: '/foo', component: () => import('./views/Foo.vue') },
  { path: '*', component: () => import('./views/HTTP404.vue') }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
