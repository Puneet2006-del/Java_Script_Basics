// for off

// ["", "", ""]
// [{}, {},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`) 
}

//  Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // Map doesn't prints duplicate value

// console.log(map)

for (const [key, value] of map) {  // Maps are iterable 
    console.log(key, ':-', value)
}

const myObj = { // Objects aren't
    'Game1': 'NFS',
    'Game2': 'PUBG',
    'Game3': 'COD'
}

for (const [key, value] of myObj) {
    console.log(key, '-:', value)
}


