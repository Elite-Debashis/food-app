import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store.js'
import Accounting from 'accounting-js'
import { routes } from './routes';
import vuetify from './plugins/vuetify';
import './style.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

export const router = new VueRouter({
  routes,
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

Vue.filter('currency', val => {
  return Accounting.formatMoney(val)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
