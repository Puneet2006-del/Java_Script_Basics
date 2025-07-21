const user = {
    username: "Puneet",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this) // Prints current context
    }
}
user.welcomeMessage()
user.username = "Ram"
user.welcomeMessage()

console.log(this) //prints empty object

function main(){
    let username =  "Sam"  
    console.log(this.username)
}
main()

// const func1 = function () {
//     let username = "Sam"
//     console.log(this.username)
// }

const func1 = ()=>{
    let username = "Sam"
    console.log(this.username)
}
func1()

const addTwo = (num1, num2)=>{
    return num1 + num2
}
// const addTwo = (num1, num2)=> num1 + num2
// const addTwo = (num1, num2)=> (num1 + num2)
// const addTwo = (num1, num2)=> ({username:"Puneet"})

console.log(addTwo(45,56))

const myArr = [2,4,6,8,7]

myArr.forEach(()=>{})