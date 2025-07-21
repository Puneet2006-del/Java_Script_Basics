const coding = ["JavaScript", "Python", "Ruby", "C", "C++", "Java"]
// coding.forEach(function (item){
//     console.log(item)
// })

// forEach using arrow function 

coding.forEach((element)=>{
    // console.log(element)
})

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((element) => {
    console.log(element.languageName)
});

