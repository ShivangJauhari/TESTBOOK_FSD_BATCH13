export function drawStatusText(context, input, player){
    context.font = '20px Handlee';
    context.fillStyle = 'black';
    context.fillText(`Last key pressed: ${input.lastKey}`, 10, 30);
    context.fillText(`Current state: ${player.currentState.state}`, 10, 60);
}