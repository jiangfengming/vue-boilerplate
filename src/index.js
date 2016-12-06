import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

new Vue(Object.assign(App, {
  el: '#app',
  router,
  store
}));
