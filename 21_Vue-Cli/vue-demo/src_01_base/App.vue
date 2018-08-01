<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--3. 使用组件标签-->
    <HelloWolrd/>
  </div>
</template>

<script>

  // 1. 引入HelloWorld组件
  import HelloWolrd from './components/HelloWorld'

  export default {
    // 2. 映射组件标签
    components: {
      HelloWolrd
    }
  }
</script>

<style scoped>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
