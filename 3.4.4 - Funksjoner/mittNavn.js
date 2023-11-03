// const er en constant verdi. den skal ikke endres.
const fornavn = "Jenny";
const etternavn = "Lao";
const fultnavn = fornavn + " " + etternavn;

// let er et tall som kan endres
let alder = 16
alder = alder + 4

const minKnapp = document.getElementById("minKnapp");
const visResultat = document.getElementById("visResultat");
minKnapp.addEventListener("click", function () {
    visResultat.textContent = "Hei, jeg heter " + fultnavn + " og om fire år er jeg " + alder + " år gammel";
});