var inputFilme = document.querySelector(".adiciona__url");
var inputTrailer = document.querySelector(".adiciona__link");
var botaoAdiciona = document.querySelector(".adiciona__item");
var botaoRemove = document.querySelector(".remove__item");
var listaFilmes = document.querySelector(".lista__filmes");
var mensagemErroDiv = document.querySelector(".mensagem__erro");
var filmes = [""];
var filmeUrl = inputFilme.value;
var trailerUrl = inputTrailer.value;

botaoAdiciona.addEventListener("click", function () {
  var filmeUrl = inputFilme.value;
  if (
    filmeUrl.endsWith(".jpg") ||
    filmeUrl.endsWith(".png") ||
    filmeUrl.endsWith(".JPG") ||
    filmeUrl.endsWith(".PNG") ||
    filmeUrl.endsWith(".gif")
  ) {
    if (filmes.indexOf(filmeUrl) != -1) {
      var mensagemFilmeRepetido =
        "<p>" + "Erro, não é possível adicionar dois itens iguais" + "</p>";
      mensagemErroDiv.innerHTML = mensagemFilmeRepetido;
    } else {
      adicionarFilmesNaTela(filmeUrl);
      var limparErro = "<p>" + "" + "</p>";
      mensagemErroDiv.innerHTML = limparErro;
    }
  } else {
    var mensagemErro =
      "<p>" +
      "Erro, não foi possível adicionar o item. É necessário inserir uma imagem .jpg" +
      "</p>";
    mensagemErroDiv.innerHTML = mensagemErro;
  }
  inputFilme.value = "";
  inputTrailer.value = "";
});

function adicionarFilmesNaTela(filme) {
  var trailerUrl = inputTrailer.value;
  var elementoFilme =
    "<a target =_blank href =" +
    trailerUrl +
    ">" +
    "<img class = imagemFilmes src =" +
    filme +
    ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  filmes.push(filme);
}
