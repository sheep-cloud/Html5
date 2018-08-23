import Vue from 'vue'
import App from './App'
import router from './router'

import 'reset-css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
