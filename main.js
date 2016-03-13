"use strict";




// recebe um nome para pesquisar e retorna JSON com os filmes que achar
function pesquisaFilmeNome(nomeFilme) {



	var novaPesquisa = new Pesquisar ();
	var resultadoPesquisa = novaPesquisa.porNome(nomeFilme);

	//console.log(resultadoPesquisa);


	var imprime = new Imprimir(resultadoPesquisa);
	imprime.divPesquisaNome();





}

function fodase(lol){

}

function guardaFilme(id, nome, genero, data_estreia, nota_imdb, sinopse, link_capa, nota_usuario) {
	//var filmeSerializado = JSON.stringify(filme);
    	var filme = new Filme(id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse);
    	var persiste = new Persistir();
    	persiste.guardaFilme(filme);
}

function limpaBD() {
	var banco = new Persistir;
	banco.limpaBD();
}

function fodase(){
	console.log("foda-se");
}

var teste = new GerenciarGenero(37);
console.log(teste.recuperaNome());



var recuperaAssistidos = new Persistir();
var exibeAssistido = recuperaAssistidos.recuperaFilmes();
var imprimeAssistido = new Imprimir(exibeAssistido);

//console.log(exibeAssistido);
imprimeAssistido.divAssistidos();
//alert(localStorage.length);

//API Key: 871050ddbdac415dbd122a25e60e7208

//lembrar de aleatorizar a porra do token
