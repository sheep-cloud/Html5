<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <todo-list :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    // 把组件映射成标签
    components: {TodoHeader, TodoList, TodoFooter},
    data() {
      return {
        /*
        todos: [
          {title: '吃饭', complate: false},
          {title: '睡觉', complate: false},
          {title: '跑步', complate: false},
          {title: '看书', complate: false},
          {title: '写代码', complate: true}
        ]
        */

        // 从localStorage读取todos
        // 存了数据，解析数据，否则解析为空数组
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')

      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      // 删除所有选中的todo
      deleteCompleteTodos() {
        this.todos = this.todos.filter(todo => !todo.complate)
      },
      // 全选或者全不选
      selectAllTodos(isCheck) {
        this.todos.forEach(todo => todo.complate = isCheck)
      }
    },
    watch: { // 监视
      todos: {
        // 深度监视
        deep: true,
        handler: function (newValue) {
          // 将todos最新的值的json数据，保存到localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(newValue))
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
