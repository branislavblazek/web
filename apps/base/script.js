//PREVOD MEDZI BIN, OCT, DEC A HEX SUSTAVOU
//branislavblazek.sk, 2018
var bin = document.getElementById("inpt_bin"),
	oct = document.getElementById("inpt_oct"),
	dec = document.getElementById("inpt_dec"),
	hex = document.getElementById("inpt_hex");
bin.oninput = function(e){
	var result = convert_from_binary(e.target.value);
	oct.value = result.oct;
	dec.value = result.dec;
	hex.value = result.hex;
}
oct.oninput = function(e){
	var result = convert_from_octal(e.target.value);
	bin.value = result.bin;
	dec.value = result.dec;
	hex.value = result.hex;
}
dec.oninput = function(e){
	var result = convert_from_decimal(e.target.value);
	bin.value = result.bin;
	oct.value = result.oct;
	hex.value = result.hex;
}
hex.oninput = function(e){
	let inpt = e.target.value.toUpperCase();
	var result = convert_from_hexadecimal(inpt);
	bin.value = result.bin;
	oct.value = result.oct;
	dec.value = result.dec;
}

function complete_number(number, length){//prida 0 na koniec cisla do poctu
	let nsl = number.toString().length;
	let r = number;
	if (nsl % length == 0){
		return r;
	} else {
		for(let i = nsl % length; i < length; i++){
			r += "0";
		}
	}
	return r;
}//vracia n*length ciferne cislo

function check_letter(code, type){//funkcia na skontrolovanie či v texte nie je zlý znak
	let con = true;
	const len = code.length;
	let array = {
		bin: ['0', '1'],
		oct: ['0', '1', '2', '3', '4', '5', '6', '7'],
		dec: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		hex: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
	}
	for (let i = 0; i < len; i++){
		let sign_now = code.slice(i, i+1);
		if (array[type].indexOf(sign_now) <= -1){
			con = false;
		}
	}
	return con;
}//vracia true alebo false

function multiplication(code, base_from, hex_to){
	var actual = 0;
	var return_hex;
	
	for (var i = 0; i < code.length; i++){
		if (code.length - i -1 >= 0){
			if (isNaN(Number(code.slice(i, i+1)))){
				let array = ['A', 'B', 'C', 'D', 'E', 'F'];
				let letter = array.indexOf(code.slice(i, i+1)) + 10;
				actual += letter*Math.pow(base_from, code.length - i - 1);
				console.log(letter, code.length - i - 1);
			} else {
				actual += code.slice(i, i+1)*Math.pow(base_from, code.length - i - 1);
				console.log(code.slice(i, i+1), code.length - i - 1);
			}
		}
	}
	if (hex_to == true && actual > 9){
		var hex_array = ['A', 'B', 'C', 'D', 'E', 'F'];
		actual = hex_array[actual - 10];
	}
	return actual.toString();
}

function division(code, base_to, hex){
	var rest, num = code, ret = "";
	while (true){
		num_2 = num;
		num = Math.floor(num / base_to);
		rest = num_2 % base_to;
		if (hex == true && rest > 9){
			let array = ['A', 'B', 'C', 'D', 'E', 'F'];
			rest = array[rest-10].toString();
		}
		ret = rest + ret;
		if (num == 0) break;
	}
	return ret;
}

function convert_from_binary(binary_code){
	const len = binary_code.length;//dlzka stringu
	if (!check_letter(binary_code, "bin")){
		return false;}
	let ret = {oct:"",dec:"",hex:""};
	//ziskanie oct
	if (len % 3 !== 0){
		ret.oct = multiplication(binary_code.slice(0, len % 3), 2);
	}
	for (let i = len % 3; i < len; i += 3){
		ret.oct += "" + multiplication(binary_code.slice(i, i+3), 2);
	}
	//ziskanie dec
	ret.dec = multiplication(binary_code, 2);
	//ziskanie hex
	if (len % 4 !== 0){//pokial je na zaciatku menej ako 4 znakov
		ret.hex = multiplication(binary_code.slice(0,len % 4), 2, true);
	}
	for (let i = len % 4; i < len; i += 4){//zvysne
		ret.hex += multiplication(binary_code.slice(i, i+4), 2, true);
	}
	return ret;
}

function convert_from_octal(octal_code){
	const len = octal_code.length
	if(!check_letter(octal_code, "oct")){
		return false;}
	let ret = {bin: "", dec: "", hex: ""};
	//ziskanie bin
	ret.bin = division(octal_code, 2);
	//ziskanie dec
	ret.dec = multiplication(octal_code, 8);
	//ziskanie hex
	ret.hex = division(multiplication(octal_code, 8), 16, true);
	return ret;
}

function convert_from_decimal(decimal_code){
	if(!check_letter(decimal_code, "dec")){
		return false;}
	//tu sa zapisu vysledky
	let ret = {bin:"",oct:"",hex:""};
	//ziskanie bin
	ret.bin = division(decimal_code, 2);
	//ziskanie oct
	ret.oct = division(decimal_code, 8);
	//ziskanie hex
	ret.hex = division(decimal_code, 16, true);
	return ret;
}

function convert_from_hexadecimal(hex_code){
	const len = hex_code.length;
	if (!check_letter(hex_code, "hex")){
		return false;}
	let ret = {bin:"", oct:"", dec:""};
	//ziskanie dec
	ret.dec = multiplication(hex_code, 16);
	//ziskanie bin
	ret.bin = division(ret.dec, 2);
	//ziskanie oct
	ret.oct = division(ret.dec, 8);
	return ret;
}