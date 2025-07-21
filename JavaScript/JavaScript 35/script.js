function backgroundColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId

function changeBgColor(){
    document.body.style.backgroundColor = backgroundColor();
}

function changingBackgroundColor(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,2000)
    }
}

function stopchangingBgColor(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', changingBackgroundColor)
document.querySelector('#stop').addEventListener('click', stopchangingBgColor)
