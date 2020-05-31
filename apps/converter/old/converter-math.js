function temperature(source, valNum) {
		valNum = parseFloat(valNum);var inputF=document.getElementById("inputFahrenheit");var inputC=document.getElementById("inputCelzium");
		if(source=="inputFahrenheit"){inputC.value=((valNum-32)/1.8).toFixed(zao);}
		if(source == "inputCelzium"){inputF.value=((valNum*1.8)+32).toFixed(zao);}
	}
	function speed(source, valNum) {
		valNum = parseFloat(valNum);
		var inputMZAS=document.getElementById("inputmse");var inputKMZAH=document.getElementById("inputkmh");var inputMZAM=document.getElementById("inputmmi");var inputFPS=document.getElementById("inputfps");var inputFPH=document.getElementById("inputfph");
		if(source=="inputmse"){inputKMZAH.value=(valNum/0.27777777777778).toFixed(zao);inputMZAM.value=(valNum*60).toFixed(zao);inputFPS.value=(valNum*3.2808398950131).toFixed(zao);inputFPH.value=(valNum*11811.116622966).toFixed(zao);}
		if(source=="inputkmh"){inputMZAS.value=(valNum*0.27777777777778).toFixed(zao);inputMZAM.value=(valNum/0.06).toFixed(zao);inputFPS.value=(valNum/1.09728).toFixed(zao);inputFPH.value=(valNum/0.0003047976).toFixed(zao);}
		if(source=="inputmmi"){inputMZAS.value=(valNum/60).toFixed(zao);inputKMZAH.value=(valNum*0.06).toFixed(zao);inputFPS.value=(valNum/18.288).toFixed(zao);inputFPH.value=(valNum/0.00507996).toFixed(zao);}
		if(source=="inputfps"){inputMZAS.value=(valNum*0.3048).toFixed(zao);inputKMZAH.value=(valNum*1.09728).toFixed(zao);inputMZAM.value=(valNum*18.288).toFixed(zao);inputFPH.value=(valNum*3600.0283466799).toFixed(zao);}
		if(source=="inputfph"){inputMZAS.value=(valNum/11811.116622966).toFixed(zao);inputKMZAH.value=(valNum/3280.8657286015).toFixed(zao);inputMZAM.value=(valNum/196.85194371609).toFixed(zao);inputFPS.value=(valNum/3600.0283466799).toFixed(zao);
}
	}
	function length(source, valNum) {
		valNum=parseFloat(valNum);
		var inputMM=document.getElementById("inputmm");var inputCM=document.getElementById("inputcm");var inputDM=document.getElementById("inputdm");var inputM=document.getElementById("inputm");var inputKM=document.getElementById("inputkm");var inputIN=document.getElementById("inputin");var inputFT=document.getElementById("inputft");var inputYD=document.getElementById("inputyd");var inputMIL=document.getElementById("inputmil");
		if (source=="inputmm") {inputCM.value=(valNum/10).toFixed(zao);inputDM.value=(valNum/100).toFixed(zao);inputM.value=(valNum/1000).toFixed(zao);inputKM.value=(valNum/1000000).toFixed(zao);inputMIL.value=(valNum/1609344).toFixed(zao);inputIN.value=(valNum/25.4).toFixed(zao);inputFT.value=(valNum/304.8).toFixed(zao);inputYD.value=(valNum/914.4).toFixed(zao);}
		if (source=="inputcm") {inputMM.value=(valNum*10).toFixed(zao);inputDM.value=(valNum/10).toFixed(zao);inputM.value=(valNum/100).toFixed(zao);inputKM.value=(valNum/100000).toFixed(zao);inputMIL.value=(valNum/160935).toFixed(zao);inputIN.value=(valNum/2.54).toFixed(zao);inputFT.value=(valNum/30.48).toFixed(zao);inputYD.value=(valNum/91.44).toFixed(zao);}
		if (source=="inputdm") {inputMM.value=(valNum*100).toFixed(zao);inputCM.value=(valNum*10).toFixed(zao);inputM.value=(valNum/10).toFixed(zao);inputKM.value=(valNum/10000).toFixed(zao);inputMIL.value=(valNum/16093.44).toFixed(zao);inputIN.value=(valNum/0.254).toFixed(zao);inputFT.value=(valNum/3.048).toFixed(zao);inputYD.value=(valNum /9.144).toFixed(zao);}
		if (source=="inputm") {inputMM.value=(valNum*1000).toFixed(zao);inputCM.value=(valNum*100).toFixed(zao);inputDM.value=(valNum*10).toFixed(zao);inputKM.value=(valNum/1000).toFixed(zao);inputMIL.value=(valNum/1609.344).toFixed(zao);inputIN.value=(valNum/0.0254).toFixed(zao);inputFT.value=(valNum/0.3048).toFixed(zao);inputYD.value=(valNum/0.9144).toFixed(zao);}
		if (source=="inputkm") {inputMM.value=(valNum*1000000).toFixed(zao);inputCM.value=(valNum*100000).toFixed(zao);inputDM.value=(valNum*10000).toFixed(zao);inputM.value=(valNum*1000).toFixed(zao);inputMIL.value=(valNum/1.609344).toFixed(zao);inputIN.value=(valNum/0.0000254).toFixed(zao);inputFT.value=(valNum/0.0003048).toFixed(zao);inputYD.value=(valNum/0.0009144).toFixed(zao);}
		if (source=="inputin") {inputMM.value=(valNum*25.4).toFixed(zao);inputCM.value=(valNum*2.54).toFixed(zao);inputDM.value=(valNum*0.254).toFixed(zao);inputM.value=(valNum*0.0254).toFixed(zao);inputKM.value=(valNum*0.0000254).toFixed(zao);inputMIL.value=(valNum/63360).toFixed(zao);inputFT.value=(valNum/12).toFixed(zao);inputYD.value=(valNum/36).toFixed(zao);}
		if (source=="inputft") {inputMM.value=(valNum*304.8).toFixed(zao);inputCM.value=(valNum*30.48).toFixed(zao);inputDM.value=(valNum*3.048).toFixed(zao);inputM.value=(valNum*0.3048).toFixed(zao);inputKM.value=(valNum*0.0003048).toFixed(zao);inputIN.value=(valNum*12).toFixed(zao);inputMIL.value=(valNum/5280).toFixed(zao);inputYD.value=(valNum/3).toFixed(zao);}
		if (source=="inputyd") {inputMM.value=(valNum*914.4).toFixed(zao);inputCM.value=(valNum*91.44).toFixed(zao);inputDM.value=(valNum*9.144).toFixed(zao);inputM.value=(valNum*0.9144).toFixed(zao);inputKM.value=(valNum*0.0009144).toFixed(zao);inputIN.value=(valNum*36).toFixed(zao);inputFT.value=(valNum*3).toFixed(zao);inputMIL.value=(valNum/1760).toFixed(zao);}
		if (source=="inputmil") {inputMM.value=(valNum*1609344).toFixed(zao);inputCM.value=(valNum*160934.4).toFixed(zao);inputDM.value=(valNum*16093.44).toFixed(zao);inputM.value=(valNum*1609.344).toFixed(zao);inputKM.value=(valNum*1.609344).toFixed(zao);inputIN.value=(valNum*63360).toFixed(zao);inputFT.value=(valNum*5280).toFixed(zao);inputYD.value=(valNum*1760).toFixed(zao);}
	}
	function plocha(source, valNum) {
		valNum=parseFloat(valNum);
		var inputMM2=document.getElementById("inputmm2");var inputCM2=document.getElementById("inputcm2");var inputDM2=document.getElementById("inputdm2");var inputM2=document.getElementById("inputm2");var inputA=document.getElementById("inputa");var inputHA=document.getElementById("inputha");var inputKM2=document.getElementById("inputkm2");
		if (source=="inputmm2") {inputCM2.value=(valNum/100).toFixed(zao);inputDM2.value=(valNum/10000).toFixed(zao);inputM2.value=(valNum/1000000).toFixed(zao);inputA.value=(valNum/100000000).toFixed(zao);inputHA.value=(valNum/10000000000).toFixed(zao);inputKM2.value=(valNum/1000000000000).toFixed(zao);}
		if (source=="inputcm2") {inputMM2.value=(valNum*100).toFixed(zao);inputDM2.value=(valNum/100).toFixed(zao);inputM2.value=(valNum/10000).toFixed(zao);inputA.value=(valNum/1000000).toFixed(zao);inputHA.value=(valNum/100000000).toFixed(zao);inputKM2.value=(valNum/10000000000).toFixed(zao);}
		if (source=="inputdm2") {inputMM2.value=(valNum*10000).toFixed(zao);inputCM2.value=(valNum*100).toFixed(zao);inputM2.value=(valNum/100).toFixed(zao);inputA.value=(valNum/10000).toFixed(zao);inputHA.value=(valNum/1000000).toFixed(zao);inputKM2.value=(valNum/100000000).toFixed(zao);}
		if (source=="inputm2") {inputMM2.value=(valNum*1000000).toFixed(zao);inputCM2.value=(valNum*10000).toFixed(zao);inputDM2.value=(valNum*100).toFixed(zao);inputA.value=(valNum/100).toFixed(zao);inputHA.value=(valNum/10000).toFixed(zao);inputKM2.value=(valNum/1000000).toFixed(zao);}
		if (source=="inputa") {inputMM2.value=(valNum*100000000).toFixed(zao);inputCM2.value=(valNum*1000000).toFixed(zao);inputDM2.value=(valNum*10000).toFixed(zao);inputM2.value=(valNum*100).toFixed(zao);inputHA.value=(valNum/100).toFixed(zao);inputKM2.value=(valNum/10000).toFixed(zao);}
		if (source=="inputha") {inputMM2.value=(valNum*10000000000).toFixed(zao);inputCM2.value=(valNum*100000000).toFixed(zao);inputDM2.value=(valNum*1000000).toFixed(zao);inputM2.value=(valNum*10000).toFixed(zao);inputA.value=(valNum*100).toFixed(zao);inputKM2.value=(valNum/100).toFixed(zao);}
		if (source=="inputkm2") {inputMM2.value=(valNum*1000000000000).toFixed(zao);inputCM2.value=(valNum*10000000000).toFixed(zao);inputDM2.value=(valNum*100000000).toFixed(zao);inputM2.value=(valNum*1000000).toFixed(zao);inputA.value=(valNum*10000).toFixed(zao);inputHA.value=(valNum*100).toFixed(zao);}
	}
	function objem(source, valNum) {
			valNum=parseFloat(valNum);
			var inputMM3=document.getElementById("inputmm3");var inputCM3=document.getElementById("inputcm3");var inputML=document.getElementById("inputml");var inputDL=document.getElementById("inputdl");var inputL=document.getElementById("inputl");var inputDM3=document.getElementById("inputdm3");var inputHL=document.getElementById("inputhl");var inputM3=document.getElementById("inputm3");var inputKM3=document.getElementById("inputkm3");
			if(source=="inputmm3"){inputCM3.value=(valNum/1000).toFixed(zao);inputML.value=(valNum/1000).toFixed(zao);inputDL.value=(valNum/100000).toFixed(zao);inputDM3.value=(valNum/1000000).toFixed(zao);inputL.value=(valNum/1000000).toFixed(zao);inputHL.value=(valNum/100000000).toFixed(zao);inputM3.value=(valNum/1000000000).toFixed(zao);inputKM3.value=(valNum/1000000000000).toFixed(zao);}
			if(source=="inputcm3"){inputMM3.value=(valNum*1000).toFixed(zao);inputML.value=(valNum*1).toFixed(zao);inputDL.value=(valNum/100).toFixed(zao);inputDM3.value=(valNum/1000).toFixed(zao);inputL.value=(valNum/1000).toFixed(zao);inputHL.value=(valNum/100000).toFixed(zao);inputM3.value=(valNum/1000000).toFixed(zao);inputKM3.value=(valNum/1000000000).toFixed(zao);}
			if(source=="inputml"){inputMM3.value=(valNum*1000).toFixed(zao);inputCM3.value=(valNum*1).toFixed(zao);inputDL.value=(valNum/100).toFixed(zao);inputDM3.value=(valNum/1000).toFixed(zao);inputL.value=(valNum/1000).toFixed(zao);inputHL.value=(valNum/100000).toFixed(zao);inputM3.value=(valNum/1000000).toFixed(zao);inputKM3.value=(valNum/1000000000).toFixed(zao);}
			if(source=="inputdl"){inputMM3.value=(valNum*100000).toFixed(zao);inputCM3.value=(valNum*100).toFixed(zao);inputML.value=(valNum*100).toFixed(zao);inputL.value=(valNum/10).toFixed(zao);inputDM3.value=(valNum/10).toFixed(zao);inputHL.value=(valNum/1000).toFixed(zao);inputM3.value=(valNum/10000).toFixed(zao);inputKM3.value=(valNum/1000000).toFixed(zao);}
			if(source=="inputdm3"){inputMM3.value=(valNum*1000000).toFixed(zao);inputCM3.value=(valNum*1000).toFixed(zao);inputDL.value=(valNum*10).toFixed(zao);inputL.value=(valNum*1).toFixed(zao);inputHL.value=(valNum/100).toFixed(zao);inputM3.value=(valNum/1000).toFixed(zao);inputKM3.value=(valNum/1000000).toFixed(zao);}
			if(source=="inputl"){inputMM3.value=(valNum*1000000).toFixed(zao);inputCM3.value=(valNum*1000).toFixed(zao);inputML.value=(valNum*100).toFixed(zao);inputDL.value=(valNum*10).toFixed(zao);inputDM3.value=(valNum*1).toFixed(zao);inputHL.value=(valNum/100).toFixed(zao);inputM3.value=(valNum/1000).toFixed(zao);inputKM3.value=(valNum/1000000).toFixed(zao);}
			if(source=="inputhl"){inputMM3.value=(valNum*100000000).toFixed(zao);inputCM3.value=(valNum*100000).toFixed(zao);inputML.value=(valNum*100000).toFixed(zao);inputDL.value=(valNum*1000).toFixed(zao);inputL.value=(valNum*100).toFixed(zao);inputDM3.value=(valNum*100).toFixed(zao);inputM3.value=(valNum/10).toFixed(zao);inputKM3.value=(valNum/10000).toFixed(zao);}
			if(source=="inputm3"){inputMM3.value=(valNum*1000000000).toFixed(zao);inputCM3.value=(valNum*1000000).toFixed(zao);inputML.value=(valNum*1000000).toFixed(zao);inputDL.value=(valNum*10000).toFixed(zao);inputL.value=(valNum*1000).toFixed(zao);inputDM3.value=(valNum*1000).toFixed(zao);inputHL.value=(valNum*10).toFixed(zao);inputKM3.value=(valNum/1000000000).toFixed(zao);}
			if(source=="inputkm3"){inputMM3.value=(valNum*1000000000000).toFixed(zao);inputCM3.value=(valNum*1000000000).toFixed(zao);inputML.value=(valNum*1000000000).toFixed(zao);inputDL.value=(valNum*1000000).toFixed(zao);inputL.value=(valNum*1000000).toFixed(zao);inputDM3.value=(valNum*1000000).toFixed(zao);inputHL.value=(valNum*10000).toFixed(zao);inputM3.value=(valNum*1000000000).toFixed(zao);}
		}
	function hmotnost(source, valNum) {
		valNum = parseFloat(valNum);
		var inputMG=document.getElementById("inputmg");var inputG=document.getElementById("inputg");var inputDAG=document.getElementById("inputdag");var inputKG=document.getElementById("inputkg");var inputT=document.getElementById("inputt");var inputLIB=document.getElementById("inputlib");
		if(source=="inputmg"){inputG.value=(valNum/1000).toFixed(zao);inputDAG.value=(valNum/10000).toFixed(zao);inputKG.value=(valNum/1000000).toFixed(zao);inputT.value=(valNum/1000000000).toFixed(zao);inputLIB.value=(valNum/453592.37).toFixed(zao);}
		if(source=="inputg") {inputMG.value=(valNum*1000).toFixed(zao);inputDAG.value=(valNum/10).toFixed(zao);inputKG.value=(valNum/1000).toFixed(zao);inputT.value=(valNum/1000000).toFixed(zao);inputLIB.value=(valNum/453.59237).toFixed(zao);}
		if(source=="inputdag"){inputMG.value=(valNum*10000).toFixed(zao);inputG.value=(valNum*10).toFixed(zao);inputKG.value=(valNum/100).toFixed(zao);inputT.value=(valNum/100000).toFixed(zao);inputLIB.value=(valNum/45.359237).toFixed(zao);}
		if(source=="inputkg"){inputMG.value=(valNum*1000000).toFixed(zao);inputG.value=(valNum*1000).toFixed(zao);inputDAG.value=(valNum*100).toFixed(zao);inputT.value=(valNum/1000).toFixed(zao);inputLIB.value=(valNum/0.45359237).toFixed(zao);}
		if(source=="inputt"){inputMG.value=(valNum*1000000000).toFixed(zao);inputG.value=(valNum*1000000).toFixed(zao);inputDAG.value=(valNum*100000).toFixed(zao);inputKG.value=(valNum*1000).toFixed(zao);inputLIB.value=(valNum/0.00045359237).toFixed(zao);}
		if(source=="inputlib"){inputMG.value=(valNum*453592.37).toFixed(zao);inputG.value=(valNum*453.59237).toFixed(zao);inputDAG.value=(valNum*45.359237).toFixed(zao);inputKG.value=(valNum*0.45359237).toFixed(zao);inputT.value=(valNum*0.00045359237).toFixed(zao);}
	}
	function time(source, valNum) {
		valNum = parseFloat(valNum);
		var inputS=document.getElementById("inputs");var inputM=document.getElementById("inputmi");var inputH=document.getElementById("inputh");var inputD=document.getElementById("inputd");var inputTY=document.getElementById("inputty");var inputME=document.getElementById("inputme");var inputR=document.getElementById("inputr");
		if(source=="inputs"){inputM.value=(valNum/60).toFixed(zao);inputH.value=(valNum/3600).toFixed(zao);inputD.value=(valNum/86400).toFixed(zao);inputTY.value=(valNum/604800).toFixed(zao);inputME.value=(valNum/2629800).toFixed(zao);inputR.value=(valNum/31536000).toFixed(zao);}
		if(source=="inputmi"){inputS.value=(valNum*60).toFixed(zao);inputH.value=(valNum/60).toFixed(zao);inputD.value=(valNum/1440).toFixed(zao);inputTY.value=(valNum/10080).toFixed(zao);inputME.value=(valNum/43830).toFixed(zao);inputR.value=(valNum/525600).toFixed(zao);}
		if(source=="inputh"){inputS.value=(valNum*3600).toFixed(zao);inputM.value=(valNum*60).toFixed(zao);inputD.value=(valNum/24).toFixed(zao);inputTY.value=(valNum/168).toFixed(zao);inputME.value=(valNum/730).toFixed(zao);inputR.value=(valNum/8765).toFixed(zao);}
		if(source=="inputd"){inputS.value=(valNum*86400).toFixed(zao);inputM.value=(valNum*1440).toFixed(zao);inputH.value=(valNum*24).toFixed(zao);inputTY.value=(valNum/7).toFixed(zao);inputME.value=(valNum/30.4375).toFixed(zao);inputR.value=(valNum/365).toFixed(zao);}
		if(source=="inputty"){inputS.value=(valNum*604800).toFixed(zao);inputM.value=(valNum*10080).toFixed(zao);inputH.value=(valNum*168).toFixed(zao);inputD.value=(valNum*7).toFixed(zao);inputME.value=(valNum/4.34821428571).toFixed(zao);inputR.value=(valNum/52.1428571429).toFixed(zao);}
		if(source=="inputme"){inputS.value=(valNum*2629800).toFixed(zao);inputM.value=(valNum*43830).toFixed(zao);inputH.value=(valNum*730.5).toFixed(zao);inputD.value=(valNum*30.4375).toFixed(zao);inputTY.value=(valNum*4.3482).toFixed(zao);inputR.value=(valNum/11.9917).toFixed(zao);}
		if(source=="inputr"){inputS.value=(valNum*31536000).toFixed(zao);inputM.value=(valNum*525600).toFixed(zao);inputH.value=(valNum*8760).toFixed(zao);inputD.value=(valNum*365).toFixed(zao);inputTY.value=(valNum*52.1428).toFixed(zao);inputME.value=(valNum*11.9917).toFixed(zao);}
	}
	function data(source, valNum) {
		valNum = parseFloat(valNum);
		var inputb=document.getElementById("inputbit");var inputB=document.getElementById("inputbyte");var inputkB=document.getElementById("inputkilobyte");var inputMB=document.getElementById("inputmegabyte");var inputGB=document.getElementById("inputgigabyte");var inputTB=document.getElementById("inputterabyte");
		if(source=="inputbit"){inputB.value=(valNum/8).toFixed(zao);inputkB.value=(valNum/8192).toFixed(zao);inputMB.value=(valNum/8388608).toFixed(zao);inputGB.value=(valNum/8589934592).toFixed(zao);inputTB.value=(valNum/8796093022208).toFixed(zao);}
		if(source=="inputbyte"){inputb.value=(valNum*8).toFixed(zao);inputkB.value=(valNum/1024).toFixed(zao);inputMB.value=(valNum/1048576).toFixed(zao);inputGB.value=(valNum/1073741824).toFixed(zao);inputTB.value=(valNum/1099511627776).toFixed(zao);}
		if(source=="inputkilobyte"){inputb.value=(valNum*8192).toFixed(zao);inputB.value=(valNum*1024).toFixed(zao);inputMB.value=(valNum/1024).toFixed(zao);inputGB.value=(valNum/1048576).toFixed(zao);inputTB.value=(valNum/1073741824).toFixed(zao);}
		if(source=="inputmegabyte"){inputb.value=(valNum  * 8388608).toFixed(zao);inputB.value=(valNum*1048576).toFixed(zao);inputkB.value=(valNum*1024).toFixed(zao);inputGB.value=(valNum/1024).toFixed(zao);inputTB.value=(valNum/1048576).toFixed(zao);}
		if (source=="inputgigabyte"){inputb.value=(valNum*8589934592).toFixed(zao);inputB.value=(valNum*1073741824).toFixed(zao);inputkB.value=(valNum*1048576).toFixed(zao);inputMB.value=(valNum*1024).toFixed(zao);inputTB.value=(valNum/1024).toFixed(zao);}
		if(source=="inputterabyte"){inputb.value=(valNum*8796093022208).toFixed(zao);inputB.value=(valNum*1099511627776).toFixed(zao);inputkB.value=(valNum*1073741824).toFixed(zao);inputMB.value=(valNum*1048576).toFixed(zao);inputGB.value=(valNum*1024).toFixed(zao);}
	}
	function web(source, valNum) {
		valNum = parseFloat(valNum);
		var inputPX=document.getElementById("inputpx");var inputEM=document.getElementById("inputem");
		if(source=="inputpx"){inputEM.value =(valNum/16).toFixed(zao);}
		if(source=="inputem"){inputPX.value =(valNum*16).toFixed(zao);}
	}
	function percenta() { 
		var cast=document.getElementById("dopln-percenta-cast").value;var zaklad=document.getElementById("dopln-percenta-zaklad").value;var out=document.getElementById("dopln-percenta-odpoved");
		if (zaklad==""||cast==""||zaklad&&percenta==""){out.textContent="Chyba!"}else{
		cast=parseFloat(cast);zaklad=parseFloat(zaklad);
		var odpoved=cast/(zaklad/100);
		out.textContent=odpoved.toFixed(zao)+"%";
		}
	}
	function zaklad() {
		var cast=document.getElementById("dopln-zaklad-cast").value;var percenta=document.getElementById("dopln-zaklad-percenta").value;var out=document.getElementById("dopln-zaklad-odpoved");
		if(cast==""||percenta==""||cast&&percenta==""){out.textContent="Chyba!"}else{
			cast=parseFloat(cast);percenta=parseFloat(percenta);
			var odpoved=cast/(percenta/100);
			out.textContent=odpoved.toFixed(zao);
		}
	}
	function cast() {
		var zaklad=document.getElementById("dopln-cast-zaklad").value;var percenta=document.getElementById("dopln-cast-percenta").value;var out=document.getElementById("dopln-cast-odpoved");
		if(zaklad==""||percenta==""||zaklad&&percenta==""){out.textContent="bleble!"}else{
		zaklad=parseFloat(zaklad);percenta=parseFloat(percenta);
		var odpoved=zaklad/100*percenta;
		out.textContent=odpoved.toFixed(zao);
		}
	}
	function vysledokobvodtro() {
		var out=document.getElementById("troobvodvy");var a=document.getElementById("trojobvodA").value;var b=document.getElementById("trojobvodB").value;var c=document.getElementById("trojobvodC").value;var vy;
		if(a==""||b==""||c==""){out.textContent="Chyba!";}else{
		a=parseFloat(a);b=parseFloat(b);c=parseFloat(c);
		var pocet=a+b+c;
		out.textContent=pocet.toFixed(zao);}
	}
	function vysledokobsahtro() {
		var out=document.getElementById("troobsahvy");var x=document.getElementById("trojobsahX").value;var v=document.getElementById("trojobsahV").value;
		if (x==""||v==""){out.textContent="Chyba!";}else{
			x=parseFloat(x);v=parseFloat(v);
			var pocet=(x*v)/2;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobvodstvo() {
		var out=document.getElementById("stvoobvodvy");var a=document.getElementById("stvoobvodX").value;
		if (a==""){out.textContent="Chyba!";}else{
			var pocet=a*4;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobsahstvo() {
		var out=document.getElementById("stvoobsahvy");var a=document.getElementById("stvoobsahX").value;
		if (a==""){out.textContent="Chyba!"}else{
			var pocet=a*a;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobvodobdl() {
		var outt=document.getElementById("obdlobvodvy");var a=document.getElementById("obdlobvodA").value;var b=document.getElementById("obdlobvodB").value;
		if(a==""||b==""){outt.textContent="Chyba!";}else{
			var pocet=2*a+2*b;
			outt.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobsahobdl() {
		var outt=document.getElementById("obdlobsahvy");var a=document.getElementById("obdlobsahA").value;var b=document.getElementById("obdlobsahB").value;
		if(a==""||b==""){outt.textContent="Chyba!";}else{
			var pocet=a*b;
			outt.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobvodkosostvo() {
		var out=document.getElementById("kosostvoobvodvy");var x=document.getElementById("kosostvoobvodX").value;
		if(x==""){out.textContent="Chyba!";}else{
			var pocet = x*4;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobsahkosostvo() {
		var out=document.getElementById("kosostvoobsahvy");var a=document.getElementById("kosostvoobsahX").value;var v=document.getElementById("kosostvoobsahXX").value;
		if(a==""||v==""){out.textContent="Chyba!";}else{
			var pocet=a*v;
			out.textContent=pocet.toFixed(zao);
		} 
	}
	function vysledokobvodkosodlzn() {
		var out=document.getElementById("kosodlznobvodvy");var a=document.getElementById("kosodlznobvodA").value;var b=document.getElementById("kosodlznobvodB").value;
		if(a==""||b==""){out.textContent="Chyba!";}else{
			var pocet=2*a+2*b;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobsahkosodlzn() {
		var out=document.getElementById("kosodlznobsahvy");var a=document.getElementById("kosodlznobsahX").value;var v=document.getElementById("kosodlznobsahXX").value;
		if(a==""||b==""){out.textContent="Chyba!";}else{
			var pocet=a*v;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobvodlicho() {
		var out=document.getElementById("lichoobvodvy");var a=document.getElementById("lichoobvodA").value;var b=document.getElementById("lichoobvodB").value;var c=document.getElementById("lichoobvodC").value;var d=document.getElementById("lichoobvodD").value;
		if(a==""||b==""||c==""||d==""){out.textContent="Chyba!";}else{
			a=parseFloat(a);b=parseFloat(b);c=parseFloat(c);d=parseFloat(d);
			var pocet=a+b+c+d;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobsahlicho() {
		var out=document.getElementById("lichoobsahvy");var a=document.getElementById("lichoobsahA").value;var c=document.getElementById("lichoobsahC").value;var v=document.getElementById("lichoobsahV").value;
		if (a==""||c==""||v==""){out.textContent="Chyba!";}else{
			a=parseFloat(a);c=parseFloat(c);v=parseFloat(v);
			var pocet=(a+c)*v/2;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobvodkruh() {
		var out=document.getElementById("kruhobvodvy");var d=document.getElementById("kruhobvodD").value;
		if(d==""){out.textContent="Chyba!";}else{
			d=parseFloat(d);
			var pocet=Math.PI*d;
			out.textContent=pocet.toFixed(zao);
		}
	}
	function vysledokobsahkruh() {
		var out=document.getElementById("kruhobsahvy");var r=document.getElementById("kruhobsahR").value;
		if(r==""){out.textContent="Chyba!";}else{
			r=parseFloat(r);
			var pocet=Math.PI*r*r;
			out.textContent=pocet.toFixed(zao);
		}
	}