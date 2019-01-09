<template>
  <section class="search">
    <!--搜索头部-->
    <HeaderTop title="搜索"></HeaderTop>
    <!--搜索表单-->
    <form class="search_form" @submit.prevent="search">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="keyword">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <!--结果列表-->
    <section class="list" v-if="isSearchShops">
      <ul class="list_container">
        <!--:to="{path:'/shop', query:{id:item.id}}" -->
        <router-link :to="`/shop?id=${item.id}`" tag="li" class="list_li" v-for="(item, index) in searchShops" :key="index">
          <section class="item_left">
            <img :src="baseImageUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales || item.rating_count}} 单</p>
              <p>{{item.delivery_fee || item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        keyword: '',
        baseImageUrl: 'http://cangdu.org:8001/img/',
        isSearchShops: true
      }
    },
    components: {HeaderTop},
    computed: {
      ...mapState(['searchShops'])
    },
    watch: {
      searchShops(newValue) {
        this.isSearchShops = newValue.length > 0
      }
    },
    methods: {
      search() {
        // 得到搜索关键字进行搜索
        const keyword = this.keyword.trim()
        if (keyword) {
          this.$store.dispatch('searchShops', keyword)
        }
      }
    }
  }
</script>

<style scoped>
  .search {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .search .search_form {
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;
  }
  .search .search_form::after {
    content: '';
    display: block;
    clear: both;
  }
  .search .search_form input {
    height: 35px;
    padding: 0 4px;
    border-radius: 2px;
    font-weight: bold;
    outline: none;
  }
  .search .search_form input.search_input {
    float: left;
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
  }
  .search .search_form input.search_submit {
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774;
  }
  .search .list .list_container {
    background-color: #fff;
  }
  .search .list .list_container .list_li {
    display: flex;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid rgba(255, 133, 237, 0.09);
  }
  .search .list .list_container .list_li .item_left {
    margin-right: 10px;
  }
  .search .list .list_container .list_li .item_left .restaurant_img {
    width: 50px;
    height: 50px;
    display: block;
  }
  .search .list .list_container .list_li .item_right {
    font-size: 12px;
    flex: 1;
  }
  .search .list .list_container .list_li .item_right .item_right_text p {
    line-height: 12px;
    margin-bottom: 6px;
  }
  .search .list .list_container .list_li .item_right .item_right_text p:last-child {
    margin-bottom: 0;
  }
  .search .search_none {
    color: #333;
    background-color: #fff;
    text-align: center;
    margin: 0.125rem auto 0;
  }
</style>
