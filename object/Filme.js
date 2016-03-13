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
        	this.link_capa = link_capa;
        }
    }
}