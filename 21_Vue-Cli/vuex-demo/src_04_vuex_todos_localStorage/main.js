import Vue from 'vue'
import App from './App'

import './assets/css/base.css'

import layer from 'vue-layer'
import store from './store'

import './filters'

Vue.prototype.layer = layer(Vue)

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

// 原始方式
/*
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store
})
*/

// 字符串模版的替代方案
/*
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App) // <App/>
  },
  store
})
*/

// es6 箭头函数
/*
new Vue({
  el: '#app',
  /!**
   * 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。
   * 该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。
   *
   * Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。
   *
   * @param createElement
   * @return {*}
   *!/
  render: createElement => createElement(App), // <App/>
  store
})
*/
