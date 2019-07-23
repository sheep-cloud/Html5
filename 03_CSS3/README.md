# CSS3

## 1. 选择器

### 1.1. 基本选择器

```ini
通配符选择器:				*
元素选择器:				body(任何一个HTML元素)
类选择器:				.
ID选择器:				 #
后代选择器:				空格
选择器的分组:				,

基本选择器的扩展:
	子元素选择器:			> 不同于后代选择器, 子元素选择器只能用来选择直接后代
	相邻兄弟选择器:		+ 只匹配紧跟着的兄弟元素
	通用兄弟选择器:		~ 匹配后面的兄弟元素(不需要紧跟)
```

### 1.2. 属性选择器

```ini
存在和值属性选择器:
	[attr]:				该选择器选择包含 attr 属性的所有元素, 不论 attr 的值为何
	[attr=val]:			该选择器仅选择 attr 属性被赋值为 val 的所有元素
	[attr~=val]:		该选择器仅选择 attr 属性的值（以空格间隔出多个值）中有包含 val 值的所有元素, 比如位于被空格分隔的多个类(class)中的一个类
子串值属性选择器:
	[attr|=val]:		选择attr属性的值以val(包括val)或val-开头的元素
	[attr^=val]:		选择attr属性的值以val开头(包括val)的元素。
	[attr$=val]:		选择attr属性的值以val结尾(包括val)的元素。
	[attr*=val]:		选择attr属性的值中包含字符串val的元素。
```

## 1.3. 伪类与伪元素选择器

#### 1.3.1. 链接伪类

```ini
锚点伪类:
	a:link:				表示作为超链接, 并指向一个未访问的地址的所有锚
	a:visited:			表示作为超链接, 并指向一个已访问的地址的所有锚
目标伪类:
	:target:			代表一个特殊的元素, 它的id是URI的片段标识符
```

#### 1.3.2. 动态伪类

```ini
动态伪类:
	:hover:				悬浮到目标元素上
	:active:			点击下去
```

#### 1.3.3. 表单伪类

```ini
表单伪类:
	input:enabled
	input:disabled
	input:checked
	input:focus
```

#### 1.3.4. 结构性伪类

```ini
结构性伪类:
	ele:nth-child(n):	找到选中的第n个元素, 并且这个元素必须是ele
	ele:th-of-type(n):	找到选中的第n个是ele的元素
```

#### 1.3.5. 伪元素

```ini
伪元素:
	:before:
	:after:
	::first-letter
	::section
```

## 2. 自定义字体

```css
  /*
    @font-face: 允许网页开发者为其网页指定在线字体. 通过这种作者自备字体的方式, 可以消除对用户电脑字体的依赖
      font-family: 所指定的自提明将会被用于font的font-family属性
      src: 字体资源
  */
```

## 3. 新的UI方案

### 3.1. 溢出显示省略号

```css
  /*
    溢出显示省略号: 包裹区域必须不能让子元素撑开
  */  
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
```

## 4. 过渡

## 5. 变形

## 6. 动画

## 7. 布局扩展