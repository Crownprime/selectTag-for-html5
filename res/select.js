(function($){
	$.fn.HtmlSelect = function(options){
		var settings = $.extend({
			'width': '100%',
			'height': '40px',
			'margin': '0',
			'padding': '0 10px 0 10px',
			'color': 'black',
			'background_color':'transparent',
			'border_color': 'black',
			'border_width': '1px',
			'border_radius': '3px',
			'li':[['a','a'],['b','b']],
			'ul_background_color':'white',
			'hover_color':'white',
			'hover_background_color':'rgba(0,0,0,.3)',
		},options);

		var ul_height;

		function CalXp(str){
			return parseInt(str.replace("px",""));
		}

		return this.each(function(){
			$(this).html("<p>"+settings.li[0][0]+"</p><input type=\"hidden\" name=\"select\" value=\""+settings.li[0][1]+"\" /><ul class=\"Optional\"></ul><i class=\"fa fa-angle-left\"></i>").css({
			'width': settings.width,
			'height': settings.height,
			'margin': settings.margin,
			'padding': settings.padding,
			'color': settings.color,
			'border': settings.border_width+' '+settings.border_color+' solid',
			'border-radius': settings.border_radius
			}).attr('data-state','closed');


			$('.Select ul').css({
				"top": (CalXp(settings.height)-CalXp(settings.border_width))+'px',
				'background-color':settings.ul_background_color,
			});

			$('.Select i').css({
				"line-height": (CalXp(settings.height)-CalXp(settings.border_width)*2)+'px',
			});

			$('.Select p').css({
				"line-height": (CalXp(settings.height)-CalXp(settings.border_width)*2)+'px',
			})


			for(var i=0;i<settings.li.length;i++){
				$('.Optional').html(function(){
					return $(this).html()+'<li data-value=\"'+settings.li[i][1]+'\">'+settings.li[i][0]+'</li>';
				});
			}

			ul_height = $('.Optional').height();
			$('.Optional').height(0);

			$(this).click(function(){
				if($(this).attr('data-state')=='closed'){
					$('.Select ul').css({
						"opacity":"1",
						"visibility":"visible"
					}).animate({
						height: 60,
					},200,function(){
						$('.Select').attr('data-state','opened');
					});
					$('.Select i').css({
						'transform':'rotate(-90deg)',
					});
				}
			});

			$('body').click(function(){
				console.log('x');
				if($('.Select').attr('data-state')=='opened'){
					$('.Select ul').animate({
						"height": "0",
					},200,function(){
						$('.Select ul').css({
							"opacity":"0",
							"visibility":"hidden"
						})
						$('.Select').attr('data-state','closed');
						$('.Select i').css({
						'transform':'rotate(0)',
						});
					});
				}
			});

			$('.Select li').mouseenter(function(){
				$(this).css({
					'color':settings.hover_color,
					'background-color':settings.hover_background_color,
				});
			}).mouseleave(function(){
				$(this).css({
					'color':settings.color,
					'background-color':settings.background_color,
				})
			})


			$('.Select ul li').click(function(e){
				$('.Select p').text($(this).text());
				$('.Select input').val($(this).attr("data-value"));
			});
		});
	};
})(window.jQuery);