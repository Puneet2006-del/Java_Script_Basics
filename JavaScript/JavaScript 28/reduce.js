const arr = [1, 2, 3]
// const total = arr.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0) // Investigation Study

// const total = arr.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },2)

// OR

const total = arr.reduce((acc, currval) => acc + currval, 0)

console.log(total)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const billToPay = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
}, 0)

console.log(billToPay)