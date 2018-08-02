<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--给 TodoHeader 标签对象绑定addTodo事件监听（自定义事件）-->
      <TodoHeader @addTodo="addTodo"/>
      <TodoMain :todos="todos"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>
<!--
  绑定事件监听    订阅消息
  触发事件        发布消息
-->
<script>
  import PubSub from 'pubsub-js'
  import storageUtil from './util/storageUtil'

  import TodoHeader from './components/TodoHeader'
  import TodoMain from './components/TodoMain'
  import TodoFooter from './components/TodoFooter'

  export default {
    components: {
      TodoHeader, TodoMain, TodoFooter
    },
    data() {
      return {
        // 从 localStorage 读取todos
        todos: storageUtil.readTodos()
      }
    },
    mounted() {
      // 绑定事件监听    订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        // 箭头函数 没有自己的this，取外部函数的this
        this.deleteTodo(index)
      })
    },
    methods: {
      // 添加todo
      addTodo(todo) {
        this.todos.unshift(todo)
      }
      ,
      // 删除todo
      deleteTodo(index) {
        this.todos.splice(index, 1)
      }
      ,
      // 删除已完成任务（选中的）
      deleteCompleteTodos() {
        let self = this
        let {layer, todos} = self
        layer.confirm('确定清除已完成任务吗？', function () {
          layer.close(this.id)
          // 过滤 complete 为 false 的（保留为false的）
          self.todos = todos.filter(todo => !todo.complete)
        })
      }
      ,
      // 全选/全不选
      selectAllTodos(isCheck) {
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    }
    ,
    // 监视
    watch: {
      todos: {
        // 深度监视
        deep: true,
        /*
        handler:
          function (newValue) {
            // 将todos最新的值的json数据，保存到localStorage
            storageUtil.saveTodos(newValue)
          }
          */
        /*
        handler: (todos) => {
          window.localStorage.setItem('todos_key', JSON.stringify(todos))
        }
        */
        // 简写，相当于 handler直接掉saveTodos这个函数
        handler: storageUtil.saveTodos
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
