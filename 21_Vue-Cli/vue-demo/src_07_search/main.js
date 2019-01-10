import Vue from 'vue'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'

import layer from 'vue-layer'
import axios from 'axios'

Vue.prototype.layer = layer(Vue)
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
