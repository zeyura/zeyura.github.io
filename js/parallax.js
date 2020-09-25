/* 11.17 zy
* https://www.youtube.com/watch?time_continue=2&v=e2zXsRE0ick
* контейнер маст хейв атрибут data-parallax-image с адресом картинки паралакса
* */
(function($) {

	$.fn.myParallax = function( options ) {

		var settings = $.extend({
			"speed" : "15", // скорость параллакса
			"height": "2"   // масштаб увеличения картинки в паралаксе
		}, options);

		return this.each(function() {

			var ths = $(this);

			ths
					.css({
						"min-height" : "300px",
						"position" : "relative",
						"overflow" : "hidden"
					})
					.wrapInner("<div class='parallax-content' style='position:relative;z-index:1'>")
					.prepend("<div class='image-parallax' style='background-image:url(" + ths.data('parallax-image') + ");background-size:cover;background-position:top;position:absolute;top:0;width:100%'>");

			function parallaxInit() {

				var pheight = ths.height();

				ths.children(".image-parallax").css({
					"height" : pheight * settings.height,
					"top" : -pheight
				});

				var st = $(document).scrollTop();
				var sp = ths.offset().top - $(window).height();
				var ob = ths.offset().top + pheight;
				var sr = st-sp;

				if(st >= sp && st <= ob) {

					ths.children(".image-parallax").css({
						"transform" : "translate3d(0px, " + sr /settings.speed + "%, .01px)",
						"-webkit-transform" : "translate3d(0px, " + sr /settings.speed + "%, .01px)"
					});

				};

			};

			$(window).scroll(function() {
				parallaxInit();
			}).load(function() {
				parallaxInit();
			});
			$("*").resize(function() {
				parallaxInit();
			});

		});

	};

})(jQuery);