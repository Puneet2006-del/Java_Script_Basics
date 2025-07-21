function multipleby5(num){
    return num * 5
}

console.log(multipleby5(5))

multipleby5.power = 2
console.log(multipleby5.power)
console.log(multipleby5.prototype)

function createUser(username, score){
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    console.log(`The Score is ${this.score}`)
}

createUser.prototype.printMe = function(){
    console.log(`UserName is ${this.username}`)
}

const userOne = new createUser('Puneet', 99)
const userTwo = new createUser('Anil', 5)

userOne.increment()
userTwo.increment()