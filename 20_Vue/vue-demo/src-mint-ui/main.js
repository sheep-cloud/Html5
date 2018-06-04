import Vue from 'vue'
import App from './App'
// 引入指定组件
import {Button, Swipe} from 'mint-ui'

// 注册成标签（全局）
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)

new Vue({
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>'
})
