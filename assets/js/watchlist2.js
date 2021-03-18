let movieList = JSON.parse(window.localStorage.getItem("movieList"))|| []
console.log(movieList);
let currentMovie = ""
/* 
if (movieList === null) {
    window.localStorage.setItem("movieList", JSON.stringify());
} */

const movieInput = document.querySelector(".movies-input");
const saveBtn = document.querySelector(".save-btn");
const ul = document.querySelector(".saved-movies");
const tick = document.querySelector(".tick");
const done = document.querySelector(".tick-linethrough");


const listRendering = () => {
    ul.innerHTML = ""
   /*  let movieList = JSON.parse(window.localStorage.getItem("movieList")); */
    movieList.forEach(movie => {
        const li = document.createElement("li");


        li.innerHTML = `
            <h3 class="element ${movie.viewed && 'viewed-movie'}">${movie.title} </h3>
            <div class = "box"><span onclick= "handleDelete(this, '${movie.title}')" class = "cross"><i class="far fa-times-circle"></i></span> <span onclick= "handleViewedClick(this, '${movie.title}')" class = "tick"><i class="far fa-check-circle"></i> </span> </div>
        `
        ul.appendChild(li);
    })
}

listRendering();


movieInput.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(currentMovie);
    currentMovie = e.target.value
    console.log(currentMovie);
})



saveBtn.addEventListener("click", (e) => {
    e.preventDefault()
    movieList.push({
        title: currentMovie,
        viewed: false
    })
    window.localStorage.setItem("movieList", JSON.stringify(movieList))
    console.log(window.localStorage)
    listRendering()
})

function handleDelete(e, title) {
   /*  movieList.splice(movieList.indexOf(item), 1) */
   movieList = movieList.filter((movie) => movie.title !== title);
    window.localStorage.setItem("movieList", JSON.stringify(movieList))
    console.log(movieList, window.localStorage)
    listRendering()   

}

function handleViewedClick(e, title) {

   /*  const selectedMovie = movieList.filter((movie) => movie.title === title)[0];
     const remainingMovies = movieList.filter((movie) => movie.title !== title); */
      const remainingMovies = movieList.map((movie) => {
          if (movie.title === title) {
               movie.viewed = !movie.viewed;
          }

          return movie
      });
    console.log(remainingMovies)
   /*  if (selectedMovie) {
        selectedMovie.viewed = !selectedMovie.viewed;
        movieList = [...remainingMovies, selectedMovie];
         window.localStorage.setItem("movieList", JSON.stringify(movieList))
         listRendering()
    }
     */
    window.localStorage.setItem("movieList", JSON.stringify(remainingMovies))
   listRendering()
    console.log(movieList, window.localStorage)
  

   /*  currentElement.parentNode.previousElementSibling.style.textDecoration = (currentElement.parentNode.previousElementSibling.style.textDecoration === "line-through") ? ("none") : ("line-through")
    currentElement.firstElementChild.className = (currentElement.firstElementChild.className === "far fa-check-circle") ? ("fas fa-check-circle") : ("far fa-check-circle")
 */
}
// -------------------
