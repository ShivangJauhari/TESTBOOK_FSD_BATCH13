const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;

const explosion = [];
let canvasPosition = canvas.getBoundingClientRect();
// console.log(canvasPosition);

class Explosion{
    constructor(x, y){
       
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.7;
        this.height = this.spriteHeight * 0.7;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = 'explosion/boom.png';
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 2 * Math.PI;
        this.sound = new Audio();
        this.sound.src = 'audios/explosion1.flac';
    }
    update(){
        if(this.frame === 0) this.sound.play();
        this.timer++;
        if(this.timer % 10 === 0){
            this.frame++;
        }
        if (this.timer > 300) this.timer = 0;
    }
    draw(){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 0 - this.width/2, 0 - this.height/2, this.width, this.height);
        ctx.restore();
    }
}

    window.addEventListener('click', (e)=>{
        createAnimation(e);
        
    });

    // window.addEventListener('mousemove', (e)=>{
    //     createAnimation(e);
        
    // });

    function createAnimation(e){
        let positionX = e.x - canvasPosition.left;
        let positionY = e.y - canvasPosition.top;
        // console.log(e); 
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(e.x - canvasPosition.left- 25, e.y - canvasPosition.top - 25, 50, 50);
        explosion.push(new Explosion(positionX, positionY));
        console.log(explosion);
    }

    window.addEventListener('mousemovement', ()=>{
        canvasPosition = canvas.getBoundingClientRect();
    });

    function animate(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        for(let i = 0; i < explosion.length; i++){
            explosion[i].update();
            explosion[i].draw();
            if(explosion[i].frame > 5){
                explosion.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
