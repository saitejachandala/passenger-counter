let countEl = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");
let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}
function decrement(){
    count -=1
    countEl.innerText = count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.innerText = 0
    count = 0
}

let welcomeEl = document.getElementById("welcome-el")
let name = "Sai !";
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + name
let emojie = "👋";
welcomeEl.innerText += emojie
