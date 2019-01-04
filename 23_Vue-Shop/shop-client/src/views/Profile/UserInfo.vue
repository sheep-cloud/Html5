<template>
  <section class="user_info">
    <div class="user_info_inner">
      <div class="user_info_header">
        <h2 class="user_info_logo">个人信息</h2>
      </div>
      <!--返回上一页-->
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .user_info .user_info_inner .user_info_header .user_info_logo {
    font-size: 40px;
    font-weight: bold;
    color: #02a774;
    text-align: center;
  }
  .user_info .user_info_inner .go_back {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .user_info .user_info_inner .go_back > .iconfont {
    font-size: 20px;
    color: #999;
  }
</style>
