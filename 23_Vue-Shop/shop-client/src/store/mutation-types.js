/*
* 包含多个mutation的type名称常量
* */
/*
export const RECEIVE_ADDRESS = 'receive_address' // 接收地址相关信息
export const RECEIVE_CATEGORYS = 'receive_categorys' // 接收食品分类列表
export const RECEIVE_SHOPS = 'receive_shops' // 接收商铺列表
export const RECEIVE_USERINFO = 'receive_userinfo' // 接收用户信息
export const RESET_USERINFO = 'reset_userinfo' // 重置用户信息
export const RECEIVE_GOODS = 'receive_shop_goods' // 接收商品列表
export const RECEIVE_RATINGS = 'receive_shop_ratings' // 接收商家评价列表
export const RECEIVE_INFO = 'receive_shop_info' // 接收商家信息
*/

export default {
  RECEIVE_ADDRESS: 'receive_address',             // 接收地址相关信息
  RECEIVE_CATEGORYS: 'receive_categorys',         // 接收食品分类列表
  RECEIVE_SHOPS: 'receive_shops',                 // 接收商铺列表
  RECEIVE_USERINFO: 'receive_userinfo',           // 接收用户信息
  RESET_USERINFO: 'reset_userinfo',               // 重置用户信息
  RECEIVE_GOODS: 'receive_shop_goods',            // 接收商品列表
  RECEIVE_RATINGS: 'receive_shop_ratings',        // 接收商家评价列表
  RECEIVE_INFO: 'receive_shop_info',              // 接收商家信息
  INCREMENT_FOOT_COUNT : 'increment_foot_count',  // 增加food中的count
  DECREMENT_FOOT_COUNT : 'decrement_foot_count',  // 减少food中的count
  CLEAR_CART : 'clear_cart',                      // 清空购物车
  RECEIVE_SEARCH_SHOPS : 'receive_search_shops',  // 接收搜索得到的商家数组
}
