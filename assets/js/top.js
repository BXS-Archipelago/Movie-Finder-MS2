// Create Top 50 Movies list: allocate results to result container, create 
// array, create key variable, associate button to search


const result = document.querySelector(".result-container2")
let resultArray = []
const key = "k_x3bnm044"
const btn =document.querySelector("#top-movies")

// Button #top-movies to be request information from top 250 movies API. 

$("#top-movies").click(()=> {
   
// retrieve the data in a FETCH command

    result.innerHTML = ""
    fetch (`https://imdb-api.com/en/API/Top250Movies/${key}`)
    .then(res => res.json()
      .then(data => {
      console.log(data)  

//cut down return of results from 250 to the top 50 only using slice method.

      const top250Array = data.items.slice(0, 50)
      top250Array.forEach(movie => {
            const div = document.createElement("div")
            div.setAttribute("class", "result2")
            div.setAttribute("id", `rank-${movie.rank}` )
            div.innerHTML = `
                  <img src = "${movie.image}">
                  <h1>Rank: #${movie.rank}</h1>
                  <h3>${movie.title}</h3>
                  <btn class = "btn-imdb"><a href = "http://imdb.com/title/${movie.id}" target = "_blank">See IMDb</a></btn>
            `
            document.querySelector(".result-container2").appendChild(div)
      } )

       })       
     
)})  
