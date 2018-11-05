$(document).ready(function(){

	$("#form").submit(function(){

		var pokemon = $("#pokemon").val();

		$.ajax("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/").done(function(data){
			$("#pk_name").html(data.name);
			$("#pk_weight").html(data.weight);
			$("#pk_height").html (data.height);
			$("#pk_base_experience").html (data.base_experience);
			$("#pk_id").html (data.id);
		});

		return false;

	});

});