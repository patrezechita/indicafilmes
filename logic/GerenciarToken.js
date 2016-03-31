"use strict";

class GerenciarToken {
	constructor() {
		// adiciona manualmente os Tokens cadastrados para uso da API
		// podem ser gerados novos em https://www.themoviedb.org/
		this.listaTokens = ["871050ddbdac415dbd122a25e60e7208", "6d438495b64050669539214cfe64ac5f", "cb523d57bc7016ace06e4d408e6192d3"];
	}

	// retorna um Token aleatório da API
	geraNovo () {
		var numAleatorio = Math.floor((Math.random() * this.listaTokens.length) + 1);
		return this.listaTokens[numAleatorio-1];
	}
}