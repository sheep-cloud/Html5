<template>
  <section class="user-info">
    <!--返回上一页-->
    <a href="javascript:" class="go_back" @click="$router.back()">
      <i class="iconfont icon-jiantou2"></i>
    </a>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .user-info .go_back {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .user-info .go_back > .iconfont {
    font-size: 20px;
    color: #999;
  }
</style>
