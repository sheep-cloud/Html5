<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text" :class="ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props: {
      title: String,
      ellipsis: String
    }
  }
</script>

<style scoped>
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }
  .header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }
  .header .header_search .iconfont {
    font-size: 22px;
    color: #fff;
  }
  .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
  .header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
  }
  /*Msite 样式有问题*/
  .header .header_title {
    width: 50%;
    margin-left: -5%;
  }
  .header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
  }
  .header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .header .header_login .header_login_text {
    color: #fff;
  }
</style>
