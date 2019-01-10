import Vue from 'vue'
import App from './App'

import './assets/css/base.css'

import layer from 'vue-layer'

Vue.prototype.layer = layer(Vue)

import './filters'

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
