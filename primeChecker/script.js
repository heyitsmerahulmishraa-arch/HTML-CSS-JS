const input = document.getElementById("input");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

let messageValue;

btn.addEventListener("click",() =>{
    if(input.value == ""){
        messageValue = "Enter Correct value"
        message.textContent = messageValue;
    }
    else if(input.value % 2 === 0){
        let messageValue = `Yes ${input.value} is Prime Number`
        message.textContent = messageValue;
    }else{
        messageValue = `No it's not prime number`
        message.textContent = messageValue;
    }
})

input.addEventListener("focus",() => {
    messageValue = ""
    message.textContent = messageValue
})