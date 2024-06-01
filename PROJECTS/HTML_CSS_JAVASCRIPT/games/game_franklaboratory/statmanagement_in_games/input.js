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
                    this.lastKey = 'ReleaseArrowUp';
                    break;
                case 'ArrowDown':
                    this.lastKey = 'ReleaseArrowDown';
                    break;
                case 'ArrowLeft':
                    this.lastKey = 'ReleaseArrowLeft';
                    break;
                case 'ArrowRight':
                    this.lastKey = 'ReleaseArrowRight';
                    break;
            }
        });
    }
}