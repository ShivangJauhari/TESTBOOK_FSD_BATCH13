const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let hitPosition;
let currentTime = 10;
let timerId = null;
let result = 0;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    
    timerId = setInterval(randomSquare, 1000);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(countDowntimerId);

        alert('GAME OVER! Your final score is ' + result);
    }
}

let countDowntimerId = setInterval(countDown, 1000);

moveMole();