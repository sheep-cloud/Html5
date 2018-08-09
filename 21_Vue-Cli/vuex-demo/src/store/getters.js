/*
  包含所有基于state的getter计算属性的对象
 */
export default {
  // 总数量
  totalCount(state) {
    return state.todos.length
  },
  // 完成的数量
  completeCount(state) {
    return state.todos.reduce((total, todo) => {
      return total + (todo.complete ? 1 : 0)
    }, 0)
  },
  // 判断是否全部选中
  isAllCheck(state, getters) {
    return getters.totalCount === getters.completeCount && getters.totalCount > 0
  }
}
