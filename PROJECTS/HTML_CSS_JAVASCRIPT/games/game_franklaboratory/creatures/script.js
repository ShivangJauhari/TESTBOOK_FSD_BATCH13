document.addEventListener('DOMContentLoaded', function() {

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;
    
    class Game{
        constructor(ctx, width, height){
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.enemies = [];
            this.enemyInterval = 500;
            this.enemyTimer = 0;
            // this.#addnewEnemy();
            // console.log(this.enemies);
            this.enemyTypes = ['worm', 'ghost', 'spider'];
        }
    
        update(deltaTime){
            this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
            if(this.enemyTimer > this.enemyInterval){
                this.#addnewEnemy();
                this.enemyTimer = 0;
                console.log(this.enemies);
            }else this.enemyTimer += deltaTime;

            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
            });
        }
    
        draw(){
            this.enemies.forEach(enemy => {
                enemy.draw(this.ctx);
            });
        }
    
        #addnewEnemy(){
            const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
            if(randomEnemy === 'ghost') this.enemies.push(new Ghost(this));
            else if(randomEnemy === 'worm') this.enemies.push(new Worm(this));
            else if(randomEnemy === 'spider') this.enemies.push(new Spider(this));
            this.enemies.sort(function(a, b){
                return a.y - b.y;
            });
        }
    }



    
    class Enemy{
        constructor(game){
            this.game = game;
            console.log(this.game);
           
            this.markedForDeletion = false;
            this.frameX = 0;
            this.maxFrame = 5;
            this.frameInterval = 100;
            this.frameTimer = 0;
        }
    
        update(deltaTime){
            this.x = this.x - this.speedX * deltaTime;
            if(this.x  < 0 - this.width) this.markedForDeletion = true;
            if(this.frameTimer > this.frameInterval){
                if(this.frameX < this.maxFrame) this.frameX++;
                else this.frameX = 0;
                this.frameTimer = 0;
            }else this.frameTimer += deltaTime;
        }
    
        draw(ctx){
         

            // ctx.fillStyle = 'red';
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }


    class Worm extends Enemy{
        constructor(game){
            super(game);
            this.spriteWidth = 229;
            this.spriteHeight = 171;
            this.width = this.spriteWidth * 0.5;
            this.height = this.spriteHeight * 0.5;
            this.x = this.game.width;
            this.y = this.game.height - this.height;
            
            this.image = worm;
            this.speedX = Math.random() * 0.1 + 0.1;
            // console.log(this.image);

        }
    }

    class Ghost extends Enemy{
        constructor(game){
            super(game);
            this.spriteWidth = 261;
            this.spriteHeight = 209;
            this.width = this.spriteWidth * 0.5;
            this.height = this.spriteHeight * 0.5;
            this.x = this.game.width;
            this.y = Math.random() * this.game.height * 0.6;
            
            this.image = ghost;
            this.speedX = Math.random() * 0.2 + 0.1;
            // console.log(this.image);
            this.angle = 0;
            this.curve = Math.random() * 3;

        }
        update(deltaTime){
            super.update(deltaTime);
            this.y += Math.sin(this.angle) * this.curve;
            this.angle += 0.05;
            
        }
        draw(ctx){
            ctx.save();
            ctx.globalAlpha = 0.5;
            super.draw(ctx);
            ctx.restore();
        }
    }


    class Spider extends Enemy{
        constructor(game){
            super(game);
            this.spriteWidth = 310;
            this.spriteHeight = 175;
            this.width = this.spriteWidth * 0.5;
            this.height = this.spriteHeight * 0.5;
            this.x = Math.random() * this.game.width;
            this.y = 0 - this.height;
            
            this.image = spider;
            this.speedX = 0;
            this.speedY = Math.random() * 0.1 + 0.1;
            // console.log(this.image);
            this.maxLength = Math.random() * this.game.height;

        }
        update(deltaTime){
            super.update(deltaTime);
            if(this.y < 0 - this.height * 2) this.markedForDeletion = true;
            this.y += this.speedY * deltaTime;
           if(this.y > this.maxLength) this.speedY *= -1;
        }
        draw(ctx){
            ctx.beginPath();
            ctx.moveTo(this.x + this.width* 0.5 , 0);
            ctx.lineTo(this.x + this.width* 0.5 , this.y + 10);
            ctx.stroke();
            super.draw(ctx);


        }
    }


    const game = new Game(ctx, canvas.width, canvas.height);
    let lastTime = 1;
    function animate(timeStamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        // console.log(deltaTime);
        game.update(deltaTime);
        game.draw();
        requestAnimationFrame(animate);
    }   

    animate(0);
    



});