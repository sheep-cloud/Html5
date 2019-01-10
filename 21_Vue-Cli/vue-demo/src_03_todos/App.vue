<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"></TodoMain>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoMain from './components/TodoMain'
  import TodoFooter from './components/TodoFooter'

  // 保存 todos
  const TODOS_KEY = 'todos_key'

  export default {
    data() {
      return {
        // 从 localStorage 读取todos
        // window.localStorage.getItem('todos_key') 存的是json，解析json，如果json为null，解析 '[]'
        todos: JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
      }
    },
    components: {TodoHeader, TodoMain, TodoFooter},
    methods: {
      // 添加todo
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      // 删除todo
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      // 删除已完成任务（选中的）
      deleteCompleteTodos() {
        let {layer, todos} = this
        this.layerId = layer.confirm('确定清除已完成任务吗？', () => {
          layer.close(this.layerId)
          // 过滤 complete 为 false 的（保留为false的）
          this.todos = todos.filter(todo => !todo.complete)
        })
      },
      // 全选/全不选
      selectAllTodos(isCheck) {
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },
    // 监视
    watch: {
      todos: {
        // 深度监视
        deep: true,
        handler(newValue) {
          // 将todos最新的值的json数据，保存到localStorage
          window.localStorage.setItem(TODOS_KEY, JSON.stringify(newValue))
        }
      }
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
