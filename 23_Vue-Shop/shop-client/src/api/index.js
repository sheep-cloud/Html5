/*
* 与后台交互模块
*   包含n个接口请求函数的模块
*   函数的返回值：promise对象
* */
import ajax from './ajax'

const POST = 'POST'

// 代理目标 - 请求前缀
const BASE_URL = '/api'

// 后台跨域 - localhost
// const BASE_URL = 'http://localhost:3000'

// 后台跨域 - colg
// const BASE_URL = 'http://193.112.72.47:3000'


export default {
  // 1、根据经纬度获取位置详情
  reqAddress: geohash => ajax(`${BASE_URL}/position/${geohash}`),

  // 2、获取食品分类列表
  reqCategorys: () => ajax(`${BASE_URL}/index_category`),

  // 3、根据经纬度获取商铺列表
  reqShops: (longitude, latitude) => ajax(`${BASE_URL}/shops`, {longitude, latitude}),

  // 4、根据经纬度和关键字搜索商铺列表
  reqSearchShops: (geohash, keyword) => ajax(`${BASE_URL}/search_shops`, {geohash, keyword}),

  // 5、获取一次性验证码，不需要ajax请求
  reqCaptcha: `${BASE_URL}/captcha`,

  // 6、用户名密码登陆
  reqPwdLogin: (name, pwd, captcha) => ajax(`${BASE_URL}/login_pwd`, {name, pwd, captcha}, POST),

  // 7、发送短信验证码
  reqSendCode: phone => ajax(`${BASE_URL}/sendcode`, {phone}),

  // 8、手机号验证码登陆
  reqSmsLogin: (phone, code) => ajax(`${BASE_URL}/login_sms`, {phone, code}, POST),

  // 9、根据会话获取用户信息
  reqUserInfo: () => ajax(`${BASE_URL}/userinfo`),

  // 10、用户登出
  reqLogout: () => ajax(`${BASE_URL}/logout`),

  // 11、获取商家商品列表
  reqShopGoods: () => ajax('/shop_goods'),

  // 12、获取商家评价列表
  reqShopRatings: () => ajax('/shop_ratings'),

  // 13、获取商家信息
  reqShopInfo: () => ajax('/shop_info')
}
