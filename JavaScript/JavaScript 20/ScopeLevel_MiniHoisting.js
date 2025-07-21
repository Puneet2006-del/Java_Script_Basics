// Nested Scope

function one(){
    var username = "Puneet"

    function two(){
        const webdsite = "YouTube"
        // console.log(username)
        // console.log(webdsite)
    }

    two()
}
one()

if (true) {
    const username = "Mehra"
    if (username === "Mehra") {
        const website = " YouTube"
        // console.log(username +  website)
        // console.log(website) valid
    }
    // console.log(website)  not valid
    // console.log(username) valid
}
// console.log(username) not valid


console.log(addOne(5))  // not any kind of hoisting problem
function addOne(num){
    return num + 1
}


// console.log(addTwo(48)) // Hoisting = Moving variable and function declarations to the top of their scope before code execution.

const addTwo = function(num2){  // Expression = A piece of code that produces a value (addTwo)
    return num2 + 2
}

console.log(addTwo(8))
