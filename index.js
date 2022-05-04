// document.getElementById("count").innerText = 5
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count")
let count = 0
// console.log(count)
console.log(saveEl.innerText)

function increment(){
    count += 1
    countEL.textContent = count
} 
 
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEL.textContent = 0
    count = 0
}