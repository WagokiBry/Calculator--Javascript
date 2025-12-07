const parentDiv = document.querySelector('.parentDiv');

// --- Selecting the Display and Special Buttons ---
const display = document.querySelector('.display');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.Clear');
const deleteButton = document.querySelector('.delete');

// --- Selecting Number Buttons ---
const zeroButton = document.querySelector('.zero');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const pointButton = document.querySelector('.point');

// --- Selecting Operator Buttons ---
const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');



let calcObject = {

inputA : parseInt(prompt("Enter first value")),
operator : prompt("Enter operator value",""),
inputB : parseInt(prompt("Enter second value")),

add(){

let sum =  this.inputA + this.inputB;
   return calcObject["inputA"] = sum;
    
},

subtract(){
    let difference = this.inputA - this.inputB;
   return calcObject["inputA"] = difference;
},

multiply(){
    let product = this.inputA * this.inputB;
   return calcObject["inputA"] = product; 
},

division(){
    let quotient = this.inputA / this.inputB;
   return calcObject["inputA"] = quotient; 
}

}







