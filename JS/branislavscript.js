
Object.prototype.toggle = function(prop, array){
	var obj = [];
	prop.split(" ").map(function(path,index){
		obj.push(path);
	});
	var str = "this.";
	for (let i = 0;i < obj.length;i++){
		if (i == 0 && obj.length >= 2){
			str += ""+obj[i]+".";
		} else {
			str += ""+obj[i]+"";
		}
	}
	var t = eval(str);
	var set = 0;
	for (let i = 0;i < array.length;i++){
		if (t == array[array.length-1]) {
			set = 0;
		} else {
			set = i + 1;
		}
		if (t === array[i]){
			eval(str+"='"+array[set]+"'");
			break;
		} else {
				eval(str+"='"+array[set]+"'");
		}
	}
};
Object.prototype.set = function(prop, value){
	var obj = [];
	prop.split(" ").map(function(path,index){
		obj.push(path);
	});
	var str = "this.";
	for (var i = 0;i < obj.length;i++){
		if (i == 0 && obj.length >= 2){
				str += ""+obj[i]+".";
			} else {
				str += ""+obj[i]+"";
			}
		}
	eval(str+"='"+value+"'");
}
Object.prototype.formatSecondsAsTime = function(){
	var secs = this;
	var hr  = Math.floor(secs / 3600);
	var min = Math.floor((secs - (hr * 3600))/60);
	var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
	if (min < 10){ 
		min = "0" + min; 
	}
	if (sec < 10){ 
		sec  = "0" + sec;
	}
	if (hr == 0){
		return min + ':' + sec;
	} else {
		return hr + ':' + min + ':' + sec;
	}
}
var getID = function(id){
	return document.getElementById(id);
}
var getClass = function(cla){
	return document.getElementsByClassName(cla);
}
function objectLength(obj){
	var number = 0;
	for (var order in obj){
		if (obj.hasOwnProperty(order)){
			number++;
		}
	}
	return number;
}
var correct = function(num){
	if (num == undefined){
		for(var i = 0;i < document.getElementsByClassName("QuizQuestion").length;i++){
			if (document.getElementsByClassName("QuizQuestion")[i].style.display != "none"){
				num = document.getElementsByClassName("QuizQuestion")[i].id.slice(-1);
			}
		}
	}
	for (var CA=0;CA<I[num][3].length;CA++){
		if (I[num][3][CA][2]==1){console.log("Q: "+num+" is A: "+I[num][3][CA][0])};
	}
}