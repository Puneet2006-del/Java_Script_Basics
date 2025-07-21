// Array

const myArr = [7,0,1,2,3,4,5] // Using array literal (most common)
const myArry2 = new Array("name", "age", "id", true, 5.6, null) // Using the Array constructor
console.log(myArry2[5])

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop() // Removes last element of an array
myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

let newArr = myArr.join() // Convert new array into string 
console.log(myArr, typeof(myArr));
console.log(newArr, typeof(newArr))

// Slice Splice

console.log("A ", myArr)

const myN1 = myArr.slice(1,3)
console.log(myN1)
console.log("B ", myArr)

const myN2 = myArr.splice(1,3) // returns first second and third index cut it form original array
console.log(myN2)
console.log("C ", myArr)













