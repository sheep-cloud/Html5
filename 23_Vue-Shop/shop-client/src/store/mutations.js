/*
* 直接更新state的多个方法的对象
* */
// import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USERINFO, RESET_USERINFO} from './mutation-types'
import types from './mutation-types'

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
  }
}
