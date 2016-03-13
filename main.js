"use strict";

// define as funções de desenho que são automáticas
function iniciaApp() {
	imprimeFilmesAssistidos();
}

// pesquisa um nome de filme e imprime o resultado
function pesquisaFilmeNome(nomeFilme) {
	var novaPesquisa = new Pesquisar ();
	var resultadoPesquisa = novaPesquisa.porNome(nomeFilme);
	var imprime = new Imprimir(resultadoPesquisa);
	imprime.imprimeFilmeCompleto("divPesquisaNome");
}

// guarda um filme do botão de assistidos no banco de dados localStorage
function guardaFilme(id, nome, genero, data_estreia, nota_imdb, sinopse, link_capa, nota_usuario) {
	var filme = new Filme(id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse);
	var persiste = new Persistir();
	persiste.guardaFilme(filme);
}

// imprime todos os filmes assistidos
function imprimeFilmesAssistidos() {
	var filmesAssistidos = new Pesquisar();
	var exibeFilmesAssistidos = filmesAssistidos.filmesAssistidos();
	var imprimeAssistido = new Imprimir(exibeFilmesAssistidos);
	imprimeAssistido.imprimeFilmeSimples();
}

// limpa o banco de dados localStorage
function limpaBD() {
	var banco = new Persistir;
	banco.limpaBD();
}

// inicia as funções automáticas
iniciaApp();