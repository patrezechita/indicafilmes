"use strict";

class Filme {

    constructor(id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse) {
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.data_estreia = data_estreia;
        this.nota_imdb = nota_imdb;

        if (nota_usuario) {
        	this.nota_usuario = nota_usuario;
        }

        if (sinopse) {
        	this.sinopse = sinopse;
        }

        if (link_capa === null) {
        	this.link_capa = "view/img/sem_capa.png"
        }

        else {
        	this.link_capa = "http://image.tmdb.org/t/p/w500" + link_capa;
        }
    }
}

class Pesquisa {

    porNome(nomeFilme) {
		var xhttp = new XMLHttpRequest();
		var token = new Token();
    	var url = "http://api.themoviedb.org/3/search/movie?api_key=" + token.geraNovo() + "&query=" + nomeFilme + "'";
    	var resultadoPesquisa = new Array();

		xhttp.open("GET", url, false);
		xhttp.send();

		var resposta = JSON.parse(xhttp.responseText);

    	for (var i = 0; i < resposta.results.length; i++) {
			var novoFilme = new Filme(resposta.results[i].id, resposta.results[i].title, resposta.results[i].genre_ids, resposta.results[i].release_date,
				resposta.results[i].vote_average, "", resposta.results[i].poster_path, resposta.results[i].overview);
			
			resultadoPesquisa.push(novoFilme);
			//var conecao = new Persiste;
			//conecao.guardaFilme(novoFilme);
    	}

		return resultadoPesquisa;
    }

    emCartaz () {

    }

    maisPopulares (genero) {

    }
}

class Token {

	//var listaTokens = [];
	geraNovo () {
		return "871050ddbdac415dbd122a25e60e7208";
	}
}

class Genero {

	constructor (generoNum) {
		this.generoNum = generoNum;
	}

	recuperaNome () {

		switch (this.generoNum) {
			case 28:
				return "Action";
			case 12:
				return "Adventure";
			case 16:
				return "Animation";	
			case 35:
				return "Comedy";
			case 80:
				return "Crime";
			case 99:
				return "Documentary";
			case 18:
				return "Drama";
			case 10751:
				return "Family";
			case 14:
				return "Fantasy";
			case 10769:
				return "Foreign";
			case 36:
				return "History";
			case 27:
				return "Horror";
			case 10402:
				return "Music";
			case 9648:
				return "Mystery";
			case 10749:
				return "Romance";
			case 878:
				return "Science Fiction";
			case 10770:
				return "TV Movie";
			case 53:
				return "Thriller";
			case 10752:
				return "War";
			case 37:
				return "Western";
			default:
				return "SEM CATEGORIA";
		}
	}
}

class Imprime {
	constructor(filmes) {
        this.filmes = filmes;
    }

    divPesquisaNome () {
		for(var i = 0; i < this.filmes.length; i++) {

			var nomeVetor = new Array();
		//console.log(this.filmes[i].genero.length);
			for(var j=0; j<this.filmes[i].genero.length; j++) {
				var genero = new Genero(this.filmes[i].genero[j]);
				//console.log(this.filmes.genero[j]);
				nomeVetor.push(genero.recuperaNome());
				//console.log(this.filmes[i].genero[j]);
			}

			//console.log(nomeVetor);


			document.getElementById("divPesquisa").innerHTML += "<div id='filmeCapaCompleta'><img src='" + this.filmes[i].link_capa + "'/>" +
                "<br><strong>" + this.filmes[i].nome + "</strong>" +
                "<ul><li>Ano:" + this.filmes[i].ano + "</li>" +
                "<li>Genero:" + nomeVetor + "</li>" +
                "<li>Sinopse:" + this.filmes[i].sinopse + "</li>" +
                "<li>imdb:" + this.filmes[i].nota_imdb + "</li></ul></div>";
	
		}
   	}

   	divIndicados () {

   	}

	divEmCartaz () {

   	}

   	divAssistidos () {

   	}
    
}

class Persiste {
    guardaFilme (filme) {
    	var filmeSerializado = JSON.stringify(filme);
    	localStorage.setItem(filme.id, filmeSerializado);
    }

    verificaFilme (id) {

    }
    
    recuperaFilmes () {

    }
}



// recebe um nome para pesquisar e retorna JSON com os filmes que achar
function pesquisaFilmeNome(nomeFilme) {



	var novaPesquisa = new Pesquisa ();
	var resultadoPesquisa = novaPesquisa.porNome(nomeFilme);

	//console.log(resultadoPesquisa);


	var imprime = new Imprime(resultadoPesquisa);
	imprime.divPesquisaNome();



}




var teste = new Genero(37);
console.log(teste.recuperaNome());





//API Key: 871050ddbdac415dbd122a25e60e7208

//lembrar de aleatorizar a porra do token
