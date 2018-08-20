;(function (window) {
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
    BIRTHDAY = new RegExp('^(\\d{2,4})([/\\-\\.年]?)(\\d{1,2})([/\\-\\.月]?)(\\d{1,2})日?$'),
    /** URL */
    URL = new RegExp('(https://|http://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?'),
    /** UUID */
    UUID = new RegExp('^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$'),
    /** 不带横线的 UUID */
    UUID_SIMPLE = new RegExp('^[0-9a-z]{32}$'),
    /** 中国车牌号码 */
    PLATE_NUMBER = new RegExp('^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$')

  let
    /**
     * 通过正则表达式校验
     *
     * @param regexp 正则表达式 ^: 开头 $: 结尾
     * @param value  值
     * @returns {boolean} 满足返回 true，不满足返回 false
     */
    isMatch = (regexp, value) => {
      if (!regexp || !value) {
        return false
      }
      return regexp.test(value)
    },
    isNotMatch = (regexp, value) => {
      return !isMatch(regexp, value)
    },
    // 是否为数字
    isNumbers = value => {
      return isMatch(NUMBERS, value)
    },
    isNotNumbers = value => {
      return !isNumbers(value)
    },
    // 是否为整数
    isInteger = value => {
      return isMatch(INTEGER, value)
    },
    isNotInteger = value => {
      return !isInteger(value)
    },
    // 是否为正整数
    isIntegerPositive = value => {
      return isMatch(INTEGER_POSITIVE, value)
    },
    isNotIntegerPositive = value => {
      return !isIntegerPositive(value)
    },
    // 是否为英文字母 、数字和下划线
    isGeneral = value => {
      return isMatch(GENERAL, value)
    },
    isNotGeneral = value => {
      return !isGeneral(value)
    },
    // 是否为单个中文汉字
    isChinese = value => {
      return isMatch(CHINESE, value)
    },
    isNotChinese = value => {
      return !isChinese(value)
    },
    // 是否为中文汉字
    isChineses = value => {
      return isMatch(CHINESES, value)
    },
    isNotChineses = value => {
      return !isChineses(value)
    },
    // 是否为中文汉字、英文字母、数字和下划线
    isGeneralWithChinese = value => {
      return isMatch(GENERAL_WITH_CHINESE, value)
    },
    isNotGeneralWithChinese = value => {
      return !isGeneralWithChinese(value)
    },
    // 是否为用户名
    isAccount = value => {
      return isMatch(ACCOUNT, value)
    },
    isNotAccount = value => {
      return !isAccount(value)
    },
    // 是否为密码
    isPassword = value => {
      return isMatch(PASSWORD, value)
    },
    isNotPassword = value => {
      return !isPassword(value)
    },
    // 是否为IPV4
    isIPv4 = value => {
      return isMatch(IPV4, value)
    },
    isNotIPv4 = value => {
      return !isIPv4(value)
    },
    // 是否为货币
    isMoney = value => {
      return isMatch(MONEY, value)
    },
    isNotMoney = value => {
      return !isMoney(value)
    },
    // 是否为邮箱
    isEmail = value => {
      return isMatch(EMAIL, value)
    },
    isNotEmail = value => {
      return !isEmail(value)
    },
    // 是否为移动电话/手机号码
    isMoblePhone = value => {
      return isMatch(MOBILE_PHONE, value)
    },
    isNotMoblePhone = value => {
      return !isMoblePhone(value)
    },
    // 是否为固定电话/座机
    isPhone = value => {
      return isMatch(PHONE, value)
    },
    isNotPhone = value => {
      return !isPhone(value)
    },
    // 是否为18位身份证号码
    isCitizenId = value => {
      return isMatch(CITIZEN_ID, value)
    },
    isNotCitizenId = value => {
      return !isCitizenId(value)
    },
    // 是否为邮编
    isZipCode = value => {
      return isMatch(ZIP_CODE, value)
    },
    isNotZipCode = value => {
      return !isZipCode(value)
    },
    // 是否为生日
    isBirthday = value => {
      return isMatch(BIRTHDAY, value)
    },
    isNotBirthday = value => {
      return !isBirthday(value)
    },
    // 是否为URL
    isURL = value => {
      return isMatch(URL, value)
    },
    isNotURL = value => {
      return !isURL(value)
    },
    // 是否为UUID
    isUUID = value => {
      return isMatch(UUID, value) || isMatch(UUID_SIMPLE, value)
    },
    isNotUUID = value => {
      return !isUUID(value)
    },
    // 是否为中国车牌号码
    isPlateNumber = value => {
      return isMatch(PLATE_NUMBER, value)
    },
    isNotPlateNumber = value => {
      return !isPlateNumber(value)
    }

  window.validUtil = {
    isMatch,
    isNotMatch,
    isNumbers,
    isNotNumbers,
    isInteger,
    isNotInteger,
    isIntegerPositive,
    isNotIntegerPositive,
    isGeneral,
    isNotGeneral,
    isChinese,
    isNotChinese,
    isChineses,
    isNotChineses,
    isGeneralWithChinese,
    isNotGeneralWithChinese,
    isAccount,
    isNotAccount,
    isPassword,
    isNotPassword,
    isIPv4,
    isNotIPv4,
    isMoney,
    isNotMoney,
    isEmail,
    isNotEmail,
    isMoblePhone,
    isNotMoblePhone,
    isPhone,
    isNotPhone,
    isCitizenId,
    isNotCitizenId,
    isZipCode,
    isNotZipCode,
    isBirthday,
    isNotBirthday,
    isURL,
    isNotURL,
    isUUID,
    isNotUUID,
    isPlateNumber,
    isNotPlateNumber
  }

})(window)
