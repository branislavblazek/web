var vzorce = {
	dlzky: {
		a: ["mm", 10, "cm", 10, "dm", 10, "m", 1000, "km"],
		b: {
			mile: ["mile", 1.609344, "km"],
			feet: ["feet", 3.04800, "dm"],
			inch: ["inch", 2.54, "cm"],
			yard: ["yard", 914.4, "mm"]
		}
	},
	obsah: {
		a: ["mm", 100, "cm", 100, "dm", 100, "m", 100, "a", 100, "ha", 100, "km"],
	},
	objem: {
		a: ["mm", 1000, "cm", 1, "ml", 10, "cl", 10, "dl", 10, "l", 1, "dm", 100, "hl", 10, "m", 1000000000, "km"],
	},
	hmot: {
		a: ["mg", 1000, "g", 10, "dkg", 100, "kg", 100, "q", 10, "t"],
	},
	pxem: {
		a: ["px", 16, "em", 0.01, "pe"],
	},
	data: {
		a: ["b", 1024, "kb", 1024, "Mb", 1024, "Gb", 1024, "Tb"],
		b: {
			B: ["B", 8, "b"],
			kB: ["kB", 8, "kb"],
			MB: ["MB", 8, "Mb"],
			GB: ["GB", 8, "Gb"],
			TB: ["TB", 8, "Tb"]
		}
	},
	down: {
		a: ["bps", 1024, "kbps", 1024, "Mbps", 1024, "Gbps", 1024, "Tbps"],
		b: {
			Bps: ["Bps", 8, "bps"],
			kBps: ["kBps", 8, "kbps"],
			MBps: ["MBps", 8, "Mbps"],
			GBps: ["GBps", 8, "Gbps"],
			TBps: ["TBps", 8, "Tbps"],
		}
	},
	rych: {
		a: ["kmph", 0.06, "mpmin", 60, "mps"],
		b: {
			MPH:["MPH", 1.609344, "kmph"],
			fps:["fps", 0.3048, "mps"],
			fph:["fph", 0.00507996, "mpmin"]
		}
	},
	tep: {
		to:["c","f","k"],
		c: {
			f:"(-c-*1.8)+32",
			k:"-c-+273.15"
		},
		f: {
			c:"(-f--32)/1.8",
			k:"((-f--32)/1.8)+273.15"
		},
		k: {
			c:"-k--273.15",
			f:"((-k--273.15)*1.8)+32"
		}
	},
	time: {
		a: ["ms", 1000, "s", 60, "min", 60, "h", 24, "d", 7, "t", 4.3482142857143, "m", 12, "r"]
	},
	per: {
		a: "-b-/(-c-/100)",
		b: "(-a-/100)*-c-",
		c: "-b-/(-a-/100)",
		min: 2,
		max: ["a","b","c"],
		names: ["základ", "časť", "percent"]
	},
	pyta: {
		a: "Math.sqrt(Math.pow(-c-, 2) - Math.pow(-b-, 2))",
		b: "Math.sqrt(Math.pow(-c-, 2) - Math.pow(-a-, 2))",
		c: "Math.sqrt(Math.pow(-a-, 2) + Math.pow(-b-, 2))",
		min:2,
		max: ["a","b","c"],
		names: ["strana a", "strana b", "strana c"]
	},
	stvo:{
		obvod:"4*-a-",
		obsah:"-a-*-a-"
	},
	obdl:{
		obvod:"-a-+-a-+-b-+-b-",
		obsah:"-a-*-b-"
	},
	kost: {
		obvod:"4*-a-",
		obsah:"-a-*-b-"
	},
	kruh:{
		obvod:"2*Math.PI*-a-",
		obsah:"Math.pow(-a-,2)*Math.PI"
	},
	licho:{
		obvod:"-a-+-b-+-c-+-d-",
		obsah:"((-a-+-c-)*-e-)/2"
	},
	troj:{
		obvod:"-a-+-b-+-c-",
		obsah:"(-a-*-d-)/2"
	},
	kocka:{
		objem:"Math.pow(-a-, 3)",
		povrch:"6*Math.pow(-a-, 2)"
	},
	kvad:{
		objem:"-a-*-b-*-c-",
		povrch:"2*(-a-*-b-+-b-*-c-+-c-*-a-)"
	},
	valec:{
		objem:"Math.PI*Math.pow(-a-, 2)*-b-",
		povrch:"2*Math.PI*Math.pow(-a-, 2)+2*Math.PI*-a-*-b-"
	},
	kuzel:{
		objem:"(Math.PI*Math.pow(-a-, 2)*-b-)/3",
		povrch:"Math.PI*Math.pow(-a-, 2)+Math.PI*-a-*-c-"
	},
	gula:{
		objem:"4/3*Math.PI*Math.pow(-a-, 3)",
		povrch:"4*Math.PI*Math.pow(-a-, 2)"
	},
	hranol:{
		objem:"-b-*-a-",
		povrch:"2*-b-+-c-"
	},
	ihlan:{
		objem:"(-b-*-a-)/3",
		povrch:"-b-+-c-"
	}
};
function get(pole, startValue, from, to){
	var nasob = 1, del = 1;
	if (pole.indexOf(from) < pole.indexOf(to)){
		for (var i = pole.indexOf(from); i < pole.indexOf(to); i++){
			if (typeof pole[i] == 'number'){
				nasob *= pole[i];
			}
		}
		return startValue / nasob;
	} else if (pole.indexOf(from) > pole.indexOf(to)){
		for (i = pole.indexOf(from); i > pole.indexOf(to);i--){
				if (typeof pole[i] == 'number'){
					del *= pole[i];
				}
			}
			return startValue * del;
		}
	nasob = 1;
	del = 1;
}
function Vypocitaj(data){
	this.kat = data.kat;
	this.druh = data.druh;
	this.name = data.name;
	this.val = data.value;
	if (data.write == undefined){
		this.write = true;
	} else {
		this.write = data.write;
	}
	var path = vzorce[this.kat][this.druh];
	var vysledok, dataBack = {};
	if (this.druh == "a"){
		for (var a = 0; a < path.length; a++){
			if (typeof path[a] == 'string'){
				vysledok = get(path, this.val, path[path.indexOf(this.name)], path[a]);
				if (vysledok == undefined){
					vysledok = this.val;
				}
				//document.getElementById(this.kat+'_'+this.druh+'_'+path[a]).value = vysledok;
				dataBack[this.kat+'_'+this.druh+'_'+path[a]] = vysledok;
			}
		}
		for (var b in vzorce[this.kat]["b"]){
			if (vzorce[this.kat]["b"].hasOwnProperty(b)){
				vysledok = get(vzorce[this.kat]["a"], this.val, vzorce[this.kat]["a"][vzorce[this.kat]["a"].indexOf(this.name)], path[path.indexOf(vzorce[this.kat]["b"][b][2])]);
				if (vysledok == undefined){
					vysledok = Number(this.val);
				}
				vysledok = vysledok / vzorce[this.kat]["b"][b][1];
				//document.getElementById(this.kat + '_b_' + vzorce[this.kat]["b"][b][0]).value = vysledok;
				dataBack[this.kat + '_b_' + vzorce[this.kat]["b"][b][0]] = vysledok;
			}
		}
		dataBack.write = this.write;
		return dataBack;
	}
	if (this.druh == "b"){
		var nw = get(path[this.name], this.val, path[this.name][2], path[this.name][0]);
		for (var b = 0; b < vzorce[this.kat]["a"].length; b++){
			if (typeof vzorce[this.kat]["a"][b] == 'string'){
				vysledok = get(vzorce[this.kat]["a"], nw, path[this.name][2], vzorce[this.kat]["a"][b]);
				if (vysledok == undefined){
					vysledok = get(path[this.name], this.val, path[this.name][2], path[this.name][0]);
				}
				dataBack[this.kat + '_a_' + vzorce[this.kat]["a"][b]] = vysledok;
			}
		}
		for (var b in path){
			if (path.hasOwnProperty(b)){
				vysledok = get(vzorce[this.kat]["a"], nw, path[this.name][2], path[b][2]);
				if (vysledok == undefined){
					vysledok = Number(this.val);
				}
				if (vysledok == this.val){
					vysledok = Number(this.val);
				} else {
					vysledok = vysledok / path[b][1];
				}
				dataBack[this.kat + '_b_' + path[b][0]] = vysledok;
			}
		}
		dataBack.write = this.write;
		return dataBack;
	}
	if (data.more == "c"){
		path = vzorce[this.kat];
		if (path.min < path.max.length){
			var u = [], 
			uwron = [], 
			out = null,
			ulen = path.max.length - path.min;
			for (var ni in this.val){
				u.push(this.val[ni]);
			}
			for (i = 0;i < u.length;i++){
				if (u[i] == ""){
					uwron.push(path.max[i]+u[i]);	
				}
			}
			var vzor = path[uwron[0]];
			if (uwron.length == ulen){
				for (i = 0; i < u.length; i++){
					if (u[i] == ""){
						out = i;
						continue;
					} else {
						vzor = vzor.replace('-'+path.max[i]+'-',Number(u[i]));
					}
				}
				dataBack[this.kat + '_out_name'] = path.names[out] + ' je ';
				dataBack[this.kat + '_out'] = eval(vzor);
			}
		}
		dataBack.write = this.write;
		return dataBack;
	}
	if (data.more == "d"){
		var vzor = vzorce[this.kat];
		for (var i = 0; i < vzorce[this.kat]["to"].length; i++) {
			if (vzorce[this.kat]["to"][i] == this.druh){
				continue;
			} else {
				vzor = path[vzorce[this.kat]["to"][i]];
				vzor = vzor.replace('-'+this.druh+'-', this.val);
				vysledok = eval(vzor);
				dataBack[input.more + '_' + this.kat + '_' + vzorce[this.kat]["to"][i]] = vysledok;
			}
		}
		dataBack.write = this.write;
		return dataBack;
	}
	if (data.more == "e"){
		var count = 0;
		for (var uu in this.val){
			if(this.val.hasOwnProperty(uu)){
				count++;
			}
		}
		for ( i = 0; i < 2;i++){
			var z;
			if (data.typ == "a"){
				z = ["obvod", "obsah"];
			} else if (data.typ == "b"){
				z = ["objem", "povrch"];
			}
			vzor = vzorce[this.kat][z[i]];
			if (count == data.len){
				for (var uu in this.val){
					if (this.val.hasOwnProperty(uu)){
						vzor = vzor.replace(new RegExp('-'+uu+'-', 'gi'), this.val[uu]);
					}
				}
			}
			for (var uu in this.val){
				if (this.val.hasOwnProperty(uu)){
					dataBack[data.more + '_' + this.kat + '_' + z[i] +'_out'] = eval(vzor);
				}
			}
		}
		dataBack.write = this.write;
		return dataBack;
	}
	if (this.val == 0 || this.val == null || this.val == ""){
		for (var ttt = 0; ttt < vzorce[this.kat]["a"].length; ttt++){
			if (typeof vzorce[this.kat]["a"][ttt] == 'string'){
				document.getElementById(this.kat + '_a_' + vzorce[this.kat]["a"][ttt]).value = "";
			}
		}
		for (var rrr in vzorce[this.kat]["b"]){
			if (vzorce[this.kat]["b"].hasOwnProperty(rrr)){
				document.getElementById(this.kat + '_b_' + vzorce[this.kat]["b"][rrr][0]).value = "";
			}
		}
	}
}