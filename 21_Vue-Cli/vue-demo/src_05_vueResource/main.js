import Vue from 'vue'
import App from './App'

import layer from 'vue-layer'
import VueResource from 'vue-resource'

Vue.prototype.layer = layer(Vue)
// 声明使用插件，内部会给vm对象和组件对象添加一个属性：$http
Vue.use(VueResource)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
