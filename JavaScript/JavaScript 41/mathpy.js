const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

console.log(Math.PI)

const User = {
    name: "Puneet",
    salary: "150",
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(User, "name"))

Object.defineProperty(User, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(User, 'name'))