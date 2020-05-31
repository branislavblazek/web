var todo = [];
function vytvor(text, color) {
	var li = document.createElement("li");
	var p = document.createElement("p");
	var i = document.createElement("i");
	p.textContent = text;
	i.setAttribute("class", "fa fa-trash right");
	li.style.backgroundColor = color;
	li.appendChild(i)
	li.appendChild(p);
	document.getElementById("place").appendChild(li);
	$(li).css({'marginTop':'100px', 'opacity':0});	
	$(li).animate({'marginTop':0}, 'slow');
	$(li).animate({'opacity':1}, 'fast');
	$("i").on('click', function(){
		var $this = $(this).parent();
		var $thisval = $($this).text();
		$($this).animate({"marginRight": '0'}, 'fast', 'linear');
		setTimeout(function() {
			$($this).animate({"marginLeft":'100%'}, 'slow');
			setTimeout(function() {
				$($this).remove();
				localStorage.removeItem($thisval);
			}, 1200);
		}, 600);
	})
}
function originalita(vstup) {
	veci  = [];
	for (var v = 0; v < localStorage.length; v++) {
		console.log(localStorage.key(v));
		veci.push(localStorage.key(v));
	}
	console.log(veci);
	var odpoved;
	for (var c = 0; c < veci.length; c++) {
		console.log(veci[c] + " " + vstup);
		if (veci[c] == vstup) {
			odpoved = false;
			break;
		} else {
			odpoved = true;
		}
	}
	veci = [];
	if (odpoved === undefined) {
		odpoved = true;
	}
	return odpoved;
}
function pridaj() {
	var vstup = $("#input").val();
	var farba = $("#select").val();
	if (vstup !== null && vstup.length >= 1) {
		if (originalita(vstup)) {
			if (farba !== 'null') {
			$("#errorcolor").hide('slow');
			$("#errortext").hide('slow');
			$("#errorcopy").hide('slow');
			todo.push({
				text: vstup,
				color: farba
			})
			localStorage.setItem(vstup, farba);
			vytvor(vstup, farba);
			var len = localStorage.length;
			for (var i = 0; i < len; i++) {
				console.log(i);
			}
			active();
			$("#input").val("");
			$("#select").val("null");
			} else {
				$("#errorcolor").show('slow');
			}
		} else {
			$("#errorcopy").show('slow');
		}
	} else {
		$("#errortext").show('slow');
	}
}
$(window).on('load', function(){
	var len = localStorage.length;
	for (var i = 0; i < len; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		vytvor(key, value);
	}
})
function active() {
	 $("li").click(function() {
		 if ($(this).css('margin-right') == '0px') {
		  $(this).animate({"marginRight": '75px'}, 'fast', 'linear');
	  } else {
		  $(this).animate({"marginRight": '0'}, 'fast', 'linear');
	  }
	 })
}
$(document).ready(function(){
  active();
});
$(window).on('load', function() {
	$('#status').fadeOut(); 
 $('#preloader').delay(350).fadeOut('slow');
 $('body').delay(350).css({'overflow':'visible'});
})
