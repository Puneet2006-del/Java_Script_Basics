class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}puneet`
    }

    set password(value){
        this._password = value
    }
}

const userOne = new User('puneet@gmail.com', 'abc')
console.log(userOne.password)