import {
  StandingLeft,
  StandingRight,
  SittingLeft,
  SittingRIGHT,
  RunnigLeft,
  RunningRight,
  JumpingLeft,
  JumpingRight,
  FallingLeft,
  FallingRight,
} from "./state.js";

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [
      new StandingLeft(this),
      new StandingRight(this),
      new SittingLeft(this),
      new SittingRIGHT(this),
      new RunnigLeft(this),
      new RunningRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this),      
    ];
    this.currentState = this.states[1];
    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth * 0.5 - this.width * 0.5;
    this.y = this.gameHeight - this.height;
    this.vy = 0;
    this.weight = 1;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 6;
    this.speed = 0;
    this.maxSpeed = 10;
    this.fps = 10;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }
  draw(contex, deltaTime) {
    if(this.frameTimer < this.frameInterval) {
      if(this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    }else {
      this.frameTimer += deltaTime;
    }
    
    contex.drawImage(
      this.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }

  update(input) {
    this.currentState.handleInput(input);
    this.x += this.speed;
    // horizontal movement
    if (this.x < 0) this.x = 0;
    else if(this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;
    // vertical movement
    this.y += this.vy;
    if(!this.onGround()){
      this.vy += this.weight;
    }else {
      this.vy = 0;
    }
    if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
  }

  onGround() {
    return (this.y >= this.gameHeight - this.height);
  }
}
