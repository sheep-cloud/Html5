<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: Object
    },
    methods: {
      /**
       * 更新foodCount
       * @param isAdd true：添加；false：减少
       */
      updateFoodCount(isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style scoped>
  .cartcontrol {
    font-size: 0;
  }
  .cartcontrol .icon-remove_circle_outline {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
  .cartcontrol .icon-remove_circle_outline.move-enter-active, .cartcontrol .icon-remove_circle_outline.move-leave-active {
    transition: all .3s;
  }
  .cartcontrol .icon-remove_circle_outline.move-enter, .cartcontrol .icon-remove_circle_outline.move-leave-to {
    opacity: 0;
    transform: translateX(15px) rotate(180deg);
  }
  .cartcontrol .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cartcontrol .icon-add_circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: green;
  }
</style>
