let movieList = JSON.parse(window.localStorage.getItem("movieList"));
console.log(movieList);
let currentMovie = ""

if (movieList === null) {
    window.localStorage.setItem("movieList", JSON.stringify());
}

const movieInput = document.querySelector(".movies-input");
const saveBtn = document.querySelector(".save-btn");
const ul = document.querySelector(".saved-movies");
const tick = document.querySelector(".tick");
const done = document.querySelector(".tick-linethrough");


const listRendering = () => {
    ul.innerHTML = ""
    let movieList = JSON.parse(window.localStorage.getItem("movieList"));
    movieList.forEach(movie => {
        const li = document.createElement("li");


        li.innerHTML = `
            <h3 class = "element">${movie} </h3>
            <div class = "box"><span onclick= "handleClick(this, '${movie}')" class = "cross"><i class="far fa-times-circle"></i></span> <span onclick= "handleTick(this)" class = "tick"><i class="far fa-check-circle"></i> </span> </div>
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
    movieList.push(currentMovie)
    window.localStorage.setItem("movieList", JSON.stringify(movieList))
    console.log(window.localStorage)
    listRendering()
})

function handleClick(e, item) {
    movieList.splice(movieList.indexOf(item), 1)
    window.localStorage.setItem("movieList", JSON.stringify(movieList))
    console.log(movieList, window.localStorage)
    e.parentNode.parentNode.style.display = "none"

}

function handleTick(currentElement) {

    currentElement.parentNode.previousElementSibling.style.textDecoration = (currentElement.parentNode.previousElementSibling.style.textDecoration === "line-through") ? ("none") : ("line-through")
    currentElement.firstElementChild.className = (currentElement.firstElementChild.className === "far fa-check-circle") ? ("fas fa-check-circle") : ("far fa-check-circle")

}
// -------------------
