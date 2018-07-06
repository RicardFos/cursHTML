window.onload = function(){
	document.getElementById("barratext").onkeydown = addcharacter();
}

function addcharacter(){
	var x = document.getElementById("barratext");
	x.value = "ho";
}