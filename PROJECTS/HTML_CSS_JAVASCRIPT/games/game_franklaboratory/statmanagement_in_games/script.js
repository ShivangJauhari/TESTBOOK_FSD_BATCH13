import Player from "./player.js";
import InputHandler from "./input.js";
import { drawStatusText } from "./utils.js";


window.addEventListener('load', function() {

    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
    
    const input = new InputHandler();
    console.log(input.lastKey);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // console.log(input.lastKey);
        player.update(input.lastKey);
        player.draw(ctx);
        drawStatusText(ctx, input, player);
        requestAnimationFrame(animate);
    }

    animate();

});