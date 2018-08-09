import types from './mutations-types'

export default {
  [types.SET_NAME](state, name) {
    state.name = name
  },
  [types.SET_AGE](state, age) {
    state.age = age
  }
}
