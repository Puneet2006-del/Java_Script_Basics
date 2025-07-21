const name = "Puneet"
const repoCount = 50;

const gameName = new String('Pubg-Game-Bgmi')

// console.log(name + repoCount) Don't do it like this 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

console.log(gameName[0]) // Prints 0th index of gameName variable 
console.log(gameName.__proto__) // Returns object {}
console.log(gameName.length) // Returns length of a string
console.log(gameName.toUpperCase()) // convert string into uppercase
console.log(gameName.charAt(3)) // Returns which character is allocated at index 3 or index n
console.log(gameName.indexOf('g')) // Returns in which index character g is allocated


const newSrting = gameName.substring(0,4)
console.log(newSrting)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   Puneet   "
console.log(newStringOne)
console.log(newStringOne.trim()) // Removes extra Spaces

const url = "https://puneet.com/puneet%20mehra"
console.log(url.replace('%20', '-')) // Replace %20 to -

console.log(url.includes('puneet')) // Return true if puneet is in url

console.log(gameName.split('-')) 