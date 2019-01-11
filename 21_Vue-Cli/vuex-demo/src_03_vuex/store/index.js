import vue from 'vue'
import vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

vue.use(vuex)

/**
 * vuex最核心的管理对象store
 *
 * @type {l}
 */
const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
