import types from './mutations-types'

/**
 * 通过mutations间接更新state的多个方法的对象
 *
 * @type {{nameAsyn({commit: *}): void}}
 */
const actions = {
  // 异步设置名称年龄
  nameAsyn({commit}) {
    setTimeout(() => {
      commit(types.SET_NAME, 'Rose')
      commit(types.SET_AGE, Math.floor(Math.random() * (80 - 20 + 1) + 20))
    }, 500)
  }
}

export default actions
