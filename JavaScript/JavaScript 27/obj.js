const myObj = {
    js: 'JavaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
console.log(myObj)


for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`)
}

const programming = ["js", 'rb', "py", "java", 'c']

for (const key in programming) {
    console.log(`${key}: ${programming[key]}`)
}