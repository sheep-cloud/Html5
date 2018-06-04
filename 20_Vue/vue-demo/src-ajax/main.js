import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import axios from 'axios'

// 声明使用插件
Vue.use(vueResource)          // 内部会给vm独享和组件对象添加一个属性：$http
Vue.prototype.axios = axios   // 设置Vue原型属性

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
