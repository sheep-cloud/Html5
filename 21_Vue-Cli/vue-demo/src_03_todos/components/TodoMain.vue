<template>
  <ul class="todo-main" :class="{'todo-empty' : !todos.length}">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    props: {
      todos: Array,
      deleteTodo: Function
    },
    components: {TodoItem}
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
