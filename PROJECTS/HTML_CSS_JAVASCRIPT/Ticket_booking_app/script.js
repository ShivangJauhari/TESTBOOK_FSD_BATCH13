// Ticket booking app

const row = 10;
const col = 10;
const seats = [];
let selectedSeats = [];

// Create seats in the row*col grid and apeend it to the each div with class 'row' and push each seat to the seats array
for (let i = 0; i < row; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    for (let j = 0; j < col; j++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.id = `${i}-${j}`;
        rowDiv.appendChild(seat);
        seats.push(seat);
    }
    document.querySelector('.container').appendChild(rowDiv);
}


