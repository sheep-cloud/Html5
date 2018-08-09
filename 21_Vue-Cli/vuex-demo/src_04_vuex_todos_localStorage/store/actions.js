/*
  接收组件通知，触发mutation调用间接更新状态的方法的对象
 */
// import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, GET_TODOS} from './mutation-types'
import * as types from './mutation-types'
import storageUtil from './../util/storageUtil'

export default {
  addTodo({commit}, todo) {
    // 提交对mutation的请求
    commit(types.ADD_TODO, {todo})
  },
  deleteTodo({commit}, index) {
    commit(types.DELETE_TODO, {index})
  },
  selectAllTodos({commit}, check) {
    commit(types.SELECT_ALL_TODOS, {check})
  },
  deleteCompleteTodos({commit}) {
    commit(types.DELETE_COMPLETE_TODOS)
  },
  // 异步获取todos并更新状态
  selectTodoos({commit}) {
    // 模拟
    setTimeout(() => {
      // 读取数据
      let todos = storageUtil.readTodos()
      // 更新状态，提交mutations
      commit(types.GET_TODOS, {todos})
    }, 1000)
  }
}
