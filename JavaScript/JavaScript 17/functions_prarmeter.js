function sayMyName() {
    console.log('P');
    console.log('U');
    console.log('N');
    console.log('E');
    console.log('E');
    console.log('T');
}

// sayMyName()  // sayMyName it is reference () it means execution

// function addTwoNumbers(num1, num2){ // num1, num2 = parameters 
//     console.log(num1 + num2)
// } 


function addTwoNumbers(num1, num2){ 
    // let result = num1 +  num2
    // return result
    return num1 + num2
} 

const result = addTwoNumbers(15,17)  // 15 and 17 =  arguments
// console.log("Result:", result)

function loginUserMessage(username = "Sam"){   // Sam = Default Value
    if(!username){
        console.log("Please enter your username")
        return 
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Puneet"))
console.log(loginUserMessage())

// const print = loginUserMessage("Ram Lal")
// console.log(print)

