// recebe um nome para pesquisar e retorna JSON com os filmes que achar
function pesquisaFilmeNome(nomeFilme) {




    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.themoviedb.org/3/search/movie?api_key=" + geraToken() + "&query=" + nomeFilme + "'";

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //myFunction(xmlhttp.responseText);
            var myArr = JSON.parse(xmlhttp.responseText);
            //console.log(myArr.results[2]);


                    for (var i = 0; i < myArr.results.length; i++) {


                        if (myArr.results[i].poster_path === null) {
                            myArr.results[i].poster_path = "semcapa.png";
                        }
                        else{
                            myArr.results[i].poster_path = "http://image.tmdb.org/t/p/w500" + myArr.results[i].poster_path;
                        }
            //document.getElementById("divPesquisa").innerHTML = "";
            //desenha_IMDb_DIV(response.Search[i].imdbID, "divPesquisa");
            //console.log(response.Search[i].Title + " " + response.Search[i].imdbID);
            //document.getElementById("demo").innerHTML += response.Search[i].Title + " ";
            console.log(myArr.results[i]);
            document.getElementById("divPesquisa").innerHTML += "<div id='filmeCapaCompleta'><img src='" + myArr.results[i].poster_path + "'/>" +
                "<br><strong>" + myArr.results[i].original_title + "</strong>" +
                "<ul><li>Ano:" + myArr.results[i].release_date + "</li>" +
                "<li>Genero:" + "" + "</li>" +
                "<li>Sinopse:" + myArr.results[i].overview + "</li>" +
                "<li>nota:" + myArr.results[i].vote_average + "</li>" +
                "<li>imdb:" + "" + "</li></ul></div>";

            }







        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


}


function geraToken(){
    return "871050ddbdac415dbd122a25e60e7208";
}

//desenha_IMDb_DIV("tt1424432", "divPesquisa");

// recebe o IMDb de um filme e o ID da DIV para desenhar
function desenha_IMDb_DIV(imdb, div) {

    $.ajax({
        url: 'http://www.omdbapi.com/?i=' + imdb + '&plot=short&r=json',
        type: 'get',
        dataType: 'jsonp',

        success: function(response, textStatus, jqXHR) {


            if (response.Poster == "N/A") {
                response.Poster = "semcapa.png";
            }


            document.getElementById(div).innerHTML += "<div id='filmeCapaCompleta'><img src='" + response.Poster + "'/>" +
                "<br><strong>" + response.Title + "</strong>" +
                "<ul><li>Ano:" + response.Year + "</li>" +
                "<li>Genero:" + response.Genre + "</li>" +
                "<li>Sinopse:" + response.Plot + "</li>" +
                "<li>nota:" + response.imdbRating + "</li>" +
                "<li>imdb:" + "" + "</li></ul></div>";



        },

        error: function(jqXHR, textStatus, errorThrown) {
            // tratamento de erro
        }
    });



}

//desenhaFilmeDIV("divPesquisa", "batman", 2008, "comedia", "um cara muito louco de balinha", "http://ia.media-imdb.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg", "7.9", "tt93847");

function desenhaFilmeDIV(div, nome, ano, genero, sinopse, capa, nota, imdb) {

    document.getElementById(div).innerHTML += "<div id='filmeCapaCompleta'><img src='" + capa + "'/>" +
        "<br><strong>" + nome + "</strong>" +
        "<ul><li>Ano:" + ano + "</li>" +
        "<li>Genero:" + genero + "</li>" +
        "<li>Sinopse:" + sinopse + "</li>" +
        "<li>nota:" + nota + "</li>" +
        "<li>imdb:" + imdb + "</li></ul></div>";

}




// recebe um número IMDB e retorna
function pesquisaFilmeIMDB(imdb) {

}



// recebe JSON com resultado da pesquisa e desenha no HTML
function desenhaPesquisaFilme(jsonFilmes) {
    console.log(jsonFilmes);
}

function porra() {
    return "porra";

}


var fita;
fita = porra();

//console.log(fita);

function louco() {
    //alert("porra");

    var pesquisatermo = document.getElementById("pesquisa").value;
    var zica;

    $.ajax({
        //  data: parms,
        url: 'http://www.omdbapi.com/?s=' + pesquisatermo + '&r=JSON&type=movie',
        type: 'get',
        dataType: 'jsonp',
        success: function(response, textStatus, jqXHR) {
            // Here your code
            console.log(JSON.stringify(response.Search[0]));
            //  zica = JSON.stringify(response);
            document.getElementById("demo").innerHTML = zica;




            for (var i = 0; i < response.Search.length; i++) {
                console.log(response.Search[i].Title);
                document.getElementById("demo").innerHTML += response.Search[i].Title + " ";
            }








        },
        error: function(jqXHR, textStatus, errorThrown) {}
    });



}























//API Key: 871050ddbdac415dbd122a25e60e7208

//lembrar de aleatorizar a porra do token
