// Stack and Heap

// Stack used in primitive type variables like number, boolean, string, null, undefined, etc...
// Call by value

let myName = "Puneet"
let clgName = myName;
clgName = "Mehra"
console.log(myName)
console.log(clgName)

// Heap used in non-primitive type variables ex-: objects, arrays and functions

// Call by reference

let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"
userTwo.upi = "userTwo@ybl"



console.log(userOne)
console.log(userTwo)



