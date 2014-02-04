(function($) {
	$(function() {
		blockPadding();
		$(window).resize(blockPadding);
	});

	function blockPadding(){
		$("#main .block .content a, #footer .block .content a").each(function(){
			if ($(this).parents("#block-system-main").length &&
				$(this).parents("body.not-front").length)
				return;

			$(this).css({"padding-top":"0", "padding-bottom":"0"});
			var padding = ($(this).parent().parent().height() - $(this).height())/2;
			$(this).css({"padding-top":padding+"px", "padding-bottom":padding+"px"});
		});
	}
}(jQuery));