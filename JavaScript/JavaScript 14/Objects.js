// Singleton => A singleton is a design pattern that makes sure only one object is created from a class or function, and the same object is reused everywhere in the code.
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Puneet",
    "Full Name": "Puneet Mehra",
    [mySym]: "mykey1",
    age: 20,
    location: "New Delhi",
    email:"puneet123@gmai.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuseday"]
}
// console.log(JsUser.email)
// console.log(JsUser["Full Name"]) // another way to print object
// console.log(JsUser[mySym])

JsUser.email = "mehra124@gmail.com"
// console.log(JsUser.email)

// Object.freeze(JsUser) // Freeze the object so programmer cannot any value
JsUser.email = "ram@lal.gmail.com"
// console.log(JsUser.email)

JsUser.greeting = function(){
    return "Hello JS user"; 
}

JsUser.greeting2 = function(){
    return `Hello JS user, ${this.name}` ; 
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())



