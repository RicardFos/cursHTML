window.onload = function(){
	document.getElementById("barratext").onkeyup = addcharacter;
}

function addcharacter(){
	var x = document.getElementById("barratext");
	x.value =  x.value + "-"
}