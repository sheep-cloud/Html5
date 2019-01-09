<template>
  <div>
    <section class="shop_ratings" ref="ratings">
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">{{shopInfo.score}}</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家 {{shopInfo.rankRate}}%</div>
          </div>
          <div class="overview-right">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
              <Star :score="shopInfo.serviceScore" :size="24"/>
              <span class="score">{{shopInfo.serviceScore}}</span>
            </div>
            <div class="score-wrapper">
              <span class="title">商品评分</span>
              <Star :score="shopInfo.foodScore" :size="24"/>
              <span class="score">{{shopInfo.foodScore}}</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">{{shopInfo.deliveryTime}} 分钟</span>
            </div>
          </div>
        </div>
        <div class="split"></div>
        <div class="rating-select">
          <div class="rating-type border-1px">
            <span class="block positive" :class="{active : selectType === 2}" @click="setSelectType(2)">
              全部
              <span class="count">{{shopRatings.length}}</span>
            </span>
            <span class="block positive" :class="{active : selectType === 0}" @click="setSelectType(0)">
              满意
              <span class="count">{{positiveSize}}</span>
            </span>
            <span class="block negative" :class="{active : selectType === 1}" @click="setSelectType(1)">
              不满意
              <span class="count">{{shopRatings.length - positiveSize}}</span>
            </span>
          </div>
          <div class="switch" :class="{on : onlyShowText}" @click="toggleOnlyShowText">
            <span class="iconfont icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
            <span class="count">({{filterRatings.length}})</span>
          </div>
        </div>
        <div class="rating-wrapper">
          <ul>
            <li class="rating-item" v-for="(ratings, index) in filterRatings" :key="index">
              <div class="avatar">
                <img width="28" height="28" :src="ratings.avatar">
              </div>
              <div class="content">
                <h1 class="name">{{ratings.username}}</h1>
                <div class="star-wrapper">
                  <Star :score="ratings.score" :size="24"/>
                  <span class="delivery">{{ratings.deliveryTime}}</span>
                </div>
                <p class="text">{{ratings.text}}</p>
                <div class="recommend" v-show="ratings.recommend">
                  <!--rateType： 0 满意； 1 不满意-->
                  <span class="iconfont" :class="ratings.rateType === 0 ? 'icon-thumb_up' : 'icon-thumb_down'"></span>
                  <span class="item" v-for="(item, index) in ratings.recommend" :key="index">{{item}}</span>
                </div>
                <div class="time">{{ratings.rateTime | date-format}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Star from '../../../components/Star/Star'
  import BScroll from 'better-scroll'
  import {mapState, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        onlyShowText: true,    // 是否只显示有文本的评价
        selectType: 2          // 选择的评价类型：0满意，1不满意，2全部
      }
    },
    mounted() {
      this.$store.dispatch('getShopRatings', () => {
        this.$nextTick(() => {
          new BScroll(this.$refs.ratings, {
            click: true
          })
        })
      })
    },
    components: {Star},
    computed: {
      ...mapState(['shopInfo', 'shopRatings']),
      ...mapGetters(['positiveSize']),
      /**
       * 过滤数据
       */
      filterRatings() {
        // 得到相关的数据
        const {shopRatings, onlyShowText, selectType} = this

        // 产生一个过滤的新数组
        return shopRatings.filter(rating => {
          const {rateType, text} = rating
          /*
            条件1：
              selectType：0/1/2
              rateType: 0/1
              selectType === 2 || selectType === rateType
            条件2：
              onlyShowText: true/false
              text: 有值/没值
              !onlyShowText || text
           */
          return (selectType === 2 || selectType === rateType) && (!onlyShowText || text)
        })
      }
    },
    methods: {
      setSelectType(selectType) {
        this.selectType = selectType
      },
      toggleOnlyShowText() {
        this.onlyShowText = !this.onlyShowText
      }
    }
  }
</script>

<style scoped>
  .shop_ratings {
    position: absolute;
    top: 195px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background: #fff;
  }
  .shop_ratings .ratings-content .overview {
    display: flex;
    padding: 18px 0;
  }
  .shop_ratings .ratings-content .overview .overview-left {
    flex: 0 0 137px;
    padding: 6px 0;
    width: 137px;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;
  }
  @media only screen and (max-width: 320px) {
    .shop_ratings .ratings-content .overview .overview-left {
      flex: 0 0 120px;
      width: 120px;
    }
  }
  .shop_ratings .ratings-content .overview .overview-left .score {
    margin-bottom: 6px;
    line-height: 28px;
    font-size: 24px;
    color: rgb(255, 153, 0);
  }
  .shop_ratings .ratings-content .overview .overview-left .title {
    margin-bottom: 8px;
    line-height: 12px;
    font-size: 12px;
    color: rgb(7, 17, 27);
  }
  .shop_ratings .ratings-content .overview .overview-left .rank {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .shop_ratings .ratings-content .overview .overview-right {
    flex: 1;
    padding: 6px 0 6px 24px;
  }
  @media only screen and (max-width: 320px) {
    .shop_ratings .ratings-content .overview .overview-right {
      padding-left: 6px;
    }
  }
  .shop_ratings .ratings-content .overview .overview-right .score-wrapper {
    margin-bottom: 8px;
    font-size: 0;
  }
  .shop_ratings .ratings-content .overview .overview-right .score-wrapper .title {
    display: inline-block;
    line-height: 18px;
    vertical-align: top;
    font-size: 12px;
    color: rgb(7, 17, 27);
  }
  .shop_ratings .ratings-content .overview .overview-right .score-wrapper .star {
    display: inline-block;
    margin: 0 12px;
    vertical-align: top;
  }
  .shop_ratings .ratings-content .overview .overview-right .score-wrapper .score {
    display: inline-block;
    line-height: 18px;
    vertical-align: top;
    font-size: 12px;
    color: rgb(255, 153, 0);
  }
  .shop_ratings .ratings-content .overview .overview-right .delivery-wrapper {
    font-size: 0;
  }
  .shop_ratings .ratings-content .overview .overview-right .delivery-wrapper .title {
    line-height: 18px;
    font-size: 12px;
    color: rgb(7, 17, 27);
  }
  .shop_ratings .ratings-content .overview .overview-right .delivery-wrapper .delivery {
    margin-left: 12px;
    font-size: 12px;
    color: rgb(147, 153, 159);
  }
  .shop_ratings .ratings-content .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
  .shop_ratings .ratings-content .rating-select .rating-type {
    padding: 18px 0;
    margin: 0 18px;
    border: 1px rgba(7, 17, 27, 0.1);
    font-size: 0;
  }
  .shop_ratings .ratings-content .rating-select .rating-type .block {
    display: inline-block;
    padding: 8px 12px;
    margin-right: 8px;
    line-height: 16px;
    border-radius: 1px;
    font-size: 12px;
    color: rgb(77, 85, 93);
    background: rgba(77, 85, 93, 0.2);
  }
  .shop_ratings .ratings-content .rating-select .rating-type .block.active {
    background: green;
    color: #fff;
  }
  .shop_ratings .ratings-content .rating-select .rating-type .block .count {
    margin-left: 2px;
    font-size: 8px;
  }
  .shop_ratings .ratings-content .rating-select .switch {
    padding: 12px 18px;
    line-height: 24px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    color: rgb(147, 153, 159);
    font-size: 0;
  }
  .shop_ratings .ratings-content .rating-select .switch.on .icon-check_circle {
    color: green;
  }
  .shop_ratings .ratings-content .rating-select .switch .icon-check_circle {
    display: inline-block;
    vertical-align: top;
    margin-right: 4px;
    font-size: 24px;
  }
  .shop_ratings .ratings-content .rating-select .switch .text {
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
  }
  .shop_ratings .ratings-content .rating-select .switch .count {
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
  }
  .shop_ratings .ratings-content .rating-wrapper {
    padding: 0 18px;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item {
    display: flex;
    padding: 18px 0;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .avatar {
    flex: 0 0 28px;
    width: 28px;
    margin-right: 12px;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item img {
    border-radius: 50%;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content {
    position: relative;
    flex: 1;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .name {
    margin-bottom: 4px;
    line-height: 12px;
    font-size: 10px;
    color: rgb(7, 17, 27);
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .star-wrapper {
    margin-bottom: 6px;
    font-size: 0;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .star-wrapper .star {
    display: inline-block;
    margin-right: 6px;
    vertical-align: top;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .star-wrapper .delivery {
    display: inline-block;
    vertical-align: top;
    line-height: 12px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .text {
    margin-bottom: 8px;
    line-height: 18px;
    color: rgb(7, 17, 27);
    font-size: 12px;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .recommend {
    line-height: 16px;
    font-size: 0;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .recommend .icon-thumb_up, .icon-thumb_down, .item {
    display: inline-block;
    margin: 0 8px 4px 0;
    font-size: 9px;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .recommend .icon-thumb_up {
    color: yellow;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .recommend .icon-thumb_down {
    color: rgb(147, 153, 159);
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .recommend .item {
    padding: 0 6px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    border-radius: 1px;
    color: rgb(147, 153, 159);
    background: #fff;
  }
  .shop_ratings .ratings-content .rating-wrapper .rating-item .content .time {
    position: absolute;
    top: 5px;
    left: 160px;
    line-height: 12px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
</style>
