import types from './mutations-types'

/**
 * 直接更新state的多个方法的对象
 *
 * @type {{[p: string]: *}}
 */
const mutations = {
  [types.SET_NAME](state, name) {
    state.name = name
  },
  [types.SET_AGE](state, age) {
    state.age = age
  }
}

export default mutations
