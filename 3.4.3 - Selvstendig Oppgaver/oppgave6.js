const inn = document.getElementById("ekkoInn")
const knapp = document.getElementById("ekkoKnapp")
const paragraph = document.getElementById("ekkoParagraph")

knapp.addEventListener("click", function () {
    paragraph.textContent = inn.value
})

