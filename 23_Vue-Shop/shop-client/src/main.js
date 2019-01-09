import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

// 加载mock
import './mock'
// 加载过滤器
import './filters'

// 注册全局组件标签
Vue.component(Button.name, Button) // 标签 <mt-button></mt-button>

Vue.use(VueLazyload, { // 内部自定义了一个指令v-lazy
  loading
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
