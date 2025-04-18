const movies = [
  { title: "Inception", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
  { title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { title: "Tenet", image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },
  { title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
];

const movieRow = document.getElementById("movieRow");
const myListRow = document.getElementById("myListRow");

function renderMovies(container, movieArray) {
  container.innerHTML = "";
  movieArray.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;
    img.title = "Click to add/remove from My List";
    img.onclick = () => toggleMyList(movie);
    container.appendChild(img);
  });
}

function getMyList() {
  const list = localStorage.getItem("myList");
  return list ? JSON.parse(list) : [];
}

function saveMyList(list) {
  localStorage.setItem("myList", JSON.stringify(list));
}

function toggleMyList(movie) {
  let myList = getMyList();
  const exists = myList.find((m) => m.title === movie.title);
  if (exists) {
    myList = myList.filter((m) => m.title !== movie.title);
  } else {
    myList.push(movie);
  }
  saveMyList(myList);
  renderMovies(myListRow, myList);
}

function addToList(title) {
  const movie = movies.find((m) => m.title === title);
  if (movie) toggleMyList(movie);
}

function playMovie() {
  alert("Playing movie (placeholder)");
}

// Initial render
renderMovies(movieRow, movies);
renderMovies(myListRow, getMyList());
