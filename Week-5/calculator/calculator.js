const screenDisplay = document.getElementById("screenDisplay");

function clickToDisplay(input){
    display.value += input;
}

function giveTotal(){
  display.value = eval(display.value)
}

function clearScreen(){
  display.value = "";
}