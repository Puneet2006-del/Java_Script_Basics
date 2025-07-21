let myName = "Puneet                 "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

myName.trueLength()



let myHeros = ["Thor", "IronMan"]

let heroPower = {
    Thor: "Hammer",
    IronMan: "Jarvis",

    getIronPower: function(){
        // console.log(`Tony's Power is ${this.IronMan}`)
    }
}


Object.prototype.puneet = function(){
    // console.log(`Puneet is present in all objects `)
}


// heroPower.puneet()
myHeros.puneet()


// Inheritance 

const Teacher = {
    makeVideo: true,
}

const User = {
    name: "Puneet",
    email: "puneet@gmail.com"
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: 'Make js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern Syntax


Object.setPrototypeOf(TeachingSupport, Teacher)