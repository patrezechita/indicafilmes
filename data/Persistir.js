"use strict";

class Persistir {
    guardaFilme(filme) {
    	var filmeSerializado = JSON.stringify(filme);
    	localStorage.setItem(filme.id, filmeSerializado);
    }

    verificaFilme(id) {

    }
    
    recuperaFilmes() {
        var i;
        var resultado = new Array();
        for(i=0; i<localStorage.length; i++){
            var chave = localStorage.key(i);
            var lol = localStorage.getItem(chave);
            lol = JSON.parse(lol);



            lol.genero = lol.genero.split(",");
            

            var filmeRecuperado = new Filme(parseInt(lol.id), lol.nome, lol.genero, lol.data_estreia, lol.nota_imdb, lol.nota_usuario, lol.link_capa, "");
            resultado.push(filmeRecuperado);
            //console.log(resultado);



            //(id, nome, genero, data_estreia, nota_imdb, nota_usuario, link_capa, sinopse)
        }

        return resultado;

    }

    // limpa banco de dados local storage
    limpaBD() {
        localStorage.clear();
    }
}