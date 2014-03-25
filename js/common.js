$(document).ready(function() {

    $(document).click(function() {
        $('.js-select-list').hide();
        $(".js-map-item").removeClass("is-active");
        $(".js-select").removeClass("is-active");
    });
    $('.js-marker').click(function(event){
    	$(".js-map-item").removeClass("is-active");
    	$(this).parent().addClass("is-active");
			event.stopPropagation();
		});
		$('.js-marker-link').click(function(event){
    	var shop = $(this).attr("data-shop");
    	$(".shops").hide();
    	$("."+shop).show();
    	event.stopPropagation();
		});
  // select
	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){
					if ($(this).hasClass("is-active")) {
						$(this).removeClass("is-active");
						select_list.slideUp("fast");
					}
					else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").hide();
						select_list.slideDown("fast");
						$(this).addClass("is-active");
					}
					event.stopPropagation();
				});
				select_list.find("li").click(function(event) {
					var id = $(this).attr("data-id");
					var text = $(this).text();
					$(this).parent().parent().find(".js-select-text").text(text);
					$(this).parent().parent().find(".js-select-input").val(id);
					$(this).parent().hide();
					$(this).parents(".js-select").removeClass("is-active");
					event.stopPropagation();
				});
			});
		}
		select();
		$('.js-select').click(function(event){
			event.stopPropagation();
		});


	//slider collection
	function sl_collection () {
		var el = $('.js-sl-collection');
		var prev = el.find('.collection__prev');
		prev.addClass('is-disabled');
		var next = el.find('.collection__next');
		var el_in = el.find('.collection__in');
		var item = el.find('.collection__block');
		item.first().addClass('is-active');
		prev.on('click', function(){
			next.removeClass('is-disabled');
			var act = el.find('.collection__block.is-active');
			var last = act.prev();
			if (last.length) {
				act.removeClass('is-active');
				act.prev().addClass('is-active');
				var item_width = act.prev().width();
				el_in.animate({scrollLeft: '-='+item_width+'px'}, 200, 'linear');
			};
			if (!last.prev().length) {
				$(this).addClass('is-disabled');
			};
		});
		next.on('click', function(){
			prev.removeClass('is-disabled');
			var act = el.find('.collection__block.is-active');
			var last = act.next().next().next();
			if (last.length) {
				act.removeClass('is-active');
				act.next().addClass('is-active');
				var item_width = act.next().width();
				el_in.animate({scrollLeft: '+='+item_width+'px'}, 200, 'linear');
			};
			if (!last.next().length) {
				$(this).addClass('is-disabled');
			};
		});
		$(window).resize(function(){
			prev.addClass('is-disabled');
			next.removeClass('is-disabled');
			item.first().addClass('is-active');
			el_in.scrollLeft(0);
		});
	}
	sl_collection();



	// gallery
	$(".js-slider").each(function(){
	      var slider_1 = $(this).find('.js-cycle-1');
	      var slider_2 = $(this).find('.js-cycle-2');
	      slider_1.cycle();
	      slider_2.cycle();

	      var slideshows = $(this).find('.js-cycle').on('gallery__next gallery__prev', function(e, opts) {
	          slideshows.not(this).cycle('goto', opts.currSlide);
	      });

	      slider_2.find(".cycle-slide").click(function(){
	          var index = slider_2.data('cycle.API').getSlideIndex(this);
	          slideshows.cycle('goto', index);
	      });
	  });
	function inser(){
		// you need to replace it with ajax call to server, now its just static html
		$( ".insertaftereme" ).after( $( "#ajax-template .inserted" ).clone() ); 
		$('.loading').hide();
	}
	//scroll to bottom
	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	      $('.loading').show();
	      setTimeout(inser, 1000);
	   }
	});

});

