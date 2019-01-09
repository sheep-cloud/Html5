<template>
  <section class="shop">
    <ShopHeader></ShopHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>信息</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {
    mounted() {
      this.$store.dispatch('getShopInfo')
    },
    components: {ShopHeader}
  }
</script>

<style scoped>
  .shop .tab {
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
  }
  .shop .tab .tab-item {
    float: left;
    width: 33.33333%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .shop .tab .tab-item a {
    display: block;
    position: relative;
  }
  .shop .tab .tab-item a.router-link-active {
    color: #02a774;
  }
  .shop .tab .tab-item a.router-link-active::after {
    content: '';
    position: absolute;
    left: 77%;
    bottom: 1px;
    width: 35px;
    height: 2px;
    transform: translateX(-50px);
    background: #02a774;
  }
</style>
