<template>
  <div>
    <section class="shop_info">
      <div class="info-content">
        <!--配送信息-->
        <section class="section">
          <h3 class="section-title">配送信息</h3>
          <div class="delivery">
            <div>
              <span class="delivery-icon">{{shopInfo.description}}</span>
              <span>由商家配送提供配送， 约 {{shopInfo.deliveryTime}} 分钟送达， 距离 {{shopInfo.distance}}</span>
            </div>
            <div class="delivery-money">配送费￥{{shopInfo.deliveryPrice}}</div>
          </div>
        </section>

        <div class="split"></div>

        <!--活动与服务-->
        <section class="section">
          <h3 class="section-title">活动与服务</h3>
          <div class="activity">
            <div class="activity-item" :class="supportClasses[support.type]" v-for="(support, index) in shopInfo.supports" :key="index">
              <span class="content-tag">
              <span class="mini-tag">{{support.name}}</span>
              </span>
              <span class="activity-content">{{support.content}}</span>
            </div>
          </div>
        </section>

        <div class="split"></div>

        <!--商家实景-->
        <section class="section">
          <h3 class="section-title">商家实景</h3>
          <div class="pic-wrapper">
            <ul class="pic-list" ref="picsUl">
              <li class="pic-item" v-for="(pic, index) in shopInfo.pics" :key="index">
                <img width="120" height="90" :src="pic"/>
              </li>
            </ul>
          </div>
        </section>

        <div class="split"></div>

        <!--商家信息-->
        <section class="section">
          <h3 class="section-title">商家信息</h3>
          <ul class="detail">
            <li><span class="bold">品类</span> <span>{{shopInfo.category}}</span></li>
            <li><span class="bold">商家电话</span> <span>{{shopInfo.phone}}</span></li>
            <li><span class="bold">地址</span> <span>{{shopInfo.address}}</span></li>
            <li><span class="bold">营业时间</span> <span>{{shopInfo.workTime}}</span></li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        supportClasses: ['activity-green', 'activity-red', 'activity-orange']
      }
    },
    mounted() {
      // 如果数据还没有，直接结束
      if (!this.shopInfo.pics) {
        return
      }

      // 数据有了，可以创建BScroll对象形成滑动
      this._initScroll()
    },
    computed: {
      ...mapState(['shopInfo'])
    },
    watch: {
      shopInfo() { // 刷新流程 ---> 更新数据
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    methods: {
      /**
       * 初始化滑动框
       * @private
       */
      _initScroll() {
        new BScroll('.shop_info')
        // 动态计算Ul的宽度并赋值
        const ul = this.$refs.picsUl
        const liWidth = 120
        const space = 6
        const count = this.shopInfo.pics.length
        ul.style.width = (liWidth + space) * count - space + 'px'
        // 水平滑动
        new BScroll('.pic-wrapper', {
          scrollX: true
        })
      }
    }

  }
</script>

<style scoped>
  .shop_info {
    position: absolute;
    top: 195px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .shop_info .info-content .section {
    padding: 16px 14px 14px;
    font-size: 16px;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .shop_info .info-content .section .section-title {
    color: #000;
    font-weight: 700;
    line-height: 16px;
  }
  .shop_info .info-content .section .section-title > .iconfont {
    float: right;
    color: #ccc;
  }
  .shop_info .info-content .section .delivery {
    margin-top: 16px;
    font-size: 13px;
    line-height: 18px;
  }
  .shop_info .info-content .section .delivery .delivery-icon {
    width: 55px;
    font-size: 11px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #0097ff;
    padding: 1px 0;
    border-radius: 4px;
  }
  .shop_info .info-content .section .delivery .delivery-money {
    margin-top: 5px;
  }
  .shop_info .info-content .section .activity {
    margin-top: 16px;
  }
  .shop_info .info-content .section .activity .activity-item {
    margin-bottom: 12px;
    display: flex;
    font-size: 13px;
    align-items: center;
  }
  .shop_info .info-content .section .activity .activity-item.activity-green .content-tag {
    background-color: #70bc46;
  }
  .shop_info .info-content .section .activity .activity-item.activity-red .content-tag {
    background-color: #f07373;
  }
  .shop_info .info-content .section .activity .activity-item.activity-orange .content-tag {
    background-color: #f1884f;
  }
  .shop_info .info-content .section .activity .activity-item .content-tag {
    display: inline-block;
    border-radius: 2px;
    width: 36px;
    height: 18px;
    margin-right: 10px;
    color: #fff;
    font-style: normal;
    position: relative;
  }
  .shop_info .info-content .section .activity .activity-item .content-tag .mini-tag {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    font-size: 24px;
    transform: scale(.5);
    transform-origin: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shop_info .info-content .section .pic-wrapper {
    width: 100%;
    overflow: hidden;
    white-space: normal;
    margin-top: 16px;
  }
  .shop_info .info-content .section .pic-wrapper .pic-list {
    font-size: 0;
  }
  .shop_info .info-content .section .pic-wrapper .pic-list .pic-item {
    display: inline-block;
    margin-right: 6px;
    width: 120px;
    height: 90px;
  }
  .shop_info .info-content .section .pic-wrapper .pic-list .pic-item:last-child {
    margin: 0;
  }
  .shop_info .info-content .section .detail {
    margin-bottom: -16px;
  }
  .shop_info .info-content .section .detail > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: -10px;
    padding: 16px 12px 16px 0;
    line-height: 16px;
    border-bottom: 1px #ddd;
    font-size: 13px;
  }
  .shop_info .info-content .section .detail > li > .bold {
    font-weight: 700;
    color: #333;
  }
  .shop_info .info-content .section .detail > li:last-child {
    border: none;
  }
  .shop_info .info-content .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
</style>
