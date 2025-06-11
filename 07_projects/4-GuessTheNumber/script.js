let randomNum = parseInt(Math.random()*100 +1);

const box = document.querySelector('#wrapper')

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter A valid number')

  }else if (guess <1){
    alert('Please Enter a number more than 1')

  }else if(guess>100){
    alert('Please Enter a number less that 100')
  }else {
    prevGuess.push(guess)
    if (numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNum}`)
      endGame();
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`You guessed it right!`)
    endGame();
  }else if (guess< randomNum){
    displayMessage(`Number is TOOOO Low`)

  }else {
    displayMessage(`Number is TOOOO High`)
  }


}

function displayGuess(guess){
  userInput.value= ''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){ 
  lowOrHi.innerHTML =`<h2>${message}</h2>`
}


function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  submit.setAttribute('disabled', '');

  p.innerHTML = '<h2 id="newGame" style="margin: 0;">Start New Game</h2>';
  p.style.backgroundColor = "#161616";
  p.style.color = "#fff";
  p.style.width = "200px";
  p.style.height = "50px";
  p.style.borderRadius = "10px";
  p.style.fontFamily = "sans-serif";
  p.style.fontSize = "15px";
  p.style.cursor = "pointer";
  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.alignItems = "center";
  p.style.margin = "20px auto"; // Centers it horizontally with some vertical spacing

  box.style.height = "600px"
  submit.style.backgroundColor ="#2E2E2E"

  startOver.appendChild(p);

  playGame = false;

  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function() {
    newGame();
  });
  

}

function newGame(){
  const  newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',(e)=>{
    randomNum = parseInt(Math.random()*100 +1);
    prevGuess = []
    numGuess =1
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    box.style.height = "540px"
    submit.removeAttribute('disabled')
    submit.style.backgroundColor ="#141414"

    playGame=true

  })
}
