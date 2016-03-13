"use strict";

class Persistir {
    // recebe um objeto Filme, serializa ele e guarda no localStorage
    guardaFilme(filme) {
        var filmeSerializado = JSON.stringify(filme);
        localStorage.setItem(filme.id, filmeSerializado);
    }

    // verifica se um ID de Filme está no banco de dados localStorage
    verificaFilme(id) {
        // A IMPLEMENTAR
    }
    
    // recupera todos os Filmes que estão no localStorage, devolve um ARRAY de objetos Filme
    recuperaFilmes() {
        var i;
        var resultado = new Array();

        // para cada elemento no localStorage, criar um objeto Filme e guarda no ARRAY
        for(i=0; i<localStorage.length; i++) {
            var chave = localStorage.key(i);
            var item = localStorage.getItem(chave);
            item = JSON.parse(item);

            // separa os gêneros da string e cria um vetor
            item.genero = item.genero.split(",");
            
            var filmeRecuperado = new Filme(parseInt(item.id), item.nome, item.genero, item.data_estreia, item.nota_imdb, item.nota_usuario, item.link_capa, "");
            resultado.push(filmeRecuperado);
        }

        return resultado;
    }

    // limpa banco de dados local storage
    limpaBD() {
        localStorage.clear();
    }
}