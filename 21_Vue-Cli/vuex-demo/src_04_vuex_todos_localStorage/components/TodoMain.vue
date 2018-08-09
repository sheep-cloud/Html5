<template>
  <ul class="todo-main" :class="todos.length === 0 ? 'todo-empty' : ''">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from './TodoItem'
  import storageUtil from './../util/storageUtil'

  export default {
    components: {
      TodoItem
    },
    computed: {
      ...mapState(['todos'])
    },
    watch: {
      todos: {
        // 深度监视
        deep: true,
        handler: storageUtil.saveTodos
      }
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
