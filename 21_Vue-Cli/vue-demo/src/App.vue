<template>
  <div>
    <img src="./assets/img/logo.png" alt="logo">
    <!--3. 使用组件标签-->
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
  // 1. 引入HelloWorld组件
  import HelloWorld from './components/HelloWorld'

  export default {
    // 2. 映射组件标签
    components: {HelloWorld}
  }
</script>

<style scoped>

</style>
