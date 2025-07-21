const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Invalid Syntax Enter height as int ${height}`
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Invalid Syntax Enter weight as int ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            result.innerHTML += `<span> - Under Weight</span>`
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML += `<span> - Normal Range</span>`
        } else {
            result.innerHTML += `<span> - Overweight</span>`
        }
    }
})