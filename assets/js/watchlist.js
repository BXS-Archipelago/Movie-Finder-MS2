let movieList = []

let currentMovie = ""
const movieInput = document.querySelector(".movies-input")
const saveBtn = document.querySelector(".save-btn")
const ul = document.querySelector(".saved-movies")
const tick = document.querySelector(".tick")
const done = document.querySelector(".tick-linethrough")


movieInput.addEventListener("change", (e)=> { 
    //prevent page from refreshing
    e.preventDefault()
    console.log(currentMovie)
    currentMovie = e.target.value
    console.log(currentMovie)
}) 

