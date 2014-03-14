$(document).ready(function() {

    $(document).click(function() {
        $('.js-select-list').hide();
    });

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

});