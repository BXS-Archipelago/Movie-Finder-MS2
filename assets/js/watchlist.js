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


const listRendering = () => {
    ul.innerHTML = ""
    localStorage.getItem("arr").forEach(movie => {
        //New li to contain each new Watchlist Item.
        const li = document.createElement("li")
        
        //Add FontAwesome icons to output for Tick and Delete Tasks
        li.innerHTML = `
            <h3 class = "element">${movie} </h3>
            <div class = "box"><span onclick= "handleClick(this, '${movie}')" class = "cross"><i class="far fa-times-circle"></i></span> <span onclick= "handleTick(this)" class = "tick"><i class="far fa-check-circle"></i> </span> </div>
        `
        ul.appendChild(li)
     })
}