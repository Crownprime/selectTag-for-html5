## selectTag-for-html5
<br>
`1.0`<br>
����һ��������������jsģ��HTML��select��ǩ�Ĳ����<br>
����Ϊ����select��ǩ�������Ժͼ����Է����𣿲�������������׵�С�����<br>
�������������ǳ�С��û������������๦�ܡ���Σ����������css3���﷨�Զ�����ʽ��<br>
`method`<br>
```html
//(1.
<link href="path/res/select.css" rel="stylesheet">
//������css�ļ�ȷ��������ʽ
//*ע���ڲ�����ȫ��border-box��ʽ

//(2.
//<div class="Select"></div>
//����Ҫ��λ�����һ����Ԫ��

//(3.
<script src="path/jquery.js"></script>
//���ȷ������jQuery
<script src="path/res/select.js"></script>
//����js�ļ�
<script>
$('.Select').HtmlSelect({
	'width':'300px',
	'color':'rgb(1,1,1)',
	'li':[['default_text','default_value'],['option1_text','option1_value'],['option2_text','option2_value']]
})
</script>
//�Զ��������ʽ
//��Ҳ������css�ļ��п�����ʽ
```
