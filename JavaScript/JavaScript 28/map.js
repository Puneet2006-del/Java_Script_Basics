const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num)=>{
//     return num + 10
// }) 

// Chaining 

const newNums = myNums
    .map((nums) => nums * 10)
    .map((nums) => nums + 5)
    .filter((nums) => nums>=40)

console.log(newNums);
