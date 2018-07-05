window.onload = function(){
	document.getElementById("barratext").onchange = addcharacter();
}

function addcharacter(){
	var x = document.getElementById("barratext");
	x.value = "ho";
}