const box = document.querySelector(".container")
let OpenClose = false
const Opencnt = () => {
    if (OpenClose === false){
        box.style.display = "grid"
        OpenClose = true
    } else {
        box.style.display = "none"
        OpenClose = false
    }
}
