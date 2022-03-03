const API_KEY = "ef55d6697437c53087339ef162ae88b2";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=`;
const MOVIE_URL = "https://api.themoviedb.org/3/movie/";
const movieInput = document.querySelector(".main__add__url");
const addButton = document.querySelector(".main__add__item");
const moviesList = document.querySelector(".main__movie__list");
const mainOptions = document.querySelector(".main__options");
const movieSection = document.querySelector("#escolha");
const errorMessageSection = document.querySelector(".main__error__message");
const errorSection = document.querySelector(".center");
var movies = [];

// Fazer a verificação de filmes repetidos

const fetchData = async (movieName) => {
  const requisition = await fetch(`${BASE_URL}${movieName}`);
  const response = await requisition.json();
  return response;
};

const fetchMovie = async (id) => {
  const requisition = await fetch(`${MOVIE_URL}${id}?api_key=${API_KEY}`);
  const response = await requisition.json();
  return response;
};

addButton.addEventListener("click", async () => {
  const error = `O campo de busca não pode estar vazio`;
  if (movieInput.value) {
    const data = await fetchData(movieInput.value);
    const item = data.results
      .map(
        (item) =>
          `<section class="movie__card" onclick="selectedItem(${item.id})" key=${item.id}>
          <figure>
            <img class="movie__card__poster" src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="Poster filme"/>
          </figure>
        <p class="movie__card__title">${item.original_title}</p>
      </section>`
      )
      .join("");
    movieSection.innerHTML = item;
    moviesList.classList.add("disabled");
    mainOptions.classList.remove("disabled");
  } else {
    errorWindow(error);
  }
});

const selectedItem = async (id) => {
  mainOptions.classList.add("disabled");
  moviesList.classList.remove("disabled");
  const error = `Este item já foi adicionado`;
  const data = await fetchMovie(id);
  const found = movies.find((item) => item.id === id);
  if (found) {
    errorWindow(error);
  } else {
    const movie = `
    <section class="movie">
      <img class="movie__poster" src="https://image.tmdb.org/t/p/w300${data.poster_path}" alt="Poster filme"/>
      <p class="movie__title">${data.original_title}</p>
    </section>
    `;
    moviesList.innerHTML = moviesList.innerHTML + movie;
    movies.push(data);
  }
};

const closeWindow = () => {
  errorSection.classList.add("disabled");
  errorMessageSection.innerHTML = "";
};

const errorWindow = (errorMessage) => {
  const htmlItem = `<p class='main__error'>${errorMessage}</p>
    <button class='button' onclick='closeWindow()'>Fechar</button>`;
  errorSection.classList.remove("disabled");
  errorMessageSection.innerHTML = htmlItem;
};
