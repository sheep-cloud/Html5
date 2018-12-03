/*
* 通过mutations间接更新state的多个方法的对象
* */
import types from './mutation-types'
import api from '../api'

export default {
  // 异步获取地址相关信息
  async getAddress({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await api.reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(types.RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食品分类列表
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await api.reqCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(types.RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商铺列表
  async getShops({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await api.reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(types.RECEIVE_SHOPS, {shops})
    }
  },

  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(types.RECEIVE_USERINFO, {userInfo})
  },

  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await api.reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(types.RECEIVE_USERINFO, {userInfo})
    }
  },

  // 异步登出
  async logout({commit}) {
    const result = await api.reqLogout()
    if (result.code === 0) {
      commit(types.RESET_USERINFO)
    }
  },

  // 异步获取商品列表
  async getShopGoods({commit}) {
    const result = await api.reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(types.RECEIVE_GOODS, {shopGoods})
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await api.reqShopRatings()
    if (result.code === 0) {
      const shoppRatings = result.data
      commit(types.RECEIVE_RATINGS, {shoppRatings})
    }
  },

  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await api.reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(types.RECEIVE_INFO, {shopInfo})
    }
  }
}
