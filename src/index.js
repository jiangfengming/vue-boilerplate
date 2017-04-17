import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

new Vue({
  ...App,
  router: createRouter(),
  store: createStore()
}).$mount('#app')
