/*
  字段验证工具
 */
const
  /** 移动电话/手机号码 */
  MOBILE_PHONE = new RegExp('^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$'),
  /** 6位整数 */
  INTEGER_6 = new RegExp('^\\d{6}$'),
  /** 用户名 */
  ACCOUNT = new RegExp('^[a-z0-9]{3,16}$'),
  /** 密码 */
  PASSWORD = new RegExp('^.{6,18}$')


export default {
  /**
   * 是否为移动电话/手机号码
   *
   * @param value
   * @return {*}
   */
  isMoblePhone: value => MOBILE_PHONE.test(value),

  /**
   * 是否为6位整数
   *
   * @param value
   * @return {*|boolean}
   */
  isInteger6: value => INTEGER_6.test(value),

  /**
   * 是否为用户名
   *
   * @param value
   * @return {*|boolean}
   */
  isAccount: value => ACCOUNT.test(value),

  /**
   * 是否为密码
   *
   * @param value
   * @return {*|boolean}
   */
  isPassword: value => PASSWORD.test(value)
}
