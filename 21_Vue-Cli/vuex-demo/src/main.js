import Vue from 'vue'
import App from './App'
import layer from 'vue-layer'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'

Vue.prototype.layer = layer(Vue)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  // 所有组件对象都多了一个属性：$store
  store
})
