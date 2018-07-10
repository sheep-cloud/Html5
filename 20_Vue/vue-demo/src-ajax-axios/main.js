import Vue from 'vue'
import App from './App'
import axios from 'axios'

// 设置 Vue 原型属性
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
