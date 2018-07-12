$().ready(function(){
	var pokeindex = 1;
	getpoke(pokeindex, true);

	if (pokeindex != 1){
		$("#previous").prop("disabled",false);
	}
	else $("#previous").prop("disabled",true);

	document.getElementById("next").onclick = function(){
		++pokeindex;

		if (pokeindex == 6) {
			$("#next").prop("disabled",true);
		}

		if (pokeindex != 7) {
			getpoke(pokeindex, true);
			$("#previous").prop("disabled",false);
		}
		else --pokeindex;
	}

	document.getElementById("previous").onclick = function(){
		--pokeindex;

		if (pokeindex == 1){
			$("#previous").prop("disabled",true);
		}

		if (pokeindex != 0){
			$("#next").prop("disabled",false);
			getpoke(pokeindex, true);
		}
		else ++pokeindex;
	}
	

	document.getElementById("search").onclick = function(){
		var content = document.getElementById("searchbar").value;
		var regex = /^[1-6]/;
		if (content.match(regex)){
			pokeindex = content;
			getpoke (pokeindex, true);

			if (pokeindex != 1) {
				$("#previous").prop("disabled",false);
			}
			else $("#previous").prop("disabled",true);

			if (pokeindex != 6) {
				$("#next").prop("disabled",false);
			}
			else $("#next").prop("disabled",true);
		}
		else getpoke(content, false);

	}
		
})

function getpoke(content, isnum){
	var url = "";
	//alert("3" + content + "hola");
	if (isnum) url = "http://40.118.8.76/pokemons/" + content;
	else url = "http://40.118.8.76/pokemons?name=" + content;
	//alert("-" + url + "-");
	$.get(url, function(data){
				$("#code").text(data.id);
				$("#name").html(data.name);

				var normimage = document.getElementById("normal_sprite");
				normimage.src = data.images[0].front;

				var shinyimage = document.getElementById("shiny_sprite");
				shinyimage.src = data.images[1].front_shiny;
				
				var types = data.types;
				var type = "";
				for (var i = 0; i < types.length; ++i){
					type = type + " " + types[i].type.name;
				}
				$("#type").html(type);

				var hms = data.moves.HM;
				var hm = "";
				if (hms != null){
					for (var i = 0; i < hms.length; ++i){
						hm = hm + " " + hms[i];
					}
				}
				else hm = "none"
				
				$("#hm").html(hm);

			}, "json")

}