<template>
  <ul class="todo-main" :class="todos.length === 0 ? 'todo-empty' : ''">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    components: {
      TodoItem
    },
    props: {
      todos: Array,
      deleteTodo: Function
    }
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
