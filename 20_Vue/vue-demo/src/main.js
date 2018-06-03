import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'

// 声明使用插件
Vue.use(vueResource) // 内部会给vm独享和组件对象添加一个属性：$http

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
