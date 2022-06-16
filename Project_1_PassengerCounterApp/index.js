let countElement = document.getElementById("count-el")
let saveElement = document.getElementById("save-el")

let count = 0

function increment(){
    count = count + 1
    countElement.innerText = count
}

function save() {
    let countStr = count + " - "
    saveElement.textContent += countStr
    countElement.textContent = 0
    count = 0
}