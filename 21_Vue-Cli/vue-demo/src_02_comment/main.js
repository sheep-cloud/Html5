import Vue from 'vue'
import App from './App'

// 引入 bootstrap.css 样式库
import 'bootstrap/dist/css/bootstrap.css'

// 引入 vue-layer(弹层），moment（日期处理） 组件
import layer from 'vue-layer'
import moment from 'moment'

Vue.prototype.layer = layer(Vue)
Vue.prototype.moment = moment()

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
