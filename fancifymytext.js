const newSize = "3em";
const normSize = "1em"

function bigText(){
	//alert("Hello, World!");
	document.getElementById("fancytext").style.fontSize = newSize;
}

function moo(){
	document.getElementById("fancytext").style.textTransform = "uppercase";
	let str = document.getElementById("fancytext").value;
	let parts = str.split(".");
	str = parts.join("-Moo.");
	document.getElementById("fancytext").value = str;
}

function changeText(){
	if(document.getElementById("FancyShmancy").checked){
		//alert("Hello, Fancy World!");
		document.getElementById("fancytext").style.fontWeight = "bold";
		document.getElementById("fancytext").style.color = "DodgerBlue";
		document.getElementById("fancytext").style.textDecorationLine = "underline";
	}else if (document.getElementById("BoringBetty").checked){
		//alert("Hello, Boring World!");
		document.getElementById("fancytext").style.fontSize = normSize;
		document.getElementById("fancytext").style.fontWeight = "normal";
		document.getElementById("fancytext").style.color = "Black";
		document.getElementById("fancytext").style.textDecorationLine = "none";
	}
	
}
