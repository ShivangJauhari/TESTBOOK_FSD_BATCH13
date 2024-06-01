export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
  SITTING_LEFT: 2,
  SITTING_RIGHT: 3,
  RUNNING_LEFT: 4,
  RUNNING_RIGHT: 5,
  JUMPING_LEFT: 6,
  JUMPING_RIGHT: 7,
  FALLING_LEFT: 8,
  FALLING_RIGHT: 9,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class StandingLeft extends State {
  constructor(player) {
    super("STANDING_LEFT");
    this.player = player;
  }

  enter() {
    this.player.frameX = 0;    
    this.player.frameY = 1;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === "ArrowRight") {
      this.player.setState(states.RUNNING_RIGHT);
      // this.player.state.enter();
    }else if (input === "ArrowLeft") {
        this.player.setState(states.RUNNING_LEFT);
        // this.player.state.enter();
    }else if (input === "ArrowDown") {
      this.player.setState(states.SITTING_LEFT);
      // this.player.state.enter();
    }else if (input === "ArrowUp") {
      this.player.setState(states.JUMPING_LEFT);
      // this.player.state.enter();
    }
  }
}

export class StandingRight extends State {
  constructor(player) {
    super("STANDING_RIGHT");
    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.frameY = 0;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === "ArrowLeft") {
      this.player.setState(states.RUNNING_LEFT);
      // this.player.state.enter();
    }else if (input === "ArrowRight") {
      this.player.setState(states.RUNNING_RIGHT);
      // this.player.state.enter();

    }else if (input === "ArrowDown") {
      this.player.setState(states.SITTING_RIGHT);
      // this.player.state.enter();
    }else if (input === "ArrowUp") {
      this.player.setState(states.JUMPING_RIGHT);
      // this.player.state.enter();
    }
  }
}

export class SittingLeft extends State {
  constructor(player) {
    super("SITTING_LEFT");
    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.frameY = 9;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  handleInput(input) {
    if (input === "ArrowRight") {
      this.player.setState(states.SITTING_RIGHT);
      // this.player.state.enter();
    } else if (input === "ArrowUp") {
      this.player.setState(states.STANDING_LEFT);
      // this.player.state.enter();
    }    
  }
}

export class SittingRIGHT extends State {
  constructor(player) {
    super("STANDING_RIGHT");
    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.frameY = 8;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  handleInput(input) {
    if (input === "ArrowLeft") {
      this.player.setState(states.SITTING_LEFT);
      // this.player.state.enter();
    } else if (input === "ArrowUp") {
      this.player.setState(states.STANDING_RIGHT);
      // this.player.state.enter();
    }

  }
}


export class RunnigLeft extends State {
    constructor(player) {
      super("RUNNING_LEFT");
      this.player = player;
    }
  
    enter() {
      this.player.frameX = 0;
      this.player.frameY = 7;
        this.player.speed = -this.player.maxSpeed;
        this.player.maxFrame = 8;
    }
  
    handleInput(input) {
      if (input === "ArrowRight") {
        this.player.setState(states.RUNNING_RIGHT);
        // this.player.state.enter();
      } else if (input === "ReleaseArrowLeft") {
        this.player.setState(states.STANDING_LEFT);
        // this.player.state.enter();
      }else if (input === "ArrowDown") {
        this.player.setState(states.SITTING_LEFT);
        // this.player.state.enter();
      }    
    }
}

    export class RunningRight extends State {
        constructor(player) {
          super("RUNNING_Right");
          this.player = player;
        }
      
        enter() {
          this.player.frameX = 0;
          this.player.frameY = 6;
          this.player.speed = this.player.maxSpeed;
          this.player.maxFrame = 8;
        }
      
        handleInput(input) {
          if (input === "ArrowLeft") {
            this.player.setState(states.RUNNING_LEFT);
            // this.player.state.enter();
          } else if (input === "ReleaseArrowRight") {
            this.player.setState(states.STANDING_RIGHT);
            // this.player.state.enter();
          }else if (input === "ArrowDown") {
            this.player.setState(states.SITTING_RIGHT);
            // this.player.state.enter();
          }    
        }
  }


  export class JumpingLeft extends State {
    constructor(player) {
          super("JUMPING_LEFT");
          this.player = player;
        }
      
        enter() {
          this.player.frameX = 0;
          this.player.frameY = 3;
          if(this.player.onGround()) this.player.vy = -40;
          this.player.speed = -this.player.maxSpeed * 0.5;
          this.player.maxFrame = 6;
        }
      
        handleInput(input) {    
          if(input === "ArrowRight"){
            this.player.setState(states.JUMPING_RIGHT); 
          }else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
          else if(this.player.vy > 0) this.player.setState(states.FALLING_LEFT);
      }
  }

export class JumpingRight extends State {
    constructor(player) {
      super("JUMPING_RIGHT");
      this.player = player;
    }

    enter() {
      this.player.frameX = 0;
      this.player.frameY = 2;
      if(this.player.onGround()) this.player.vy = -40;
      this.player.speed = this.player.maxSpeed * 0.5;
      this.player.maxFrame = 6;
    }

    handleInput(input) {
      if(input === "ArrowLeft"){
        this.player.setState(states.JUMPING_LEFT); 
      }else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
      else if(this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
      
  }
}

export class FallingLeft extends State {
  constructor(player) {
        super("FALLING_LEFT");
        this.player = player;
      }
    
      enter() {
        this.player.frameX = 0;
        this.player.frameY = 5;
        this.player.maxFrame = 6;
        
      }
    
      handleInput(input) {    
        if(input === "ArrowRight"){
          this.player.setState(states.FALLING_RIGHT); 
        }else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
        
    }
}


export class FallingRight extends State {
  constructor(player) {
        super("FALLING_RIGHT");
        this.player = player;
      }
    
      enter() {
        this.player.frameX = 0;
        this.player.frameY = 4;
        this.player.maxFrame = 6;
        
      }
    
      handleInput(input) {    
        if(input === "ArrowLeft"){
          this.player.setState(states.FALLING_LEFT); 
        }else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
        
    }
}