const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const anotherNumber = 23.8966
// console.log(anotherNumber.toPrecision(2))

const str = 1000000
console.log(str.toLocaleString('en-IN'))

// Maths =========================>>>>>>>>>>

console.log(Math) // Math is an object type 
console.log(Math.abs(-5)) // covert negative to positive 
console.log(Math.round(4.5)) // used to round a number to the nearest integer (4.6 to 5 and 4.4 to 4)
console.log(Math.ceil(4.1)) // used to round a number up to the nearest integer, no matter what the decimal part is (4.2 to 5).
console.log(Math.floor(4.9)) // rounds a number down to the nearest integer, no matter what the decimal is. (4.9 to 4)
console.log(Math.min(4,5,3,8,9,6,3,9)) // Returns the smallest value from the given numbers
console.log(Math.max(4,5,3,8,9,6,3,9))

console.log(Math.random())

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min);