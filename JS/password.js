function createPassword(length,[all,lower,upper,number,sym],simi){
	pas = {
		letters:"abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-=+*&%></|[]{}@!#$^():;?.,~`",
		len:length,
		psswrd:'',
		Aall:all,
		Alowercase:lower,
		Auppercase:upper,
		Anumber:number,
		Asymbols:sym,
		Asimilarly:simi
	}
	function filter(wh){
		switch(wh){
			case 'all':
				var all = pas.letters;
				return all;
				break;
			case 'lowercase':
				var a = pas.letters.indexOf('a');
				var z = pas.letters.indexOf('z')+1;
				var az = pas.letters.substring(a,z);
				return az;
				break;
			case 'uppercase':
				var A = pas.letters.indexOf('A');
				var Z = pas.letters.indexOf('Z')+1;
				var AZ = pas.letters.substring(A,Z);
				return AZ;
				break;
			case 'number':
				var one = pas.letters.indexOf('1');
				var zero = pas.letters.indexOf('0')+1;
				var OZ = pas.letters.substring(one,zero);
				return OZ;
				break;
			case 'symbols':
				var f = pas.letters.indexOf('-');
				var l = pas.letters.indexOf('`');
				var fl = pas.letters.substring(f,l);
				return fl;
				break;
			}
	}
	pas.Fall = filter('all');
	pas.Flowercase = filter('lowercase');
	pas.Fuppercase = filter('uppercase');
	pas.Fnumber = filter('number');
	pas.Fsymbols = filter('symbols');
	var vyvolene = [];
	var filter = '';
	for (var justTrue in pas){
		if (pas[justTrue] === true){
			vyvolene.push(justTrue);
		};
	};
	for (var evr= 0;evr < vyvolene.length;evr++){
		vyvolene[evr] = vyvolene[evr].replace("A","");
		var nazov = 'F'+vyvolene[evr];
		var t = function nacitaj(obj,prop){
			return (obj[prop]);
		}
		filter += t(pas,nazov);
	};
	for (var someNumber = 0;someNumber < pas.len;someNumber++){
		var rnum = Math.floor(Math.random() * filter.length);
		pas.psswrd += filter.substring(rnum,rnum+1); 
	};
	if (pas.Asimilarly == 1) {
		znaky = [];
		for (var i = 0;i < pas.psswrd.length;i++){
			var zn = pas.psswrd.substring(i,i+1);
			znaky.push(zn);		
		}
		var prev2,prev,thi,next;
		for (var i = 0; i < znaky.length;i++){
			thi = znaky[i];
			next = znaky[i+1];
			if (thi == next){
				prev2 = znaky[i-2];
				if (prev2 === undefined){
					prev2 = znaky[i+2];
				}
				znaky.splice(i,1,prev2);
			}
		}
		var newP = znaky.join("");
		pas.psswrd = newP;
		return pas.psswrd;
	} else {
		return pas.psswrd;
	}
}