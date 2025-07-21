// {}curly braces called scope in js 
// let and const are local scope which means the programmer can only access them inside a function
// Var variable can be accessible globally 
var c = 604
let a = 48
if (true) {   
    let a = 10
    const b = 20
    var c = 30
   console.log("INNER:", a, b)
}

console.log(a)
// console.log(b) // not defined globally 
console.log(c)


