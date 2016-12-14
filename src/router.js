import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/', component: () => System.import('./views/Index.vue') },
  { path: '/foo', component: () => System.import('./views/Foo.vue') },
  { path: '*', component: () => System.import('./views/HTTP404.vue') }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
