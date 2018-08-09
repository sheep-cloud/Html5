/*
  包含多个由action触发去直接更新状态的方法的对象
 */
// import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, GET_TODOS} from './mutation-types'
import * as types from './mutation-types'

export default {
  [types.ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },
  [types.DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },
  [types.SELECT_ALL_TODOS](state, {check}) {
    state.todos.forEach(todo => todo.complete = check)
  },
  [types.DELETE_COMPLETE_TODOS](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [types.GET_TODOS](state, {todos}) {
    state.todos = todos
  }
}
