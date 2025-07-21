class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAMR IS: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const userOne = new Teacher("ramlal", "ram@gmail.com", "123")
userOne.addCourse()
console.log(userOne)