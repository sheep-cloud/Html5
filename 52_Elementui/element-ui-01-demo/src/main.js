import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
// 1.4.13
// import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

Vue.use(vueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
