"use strict";

class Filme {
    constructor(id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse) {
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.data_estreia = data_estreia;
        this.nota_imdb = nota_imdb;

        // nota de usuário é opcional
        if (nota_usuario) {
            this.nota_usuario = nota_usuario;
        }

        // sinopse é opcional
        if (sinopse) {
            this.sinopse = sinopse;
        }
        // mas se não houver, preencher com "(...)"
        else {
            this.sinopse = "(...)";
        }

        // se não tem capa, então criar caminho para o erro de capa
        if (link_capa === null) {
            this.link_capa = "view/img/sem_capa.png"
        } 
        else {
            this.link_capa = link_capa;
        }
    }
}