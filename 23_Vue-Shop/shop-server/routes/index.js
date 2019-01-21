const express = require('express')
const router = express.Router()
const md5 = require('blueimp-md5')
const models = require('../db/models')
const UserModel = models.getModel('user')
const sms_util = require('../util/sms_util')
const ajax = require('../api/ajax')
const svgCaptcha = require('svg-captcha')
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉
let users = {}


/**
 * 用户名密码登陆
 */
router.post('/login_pwd', (req, res) => {
  const {name} = req.body
  let {pwd, captcha} = req.body
  pwd = md5(pwd)
  captcha = captcha.toUpperCase()
  console.log(`/login_pwd; req: ${JSON.stringify(req.body)}`)

  // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
  if (captcha !== req.session.captcha) {
    return res.send({code: 1, msg: '验证码不正确'})
  }
  // 删除保存的验证码
  delete req.session.captcha

  UserModel.findOne({name}, (err, user) => {
    if (user) {
      if (user.pwd !== pwd) {
        res.send({code: 1, msg: '用户名或密码不正确!'})
      } else {
        const {_id} = user
        req.session.userid = _id
        res.send({code: 0, data: {_id, name: user.name}})
      }
    } else {
      const userModel = new UserModel({name, pwd})
      userModel.save((err, user) => {
        // 向浏览器端返回cookie(key=value)
        // res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        const {_id} = user
        req.session.userid = _id
        const data = {_id, name: user.name}
        // 3.2. 返回数据(新的user)
        res.send({code: 0, data})
      })
    }
  })
})


/**
 * 获取一次性图形验证码
 */
router.get('/captcha', (req, res) => {
  const captcha = svgCaptcha.create({
    size: 4,              // 验证码长度
    ignoreChars: '0o1l',  // 验证码字符中排除0o1l
    noise: 2,             // 干扰线的数量
    color: true           // 验证码的字符是否有颜色
  })
  // 保存到session
  req.session.captcha = captcha.text.toUpperCase()
  console.log(`/captcha; captcha: ${req.session.captcha}`)
  res.type('svg')
     .status(200)
     .send(captcha.data)
})

/**
 * 发送短信验证码
 */
router.get('/sendcode', (req, res) => {
  // 1. 获取请求参数数据
  const {phone} = req.query
  // 2. 处理数据
  // 生成验证码(6位随机数)
  const code = sms_util.randomCode(6)
  console.log(`/sendcode; phone: ${phone}, code: ${code}`)
  // 发送给指定的手机号
  sms_util.sendCode(phone, code, success => {
    // success表示是否成功
    if (success) {
      users[code] = code
      // 3.1 返回成功响应数据
      res.send({code: 0, data: code})
    } else {
      // 3.2 返回失败响应数据
      res.send({code: 1, msg: '短信验证码发送失败！'})
    }
  })
})


/**
 * 手机号验证码登陆
 */
router.post('/login_sms', (req, res) => {
  console.log(`/login_sms; req: ${JSON.stringify(req.body)}`)
  const {phone, code} = req.body
  if (users[code] !== code) {
    res.send({code: 1, msg: '手机号或验证码不正确！'})
    return
  }
  //删除保存的code
  delete users[code]

  UserModel.findOne({phone}, (err, user) => {
    if (user) {
      req.session.userid = user._id
      res.send({code: 0, data: user})
    } else {
      //存储数据
      const userModel = new UserModel({phone})
      userModel.save((err, user) => {
        req.session.userid = user._id
        res.send({code: 0, data: user})
      })
    }
  })
})

/**
 * 根据会话获取用户信息(根据sesion中的userid, 查询对应的user)
 */
router.get('/userinfo', function (req, res) {
  console.log(`/userinfo; sessionId: ${req.session.id}`)
  // 取出userid
  const {userid} = req.session
  if (!userid) {
    res.send({code: 1, msg: '请先登录！'})
    return
  }
  console.log(`/userinfo; userid: ${userid}`)

  // 查询
  UserModel.findOne({_id: userid}, _filter, (err, user) => {
    // 如果没有, 返回错误提示
    if (!user) {
      // 清除浏览器保存的userid的cookie
      delete req.session.userid

      res.send({code: 1, msg: '请先登录！'})
    } else {
      // 如果有, 返回user
      res.send({code: 0, data: user})
    }
  })
})

/**
 * 用户登出
 */
router.get('/logout', (req, res) => {
  console.log(`/logout; ${new Date().toLocaleString()}`)
  // 清除浏览器保存的userid的cookie
  delete req.session.userid
  // 返回数据
  res.send({code: 0})
})

/**
 * 根据经纬度获取位置详情
 */
router.get('/position/:geohash', (req, res) => {
  const {geohash} = req.params
  console.log(`/position/:geohash; geohash: ${geohash}`)
  ajax(`http://cangdu.org:8001/v2/pois/${geohash}`).then(data => {
    res.send({code: 0, data})
  })
})

/**
 * 获取首页食品分类列表
 */
router.get('/index_category', (req, res) => {
  // 模拟ajax请求
  setTimeout(() => {
    const data = require('../data/index_category')
    res.send({code: 0, data})
  }, 100)
})

/**
 * 根据经纬度获取商铺列表?latitude=40.10038&longitude=116.36867
 */
router.get('/shops', (req, res) => {
  const {latitude, longitude} = req.query
  console.log(`/shops; latitude: ${latitude}, longitude: ${longitude}`)
  // 模拟ajax请求
  setTimeout(() => {
    const data = require('../data/shops.json')
    res.send({code: 0, data})
  }, 100)
})

/**
 * 根据经纬度和关键字搜索商铺列表
 */
router.get('/search_shops', (req, res) => {
  const {geohash, keyword} = req.query
  console.log(`/search_shops; geohash: ${geohash}, keyword: ${keyword}`)
  /*
  const data = {
      'extras[]': 'restaurant_activity',
      type: 'search',
      geohash,
      keyword
  }
  */
  const data = {geohash, keyword}
  ajax('http://cangdu.org:8001/v4/restaurants', data).then(data => {
    res.send({code: 0, data})
  })
})

module.exports = router