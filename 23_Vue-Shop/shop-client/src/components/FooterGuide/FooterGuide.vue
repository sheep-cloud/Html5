<template>
  <div class="footer_guide border-1px">
    <a href="javascript:" class="guide_item" :class="{on: msite === $route.path}" @click="goTo(msite)">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:" class="guide_item" :class="{on: search === $route.path}" @click="goTo(search)">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:" class="guide_item" :class="{on: order === $route.path}" @click="goTo(order)">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:" class="guide_item" :class="{on: profile === $route.path}" @click="goTo(profile)">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 路由组件路径
        msite: '/msite',
        search: '/search',
        order: '/order',
        profile: '/profile'
      }
    },
    methods: {
      // 编程式的导航 - 跳转页面
      goTo(path) {
        // 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped>
  @media only screen and (-webkit-device-pixel-ratio: 2) {
    .border-1px::before {
      transform: scaleY(0.5);
    }
  }
  @media only screen and (-webkit-device-pixel-ratio: 3) {
    .border-1px::before {
      transform: scaleY(0.333333);
    }
  }
  .footer_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFF;
    width: 100%;
    height: 50px;
    display: flex;
  }
  .footer_guide::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  .footer_guide .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
  }
  .footer_guide .guide_item.on {
    color: #02a774;
  }
  .footer_guide .guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .footer_guide .guide_item span .iconfont {
    font-size: 22px;
  }
</style>
