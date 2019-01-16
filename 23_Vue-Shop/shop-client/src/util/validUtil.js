/*
* 字段验证工具
* */
const
  /** 移动电话/手机号码 */
  MOBILE_PHONE = new RegExp('^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$'),
  /** 6位整数 */
  INTEGER_6 = new RegExp('^\\d{6}$'),
  /** 用户名 */
  ACCOUNT = new RegExp('^[a-z0-9]{3,16}$'),
  /** 密码 */
  PASSWORD = new RegExp('^.{6,18}$')


/**
 * 通过正则表达式校验
 * @param regexp  正则表达式 ^: 开头 $: 结尾
 * @param value   值
 * @return {boolean}  满足返回 true，不满足返回 false
 */
function isMatch(regexp, value) {
  if (!regexp || !value) {
    return false
  }
  return new RegExp(regexp).test(value)
}

export default {
  /**
   * 是否为移动电话/手机号码
   * @param value
   * @return {*}
   */
  isMoblePhone: value => isMatch(MOBILE_PHONE, value),

  /**
   * 是否为6位整数
   * @param value
   * @return {*|boolean}
   */
  isInteger6: value => isMatch(INTEGER_6, value),

  /**
   * 是否为用户名
   * @param value
   * @return {*|boolean}
   */
  isAccount: value => isMatch(ACCOUNT, value),

  /**
   * 是否为密码
   * @param value
   * @return {*|boolean}
   */
  isPassword: value => isMatch(PASSWORD, value)
}
