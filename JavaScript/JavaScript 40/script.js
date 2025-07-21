function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("Called")
}

function createUser (username, email, password){

    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const userOne =  new createUser("Shivam", 'shivam@gmail.com', "123")
const userTwo =  new createUser("Rohan", 'rohan@gmail.com', '789')
console.log(userOne)
console.log(userTwo)

