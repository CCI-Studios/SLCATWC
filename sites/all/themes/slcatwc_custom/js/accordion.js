(function($) {
	$(function() {
		$(".accordion").find("h3").click(function(){
			$(".accordion > h3").not($(this)).removeClass("open");
			$(".accordion > div").not($(this).next()).removeClass("open");
			$(this).toggleClass("open").next().toggleClass("open");
		});
	});
}(jQuery));
