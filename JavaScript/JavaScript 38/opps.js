const user = {
    username: "Puneet",
    loginCount: 7,
    signedIn: true, 

   GetUserDetails: function(){
    // console.log("Got user details from database")
    // console.log(`UserName: ${this.username}`)
    console.log(this)
   }
}

// console.log(user.username)
// console.log(user.GetUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this // Don't need to write this. This is default value.
}

const userOne = new User("RamLal", 8, true)
const userTwo = new User("MadanLal", 4, false) // Value Overwrite: to resolve it just use "new" keyword
console.log(userOne);
console.log(userTwo)