const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('.results');
const width = 15;
let currentShooterIndex = 202;
let invadersId;
let isGoingRight = true;
let direction = 1;
let result = 0; // Declare result variable
const aliensRemoved = []; // Use this instead of alienRemoved

for(let i=0; i< width*width; i++){
    const square = document.createElement('div');
    grid.appendChild(square);1
}

const squares = Array.from(document.querySelectorAll('.grid div'));

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];

function draw(){
    for(let i=0; i<alienInvaders.length; i++){
        if(!aliensRemoved.includes(i)) // Use aliensRemoved
            squares[alienInvaders[i]].classList.add('invader');
    }
}

draw();

squares[currentShooterIndex].classList.add('shooter');

function remove(){
    for(let i=0; i<alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.remove('invader');
    }
}

function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !== 0)
                currentShooterIndex -= 1;
            break;
        case 'ArrowRight':
            if(currentShooterIndex % width < width - 1)
                currentShooterIndex += 1;
            break;
    }
    squares[currentShooterIndex].classList.add('shooter');
}

document.addEventListener('keydown', moveShooter);

function moveInvaders(){
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();

    if(rightEdge && isGoingRight){
        for(let i=0; i<alienInvaders.length; i++){
            alienInvaders[i] += width + 1;
            direction = -1;
            isGoingRight = false;
        }   
    }
    if(leftEdge && !isGoingRight){
        for(let i=0; i<alienInvaders.length; i++){
            alienInvaders[i] += width - 1;
            direction = 1;
            isGoingRight = true;
        }
    }
   
    for(let i=0; i<alienInvaders.length; i++){
        alienInvaders[i] += direction;
    }
    
    draw();

    if(squares[currentShooterIndex].classList.contains('invader', 'shooter')){
        resultDisplay.textContent = 'Game Over';
        squares[currentShooterIndex].classList.add('boom');
        clearInterval(invadersId);
    }

    if(aliensRemoved.length === alienInvaders.length){ // Correct condition
        resultDisplay.textContent = 'You Win';
        clearInterval(invadersId);
    }
}

invadersId = setInterval(moveInvaders, 600);

function shoot(e){
    let laserId;
    let currentLaserIndex = currentShooterIndex;
    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');
        if(squares[currentLaserIndex].classList.contains('invader')){
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 250);
            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
            aliensRemoved.push(alienRemoved); // Use aliensRemoved
            result++;
            resultDisplay.textContent = result;
        }
    }

    switch(e.key){
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 100);
            break;
    }
}

document.addEventListener('keydown', shoot);