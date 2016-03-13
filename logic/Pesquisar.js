"use strict";

class Pesquisar {
    porNome(nomeFilme) {
		var xhttp = new XMLHttpRequest();
		var token = new GerenciarToken();
    	var url = "http://api.themoviedb.org/3/search/movie?api_key=" + token.geraNovo() + "&query=" + nomeFilme + "'";
    	console.log(url);
    	var resultadoPesquisa = new Array();

		xhttp.open("GET", url, false);
		xhttp.send();

		var resposta = JSON.parse(xhttp.responseText);

    	for (var i = 0; i < resposta.results.length; i++) {
			var novoFilme = new Filme(resposta.results[i].id, resposta.results[i].title, resposta.results[i].genre_ids, resposta.results[i].release_date,
				resposta.results[i].vote_average, "", resposta.results[i].poster_path, resposta.results[i].overview);
			
			resultadoPesquisa.push(novoFilme);
			//var conecao = new Persistir;
			//conecao.guardaFilme(novoFilme);
    	}

		return resultadoPesquisa;
    }

    emCartaz() {

    }

    maisPopulares(genero) {

    }

    filmesAssistidos() {

    }
}