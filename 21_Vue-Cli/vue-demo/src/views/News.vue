<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(news, index) in newsArr" :key="index">
      <span class="lead text-primary">{{index + 1}}.</span> {{news}}
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        newsArr: ['Vue 实例', '模版语法', '计算属性和侦听器', 'Class 与 Stryle 绑定', '条件渲染', '列表渲染', '事件处理', '表单输入绑定', '组件基础']
      }
    }
  }
</script>

<style scoped>
  .list-group-item:first-child {
    border-top: none;
  }
</style>
