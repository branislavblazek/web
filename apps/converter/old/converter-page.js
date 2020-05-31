$(".myname").click(function(udal){
	udal.preventDefault();
	$("body").fadeOut('slow', function(){
		location.href = udal.target.href;
	})
})
function show() {
	$("#ull").slideToggle();	
	$("#upsymbol").toggle();
	$("#downsymbol").toggle();
};
var zao=document.getElementById("kolkozao").innerHTML;
function zaokruhli(value){
		var cislo=document.getElementById("kolkozao").innerHTML;
		cislo=parseFloat(cislo);
		if(value=="+"){cislo=cislo+1;document.getElementById("kolkozao").innerHTML=cislo;}
		else if(value=="-"){cislo =cislo-1;document.getElementById("kolkozao").innerHTML=cislo;}
		zao=cislo;
		return zao;
}
var odkazy = $("span[data-href]");
odkazy.on('click', function(e) {
	e.preventDefault();
	var odkaz = $(this).attr('data-href');
	var ele = document.getElementById(odkaz);
	var top = $(ele).offset().top;
	$('html, body').animate({scrollTop:top}, 'slow');	
});
$(window).on('load', function() {
	$('#status').fadeOut(); 
 $('#preloader').delay(350).fadeOut('slow');
 $('body').delay(350).css({'overflow':'visible'});
})
