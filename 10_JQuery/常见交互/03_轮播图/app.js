/*
  功能说明:
    1. 点击向右/左的图标, 平滑切换到上/下一页
    2. 无限循环切换: 第一页的上一页为最后页, 最后一页的下一页为第一页
    3. 每间隔2s自动滑动到下一页
    4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后, 又开始自动切换
    5. 切换页面时, 下面的圆点也同步更新
    6. 点击圆点图标切换到对应页

    bug: 快速点击时, 翻页不正常
 */
$(function () {
  var $container = $('#container'),
      $list = $('#list'),
      $points = $('#pointsDiv > span'),
      $prev = $('#prev'),
      $next = $('#next')

  var PAGE_WIDTH = 600, // 图片的宽度
      TIME = 400, // 翻页的持续时间
      ITEM_TIME = 20 // 单元移动的间隔时间

  var imgCount = $points.length, // 图片个数
      index = 0, //当前显示图片的下标(从0开始到imgCount-1)
      moving = false // 标识是否正在翻页（默认没有）

  // 1. 点击向右/左的图标, 平滑切换到上/下一页
  $next.click(function () {
    // 平滑翻到下一页
    nextPage(true)
  })

  $prev.click(function () {
    // 平滑翻到上一页
    nextPage(false)
  })

  // 3. 每间隔2s自动滑动到下一页
  var intervalId = setInterval(function () {
    nextPage(true)
  }, 2000)

  // 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后, 又开始自动切换
  $container.hover(function () {
    // 清除定时器
    clearInterval(intervalId)
  }, function () {
    // 启动定时器
    intervalId = setInterval(function () {
      nextPage(true)
    }, 2000)
  })

  // 6. 点击圆点图标切换到对应页
  $points.click(function () {
    // 目标页的下标
    var targetIndex = $(this).index()
    // 只有当点击的不是当前页的圆点时才翻页
    if (targetIndex !== index) {
      nextPage(targetIndex)
    }
  })


  /**
   * 平滑翻页
   * @param isNext true: 下一页, false: 上一页, 数值: 指定下标页
   */
  function nextPage(isNext) {
    /*
      总的时间: TIME = 400
      单元移动的间隔时间: ITEM_TIME = 20
      总偏移量: offset
      单元移动的偏移量: itemOffset = offset / (TIME / ITEM_TIME)

      启动循环定时器不断更新$list的left, 到达目标处停止定时器
     */

    // 如果正在翻页, 直接结束
    if (moving) { // 已经正在翻页中
      return
    }
    moving = true // 标识正在翻页

    // 计算总的偏移量: offset
    var offset
    if (typeof isNext === 'boolean') {
      offset = isNext ? -PAGE_WIDTH : PAGE_WIDTH // 向左边或者向右偏移
    } else if (typeof isNext === 'number') {
      offset = -(isNext - index) * PAGE_WIDTH
    }
    // 计算单元移动的偏移量
    var itemOffset = offset / (TIME / ITEM_TIME)
    // 得到当前left值
    var currLeft = $list.position().left // 相对于父元素左上角的坐标
    // 计算出目标处的left值
    var targetLeft = currLeft + offset

    // 自动循环定时器不断更新$list的left, 到达目标处停止定时器
    var intervalId = setInterval(function () {
      // 计算出最新的currLeft
      currLeft += itemOffset
      if (currLeft === targetLeft) {
        // 到达目标处
        clearInterval(intervalId)

        // 标识翻页停止
        moving = false

        // 2. 无限循环切换: 第一页的上一页为最后页, 最后一页的下一页为第一页

        // 如果到达了最右边的图片（1.jpg）, 跳转到最左边第2张图片（1.jpg）
        if (targetLeft === -(imgCount + 1) * PAGE_WIDTH) {
          currLeft = -PAGE_WIDTH
        } else if (currLeft === 0) {
          // 如果到达了最左边的图片（5.jpg）, 跳转到最右边的第2张图片（5.jpg）
          currLeft = -imgCount * PAGE_WIDTH
        }
      }
      // 设置left
      $list.css('left', currLeft)
    }, ITEM_TIME)

    // 5. 切换页面时, 下面的圆点也同步更新
    updatePoints(isNext)
  }

  /**
   * 更新圆点
   * @param isNext true: 下一页, false: 上一页, 数值: 指定下标页
   */
  function updatePoints(isNext) {
    // 计算出目标圆点的下标
    var targetIndex = 0 // [0, imgCount - 1]
    if (typeof isNext === 'boolean') {
      if (isNext) {
        targetIndex = index + 1
        if (targetIndex === imgCount) { // 此时看到的是1.jpg ---> 第一个圆点
          targetIndex = 0
        }
      } else {
        targetIndex = index - 1
        if (targetIndex === -1) { // 此时看到的是5.jpg ---> 第5个圆点
          targetIndex = imgCount - 1
        }
      }
    } else if (typeof isNext === 'number') {
      targetIndex = isNext
    }

    // 将当前index的<span>的class移除
    $points.eq(index).removeClass('on')

    // 给目标圆点添加class="on"
    $points.eq(targetIndex).addClass('on')

    // 将index更新为targetIndex
    index = targetIndex
  }

})