"use strict";

class Indicar {
	indica() {

	// jSON responsável por guardar para cada gênero, o número de filmes que foram assistidos
	// e a soma das notas do usuário dada a cada um deles
	var matrizPreferencia = new Array();

	// busca no banco de dados todos os filmes que já foram assistidos
	var filmesAssistidos = new Pesquisar();
	var arrayFilmesAssistidos = filmesAssistidos.filmesAssistidos();

	// para cada filme que já foi assistido
	for(var i = 0; i < arrayFilmesAssistidos.length; i++){
		
		// para cada gênero de cada filme
		for(var j = 0; j < arrayFilmesAssistidos[i].genero.length; j++) {
			
			// flag de controle, gênero está no jSON ou não. por padrão não está.
			flag = false;

			// guarda o numero do gênero atual
			var numGenero = arrayFilmesAssistidos[i].genero[j];

			// pesquisa no jSON se o gênero já está lá
			for(var k = 0; k < matrizPreferencia.length; k++) {
				
				// se o gênero está, então acrescentar número de filmes e soma das notas
				if(matrizPreferencia[k].id == numGenero) {
					matrizPreferencia[k].qtdFilmes++;
					var somaAux = parseInt(matrizPreferencia[k].somaNotas) + parseInt(arrayFilmesAssistidos[i].nota_usuario);
					matrizPreferencia[k].somaNotas = somaAux;
					var nivelAux = parseInt(matrizPreferencia[k].somaNotas) / parseInt(matrizPreferencia[k].qtdFilmes);
					matrizPreferencia[k].nivelPreferencia = nivelAux;
					var flag = true;
				}
			}

			// se a flag continuar FALSE, então gênero não está no jSON. adicionar o objeto no array
			if(flag == false) {
				var entradaGenero = '{"id":"' + numGenero + '","somaNotas":"' + arrayFilmesAssistidos[i].nota_usuario 
				+ '","qtdFilmes":"1","nivelPreferencia":"' + arrayFilmesAssistidos[i].nota_usuario + '"}';
				matrizPreferencia.push(JSON.parse(entradaGenero));
			}
		}
	}

	var somaPreferencias = 0;

	// somar os níveis de preferência
	for(var i = 0; i < matrizPreferencia.length; i++) {
		somaPreferencias += parseFloat(matrizPreferencia[i].nivelPreferencia);
	}

	// jSON responsável por guardar para cada gênero, seu valor de importância em porcentagem
	var matrizImportancia = new Array();

	// para cada gênero na matriz de preferência
	for(var i = 0; i < matrizPreferencia.length; i++) {
		// calcular o nível de importância em porcentagem e salvar no jSON
		var importancia = parseFloat(matrizPreferencia[i].nivelPreferencia) * 10 / somaPreferencias;
		var entradaImportancia = '{"id":"' + matrizPreferencia[i].id + '","importancia":"' + Math.ceil(importancia) + '"}';
		matrizImportancia.push(JSON.parse(entradaImportancia));
	}

	// com os níveis de importância definidos, sendo inteiros que somados dão em torno de 10 resultados
	// para cada gênero, buscar a quatidade de filmes iguais ao seu número de importância
	// assim formando a saída dos filmes indicados
	var resultadoIndica = new Array();

	for(var i = 0; i < matrizImportancia.length; i++) {
		// pesquisa pelo gênero
		var novaPesquisa = new Pesquisar();
		var resultadoPesquisa = novaPesquisa.maisPopulares(parseInt(matrizImportancia[i].id));
		
		var qtdImportancia = parseInt(matrizImportancia[i].importancia);
		// adiciona filmes na quantidade da importância
		for(j = 0; j < qtdImportancia; j++) {
			
			// essa parte é meio sinistra. se um filme for indicado mas ele já está no vetor de indicações
			// então deve ser ignorado e o contador de importância deve ser incrementado
			// para que não se perca o lugar do filme que foi ignorado
			// flag de controle para adicionar ou não
			var flagAdd = true;
			
			// se o vetor de indicação não for nulo
			if(resultadoIndica != "") {
				// para cada elemento no vetor de indicação
				for(var k = 0; k < resultadoIndica.length; k++) {
					// compara se ele está já no vetor de indicação
					if(resultadoPesquisa[j].id == resultadoIndica[k].id) {
						// se estiver, seta a flag false
						flagAdd = false;
					}
				}
			}

			// o filme não está no vetor então pode ser adicionado
			if(flagAdd == true) {
			resultadoIndica.push(resultadoPesquisa[j]);
			}

			// já que o filme está, incrementa o contador para pesquisar novamente
			else {
				qtdImportancia++;
			}
		}
	}

	return resultadoIndica;
	}
}