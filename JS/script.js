$(window).on('load', function(){
	console.log();
	$("#hidded_apps").slideUp(0);
});
$("<img/>").attr('src', 'http://branislavblazek.sk/img/gallery/spartan_finish.jpg').on('load', function(){
	$(this).remove();
	$('body').css({overflow:'auto'});
	$('#preloader').fadeOut('slow');
});
$("#hello").ready(function(){
	$( "#app_more_click" ).click(function() {
		$("#app_more").toggleClass("dole");
		$("#hidded_apps").slideToggle("slow");
	});
});
$(window).on('load resize', function(){
	animacia();
	$('.box').css({height: $("#vzor").height() + 'px'});
	$('.box').each(function(index){
		var img = $(this).children().height(),
			par = $(this).height();
		if (img < par){
			console.log(index, par - img);
			$(this).children().css({marginTop: (par-img)/2});
			$(this).find('.over').css({height: $(this).find('.over').height() - (par-img)});
		};
	});
});
function animacia(){
	var $animation_elements = $('.anim_opacity'),
		$window = $(window),
		window_height = window.innerHeight,
		window_top_position = $window.scrollTop(),
		window_bottom_position = (window_top_position + window_height);
	$.each($animation_elements, function(){
		var $element = $(this),
			element_height = $element.outerHeight(),
			element_top_position = $element.offset().top,
			element_bottom_position = (element_height + element_top_position);
		if ((element_bottom_position >= window_top_position) && (element_top_position < window_bottom_position)){
			$element.addClass('animuj');
		}
	});
}
function scroll(){
	if ($(window).scrollTop() > 0){
		$('#header').addClass('scroll');
		$("#top").css({'opacity': 1});
	} else {
		$('#header').removeClass('scroll');
		$('#top').css({'opacity': 0});
	}
	var elements = ['hello', 'about', 'works', 'photos', 'contact'],
		scroll = {};
	scroll.now = $(window).scrollTop() + $('#header').outerHeight() + 30;
	elements.forEach(function(ele, index){
		scroll[ele] = $("#" + ele).offset().top;
		if (scroll.now >= $("#" + ele).offset().top){
			$('#menu li').removeClass('now');
			$('#menu li').eq(index).addClass('now');
		}
	});
};
function scrollTo(where){
	$('#header').toggleClass('ham');
	
	var ele = $('#' + where).offset().top,
		menu = $('#logo').css('height');
	menu = parseFloat(menu);
	$('body, html').animate({scrollTop:ele - menu - 30});
};