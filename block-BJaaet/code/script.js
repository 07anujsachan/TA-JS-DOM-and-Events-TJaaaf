let movies = document.querySelector(".movies");
let input = document.querySelector(".movie-input");

let allMovies = [];

function handleSubmit(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    let movie = {
      name: value,
      watched: false,
    };
    allMovies.push(movie);
    event.target.value = "";
    createUI();
  }
}

function handleDelete(e) {
    let id = e.target.dataset.id
    console.log(id);
    allMovies.splice(id , 1)
    createUI()
}

function createUI(data = allMovies) {
  movies.innerHTML = "";
  data.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = movie.watched;
    input.addEventListener("click", () => {
      movie.watched = !movie.watched;
    });
    let p = document.createElement("p");
    p.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", i);
    span.addEventListener("click", handleDelete);
    li.append(input, p, span);
    movies.append(li);
  });
}

input.addEventListener("keyup", handleSubmit);
