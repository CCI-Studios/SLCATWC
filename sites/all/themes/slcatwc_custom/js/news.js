(function($) {
	$(function() {
		$(".view-news a.expand").click(function(){
			var $container = $(this).parents(".views-row");

			if ($(window).width() > 540)
			{
				var position = $container.position();

				var $clone = $container.clone(true, true)
				.css({
					"top":(position.top+5)+"px",
					"left":(position.left+5)+"px"
				})
				.data("top", position.top+5)
				.data("left", position.left+5)
				.data("width", $container.width())
				.data("height", $container.height())
				.addClass("clone")
				.append($("<a href='#' class='close' title='Click to close'>Click to close</a>").click(close))
				.appendTo($container.parent())
				.animate({
					"top":"0",
					"left":"0",
					"width":"630px"
				})
				.css({
					"height":"auto",
					"min-height":"950px"
				});
				$clone.find("> .content")
				.animate({
					"padding":"30px"
				});
				$clone.find(".views-field-title")
				.css({
					"font-size":"20px"
				})
				.animate({
					"font-size":"28px"
				});
				$clone.find("a.expand").remove();

				var offset = $container.parent().offset();
				if ($(window).scrollTop() > offset.top){
					$("html, body").animate({
						"scrollTop":offset.top+"px"
					});
				}
			}
			else
			{
				$container.toggleClass("open");
			}

			return false;
		});

		$(".view-news .views-row").hover(function(){
			$(this).find(".body-content").dotdotdot({watch:true});
		});
	});

	function close() {
		var $container = $(this).parents(".views-row.clone");
		$container.animate({
			"top":$container.data("top")+"px",
			"left":$container.data("left")+"px",
			"width":$container.data("width")+"px",
			"height":$container.data("height")+"px"
		}, {complete:function(){
				$(this).remove();
			}})
		.css({
			"min-height":"0"
		})
		.find("> .content")
		.animate({
			"padding":"10px"
		})
		.find(".views-field-title")
		.animate({
			"font-size":"20px"
		});

		return false;
	}

}(jQuery));