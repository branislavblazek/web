$(document).ready(function(){
    $(".click").click(function(){
        $("#show").toggle();
        $("#hide").toggle();
        $("#vyber").slideToggle();
    });
	var cl, el;
	$("#vyber button").click(function(e){
		if ($(e.target).attr('class') !== 'check'){
			$("button").removeClass('check');
			$(e.target).addClass('check');
		}
	});
    vypln();
	vykresli();
});
String.prototype.removeDiacritics = function() {
    var diacritics = [
        [/[\300-\306]/g, 'A'],
        [/[\340-\346]/g, 'a'],
        [/[\310-\313]/g, 'E'],
        [/[\350-\353]/g, 'e'],
        [/[\314-\317]/g, 'I'],
        [/[\354-\357]/g, 'i'],
        [/[\322-\330]/g, 'O'],
        [/[\362-\370]/g, 'o'],
        [/[\331-\334]/g, 'U'],
        [/[\371-\374]/g, 'u'],
        [/[\321]/g, 'N'],
        [/[\361]/g, 'n'],
        [/[\307]/g, 'C'],
        [/[\347]/g, 'c'],
    ];
    var s = this;
    for (var i = 0; i < diacritics.length; i++) {
        s = s.replace(diacritics[i][0], diacritics[i][1]);
    }
    return s;
}
function vypln(){
    if (screen.width > 751){
        var infoHe = $(".top").outerHeight(true);
        var infoHe2 = $(".bottom").css('height');
        infoHe = parseInt(infoHe);
        infoHe2 = parseInt(infoHe2);
        $(".logo").css({height: infoHe+infoHe2+1});
        $(".text-prot").text('protonóve číslo');
        $(".text-elek").text('elektronegativita');
        $(".text-atom").text('atómova hmotnosť');
    } else {
        $(".text-prot").text('prot. číslo');
        $(".text-elek").text('elektro');
        $(".text-atom").text('atóm. hmot');
		$(".logo").css({height:"auto"});
    }
};
function menu(){
	var sad = $(window).scrollTop();
	var das = $("#menu").outerHeight();;
	if (sad > das){
		$("#menu").addClass("fix");
	} else {
		$("#menu").removeClass("fix");
	}
	vykresli();
}
var q,w,e,r,t,z,u,i;
function vytvor(a,b,c,d,e,f,g,h){
    $("#content").append('<div class="prvok tento"><div class="logo">'+a+'</div><div class="top"><span class="sknazov">'+b+'</span>&nbsp;&nbsp;&nbsp;<span class="latnazov">'+c+'</span></div><table class="bottom"><tr><td class="text-prot"></td><td class="text-elek"></td><td class="text-atom"></td><td class="skupenstvo">'+g+'</td></tr><tr><td class="proton">'+d+'</td><td class="negativita">'+e+'</td><td class="atomova">'+f+'</td><td class="seria">'+h+'</td></tr></table><div style="clear:both"></div></div>');
	vypln();
};
for (var data in prvky ){
	t++
    q = prvky[data][0];
    w = prvky[data][1];
    e = prvky[data][2];
    r = prvky[data][3];
    t = prvky[data][4];
    z = prvky[data][5];
    u = prvky[data][6];
    i = prvky[data][7];
    vytvor(q,w,e,r,t,z,u,i);
}
function find(value){
	value = value.toLowerCase().removeDiacritics();
	var input = value;
	console.log(input);
	var find;
	var filter = $('.check').attr('id');
	find = document.getElementsByClassName(filter);
	for (var v = 0;v< find.length;v++){
		if (find[v].innerHTML.removeDiacritics().indexOf(value) > -1){
			$(find).eq(v).closest('.prvok').slideDown().addClass("tento");
		} else {
			$(find).eq(v).closest('.prvok').slideUp().removeClass("tento");
		}
	};
	pocitaj();
}
function pocitaj(){
	$("#res").text($(".tento").length);
}
function vykresli(){
	var v1 = $("#menu").outerHeight();
	var v2 = $("#foot").outerHeight();
	var v3 = window.innerHeight;
	v1 = parseFloat(v1);
	v2 = parseFloat(v2);
	v3 = parseFloat(v3);
	var val1 = v3 - ( v2 + v1);
	$("#content").css({minHeight: val1+'px'});
}
$(window).on('load', function() {
	$('#status').fadeOut(); 
 	$('#preloader').delay(350).fadeOut('slow');
 	$('body').delay(350).css({'overflow':'visible'});
 	pocitaj();
 	$("#search").val("");
});
