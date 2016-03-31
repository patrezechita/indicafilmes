"use strict";

class Pesquisar {
	// pesquisa filmes por nome
	porNome(nomeFilme) {
		var xhttp = new XMLHttpRequest();
		var token = new GerenciarToken();

		// manipula a URL da API adicionando o nome do filme e o token de acesso
		var url = "http://api.themoviedb.org/3/search/movie?api_key=" + token.geraNovo() + "&query=" + nomeFilme + "'";
		var resultadoPesquisa = new Array();
		xhttp.open("GET", url, false);
		xhttp.send();

		// cria objeto JSON com a resposta da API
		var resposta = JSON.parse(xhttp.responseText);

		// para cada filme no JSON, criar objeto Filme e colocar em um ARRAY
		for (var i = 0; i < resposta.results.length; i++) {
			var novoFilme = new Filme(resposta.results[i].id, resposta.results[i].title, resposta.results[i].genre_ids,
				resposta.results[i].release_date, resposta.results[i].vote_average, "", resposta.results[i].poster_path,
				resposta.results[i].overview);
			
			var persistir = new Persistir();
			
			// se o filme está no localStorage, então não exibir no resultado da pesquisa
			if(persistir.verificaFilme(resposta.results[i].id)) {
				resultadoPesquisa.push(novoFilme);
			}
		}

		return resultadoPesquisa;
	}

	// pesquisa os filmes que estão em cartaz nos cinemas
	emCartaz() {
		var xhttp = new XMLHttpRequest();
		var token = new GerenciarToken();

		// manipula a URL da API e o token de acesso
		var url = "http://api.themoviedb.org/3/movie/now_playing?api_key=" + token.geraNovo();
		var resultadoPesquisa = new Array();
		xhttp.open("GET", url, false);
		xhttp.send();

		// cria objeto JSON com a resposta da API
		var resposta = JSON.parse(xhttp.responseText);

		// para cada filme no JSON, criar objeto Filme e colocar em um ARRAY
		for (var i = 0; i < resposta.results.length; i++) {
			var novoFilme = new Filme(resposta.results[i].id, resposta.results[i].title, resposta.results[i].genre_ids,
				resposta.results[i].release_date, resposta.results[i].vote_average, "", resposta.results[i].poster_path,
				resposta.results[i].overview);
			
			var persistir = new Persistir();
			
			// se o filme está no localStorage, então não exibir no resultado da pesquisa
			if(persistir.verificaFilme(resposta.results[i].id)) {
				resultadoPesquisa.push(novoFilme);
			}
		}

		return resultadoPesquisa;
	}

	// pesquisa os filmes mais populares com base em um gênero
	maisPopulares(genero) {
		// A IMPLEMENTAR
	}

	// pesquisa os filmes assistidos no localStorage
	filmesAssistidos() {
		var recuperaAssistidos = new Persistir();
		var exibeAssistido = recuperaAssistidos.recuperaFilmes();
		return exibeAssistido;
	}
}