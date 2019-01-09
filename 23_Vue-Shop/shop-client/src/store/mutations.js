/*
* 直接更新state的多个方法的对象
* */
// import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USERINFO, RESET_USERINFO} from './mutation-types'
import types from './mutation-types'
import Vue from 'vue'

export default {
  [types.RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [types.RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [types.RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [types.RECEIVE_USERINFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [types.RESET_USERINFO](state) {
    state.userInfo = {}
  },
  [types.RECEIVE_GOODS](state, {shopGoods}) {
    state.shopGoods = shopGoods
  },
  [types.RECEIVE_RATINGS](state, {shopRatings}) {
    state.shopRatings = shopRatings
  },
  [types.RECEIVE_INFO](state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [types.INCREMENT_FOOT_COUNT](state, {food}) {
    if (!food.count) { // 第一次增加
      // food.count = 1 // 新增属性（没有数据绑定）
      /*
        Vue.set( target, key, value)
          对象，属性名，属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [types.DECREMENT_FOOT_COUNT](state, {food}) {
    if (food.count) {
      food.count--
      if (!food.count) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [types.CLEAR_CART](state) {
    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    // 移除购物车中所有购物项
    state.cartFoods = []
  },
  [types.RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
    state.searchShops = searchShops
  }
}
