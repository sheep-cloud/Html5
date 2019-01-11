/**
 localStorage 存储数据的工具模块
 1. 函数
 2. 对象
 需要向外暴露了1个功能（函数）还是多个功能（对象）
 */

/**
 * 保存 todos 的key
 *
 * @type {string}
 */
const TODOS_KEY = 'todos_key'

export default {
  /**
   * 将todos最新的值的json数据，保存到localStorage
   *
   * @param todos
   */
  saveTodos: todos => window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos)),

  /**
   * 从 localStorage 读取todos
   * window.localStorage.getItem('todos_key') 存的是json，解析json，如果json为null，解析 '[]'
   *
   * @return {any}
   */
  readTodos: () => JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
}
