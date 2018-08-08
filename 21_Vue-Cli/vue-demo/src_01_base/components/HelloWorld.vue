<template>
  <div>
    <h2 class="msg">{{msg}}</h2>
  </div>
</template>

<script>
  export default {        // 向外暴露一个配置对象（与Vue一致）
    data() {              // 必须写函数
      return {
        msg: 'Hello Vue Components'
      }
    }
  }
</script>

<style scoped>
  .msg {
    color: red;
  }
</style>
