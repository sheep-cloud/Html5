<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  // 引入组件
  import TodoItem from './TodoItem'

  export default {
    // 映射成标签
    components: {TodoItem},

    // 接收父组件数据（属性名/类型）
    props: {
      todos: Array
    }

  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
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
