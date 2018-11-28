var md5 = require('blueimp-md5')
var moment = require('moment')
var Base64 = require('js-base64').Base64
var request = require('request')

/*
 生成指定长度的随机数
 */
function randomCode(length) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var result = '' //统一改名: alt + shift + R
    for (var i = 0; i < length; i++) {
        var index = Math.ceil(Math.random() * 9)
        result += chars[index]
    }
    return result
}

// console.log(randomCode(6));
exports.randomCode = randomCode

// 【容联-云通讯】文档：http://doc.yuntongxun.com/p/5a533de33b8496dd00dce07c

/*
向指定号码发送指定验证码
 */
function sendCode(phone, code, callback) {
    var ACCOUNT_SID = '8aaf0708674db3ee016756141538068f'
    var AUTH_TOKEN = '3e2a23787b844b65ab2dc60bfb27076b'
    var Rest_URL = 'https://app.cloopen.com:8883'
    var AppID = '8aaf0708674db3ee0167561415930695'

    // 1. 准备请求url
    /*
        REST API 验证参数，生成规则如下
        1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
            时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
        2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
     */
    var time = moment().format('YYYYMMDDHHmmss')
    var sigParameter = md5(ACCOUNT_SID + AUTH_TOKEN + time).toUpperCase()
    // URL格式：/2013-12-26/Accounts/{accountSid}/SMS/TemplateSMS?sig={SigParameter}
    var url = Rest_URL + '/2013-12-26/Accounts/' + ACCOUNT_SID + '/SMS/TemplateSMS?sig=' + sigParameter

    // 2. 准备请求体
    var body = {
        to: phone,
        appId: AppID,
        templateId: '1', // 免费开发测试使用的模板ID为1，形式为：【云通讯】您使用的是云通讯短信模板，您的验证码是{1}，请于{2}分钟内正确输入。
        datas: [code, '1'] // 其中{1}和{2}为短信模板的参数。
    }

    // 3. 准备请求头
    /*
        验证信息，生成规则详见下方说明
        1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
        2.冒号为英文冒号
        3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
     */
    var authorization = Base64.encode(ACCOUNT_SID + ':' + time)
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        'Content-Length': JSON.stringify(body).length + '',
        'Authorization': authorization
    }

    // 4. 发送请求, 并得到返回的结果, 调用callback
    request({
        method: 'POST',
        url: url,
        headers: headers,
        body: body,
        json: true
    }, function (error, response, body) {
        console.log(error, body)
        callback(body.statusCode === '000000')
    })
}

exports.sendCode = sendCode

/*
sendCode('18727019986', randomCode(6), function (success) {
    console.log(success);
})
*/
