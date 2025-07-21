function calculateCardPrice(val1, val2, ...num1){   // (...) = rest operator
    return num1
}

console.log(calculateCardPrice(45, 150,180,523,784))

const user = {
    userName: "Puneet",
    prices: 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName}, and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    userName: "Sam",
    price: 399
})

const myNewArray = [200,400,600,800]

function returnSecondValue(anyArray){
    return anyArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))

