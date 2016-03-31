"use strict";

class GerenciarToken {
	constructor() {
		// adiciona manualmente os Tokens cadastrados para uso da API
		// podem ser gerados novos em https://www.themoviedb.org/
		this.listaTokens = ["871050ddbdac415dbd122a25e60e7208"];
	}

	// retorna um Token aleatório da API
	geraNovo () {
		var numAleatorio = Math.floor((Math.random() * this.listaTokens.length) + 1);
		return this.listaTokens[numAleatorio-1];
	}
}