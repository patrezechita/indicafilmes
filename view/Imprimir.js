"use strict";

class Imprimir {
	constructor(filmes) {
		this.filmes = filmes;
	}

	// imprime um ARRAY de filmes em uma DIV especifica
	imprimeFilmeCompleto(localImpressao) {
		// FOR para cada objeto Filme do ARRAY
		for(var i = 0; i < this.filmes.length; i++) {
			var nomeVetor = new Array();
		
			// FOR para receber nome de cada gênero do ARRAY de cada Filme
			for(var j=0; j<this.filmes[i].genero.length; j++) {
				var genero = new GerenciarGenero(this.filmes[i].genero[j]);
				nomeVetor.push(genero.recuperaNome());
			}

			// serializa o array, retira todas as virgulas e preenche com espaço
			nomeVetor = nomeVetor.toString().replace(/,/g, " ");

			// geração da STRING que cria os parâmetros para o botão 'já assisti'
			// está feio e estranho, mas funciona xD
			var stringAuxiliar = "\"" + this.filmes[i].id + "\", \"" + 
				this.filmes[i].nome + "\", \"" + 
				this.filmes[i].genero + "\", \"" + 
				this.filmes[i].data_estreia + "\", \"" + 
				this.filmes[i].nota_imdb + "\", \"" + 
				"" + "\", \"" + 
				this.filmes[i].link_capa + "\", \"" ;

			// adiciona URL para o link da capa. se não tiver capa, não faz nada (começa com view/img...)
			if(this.filmes[i].link_capa[0] != "v") {
				var capa = "http://image.tmdb.org/t/p/w500" + this.filmes[i].link_capa;
			}

			// imprime no HTML o DIV contendo o filme
			document.getElementById(localImpressao).innerHTML += 
				"<div id='filmeCapaCompleta'>" +
				"<img src='" + capa + "' alt='" + this.filmes[i].nome + "'/>" +
				"<h3>" + this.filmes[i].nome + "</h3>" +
				"<ul><li>Ano: " + this.filmes[i].data_estreia.slice(0,4) + "</li>" +
				"<li>Gênero: " + nomeVetor + "</li>" +
				"<li>Sinopse: " + this.filmes[i].sinopse + "</li>" +
				"<li>Nota IMDb: " + this.filmes[i].nota_imdb + "</li></ul></div>";

			// FOR para gerar os botões de nota 1 a 5
			for(var k=1; k<6; k++) {
				var stringAuxiliar2 = stringAuxiliar;
				stringAuxiliar2 += k + "\"";
				document.getElementById(localImpressao).innerHTML +=
				"<button type='button' name='button' onclick='guardaFilme(" + stringAuxiliar2 + ")'>Nota " + k +"</button>";
			}
		}
	}

	// imprime um ARRAY de objetos Filme na div de filmes asistidos
	imprimeFilmeSimples () {
		// FOR para percorrer o ARRAY de Filmes
		for(var i = 0; i < this.filmes.length; i++) {

			// cria ARRAY para guardar os generos
			var nomeVetor = new Array();

			// recupera o nome de todos os generos
			for(var j=0; j<this.filmes[i].genero.length; j++) {
				var genero = new GerenciarGenero(this.filmes[i].genero[j]);
				nomeVetor.push(genero.recuperaNome());
			}

			// serializa o array, retira todas as virgulas e preenche com espaço
			nomeVetor = nomeVetor.toString().replace(/,/g, " ");

			// adiciona URL para o link da capa. se não tiver capa, não faz nada (começa com view/img...)
			if(this.filmes[i].link_capa[0] != "v") {
				var capa = "http://image.tmdb.org/t/p/w500" + this.filmes[i].link_capa;
			}

			// imprime no HTML o DIV contendo o filme assistido
			document.getElementById("divFilmesAssistidos").innerHTML +=
				"<div id='filmeCapaCompleta'>" +
				"<img src='" + capa + "' alt='" + this.filmes[i].nome + "'/>" +
				"<h3>" + this.filmes[i].nome + "</h3>" +
				"<ul><li>Ano: " + this.filmes[i].data_estreia.slice(0,4) + "</li>" +
				"<li>Gênero: " + nomeVetor + "</li>" +
				"<li>Nota IMDb: " + this.filmes[i].nota_imdb + "</li>" +
				"<li>Sua Nota: " + this.filmes[i].nota_usuario + "</li></ul></div>";
		}
	}
}