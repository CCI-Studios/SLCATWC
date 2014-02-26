(function($) {
	$(function() {
		$(".view-about a.expand").click(open);
	});

	function open(){
		var $container = $(this).parents(".views-row");

		if ($(window).width() > 540)
		{
			var position = $container.position();

			var $clone = $container.clone(true, true)
			.css({
				"top":(position.top)+"px",
				"left":(position.left)+"px",
				"height":"auto",
				"min-height":"950px",
				"position":"absolute"
			})
			.data("top", position.top)
			.data("left", position.left)
			.data("width", $container.width())
			.data("height", $container.height())
			.addClass("clone")
			.append($("<a href='#' class='close' title='Click to close'>Click to close</a>").click(close))
			.appendTo($container.parent())
			.animate({
				"top":"-5px",
				"left":"-5px",
				"width":"630px"
			}, function(){
				$clone.css({
					"position":"relative",
					"top":"0",
					"left":"0"
				});
				$container.parent().find(".views-row").not(this).css({
					"position":"absolute"
				});
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
	}

	function close() {
		var $container = $(this);
		if (!$container.hasClass("views-row"))
			$container = $(this).parents(".views-row.clone");

		$container.parent().find(".views-row").not(this).css({
			"position":"relative"
		});

		if (/iPad/i.test(navigator.userAgent))
			$(".view-about .views-row-2").hide();
		$container.css({
			"position":"absolute",
			"top":"-5px",
			"left":"-5px",
			"min-height":"0"
		})
		.animate({
			"top":$container.data("top")+"px",
			"left":$container.data("left")+"px",
			"width":$container.data("width")+"px",
			"height":$container.data("height")+"px"
		}, function(){
				$(this).remove();
				if (/iPad/i.test(navigator.userAgent))
					setTimeout(function(){$(".view-about .views-row-2").show();}, 1);
			})
		.find("> .content")
		.animate({
			"padding":"10px"
		})
		.find(".views-field-title")
		.animate({
			"font-size":"20px"
		});

		var offset = $container.offset();
		var offsetTop = offset.top + $container.data("top");
		if ($(window).scrollTop() + $(window).height() < offsetTop + $container.data("height")) {
			$("html, body").animate({
				"scrollTop":(offsetTop + $container.data("height") - $(window).height())+"px"
			});
		}

		return false;
	}

}(jQuery));