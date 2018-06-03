/*
*   使用LocalStorage存储数据的工具模块
*     1. 函数
*     2. 对象
*     需要向外暴露1个功能（函数）还是多个功能（对象）
* */

const TODOS_KEY = 'todos_key'

export default {
  // 存数据
  saveTodos(todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  // 读数据
  readTodos() {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
