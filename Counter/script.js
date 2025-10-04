const decrement = document.getElementById("decrementBtn");
const increment = document.getElementById("incrementBtn");
const count = document.getElementById("countNumber");
const incrementDisplay = document.getElementById("incrementCount");
const decrementDisplay = document.getElementById("decrementCount");

let value = 0;
let incrementClick = 0;
let decrementClick = 0;

decrement.addEventListener("click",() => {
    if(count.textContent > 0){
        value--;
        count.textContent = value;
    }else{
        count.classList.add("error")
    }
    decrementClick++;
    decrementDisplay.textContent = decrementClick;
})

increment.addEventListener("click",() => {
    count.classList.remove("error")
    value ++;
    count.textContent = value;
    incrementClick++;
    incrementDisplay.textContent = incrementClick;
})