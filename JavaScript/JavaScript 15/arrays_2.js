// const tinderUser = {}
const tinderUser = new Object()
tinderUser.name = "Puneet"
tinderUser.age = 20
tinderUser.occupation = "student"
tinderUser.IsloggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "puneet@gmai.com",
    fullName: {
        userFullName:{
            firstName:"Puneet",
            lastName: "Mehra"
        }
    }
}

// console.log(regularUser.fullName.userFullName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = {...obj1, ...obj2} // Spread Operator(...)
const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "user@gmai.com",
        
    },
    {
        id: 1,
        email: "user@gmai.com",

    },
    {
        id: 1,
        email: "user@gmai.com",

    }
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser)) //  Returns an array of the object's keys
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser)) // returns an array of key-value pairs from the given object.

console.log(tinderUser.hasOwnProperty('age')) //  It returns true if the property exists directly on the object, otherwise false.

