import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

// 注册全局组件标签
Vue.component(Button.name, Button) // 标签 <mt-button></mt-button>

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
