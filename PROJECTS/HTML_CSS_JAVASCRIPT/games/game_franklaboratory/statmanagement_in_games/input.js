export default class InputHandler{
    constructor(){
        this.lastKey = '';
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case 'ArrowUp':
                    this.lastKey = 'ArrowUp';
                    break;
                case 'ArrowDown':
                    this.lastKey = 'ArrowDown';
                    break;
                case 'ArrowLeft':
                    this.lastKey = 'ArrowLeft';
                    break;
                case 'ArrowRight':
                    this.lastKey = 'ArrowRight';
                    break;
            }
        });

        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case 'ArrowUp':
                    if(this.lastKey === 'ArrowUp'){
                        this.lastKey = '';
                    }
                    break;
                case 'ArrowDown':
                    if(this.lastKey === 'ArrowDown'){
                        this.lastKey = '';
                    }
                    break;
                case 'ArrowLeft':
                    if(this.lastKey === 'ArrowLeft'){
                        this.lastKey = '';
                    }
                    break;
                case 'ArrowRight':
                    if(this.lastKey === 'ArrowRight'){
                        this.lastKey = '';
                    }
                    break;
            }
        });
    }
}