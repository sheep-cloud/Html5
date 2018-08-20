const
  /** 数字 */
  NUMBERS = new RegExp('^([+-]?)\\d*\\.?\\d+$'),
  /** 整数 */
  INTEGER = new RegExp('^-?\\d+$'),
  /** 正整数 */
  INTEGER_POSITIVE = new RegExp('^[1-9]\\d*$'),
  /** 英文字母 、数字和下划线 */
  GENERAL = new RegExp('^\\w+$'),
  /** 单个中文汉字 */
  CHINESE = new RegExp('[\u4E00-\u9FFF]'),
  /** 中文汉字 */
  CHINESES = new RegExp('[\u4E00-\u9FFF]+'),
  /** 中文字、英文字母、数字和下划线 */
  GENERAL_WITH_CHINESE = new RegExp('^[\u4E00-\u9FFF\\w]+$'),
  /** 用户名 */
  ACCOUNT = new RegExp('^[a-z0-9]{3,16}$'),
  /** 密码 */
  PASSWORD = new RegExp('^.{6,18}$'),
  /** IP v4 */
  IPV4 = new RegExp('\\b((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\b'),
  /** 货币 */
  MONEY = new RegExp('^(\\d+(?:\\.\\d+)?)$'),
  /** 邮箱 */
  EMAIL = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'),
  /** 移动电话/手机号码 */
  MOBILE_PHONE = new RegExp('^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$'),
  /** 固定电话/座机 */
  PHONE = new RegExp('^(\\d{3,4}-?)?\\d{7,9}$'),
  /** 18 位身份证号码 */
  CITIZEN_ID = new RegExp('[1-9]\\d{5}[1-2]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}(\\d|X|x)'),
  /** 邮编 */
  ZIP_CODE = new RegExp('\\d{6}'),
  /** 生日 */
  BIRTHDAY = new RegExp('^(\\d{2,4})([/\\-.年]?)(\\d{1,2})([/\\-.月]?)(\\d{1,2})日?$'),
  /** URL */
  URL = new RegExp('(https://|http://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?'),
  /** UUID */
  UUID = new RegExp('^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$'),
  /** 不带横线的 UUID */
  UUID_SIMPLE = new RegExp('^[0-9a-z]{32}$'),
  /** 中国车牌号码 */
  PLATE_NUMBER = new RegExp('^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$')

export default class ValidUtil {
  /**
   * 通过正则表达式校验
   *
   * @param regexp 正则表达式 ^: 开头 $: 结尾
   * @param value  值
   * @returns {boolean} 满足返回 true，不满足返回 false
   */
  static isMatch(regexp, value) {
    if (!regexp || !value) {
      return false
    }
    return regexp.test(value)
  }

  static isNotMatch(regexp, value) {
    return !this.isMatch(regexp, value)
  }

  /**
   * 是否为数字
   * @param value
   * @returns {boolean}
   */
  static isNumbers(value) {
    return this.isMatch(NUMBERS, value)
  }

  static isNotNumbers(value) {
    return !this.isNumbers(value)
  }

  /**
   * 是否为整数
   * @param value
   * @returns {boolean}
   */
  static isInteger(value) {
    return this.isMatch(INTEGER, value)
  }

  static isNotInteger(value) {
    return !this.isInteger(value)
  }

  // 是否为正整数
  static isIntegerPositive(value) {
    return this.isMatch(INTEGER_POSITIVE, value)
  }

  static isNotIntegerPositive(value) {
    return !this.isIntegerPositive(value)
  }

  // 是否为英文字母 、数字和下划线
  static isGeneral(value) {
    return this.isMatch(GENERAL, value)
  }

  static isNotGeneral(value) {
    return !this.isGeneral(value)
  }

  // 是否为单个中文汉字
  static isChinese(value) {
    return this.isMatch(CHINESE, value)
  }

  static isNotChinese(value) {
    return !this.isChinese(value)
  }

  // 是否为中文汉字
  static isChineses(value) {
    return this.isMatch(CHINESES, value)
  }

  static isNotChineses(value) {
    return !this.isChineses(value)
  }

  // 是否为中文汉字、英文字母、数字和下划线
  static isGeneralWithChinese(value) {
    return this.isMatch(GENERAL_WITH_CHINESE, value)
  }

  static isNotGeneralWithChinese(value) {
    return !this.isGeneralWithChinese(value)
  }

  // 是否为用户名
  static isAccount(value) {
    return this.isMatch(ACCOUNT, value)
  }

  static isNotAccount(value) {
    return !this.isAccount(value)
  }

  // 是否为密码
  static isPassword(value) {
    return this.isMatch(PASSWORD, value)
  }

  static isNotPassword(value) {
    return !this.isPassword(value)
  }

  // 是否为IPV4
  static isIPv4(value) {
    return this.isMatch(IPV4, value)
  }

  static isNotIPv4(value) {
    return !this.isIPv4(value)
  }

  // 是否为货币
  static isMoney(value) {
    return this.isMatch(MONEY, value)
  }

  static isNotMoney(value) {
    return !this.isMoney(value)
  }

  // 是否为邮箱
  static isEmail(value) {
    return this.isMatch(EMAIL, value)
  }

  static isNotEmail(value) {
    return !this.isEmail(value)
  }

  // 是否为移动电话/手机号码
  static isMoblePhone(value) {
    return this.isMatch(MOBILE_PHONE, value)
  }

  static isNotMoblePhone(value) {
    return !this.isMoblePhone(value)
  }

  // 是否为固定电话/座机
  static isPhone(value) {
    return this.isMatch(PHONE, value)
  }

  static isNotPhone(value) {
    return !this.isPhone(value)
  }

  // 是否为18位身份证号码
  static isCitizenId(value) {
    return this.isMatch(CITIZEN_ID, value)
  }

  static isNotCitizenId(value) {
    return !this.isCitizenId(value)
  }

  // 是否为邮编
  static isZipCode(value) {
    return this.isMatch(ZIP_CODE, value)
  }

  static isNotZipCode(value) {
    return !this.isZipCode(value)
  }

  // 是否为生日
  static isBirthday(value) {
    return this.isMatch(BIRTHDAY, value)
  }

  static isNotBirthday(value) {
    return !this.isBirthday(value)
  }

  // 是否为URL
  static isURL(value) {
    return this.isMatch(URL, value)
  }

  static isNotURL(value) {
    return !this.isURL(value)
  }

  // 是否为UUID
  static isUUID(value) {
    return this.isMatch(UUID, value) || this.isMatch(UUID_SIMPLE, value)
  }

  static isNotUUID(value) {
    return !this.isUUID(value)
  }

  // 是否为中国车牌号码
  static isPlateNumber(value) {
    return this.isMatch(PLATE_NUMBER, value)
  }

  static isNotPlateNumber(value) {
    return !this.isPlateNumber(value)
  }
}
