const display = document.getElementById("display");
let result = 0;
let operator = '';

function inputs(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}