const select = document.getElementById("select")
const opg7bilde = document.getElementById("opg7bilde")

bilde()
function bilde(){
    opg7bilde.setAttribute("src", "bilder/" +select.value+".jpg")

}

select.addEventListener("change", bilde)