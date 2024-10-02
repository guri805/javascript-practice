let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remianing = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess) || (guess < 1) || (guess > 100)) {
        alert('Please enter a valid number')
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over .Random number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
    } else if (guess < randomNum) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNum) {
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remianing.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">Start a new game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.style.border = "none";
    newGameBtn.style.padding = "10px";
    newGameBtn.style.display = "inline-block";
    newGameBtn.style.backgroundColor = "#272727";
    newGameBtn.style.borderRadius = "20px";
    newGameBtn.style.marginTop = "10px";
    newGameBtn.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remianing.innerHTML = `${11 - numGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}