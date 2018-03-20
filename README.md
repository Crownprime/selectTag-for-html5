## selectTag-for-html5
<br>
`1.0`<br>
这是一个轻量级的利用js模拟HTML中select标签的插件。<br>
还在为调节select标签的美观性和兼容性发愁吗？不妨试试这个简易的小插件。<br>
首先它的容量非常小，没有其他插件冗余功能。其次，你可以利用css3的语法自定义样式。<br>
`method`<br>
```html
//(1.
<link href="path/res/select.css" rel="stylesheet">
//请引入css文件确保基础样式
//*注意内部采用全局border-box样式

//(2.
//<div class="Select"></div>
//在需要的位置添加一个块元素

//(3.
<script src="path/jquery.js"></script>
//务必确保引入jQuery
<script src="path/res/select.js"></script>
//引入js文件
<script>
$('.Select').HtmlSelect({
	'width':'300px',
	'color':'rgb(1,1,1)',
	'li':[['default_text','default_value'],['option1_text','option1_value'],['option2_text','option2_value']]
})
</script>
//自定义你的样式
//你也可以在css文件中控制样式
```
