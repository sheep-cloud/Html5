# CSS2.1

## 1. 复习

```ini
1. 定位参照与谁来定位?
	没有定位: 包含块
	相对定位: 元素本来的位置
	绝对定位: 包含块; 
		如果最近的祖先元素中存在定位元素, 则这个定位元素就是包含块;
		如果没有, 包含块为初始包含块
	固定定位: 视口

2. 什么是初始包含块?
	是一个视窗大小的矩形, 不等于视窗

3. 默认值
	left, top, right, bottom, width, height	: auto 通过浏览器计算边缘的位置
	margin, padding							: 0
    border-width							: medium 中等边框

4. 百分比参照于谁?
	width, margin, padding, left	: 包含块的width
	height, top						: 包含块的height
	
5. 浮动
	浮动提升半层
	
6. 三列布局
	6.1. 三列布局需求
        1. 两边固定, 中间列自适应
        2. 中间列要完整显示
        3. 中间列要优先显示
        实现方式: 定位, 浮动, 圣杯, 双飞翼
	6.2. 圣杯布局, 双飞翼布局的对比
          1. 两种布局方式都是把主列放在文档流最前面, 使主列优先加载
          2. 两种布局方式在实现上也有相同之处, 都是让三列浮动, 然后通过负外边距形成三列布局
          3. 两种布局方式的不同之处在于如何处理中间主列的位置:
            圣杯布局:   利用父容器的左, 右内边距 + 两个从列相对定位
            双飞翼布局: 把主列嵌套在一个新的父级块中利用主列的左, 右边距进行布局调整
	
7. margin为负值(margin不影响元素的位置)
	负值: 将元素的边界往里放
	正值: 将元素的边界往外扩
	
8. 伪等高布局
    padding-bottom: 10000px;
    margin-bottom: -10000px;

9. 怎么使用决定定位来模拟固定定位?
	1. 禁止系统滚动条
	2. 将滚动条加给body
	3. 让body的尺寸变为视口的尺寸
	
10. 什么是stickyFooter?
	经典的"粘连"footer布局.
	
	有一块内容<main>
		当<main>的高度足够长的时候, <footer>应该紧跟在<main>元素的后面;
		当<main>元素比较短的时候(比如小于屏幕的高度), 期望这个<footer>元素能够"粘连"在屏幕的底部.
		
11. BFC
	11.1. 什么是BFC?
		BFC(Block formatting context)直译为"块级格式化上下文". 它是一个独立的渲染区域, 只有Block-level box参与, 它规定了内部的Block-level Box如何布局, 并且与这个区域外部毫不相干.
		
	11.2. BFC布局规则
		1. 内部的Box会在垂直方向, 一个接一个的放置
		2. BFC的区域不会与float box重叠
		3. 内部的Box垂直方向的距离由margin决定. 属于同一个BFC的两个相邻Box的margin会发生重叠
		4. 计算BFC的高度时, 浮动元素也参与计算. (清除浮动 haslayout)
		5. BFC就是页面上的一个隔离的独立容器, 容器里面的子元素不会影响到外面的元素. 反之也如此.
		
	11.3. BFC什么时候出现(哪些元素会生成BFC)?
		1. 根元素
		2. float属性不为none
		3. position为absolute或fixed
		4. overflow不为visible
		5. display为inline-block,table-cell, table-caption,flex, inline-flex.
		
12. 清除浮动: 让浮动的子元素可以撑开父级的高度
	1. 给父级加高度: 扩展性不好
	2. 开启BFC: ie6, 7不支持
	3. br标签: 违反了结构, 行为, 样式相分离的原则; ie6不支持
	4. 空标签: 违反了结果, 行为, 样式相分离的原则; ie6下元素的最小高度为19px, 可以尝试给元素的fontsize设为0 => 2px
	5. 伪元素 + 开启haslayout: ie6, 7不支持伪元素, 所以要额外的去开启haslayout
```

