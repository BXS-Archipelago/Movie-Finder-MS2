
/* // Responsive menu design feature - This contained a bug, as per Readme Testing update: 

let showMenu = document.querySelector(".nav-links2")
  
const barsFunction = () => {
   if (showMenu.style.opacity === "0")
   {
      showMenu.style.opacity = "1"
} else {
     showMenu.style.opacity = "0"
}
}
 */

// -----------------------------API for IMDB ---//


const result = document.querySelector(".result-container")
let resultArray = []
const key = "k_x3bnm044"
let title = ""

$("#searchMovies").change(e => title = e.target.value)


$(".submit button").click(()=> {
   result.innerHTML = ""
   fetch (`https://imdb-api.com/en/API/SearchMovie/${key}/${title}`)
   .then(res => res.json()
            .then(data => {
            console.log(data) 
            resultArray = data.results
            console.log(resultArray)
        
        resultArray.forEach((item)=> {
            let div = document.createElement("div")
            div.className = "result"
        div.innerHTML = `
               <img src =${item.image}/>
               <h5> ${item.title}</h5>
               <h6>${item.description}</h6>
               <btn class = "btn-imdb"><a href = "http://imdb.com/title/${item.id}" target = "_blank">See IMDb</a></btn>
         `
         result.appendChild(div)
      }) 
      
    
    })       
     

)})