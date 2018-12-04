<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name" :ellipsis="'ellipsis'">
      <router-link to="/search" class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link :to="userInfo._id ? '/userInfo' : '/login'" class="header_login" slot="right">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <!--<img src="./images/nav/1.jpg">-->
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <!--商家列表-->
        <ShopList></ShopList>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  import {mapState, mapActions} from 'vuex'

  export default {
    components: {HeaderTop, ShopList},
    data() {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      // this.$store.dispatch('getCategorys')
      // this.$store.dispatch('getShops')
      this.getCategorys()
      this.getShops()
    },
    computed: {
      ...mapState(['address', 'categorys', 'userInfo']),
      /*
        根据categorys一维数组生成一个二维数组
        小数组中的元素个数最大是8
       */
      categorysArr() {
        // 准备空的二维数组
        let arr = []
        // 准备一个小数组（最大长度为8）
        let minArr = []
        // 遍历categorys
        this.categorys.forEach(c => {
          // 如果当前小数组已经满了，创建一个新的
          if (minArr.length === 8) {
            minArr = []
          }
          // 如果minArr是空的，将小数组保存到大数组中
          if (minArr.length === 0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    },
    methods: {
      ...mapActions(['getCategorys', 'getShops'])
    },
    watch: {
      categorys(value) { // categorys数组中有数据了，在异步更新界面之前执行
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => { // 一旦完成界面更新，就立即调用（此条语句要写在数据更新之后）
          // 创建一个Swiper实例对象，实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            pagination: {// 如果需要分页器
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }
</script>

<style scoped>
  .msite {
    width: 100%;
  }
  .msite .header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }
  .msite .header .header_search .iconfont {
    font-size: 22px;
    color: #fff;
  }
  .msite .header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
  }
  .msite .header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .msite .header .header_login .header_login_text {
    color: #fff;
  }
  .msite .msite_nav {
    position: relative;
    margin-top: 45px;
    height: 200px;
    background: #fff;
  }
  .msite .msite_nav::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5);
  }
  .msite .msite_nav .swiper-container {
    width: 100%;
    height: 100%;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food {
    width: 25%;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container {
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container img {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
  }
  .msite .msite_nav .swiper-container .swiper-pagination > span.swiper-pagination-bullet-active {
    background: #02a774;
  }
  .msite .msite_shop_list {
    position: relative;
    margin-top: 10px;
    background: #fff;
  }
  .msite .msite_shop_list::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  .msite .msite_shop_list .shop_header {
    padding: 10px 10px 0;
  }
  .msite .msite_shop_list .shop_header .shop_icon {
    margin-left: 5px;
    color: #999;
  }
  .msite .msite_shop_list .shop_header .shop_header_title {
    color: #999;
    font-size: 14px;
    line-height: 20px;
  }
  .msite .msite_shop_list .shop_container {
    margin-bottom: 50px;
  }
</style>
