function ValidUtil() {
    /** 数字 */
    this.NUMBERS = new RegExp('^([+-]?)\\d*\\.?\\d+$')
    /** 整数 */
    this.INTEGER = new RegExp('^-?\\d+$')
    /** 正整数 */
    this.INTEGER_POSITIVE = new RegExp('^[1-9]\\d*$')
    /** 英文字母 、数字和下划线 */
    this.GENERAL = new RegExp('^\\w+$')
    /** 单个中文汉字 */
    this.CHINESE = new RegExp('[\u4E00-\u9FFF]')
    /** 中文汉字 */
    this.CHINESES = new RegExp('[\u4E00-\u9FFF]+')
    /** 中文字、英文字母、数字和下划线 */
    this.GENERAL_WITH_CHINESE = new RegExp('^[\u4E00-\u9FFF\\w]+$')
    /** 用户名 */
    this.ACCOUNT = new RegExp('^[a-z0-9]{3,16}$')
    /** 密码 */
    this.PASSWORD = new RegExp('^.{6,18}$')
    /** IP v4 */
    this.IPV4 = new RegExp('\\b((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\b')
    /** 货币 */
    this.MONEY = new RegExp('^(\\d+(?:\\.\\d+)?)$')
    /** 邮箱 */
    this.EMAIL = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])')
    /** 移动电话/手机号码 */
    this.MOBILE_PHONE = new RegExp('^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$')
    /** 固定电话/座机 */
    this.PHONE = new RegExp('^(\\d{3,4}-?)?\\d{7,9}$')
    /** 18 位身份证号码 */
    this.CITIZEN_ID = new RegExp('[1-9]\\d{5}[1-2]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}(\\d|X|x)')
    /** 邮编 */
    this.ZIP_CODE = new RegExp('\\d{6}')
    /** 生日 */
    this.BIRTHDAY = new RegExp('^(\\d{2,4})([/\\-\\.年]?)(\\d{1,2})([/\\-\\.月]?)(\\d{1,2})日?$')
    /** URL */
    this.URL = new RegExp('(https://|http://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?')
    /** UUID */
    this.UUID = new RegExp('^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$')
    /** 不带横线的 UUID */
    this.UUID_SIMPLE = new RegExp('^[0-9a-z]{32}$')
    /** 中国车牌号码 */
    this.PLATE_NUMBER = new RegExp('^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$')
}

const validUtil = new ValidUtil()

/**
 * 通过正则表达式校验
 *
 * @param regexp 正则表达式 ^: 开头 $: 结尾
 * @param value 值
 * @returns {boolean} 满足返回 true，不满足返回 false
 */
ValidUtil.prototype.isMatch = function (regexp, value) {
    if (!regexp || !value) {
        return false
    }
    return new RegExp(regexp).test(value)
}

ValidUtil.prototype.isNumbers = function (value) {
    return this.isMatch(this.NUMBERS, value)
}
ValidUtil.prototype.isInteger = function (value) {
    return this.isMatch(this.INTEGER, value)
}
ValidUtil.prototype.isIntegerPositive = function (value) {
    return this.isMatch(this.INTEGER_POSITIVE, value)
}
ValidUtil.prototype.isGeneral = function (value) {
    return this.isMatch(this.GENERAL, value)
}
ValidUtil.prototype.isChinese = function (value) {
    return this.isMatch(this.CHINESE, value)
}
ValidUtil.prototype.isChineses = function (value) {
    return this.isMatch(this.CHINESES, value)
}
ValidUtil.prototype.isGeneralWithChinese = function (value) {
    return this.isMatch(this.GENERAL_WITH_CHINESE, value)
}
ValidUtil.prototype.isAccount = function (value) {
    return this.isMatch(this.ACCOUNT, value)
}
ValidUtil.prototype.isPassword = function (value) {
    return this.isMatch(this.PASSWORD, value)
}
ValidUtil.prototype.isIPv4 = function (value) {
    return this.isMatch(this.IPV4, value)
}
ValidUtil.prototype.isMoney = function (value) {
    return this.isMatch(this.MONEY, value)
}
ValidUtil.prototype.isEmail = function (value) {
    return this.isMatch(this.EMAIL, value)
}
ValidUtil.prototype.isMoblePhone = function (value) {
    return this.isMatch(this.MOBILE_PHONE, value)
}
ValidUtil.prototype.isPhone = function (value) {
    return this.isMatch(this.PHONE, value)
}
ValidUtil.prototype.isCitizenId = function (value) {
    return this.isMatch(this.CITIZEN_ID, value)
}
ValidUtil.prototype.isZipCode = function (value) {
    return this.isMatch(this.ZIP_CODE, value)
}
ValidUtil.prototype.isBirthday = function (value) {
    return this.isMatch(this.BIRTHDAY, value)
}
ValidUtil.prototype.isURL = function (value) {
    return this.isMatch(this.URL, value)
}
ValidUtil.prototype.isUUID = function (value) {
    return this.isMatch(this.UUID, value) || this.isMatch(this.UUID_SIMPLE, value)
}
ValidUtil.prototype.isPlateNumber = function (value) {
    return this.isMatch(this.PLATE_NUMBER, value)
}