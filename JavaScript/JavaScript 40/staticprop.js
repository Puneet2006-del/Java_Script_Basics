class User{
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`UserName: ${this.username}`)
    }

    static createId(){
        return`123`
    }
}

const userOne = new User("Puneet")
// console.log(userOne.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const userTwo = new Teacher("Madan", "madan@gmail.com")
userTwo.logMe()