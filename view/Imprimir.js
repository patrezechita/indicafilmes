"use strict";




class Imprimir {
	constructor(filmes) {
        this.filmes = filmes;
    }

    divPesquisaNome () {
		for(var i = 0; i < this.filmes.length; i++) {

			var nomeVetor = new Array();
		//console.log(this.filmes[i].genero.length);
			for(var j=0; j<this.filmes[i].genero.length; j++) {
				var genero = new GerenciarGenero(this.filmes[i].genero[j]);
				//console.log(this.filmes.genero[j]);
				nomeVetor.push(genero.recuperaNome());
				//console.log(this.filmes[i].genero[j]);
			}

			//console.log(nomeVetor);

			//recorta o nome do começo da capa
			//var link_capa_auxiliar;
			//link_capa_auxiliar = this.filmes[i].link_capa;
			//var tamanho = link_capa_auxiliar.length;
			//link_capa_auxiliar = link_capa_auxiliar.slice(30, tamanho);
			//console.log(link_capa_auxiliar);



			//cria uma string pra gerar o botao
			var stringAuxiliar = "\"" + this.filmes[i].id + "\", \"" + 
				this.filmes[i].nome + "\", \"" + 
				this.filmes[i].genero + "\", \"" + 
				this.filmes[i].data_estreia + "\", \"" + 
				this.filmes[i].nota_imdb + "\", \"" + 
				"" + "\", \"" + 
				this.filmes[i].link_capa + "\", \"" ;
	


				if(this.filmes[i].link_capa[0] == "v"){

				}else{
					var capa = "http://image.tmdb.org/t/p/w500" + this.filmes[i].link_capa;
				}
			//console.log(stringAuxiliar);
			document.getElementById("divPesquisaNome").innerHTML += 
				"<div id='filmeCapaCompleta'>" +
				"<img src='" + capa + "' alt='" + this.filmes[i].nome + "'/>" +
                "<br><h3>" + this.filmes[i].nome + "</h3>" +
                "<ul><li>Ano:" + this.filmes[i].data_estreia + "</li>" +
                "<li>Genero:" + nomeVetor + "</li>" +
                "<li>Sinopse:" + this.filmes[i].sinopse + "</li>" +
                "<li>imdb:" + this.filmes[i].nota_imdb + "</li></ul></div>";

                var k;
                for(k=1; k<6; k++){
                	var stringAuxiliar2 = stringAuxiliar;
                	stringAuxiliar2 += k + "\"";
                	//console.log(stringAuxiliar2);
                	document.getElementById("divPesquisaNome").innerHTML +=
                	"<button type='button' name='button' onclick='guardaFilme(" + stringAuxiliar2 + ")'>Já Assisti! Nota" + k +"</button>";
                }
                


                //id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse
	
		}
   	}

   	divIndicados () {

   	}

	divEmCartaz () {

   	}

   	divAssistidos () {
		for(var i = 0; i < this.filmes.length; i++) {

			var nomeVetor = new Array();
		//console.log(this.filmes[i].genero.length);
			for(var j=0; j<this.filmes[i].genero.length; j++) {
				var genero = new GerenciarGenero(this.filmes[i].genero[j]);
				//console.log(this.filmes.genero[j]);
				nomeVetor.push(genero.recuperaNome());
				//console.log(this.filmes[i].genero[j]);
			}

			//console.log(nomeVetor);

			//recorta o nome do começo da capa
			//var link_capa_auxiliar;
			//link_capa_auxiliar = this.filmes[i].link_capa;
			//var tamanho = link_capa_auxiliar.length;
			//link_capa_auxiliar = link_capa_auxiliar.slice(30, tamanho);
			//console.log(link_capa_auxiliar);



			//cria uma string pra gerar o botao


				if(this.filmes[i].link_capa[0] != "v"){

				
					var capa = "http://image.tmdb.org/t/p/w500" + this.filmes[i].link_capa;
				}
			//console.log(stringAuxiliar);
			document.getElementById("divFilmesAssistidos").innerHTML += 
				"<div id='filmeCapaCompleta'>" +
				"<img src='" + capa + "' alt='" + this.filmes[i].nome + "'/>" +
                "<br><h3>" + this.filmes[i].nome + "</h3>" +
                "<ul><li>Ano:" + this.filmes[i].data_estreia + "</li>" +
                "<li>Genero:" + nomeVetor + "</li>" +
                "<li>Sinopse:" + this.filmes[i].sinopse + "</li>" +
                "<li>imdb:" + this.filmes[i].nota_imdb + "</li></ul></div>";

     
                


                //id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse
	
		}
   	}
    
}