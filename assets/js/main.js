
// Responsive menu design feature: 

let showMenu = document.querySelector(".nav-links2")
  
const barsFunction = () => {
   if (showMenu.style.opacity === "0")
   {
      showMenu.style.opacity = "1"
} else {
     showMenu.style.opacity = "0"
}
}
