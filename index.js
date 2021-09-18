var inputFilme = document.querySelector(".adiciona__url");
var botao = document.querySelector(".adiciona__filme");
var listaFilmes = document.querySelector(".lista__filmes");
var mensagemErroDiv = document.querySelector(".mensagem__erro");
var filmes = [""];

botao.addEventListener("click", function () {
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
});

function adicionarFilmesNaTela(filme) {
  var elementoFilme = '<img class = "imagemFilmes" src =' + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  filmes.push(filme);
}