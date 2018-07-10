// 引入组件
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({ // 配置对象的属性名都是一些固定的名称，不能随便修改
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>',
  // 配置路由器
  router
})
