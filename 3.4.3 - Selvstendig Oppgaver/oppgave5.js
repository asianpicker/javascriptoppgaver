const knapp = document.getElementById("alarmKnapp")
const tekst = document.getElementById("alarmTekst")
const bakgrunn = document.getElementById("alarmDiv")
let alarm0n = false

knapp.addEventListener("click", function(){
    if(alarm0n == false){ // if(!alarm0n){ er det samme
        alarm0n = true
        tekst.textContent = "alarm på"
        bakgrunn.style.backgroundColor = "red"
    }
    else {
        alarm0n = false
        tekst.textContent = "alarm av"
        bakgrunn.style.backgroundColor = "white"
    }
})