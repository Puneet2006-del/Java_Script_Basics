const coding = ["Python", "Ruby", "JavaScript", "Cpp", "C"]

// const values = coding.forEach((element) =>{
//     console.log(element);
//     return element
// })

// console.log(values)  

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums) => nums> 4)
// console.log(newNums)

const newNums = myNums.filter((nums)=>{
    nums>4
    return nums
})

console.log(newNums)