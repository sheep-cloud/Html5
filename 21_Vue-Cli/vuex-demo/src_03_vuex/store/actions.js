import types from './mutations-types'

export default {
  nameAsyn({commit}) {
    setTimeout(() => {
      commit(types.SET_NAME, 'Rose')
      commit(types.SET_AGE, Math.floor(Math.random() * (80 - 20 + 1) + 20))
    }, 500)
  }
}
