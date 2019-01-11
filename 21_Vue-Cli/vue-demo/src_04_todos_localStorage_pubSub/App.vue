<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--给 TodoHeader 标签对象绑定addTodo事件监听（自定义事件）-->
      <TodoHeader @addTodo="addTodo"></TodoHeader>
      <TodoMain :todos="todos"></TodoMain>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
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
        const {layer, todos} = this
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
        // 深度监视 - 发现对象内部值的变化
        deep: true,
        /*
        handler(newValue) {
          // 将todos最新的值的json数据，保存到localStorage
          storageUtil.saveTodos(newValue)
        }
        */
        /*
        handler: newValue => {
          storageUtil.saveTodos(newValue)
        }
        */
        // 简写，相当于 handler 直接调saveTodos这个函数
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
