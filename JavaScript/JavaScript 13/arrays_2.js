const marvel_heros = ["Thor", "IronMan", "SpierMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// marvel_heros.push(dc_heros) // Not a good practice for concatenation

// console.log(marvel_heros)
// console.log(marvel_heros[3])

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread Operator smae output as concate method
console.log(all_new_heros,)

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // How to handle this situation

const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Puneet")) //  Checks if the given value is an array or not
console.log(Array.from("Puneet")) //  Converts a string into an array of characters
console.log(Array.from({name:"Puneet"})) // Imp  Tries to convert an object into an array (returns an empty array unless the object is iterable)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  //  Creates a new array containing the provided values