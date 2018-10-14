/*
    功能说明：
        1. 鼠标移入显示,移出隐藏
            目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
        2. 鼠标移动切换二级导航菜单的切换显示和隐藏
        3. 输入搜索关键字, 列表显示匹配的结果
        4. 点击显示或者隐藏更多的分享图标
        5. 鼠标移入移出切换地址的显示隐藏
        6. 点击切换地址tab
        7. 鼠标移入移出切换显示迷你购物车
        8. 点击切换产品选项 (商品详情等显示出来)
        9. 点击向右/左, 移动当前展示商品的小图片
        10. 当鼠标悬停在某个小图上,在上方显示对应的中图
        11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

/*
    1. 对哪个/些元素绑定什么监听？
    2. 对哪个/些元素进行什么dom操作？
 */
$(function () {
    showHide()
    hoverSubMenu()
    search()
    share()
    address()
    addressTabs()
    minicart()
    productTabs()
    moveMinImg()

    /**
     * 9. 点击向右/左, 移动当前展示商品的小图片
     */
    function moveMinImg() {
        var $as = $('#preview > h1 > a')
        var $backward = $as.first()
        var $forward = $as.last()
        var $ul = $('#icon_list')
        const SHOW_COUNT = 5 // 显示的图片总数
        var imgCount = $ul.children('li').length
        var moveCount = 0 // 移动的次数（点击向右为正，向左为负）
        var liWidth = $ul.children(':first').width() // 图片宽度

        // 初始化更新，向右按钮
        if (imgCount > SHOW_COUNT) {
            $forward.attr('class', 'forward')
        }

        // 给向右按钮绑定监听
        $forward.click(function () {
            // 判断是否需要移动，如果不需要直接结束
            if (moveCount === imgCount - SHOW_COUNT) {
                return
            }
            moveCount++

            // 更新向左按钮
            $backward.attr('class', 'backward')
            // 更新向右按钮
            if (moveCount === imgCount - SHOW_COUNT) {
                $forward.attr('class', 'forward_disabled')
            }
            // 移动ul
            $ul.css({
                left: -moveCount * liWidth
            })
        })

        // 给向左按钮绑定监听
        $backward.click(function () {
            // 判断是否需要移动，如果不需要直接结束
            if (moveCount === 0) {
                return
            }
            moveCount--

            // 更新向右按钮
            $forward.attr('class', 'forward')
            // 更新相左按钮
            if (moveCount === 0) {
                $backward.attr('class', 'backward_disabled')
            }
            // 移动ul
            $ul.css({
                left: -moveCount * liWidth
            })
        })
    }

    /**
     * 8. 点击切换产品选项 (商品详情等显示出来)
     */
    function productTabs() {
        var $lis = $('#product_detail > ul > li')
        var $contents = $('#product_detail > div:gt(0)')
        var currIndex = 0
        $lis.click(function () {
            // 隐藏当前已显示内容的contents
            $lis[currIndex].className = ''
            $($contents[currIndex]).hide()
            // 显示当前对应的content
            this.className = 'current'
            var index = $(this).index()
            $contents.eq(index).show()

            // 更新下标
            currIndex = index
        })
    }

    /**
     * 7. 鼠标移入移出切换显示迷你购物车
     */
    function minicart() {
        $('#minicart').hover(function () {
            this.className = 'minicart'
            $(this).children(':last').show()
        }, function () {
            this.className = ''
            $(this).children(':last').hide()
        })
    }

    /**
     * 6. 点击切换地址tab
     */
    function addressTabs() {
        var $lis = $('#store_tabs > li')
        var currIndex = 0
        $lis.click(function () {
            $lis[currIndex].removeAttribute('class')
            var index = $(this).index()
            $lis[index].className = 'hover'

            // 更新下标
            currIndex = index
        })
    }

    /**
     * 5. 鼠标移入移出切换地址的显示隐藏
     */
    function address() {
        $('#store_select')
            .hover(function () {
                $(this).children(':gt(0)').show()
            }, function () {
                $(this).children(':gt(0)').hide()
            })
            .children(':last')
            .click(function () {
                // this 已改变
                $(this).parent().children(':gt(0)').hide()
            })
    }

    /**
     * 4. 点击显示或者隐藏更多的分享图标
     */
    function share() {
        var isOpen = false // 标识当前是否显示更多（默认不显示）
        var $shareMore = $('#shareMore')
        var $parent = $shareMore.parent() // div标签
        var $as = $shareMore.prevAll('a:lt(2)') // 查找之前的标签（倒着找）
        var $b = $shareMore.children()

        $shareMore.click(function () {
            if (isOpen) {
                // 关闭
                $parent.css('width', 155)
                $as.hide()
                $b.removeClass('backword')
            } else {
                // 打开
                $parent.css('width', 200)
                $as.show()
                $b.addClass('backword')
            }
            isOpen = !isOpen
        })
    }

    /**
     * 3. 输入搜索关键字, 列表显示匹配的结果
     */
    function search() {
        // 绑定多个监听事件
        $('#txtSearch')
            .on('keyup focus', function () {
                // 如果输入框有文本才显示列表
                if (this.value.trim()) {
                    $('#search_helper').show()
                }
            })
            .blur(function () {
                // 隐藏列表
                $('#search_helper').hide()
            })
    }

    /**
     * 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
     */
    function hoverSubMenu() {
        $('#category_items > div').hover(function () {
            $(this).children(':last').show()
        }, function () {
            $(this).children(':last').hide()
        })
    }

    /**
     * 1. 鼠标移入显示，移出隐藏
     *  目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
     */
    function showHide() {
        $('[name="show_hide"]').hover(function () {
            // 显示
            var id = this.id + '_items'
            $('#' + id).show()
        }, function () {
            // 隐藏
            var id = this.id + '_items'
            $('#' + id).hide()
        })
    }

})