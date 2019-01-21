<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount}">
              <i class="iconfont icon-shopping_cart highlight"></i>
            </div>
            <div class="num" v-if="totalCount">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight: totalCount}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{shopInfo.deliveryPrice}} 元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass" @click="payMent" v-show="shopInfo.minPrice !== undefined">
            {{payText}}
          </div>
        </div>
      </div>
      <transition name="move">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food"></CartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapGetters} from 'vuex'
  import {MessageBox, Toast} from 'mint-ui'
  import CartControl from '../CartControl/CartControl'

  export default {
    data() {
      return {
        isShow: false
      }
    },
    components: {CartControl},
    computed: {
      ...mapState(['cartFoods', 'shopInfo']),
      ...mapGetters(['totalCount', 'totalPrice']),
      payClass() {
        // 嵌套对象的解构赋值
        const {totalPrice, shopInfo: {minPrice}} = this
        return totalPrice < minPrice ? 'not-enough' : 'enough'
      },
      payText() {
        // 嵌套对象的解构赋值
        const {totalPrice, shopInfo: {minPrice}} = this
        if (totalPrice === 0) {
          return `￥${minPrice} 元起送`
        } else if (totalPrice < minPrice) {
          return `还差￥${minPrice - totalPrice} 元起送`
        } else {
          return '去结算'
        }
      },
      /**
       * 计算listShow属性
       *  Unexpected side effect in "listShow" computed property
       *  计算属性中的意外副作用；
       *  计算属性内不应该对属性值做变更，解决这个问题的做法之一是使用watch监听：
       * @return {boolean}
       */
      /*
      listShow() {
        // 如果总数量为0，直接不显示
        if (!this.totalCount) {
          this.isShow = false
          return false
        }
        // 购物车滑动
        if (this.isShow) {
          this.$nextTick(() => {
            // 实现BScroll的实例是一个单例
            if (!this.scroll) {
              this.scroll = new BScroll('.list-content', {click: true})
            } else {
              this.scroll.refresh() // 让滚动条刷新一下：重新统计内容的高度，形成滚动条
            }
          })
        }

        return this.isShow
      }
      */
      listShow: {
        get() {
          return this.isShow
        },
        set() {
          // 如果总数量为0，直接不显示
          if (!this.totalCount) {
            this.isShow = false
          }
        }
      }
    },
    watch: {
      totalCount(newValue) {
        if (!newValue) {
          this.isShow = false
        }
      },
      isShow(newValue) {
        if (newValue) {
          this.$nextTick(() => {
            // 实现BScroll的实例是一个单例
            if (!this.scroll) {
              this.scroll = new BScroll('.list-content', {
                click: true
              })
            } else {
              this.scroll.refresh() // 让滚动条刷新一下：重新统计内容的高度，形成滚动条
            }
          })
        }
      }
    },
    methods: {
      /**
       * 显示隐藏购物车
       */
      toggleShow() {
        if (this.totalCount) {
          // 只有当总数量大于0时才切换
          this.isShow = !this.isShow
        }
      },
      /**
       * 清空购物车
       */
      clearCart() {
        MessageBox.confirm('确定清空购物车吗？').then(() => {
          this.$store.dispatch('clearCart')
          Toast('清空成功')
        }, () => {
        })
      },
      /**
       * 结算
       */
      payMent() {
        if (this.totalPrice < this.shopInfo.minPrice) {
          return
        }
        MessageBox.confirm('结算？').then(() => {
          Toast('结算成功')
        }, () => {
        })
      }
    }
  }
</script>

<style scoped>
  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
  }
  .shopcart .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);
  }
  .shopcart .content .content-left {
    flex: 1;
  }
  .shopcart .content .content-left .logo-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #141d27;
  }
  .shopcart .content .content-left .logo-wrapper .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    background: #2b343c;
  }
  .shopcart .content .content-left .logo-wrapper .logo.highlight {
    background: green;
  }
  .shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart {
    line-height: 44px;
    font-size: 24px;
    color: #80858a;
  }
  .shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart.highlight {
    color: #fff;
  }
  .shopcart .content .content-left .logo-wrapper .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: rgb(240, 20, 20);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  .shopcart .content .content-left .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
    line-height: 24px;
    padding-right: 12px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  .shopcart .content .content-left .price.highlight {
    color: #fff;
  }
  .shopcart .content .content-left .desc {
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 15px;
    margin-left: -45px;
    font-size: 10px;
  }
  .shopcart .content .content-right {
    flex: 0 0 105px;
    width: 105px;
  }
  .shopcart .content .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }
  .shopcart .content .content-right .pay.not-enough {
    background: #2b333b;
  }
  .shopcart .content .content-right .pay.enough {
    background: #00b43c;
    color: #fff;
  }
  .shopcart .ball-container .ball {
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  }
  .shopcart .ball-container .ball .inner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: green;
    transition: all 0.4s linear;
  }
  .shopcart .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translateY(-100%);
  }
  .shopcart .shopcart-list.move-enter-active, .shopcart .shopcart-list.move-leave-active {
    transition: .3s;
  }
  .shopcart .shopcart-list.move-enter, .shopcart .shopcart-list.move-leave-to {
    transform: translateY(0);
  }
  .shopcart .shopcart-list .list-header {
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .shopcart .shopcart-list .list-header .title {
    float: left;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .shopcart .shopcart-list .list-header .empty {
    float: right;
    font-size: 12px;
    color: rgb(0, 160, 220);
  }
  .shopcart .shopcart-list .list-content {
    padding: 0 18px;
    max-height: 217px;
    overflow: hidden;
    background: #fff;
  }
  .shopcart .shopcart-list .list-content .food {
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
  }
  .shopcart .shopcart-list .list-content .food .name {
    line-height: 24px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .shopcart .shopcart-list .list-content .food .price {
    position: absolute;
    right: 90px;
    bottom: 12px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(240, 20, 20);
  }
  .shopcart .shopcart-list .list-content .food .cartcontrol-wrapper {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    -webkit-backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }
  .list-mask.fade-enter-active, .list-mask.fade-leave-active {
    transition: .5s;
  }
  .list-mask.fade-enter, .list-mask.fade-leave-to {
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
</style>
