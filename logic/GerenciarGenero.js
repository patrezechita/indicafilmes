"use strict";

class GerenciarGenero {
	// na instanciação do GerenciaGenero é feita uma consulta à API
	// por questões de economiza de requisições, só é instanciado um único objeto (Singleton)
	constructor() {
		var xhttp = new XMLHttpRequest();
		var token = new GerenciarToken();

		// manipula a URL da API adicionando o número do gênero
		var url = "http://api.themoviedb.org/3/genre/movie/list?api_key=" + token.geraNovo();
		var resultadoPesquisa = new Array();
		xhttp.open("GET", url, false);
		xhttp.send();

		// guarda no atributo "generos" a resposta da API
		this.generos = JSON.parse(xhttp.responseText);
	}

	// recebe um ID do gênero e retorna a string de seu nome
	recuperaNome(idGenero) {
		// para cada ID dentro do atributo generos, pesquisar se contém o idGenero 
		for (var i = 0; i < this.generos.genres.length; i++) {
			// se contém, então retornar nome
			if(parseInt(idGenero) == this.generos.genres[i].id) {
				return this.generos.genres[i].name;
			}
		}

		// se não contém o ID, retornar resposta padrão "sem gênero"
		return "Genderless";
	}
}