(function($) {
	$(function() {
		$(".accordion").find("h3").click(function(){
			$(".accordion > div").not($(this).next()).removeClass("open");
			$(this).next().toggleClass("open");
		});
	});
}(jQuery));
