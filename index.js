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

console.log(calcObject["inputA"])
console.log(calcObject["operator"])
console.log(calcObject["inputB"])

console.log(calcObject.division())
console.log(calcObject["inputA"])




function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

