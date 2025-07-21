let randomNumber = parseInt(Math.random()* 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let prevGuess = []
let numGuesses = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGame(guess)
    })
}

function validateGame(guess){
    if(isNaN(guess) || guess>100 || guess<1){
        alert('This is not allowed use valid number');
    }else{
        prevGuess.push(guess)
        checkGame(guess)
        displayGame(guess)
    }
}

function checkGame(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right.')
        endGame()
    }else if(numGuesses === 10){
        displayMessage(`Game over! the random number is ${randomNumber}`)
        endGame()
    }else if(guess>randomNumber){
        displayMessage('Number is too high')
    }else if (guess<randomNumber){
        displayMessage('Number is too low')
    }
}

function displayGame(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`
}

function displayMessage (message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')

    let p = document.createElement('p')
    p.classList.add('button')
    p.setAttribute('id', 'newGame')
    p.innerHTML = `<h2>Start new game</h2>`
    startOver.appendChild(p);

    playGame = false;
    newGame();
}

function newGame(){
    newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',()=>{
        let randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuesses = '';
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-numGuesses}`
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('disabled')

        const p = document.querySelector('#newGame')
        startOver.removeChild(p)
        playGame = true;

    })
}