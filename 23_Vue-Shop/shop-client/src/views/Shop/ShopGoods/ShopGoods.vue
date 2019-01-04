<template>
  <div>
    <section class="shop_goods">
      <!--菜单-->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" :class="{current : index === currentIndex}" v-for="(shopGood, index) in shopGoods" :key="index" @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="shopGood.icon" v-if="shopGood.icon">
              {{shopGood.name}}
            </span>
          </li>
        </ul>
      </div>
      <!--商品-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(shopGood, index) in shopGoods" :key="index">
            <h1 class="title">{{shopGood.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in shopGood.foods" :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售 {{food.sellCount}} 份</span>
                    <span>好评率 {{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--购物车-->
      <ShopCart></ShopCart>
    </section>
    <Food :food="food" ref="food"></Food>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import CartControl from '../../../components/CartControl/CartControl'
  import Food from '../../../components/Food/Food'
  import ShopCart from '../../../components/ShopCart/ShopCart'

  export default {
    components: {CartControl, Food, ShopCart},
    data() {
      return {
        scrollY: 0,   // 右侧滑动的Y轴坐标（滑动过程中实时变化）
        tops: [],     // 所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）
        food: {}      // 需要显示的food
      }
    },
    mounted() {
      this.$store.dispatch('getShopGoods', () => { // 数据更新后执行
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
          this._initTops()
        })
      })
    },
    computed: {
      ...mapState(['shopGoods']),
      /**
       * 计算得到当前分类的下标
       * @return {number}
       */
      currentIndex() { // 初始和相关数据发生变化
        /*
          当前坐标计算
            实现列表滑动
            类名：current 标识当前分类
            设计一个计算属性：currentIndex
            根据哪些数据计算？
              scrollY: 右侧滑动的Y轴坐标（滑动过程中实时变化）
              tops: 所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）

            1. 在滑动过程中，实时收集scrollY
            2. 列表第一次显示后，收集tops
            3. 实现currentIndex的计算逻辑
         */

        // 得到条件数据
        const {scrollY, tops} = this

        // 根据条件计算产生一个结果
        return tops.findIndex((top, index) => {
          // scrollY >= 当前top && scrolly < 下一个top
          return scrollY >= top && scrollY < tops[index + 1]
        })
      }
    },
    methods: {
      /**
       * 初始化滚动条
       */
      _initScroll() {
        // 列表显示之后创建
        new BScroll('.menu-wrapper', {
          click: true
        })
        this.foodsScroll = new BScroll('.foods-wrapper', {
          probeType: 2,    // 惯性滑动不会触发
          click: true
        })
        // 给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
        // 给右侧列表绑定scrollEnd监听
        this.foodsScroll.on('scrollEnd', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
      },
      /**
       * 初始化列表
       */
      _initTops() {
        // 1. 初始化tops
        const tops = []
        let top = 0
        tops.push(top)
        // 2. 收集
        // 找到所有分类的li
        // const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
        const lis = this.$refs.foodsUl.children
        console.log(lis)
        // 伪数组转为真数组，遍历
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        console.log(tops)
        // 3. 更新数据
        this.tops = tops
      },
      /**
       * 右侧列表滑动到对应的位置
       * @param index
       */
      clickMenuItem(index) {
        // 得到目标位置的scrollY
        const scrollY = this.tops[index]
        // 立即更新scrollY（让点击的分类项成为当前分类）
        this.scrollY = scrollY
        // 平滑滚动右侧列表
        this.foodsScroll.scrollTo(0, -scrollY, 300)
      },
      /**
       * 显示点击的food
       * @param food
       */
      showFood(food) {
        // 设置food
        this.food = food
        // 显示food组件（调用子组件对象的方法）
        this.$refs.food.toggleShow()
      }
    }
  }
</script>

<style scoped>
  .shop_goods {
    display: flex;
    position: absolute;
    top: 195px;
    bottom: 46px;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .shop_goods .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .shop_goods .menu-wrapper .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px;
  }
  .shop_goods .menu-wrapper .menu-item.current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    color: green;
    font-weight: 700;
  }
  .shop_goods .menu-wrapper .menu-item.current .text {
    border: none;
  }
  .shop_goods .menu-wrapper .menu-item .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .shop_goods .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
    font-size: 12px;
  }
  .shop_goods .foods-wrapper {
    flex: 1;
  }
  .shop_goods .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }
  .shop_goods .foods-wrapper .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .shop_goods .foods-wrapper .food-item:last-child {
    border: none;
    margin-bottom: 0;
  }
  .shop_goods .foods-wrapper .food-item .icon {
    flex: 0 0 57px;
    margin-right: 10px;
  }
  .shop_goods .foods-wrapper .food-item .content {
    flex: 1;
  }
  .shop_goods .foods-wrapper .food-item .content .name {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .shop_goods .foods-wrapper .food-item .content .desc, .extra {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .shop_goods .foods-wrapper .food-item .content .desc {
    line-height: 12px;
    margin-bottom: 8px;
  }
  .shop_goods .foods-wrapper .food-item .content .extra .count {
    margin-right: 12px;
  }
  .shop_goods .foods-wrapper .food-item .content .price {
    font-weight: 700;
    line-height: 24px;
  }
  .shop_goods .foods-wrapper .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
  }
  .shop_goods .foods-wrapper .food-item .content .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .shop_goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 12px;
    margin-top: -20px;
  }
</style>
