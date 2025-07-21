// Iterations = Loops

for (let index = 1; index <= 10; index++) {
     const element = index;
     if (element == 5) {
         console.log("Hey this is five")
     }
     console.log(element)
}

// console.log(element) you can't do it because element is a local scope

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} and Inner Loop: ${i}`)
        console.log(`${i} X ${j} = ${i * j}`)
    }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// Break and continue

for (let index = 1; index <= 20; index++) {
    if (index > 5) {
        break
    }
    console.log(`The value of index is ${index}`)
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Number five is detected")
        continue
    }
    console.log(`The value of index is ${index}`)
}