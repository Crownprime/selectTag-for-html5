# selectTag-for-html5

_a simple plug-ins_

## `1.0`

这是一个轻量级的利用js模拟HTML中select标签的插件。<br>
还在为调节select标签的美观性和兼容性发愁吗？不妨试试这个简易的小插件。<br>
首先它的容量非常小，没有其他插件冗余功能。其次，你可以利用css3的语法自定义样式。

### `method`

1. include the stylesheet on `<head>`.<br>

_* the stylesheet use globe `border-box`_

```html
<head>
<link href="path/res/select.css" rel="stylesheet">
</head>
```

2.add a tag on someplace where you need and hava a 'Select' class value.

```html
<div class="Select"></div>
```

3.include the js files with jQuery in the front.

```html
<script src="path/jquery.js"></script>
<script src="path/res/select.js"></script>
```

4.DIY your stylesheet.

```javascript
$('.Select').HtmlSelect({
	'width':'300px',
	'color':'rgb(255,255,255)',
	'li':[['default_text','default_value'],['option1_text','option1_value'],['option2_text','option2_value']]
})
```
