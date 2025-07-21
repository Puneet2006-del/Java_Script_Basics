// Promises In Java Script

const PromiseOne = new Promise((resolve, reject)=>{
// Do an async task
// DataBase Call, Cryptography, Network
    setTimeout(() => {
        console.log('Inside Async Task')
        resolve()
    }, 1000);
})

PromiseOne.then(()=>{
    console.log('Promise one is running successfully')
})

// Another approach to use promise.
new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Inside Promise 2")
        resolve()
    }, 1000);
}).then(()=>{
    console.log('Promise two is running successfully')
})

const PromiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({User: "Puneet", Email:"puneet@gmail.com"})
    }, 1000);
}).then((data)=>{
    console.log(data)
})

const PromiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Puneet", password: "123" })
        }
        else {
            reject("ERROR: Something Went Wrong")
        }
    }, 1000);
})

PromiseFour.then((user) => {
    console.log(user)
    return user
}).then((user) => {
    console.log(user.username)
    return user.password
}).then((password)=>{
    console.log(password)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise in either resolved or rejected")
})

const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ langname: "JavaScript", password: "123" })
        }
        else {
            reject("ERROR: JavaScript Went Wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

const getAllUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("ERROR", error)
})

