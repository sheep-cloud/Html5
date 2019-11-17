/*
  需求:
    1. 给 $ 添加4个工具方法
      1.1. min(a, b) :        返回较小的值
      1.2. max(c, d) :        返回较大的值
      1.3. leftTrim(str) :    去掉字符串左边的空格
      1.4. rightTrim(str) :   去掉字符串右边的空格
    2. 给jQuery对象 添加3个功能方法
      2.1. checkAll() :       全选
      2.2. unCheckAll() :     全不选
      2.3. reverseCheck() :   反选
 */

;(function () {
  // 1. 给 $ 添加4个工具方法
  $.extend({
    // 1.1. min(a, b) : 返回较小的值
    min: function (a, b) {
      return a < b ? a : b
    },
    // 1.2. max(c, d) : 返回较大的值
    max: function (a, b) {
      return a > b ? a : b
    },
    // 1.3. leftTrim(str) : 去掉字符串左边的空格
    leftTrim: function (str) {
      return str.replace(/^\s+/, '')
    },
    // 1.4. rightTrim(str) : 去掉字符串右边的空格
    rightTrim: function (str) {
      return str.replace(/\s+$/, '')
    }
  })

  // 2. 给jQuery对象 添加3个功能方法
  $.fn.extend({
    // 2.1. checkAll() : 全选
    checkAll: function () {
      this.prop('checked', true)
    },
    // 2.2. unCheckAll() : 全不选
    unCheckAll: function () {
      this.prop('checked', false)
    },
    // 2.3. reverseCheck() : 反选
    reverseCheck: function () {
      // this 是jQuery对象
      this.each(function () {
        // this 是dom元素
        this.checked = !this.checked
      })
    }
  })
})()