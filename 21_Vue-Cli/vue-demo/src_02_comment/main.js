import Vue from 'vue'
import App from './App'

// 引入 bootstrap.css 样式库
import 'bootstrap/dist/css/bootstrap.css'

import validUtil from './util/validUtil'

Vue.prototype.validUtil = validUtil

// 引入 vue-layer(弹层）
import layer from 'vue-layer'

Vue.prototype.layer = layer(Vue)

// 加载过滤器
import './filters'

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
