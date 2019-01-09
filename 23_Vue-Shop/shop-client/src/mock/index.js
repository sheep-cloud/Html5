/*
  使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import shop from './shop'

// 返回goods的接口
Mock.mock('/shop_goods', {code: 0, data: shop.shopGoods})

// 返回ratings的接口
Mock.mock('/shop_ratings', {code: 0, data: shop.shopRatings})

// 返回info的接口
Mock.mock('/shop_info', {code: 0, data: shop.shopInfo})

// export default ??? 不需要向外暴露任何数据，只需要保证能执行即可
