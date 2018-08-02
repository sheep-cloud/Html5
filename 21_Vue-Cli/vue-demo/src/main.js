import Vue from 'vue'
import App from './App'

// 引入路由器
import router from './router'

new Vue({
  // 配置对象的属性名都是一些固定的名称，不能随便修改
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
