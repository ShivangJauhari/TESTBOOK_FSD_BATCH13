let playerState = 'idle';
const dropdown = document.getElementById('animations');

dropdown.addEventListener('change', function(e) {
    playerState = e.target.value;
    console.log(playerState);
});


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
// let frameX = 0;
// let frameY = 4;
let gameFrame = 0;
const staggerFrames = 5;


const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 11
    },
    {
        name: 'hurt',
        frames: 4
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        let frame = {x: positionX, y: positionY};
        frames.loc.push(frame);
    }
    spriteAnimations[state.name] = frames;
}
);

console.log(spriteAnimations);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    // ctx.fillRect(100, 50, 100, 100);
    // ctx.drawImage(image, sx, sy, sWidth , sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    // if(gameFrame % staggerFrames === 0) {
    //         if(frameX < 6) frameX++;
    //         else frameX = 0;
    // }



    if (gameFrame>100) gameFrame = 0;
    gameFrame++;
    // console.log(frameX)
    console.log(gameFrame)
    requestAnimationFrame(animate);
};
animate();
