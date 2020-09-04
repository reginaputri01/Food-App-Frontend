import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

Vue.directive('sticky', {
  bind (el, binding) {
    el.style.position = 'fixed'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
