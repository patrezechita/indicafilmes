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
                "<br><strong>" + myArr.results[i].title + "</strong>" +
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



//API Key: 871050ddbdac415dbd122a25e60e7208

//lembrar de aleatorizar a porra do token
