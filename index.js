let calcObject = {

inputA : parseInt(prompt("Enter first value")),
operator : prompt("Enter operator value",""),
inputB : parseInt(prompt("Enter second value")),


add(){

    let sum =  this.inputA + this.inputB;
   return calcObject["inputA"] = sum;
    
},

subtract(){
  return this.inputA - this.inputB;
   

}

}

console.log(calcObject["inputA"])
console.log(calcObject["operator"])
console.log(calcObject["inputB"])

console.log(calcObject.subtract())





function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

