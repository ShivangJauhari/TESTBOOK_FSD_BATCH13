/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 800;
const numberOfEnemies = 10;
const enemiesArray = [];

// const ememyImage = new Image();
// ememyImage.src = 'enemies/enemy1.png';
let gameFrame = 0;

// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 100,
//     height: 150,
// };

class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src = '../enemies/enemy1.png';
        
        
        // this.color = 'hsl(' + Math.random() * 360 + ', 50%, 50%)';
        // this.speed = Math.random() * 4 - 2;
        this.spriteHeight = 155;
        this.spriteWidth = 293;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update(){
        this.x += Math.random() * 15 - 7.5;
        this.y += Math.random() * 10 - 5;

        //animate the sprite
        if (gameFrame % this.flapSpeed === 0)
            {
                if(this.frame > 4) this.frame = 0;
                else this.frame++;
            }
        
 }

    draw(){
        // ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

}

for(let i = 0; i < numberOfEnemies; i++){
   
    enemiesArray.push(new Enemy());
}

// console.log(enemiesArray);

// const enemy1 = new Enemy(10, 10, 100, 100, 'blue', 1);
// const enemy2 = new Enemy(300, 300, 100, 100, 'yellow', 2);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // enemy1.update();
    // enemy1.draw();


    // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    // ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);

    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    if(gameFrame >100) gameFrame = 0;
    else gameFrame++;    
    requestAnimationFrame(animate);
}

animate();
