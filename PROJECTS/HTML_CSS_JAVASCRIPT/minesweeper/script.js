document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const flagsLeft = document.querySelector('#flags-left');
    const width = 10;
    const result = document.querySelector('#result');
    let bombAmount = 20;
    let squares = [];
    let gameover = false;
    let flags = 0;

    // create board
    function createBoard(){
        flagsLeft.innerHTML = bombAmount;

        //get shuffled game array with random bombs
        const bombsArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width*width - bombAmount).fill('valid');
        const gameArray = emptyArray.concat(bombsArray);
        const shuffledArray = gameArray.sort(() => Math.random() -0.5);

        console.log(shuffledArray);

        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div');
            square.setAttribute('id', i);
                square.classList.add(shuffledArray[i]);
                grid.appendChild(square);
                squares.push(square);
                console.log(square);
                //normal click
                square.addEventListener('click', function(e){
                    click(square);
                });

                //control and left click
                square.addEventListener('contextmenu', function(e){
                    e.preventDefault();
                    addFlag(square);
                });
            }

        //add numbers
        for (let i = 0; i < squares.length; i++){
            let total = 0;
            const isLeftEdge = (i % width === 0);
            const isRightEdge = (i % width === width - 1);

            if (squares[i].classList.contains('valid')){
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++;
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++;
                if (i > 10 && squares[i - width].classList.contains('bomb')) total++;
                if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++;
                if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total++;
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++;
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++;
                if (i < 89 && squares[i + width].classList.contains('bomb')) total++;
                squares[i].setAttribute('data', total);
            }
        }
    }

    createBoard();

    //add flag with right click
    function addFlag(square){
        if (gameover)
            return;
        if (!square.classList.contains('checked') && (flags< bombAmount)){
            if (!square.classList.contains('flag')){
                square.classList.add('flag');
                flags++;
                square.innerHTML = '🚩';
                flagsLeft.innerHTML = bombAmount - flags;
                checkForWin();
                
            }
            else{
                square.classList.remove('flag');
                square.innerHTML = '';
                flags--;
                flagsLeft.innerHTML = bombAmount - flags;
            }
        }
    }

    function click(square){
        if (gameover)   
            return;
        if (square.classList.contains('checked') || square.classList.contains('flag'))
            return;
        if (square.classList.contains('bomb')){
            gameout();
        }
        else{
            let total = square.getAttribute('data');
            square.classList.add('checked');
            if (total != 0){
                if(total == 1) square.classList.add('one');
                if(total == 2) square.classList.add('two');
                if(total == 3) square.classList.add('three');
                if(total == 4) square.classList.add('four');
                if(total == 5) square.classList.add('five');
                if(total == 6) square.classList.add('six');
                if(total == 7) square.classList.add('seven');
                if(total == 8) square.classList.add('eight');

                square.innerHTML = total;
                return;
            }
            checkSquare(square);
        }
    } // This is where the click function should end

    //check neighboring squares once square is clicked
    function checkSquare(square){
        const currentId = square.id;
        const isLeftEdge = (currentId % width === 0);
        const isRightEdge = (currentId % width === width - 1);

        setTimeout(() => {
            if (currentId > 0 && !isLeftEdge){
                const newId = parseInt(currentId) - 1;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId > 9 && !isRightEdge){
                const newId = parseInt(currentId) + 1 - width;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId > 10){
                const newId = parseInt(currentId - width);
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId > 11 && !isLeftEdge){
                const newId =parseInt(currentId) - 1 - width;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId < 98 && !isRightEdge){
                const newId = parseInt(currentId) + 1;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId < 90 && !isLeftEdge){
                const newId = parseInt(currentId) - 1 + width;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId < 88 && !isRightEdge){
                const newId = parseInt(currentId) + 1 + width;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if (currentId < 89){
                const newId = parseInt(currentId) + width;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
        }, 10);
    }

    function checkForWin(){
        let matches = 0;
        for (let i = 0; i < squares.length; i++){
            if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')){
                matches++;
            }
            if (matches === bombAmount){
                console.log('You Win!');
                result.innerHTML = 'You Win!';
                gameover = true;
            }
        }
    }

    function gameout(){
        console.log('BOOM! Game Over!');
        result.innerHTML = 'Game Over!';
        gameover = true;

        //show all the bombs
        squares.forEach(square => {
            if (square.classList.contains('bomb')){
                square.innerHTML = '💣';
                square.classList.remove('bomb');
                square.classList.add('checked');
            }
        });
    }
});