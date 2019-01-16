/*
* 通过mutations间接更新state的多个方法的对象
* */
import types from './mutation-types'
import api from '../api'

export default {
  /**
   * 异步获取地址相关信息
   * @param commit
   * @param state
   * @return {Promise<void>}
   */
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

  /**
   * 异步获取食品分类列表
   * @param commit
   * @return {Promise<void>}
   */
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await api.reqCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(types.RECEIVE_CATEGORYS, {categorys})
    }
  },

  /**
   * 异步获取商铺列表
   * @param commit
   * @param state
   * @return {Promise<void>}
   */
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

  /**
   * 同步记录用户信息
   * @param commit
   * @param userInfo
   */
  recordUser({commit}, userInfo) {
    commit(types.RECEIVE_USERINFO, {userInfo})
  },

  /**
   * 异步获取用户信息
   * @param commit
   * @return {Promise<void>}
   */
  async getUserInfo({commit}) {
    const result = await api.reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(types.RECEIVE_USERINFO, {userInfo})
    }
  },

  /**
   * 异步登出
   * @param commit
   * @return {Promise<void>}
   */
  async logout({commit}) {
    const result = await api.reqLogout()
    if (result.code === 0) {
      commit(types.RESET_USERINFO)
    }
  },

  /**
   * 异步获取商品列表
   * @param commit
   * @param callback
   * @return {Promise<void>}
   */
  async getShopGoods({commit}, callback) {
    const result = await api.reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(types.RECEIVE_GOODS, {shopGoods})
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },

  /**
   * 异步获取商家评价列表
   * @param commit
   * @param callback
   * @return {Promise<void>}
   */
  async getShopRatings({commit}, callback) {
    const result = await api.reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(types.RECEIVE_RATINGS, {shopRatings})
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },

  /**
   * 异步获取商家信息
   * @param commit
   * @return {Promise<void>}
   */
  async getShopInfo({commit}) {
    const result = await api.reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(types.RECEIVE_INFO, {shopInfo})
    }
  },

  /**
   * 同步更新food中的count数量
   * @param commit
   * @param isAdd
   * @param food
   */
  updateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(types.INCREMENT_FOOT_COUNT, {food})
    } else {
      commit(types.DECREMENT_FOOT_COUNT, {food})
    }
  },

  /**
   * 同步清空购物车
   * @param commit
   */
  clearCart({commit}) {
    commit(types.CLEAR_CART)
  },

  /**
   * 异步获取搜索得到的商家数组
   * @param commit
   * @param state
   * @param keyword
   * @return {Promise<void>}
   */
  async searchShops({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await api.reqSearchShops(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(types.RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  }
}
