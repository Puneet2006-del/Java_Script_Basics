// Primitive Data Types

// 7 Types => String, Number, Boolean, Null, Undefined, Symbol, BigInt
// const score = 100;
// const socreValue = 105;

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;

// const Id = Symbol('123') // Important to understand 
// const anotherId = Symbol('123') // A Symbol is a unique and immutable primitive value.

// console.table([socreValue, socreValue, isLoggedIn, outSideTemp, Id, anotherId])

// console.log(Id===anotherId);



// Reference or Non-Primitive Data Types
// Arrays, Objects, Functions 

const arr = ["Shaktiman","Naagraj", "Doga"]
console.log(arr)

let myObj = {
    name: "Puneet",
    age: 20,
    city: "Delhi",
    occupation: "Student"
}

console.log(myObj)

let myFunc = function(){
    console.log("Hello World")
}
myFunc()