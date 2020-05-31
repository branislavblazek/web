/*Library created with <3 by Branislav Blazek, 2018 */
function BCloadcss(){
	var BCcss = 'BCcss';
	if (!document.getElementById(BCcss)){
		var head = document.getElementsByTagName("head")[0];
		var link = document.createElement("link");
		link.id = BCcss;
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = 'http://branislavblazek.sk/CSS/bettercode.min.css';
		link.media = 'all';
		head.appendChild(link);
	}
}
BCloadcss();
function BCcompress(t){
	return t.replace(/\s+/gm,' ');
}
function BCsort(d,p,s,c){
	var sorting = $(s).sort(function(a,b){
		switch(d){
			case 'az':
				return $(a).find(c).text().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") > $(b).find(c).text().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
				break;
			case 'za':
				return $(a).find(c).text().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") < $(b).find(c).text().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
				break;
			case '09':
				return Number($(a).find(c).text()) > Number($(b).find(c).text());
				break;
			case '90':
				return Number($(a).find(c).text()) < Number($(b).find(c).text());
				break;
		}
	});
	$(p).html(sorting);
}
function BCscrollinfo(fixed){
	var scrollwin = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (scrollwin / height) * 100;
	if (fixed == undefined) return scrolled + "%";
	else return scrolled.toFixed(fixed)+"%";
}
function BCmodal_text(HTMLtext,closeE){
		if ( document.getElementsByClassName("BC_modal_text")[0] == undefined){
			console.warn("HTML text for modal doesnt exist, please write it - BCmodal_text()");
			return false;
		} else {
			var modal = document.getElementsByClassName("BC_modal_text")[0];
		}
		if (HTMLtext == undefined){
			console.warn("write something in the modal window - BCmodal_text()");
			return false;
		}
		if ((document.getElementsByClassName("BC_modal_text_content")[0] || document.getElementsByClassName("BC_modal_text_close")[0] || document.getElementsByClassName("BC_modal_text_area")[0]) == undefined){
			var modal_crt_d = document.createElement("div");
			modal_crt_d.setAttribute("class", "BC_modal_text_content BC_modal_text_in");
			var modal_crt_s = document.createElement("span");
			modal_crt_s.setAttribute("class", "BC_modal_text_close");
			modal_crt_s.innerHTML="&times;"
			var modal_crt_dd = document.createElement("div");
			modal_crt_dd.setAttribute("class","BC_modal_text_area");
			modal_crt_d.appendChild(modal_crt_s);
			modal_crt_d.appendChild(modal_crt_dd);
			modal.appendChild(modal_crt_d);
		}
		var textarea = document.getElementsByClassName("BC_modal_text_area")[0];
		var modal_content = document.getElementsByClassName("BC_modal_text_content")[0];
		var closeicon = document.getElementsByClassName("BC_modal_text_close")[0];
		textarea.innerHTML = HTMLtext;
		modal.style.display="block";
		closeicon.onclick = function(){
			modal_content.classList.remove("BC_modal_text_in");
			modal_content.classList.add("BC_modal_text_out");
			setTimeout(function(){
				modal.style.display="none";
				modal_content.classList.remove("BC_modal_text_out");
				modal_content.classList.add("BC_modal_text_in");
			},400);
		}
		window.onclick = function(e){
			if (e.target == modal) {
				modal_content.classList.remove("BC_modal_text_in");
				modal_content.classList.add("BC_modal_text_out");
				setTimeout(function(){
					modal.style.display="none";
					modal_content.classList.remove("BC_modal_text_out");
					modal_content.classList.add("BC_modal_text_in");
				},400);
			}
		}
		if (closeE === undefined){
		} else if(closeE.length >= 1){
			if (closeE.length == 1){
				var closeElement1 = document.querySelector(closeE);
				console.log(closeElement1);
			}else {
				for(var i = 0;i < closeE.length;i++){
					var x = document.querySelector(closeE[i]);
					x.onclick = function(){
						modal_content.classList.remove("BC_modal_text_in");
						modal_content.classList.add("BC_modal_text_out");
						setTimeout(function(){
							modal.style.display="none";
							modal_content.classList.remove("BC_modal_text_out");
							modal_content.classList.add("BC_modal_text_in");
						},400);
					}
				}
			}
		} else {
			console.log("something went wrong :(");
		}
	}
function BCmodal_img(BC_modal_img_info){
			if (document.getElementsByClassName("BC_modal_img")[0] == undefined){
				console.warn("HTML text for modal doesnt exist, please write it; BCmodal_img()");
				return false;
			} else {
				var modal = document.getElementsByClassName("BC_modal_img")[0];
			}
			if (BC_modal_img_info == undefined){
				console.warn("you need some img to open modal window, so please write it; BCmodal_img() ");
				return false;
			}
			if ((document.getElementsByClassName("BC_modal_img_close")[0]||document.getElementsByClassName("BC_modal_img_content")[0]||document.getElementsByClassName("BC_modal_img_alt")[0]) == undefined){
				var modal_crt_s = document.createElement("span");
				modal_crt_s.setAttribute("class", "BC_modal_img_close");
				modal_crt_s.innerHTML = "&times;";
				var modal_crt_img = document.createElement("img");
				modal_crt_img.setAttribute("class", "BC_modal_img_content BC_modal_img_in");
				var modal_crt_d = document.createElement("div");
				modal_crt_d.setAttribute("class", "BC_modal_img_alt BC_modal_img_in");
				modal.appendChild(modal_crt_s);
				modal.appendChild(modal_crt_img);
				modal.appendChild(modal_crt_d);
			}
				var img = BC_modal_img_info;
				var modalImg = document.getElementsByClassName("BC_modal_img_content")[0];
				var altText = document.getElementsByClassName("BC_modal_img_alt")[0];
				var close = document.getElementsByClassName("BC_modal_img_close")[0];
			modalImg.src = BC_modal_img_info.src;
			altText.innerHTML = BC_modal_img_info.alt;
			modal.style.display="block";
			close.onclick = function(){
				modalImg.classList.remove("BC_modal_img_in");
				altText.classList.remove("BC_modal_img_in");
				modalImg.classList.add("BC_modal_img_out");
				altText.classList.add("BC_modal_img_out");
				setTimeout(function(){
					modalImg.classList.remove("BC_modal_img_out");
					altText.classList.remove("BC_modal_img_out");
					modalImg.classList.add("BC_modal_img_in");
					altText.classList.add("BC_modal_img_in");
					modal.style.display="none";
				},600);
			}
			window.onclick = function(e){
				if (e.target == modal){
					modalImg.classList.remove("BC_modal_img_in");
					altText.classList.remove("BC_modal_img_in");
					modalImg.classList.add("BC_modal_img_out");
					altText.classList.add("BC_modal_img_out");
					setTimeout(function(){
						modalImg.classList.remove("BC_modal_img_out");
						altText.classList.remove("BC_modal_img_out");
						modalImg.classList.add("BC_modal_img_in");
						altText.classList.add("BC_modal_img_in");
						modal.style.display="none";
					},600);
				}
			}
		}