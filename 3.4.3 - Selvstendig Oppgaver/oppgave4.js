const knapp = document.getElementById("klikk")
const tekst = document.getElementById("oppg4")
let tall = 0
knapp.addEventListener("click", function(){
    tall += 1
    tekst.textContent = tall
})