/*
* vuex 的核心管理对象模块
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
let state = {
  // 初始化状态
  count: 0
}

// 包含多个更新state函数的对象
let mutations = {
  // 增加的mutation
  increment(state) {
    state.count++
  },
  // 减少的mutation
  decrement(state) {
    state.count--
  }
}

// 包含多个对应事件回调函数的对象
let actions = {
  // 增加的action
  increment({commit}) {
    // 提交mutation
    commit('increment')
  },
  // 减少的action
  decrement({commit}) {
    commit('decrement')
  },
  // 带条件的action
  incrementIfOdd({commit, state}) {
    if (state.count % 2 === 1) {
      // 提交增加的mutation
      commit('increment')
    }
  },
  // 异步的action
  incrementAsync({commit}) {
    // 在action中直接执行异步代码
    setTimeout(() => {
      commit('decrement')
    }, 500)
  }
}

// 包含多个getter计算属性函数的对象
let getters = {
  // 不需要调用，只需要读取
  evenOrOdd2(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
