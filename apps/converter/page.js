$(function(){
	//$(".rem").hide();
	$(".slide_but").click(function(e){
		var abc = ["a", "b", "c", "d", "e"];
		var len = $(".slide_box").length;
		for (var i = 0; i < len; i++){
			if ($("#slide_"+ abc[i])[0].id == e.currentTarget.id){
				$('#'+e.currentTarget.id+'_box').slideToggle();
				$('#'+e.currentTarget.id).children(".slideicon").children(".ver").toggleClass("add");
			} else {
				$('#slide_' + abc[i] + '_box').slideUp();
				$('#slide_' + abc[i]).children(".slideicon").children(".ver").removeClass("add");
			}
		};
	});
	$(".slide_box h4").click(function(e){
		var ele = $(e.currentTarget).parent()[0].id;
		$("#" + ele).slideUp("fast", function(){
			$("#" + ele.slice(0,7)).children(".slideicon").children(".ver").removeClass("add");
			var from = e.currentTarget.className;
			var top = $('#'+from).offset().top;
			$('html, body').animate({scrollTop:top}, "slow", "linear");
		});
		
	});
})