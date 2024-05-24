export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,

}

class State{
    constructor(state){
        this.state = state;
    }
}

export class StandingLeft extends State{
    constructor(palyer){
        super('STANDING_LEFT');
        this.palyer = palyer;
    }

    enter(){
        this.palyer.frameY = 1;
    }

    handleInput(input){
        if(input === 'ArrowRight'){
            this.palyer.setState(states.STANDING_RIGHT);
            // this.palyer.state.enter();
        }
    }
}

export class StandingRight extends State{
    constructor(palyer){
        super('STANDING_RIGHT');
        this.palyer = palyer;
    }

    enter(){
        this.palyer.frameY = 0;
    }

    handleInput(input){
        if(input === 'ArrowLeft'){
            this.palyer.setState(states.STANDING_LEFT);
            // this.palyer.state.enter();
        }

    }
}