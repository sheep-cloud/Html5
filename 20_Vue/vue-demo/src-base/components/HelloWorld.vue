<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  // 默认暴露一个配置对象
  export default { // 配置对象（与vue一致）
    data () {
      return {
        msg: 'Hello Vue Component'
      }
    }
  }
</script>

<style scoped>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
