import Vue from 'vue'
import App from './App'

import './assets/css/base.css'

import layer from 'vue-layer'
import moment from 'moment'
import store from './store'

Vue.prototype.layer = layer(Vue)
Vue.prototype.moment = moment()

/*
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store
})
*/

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

/*
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)   // <App/>
  },
  store
})
*/
