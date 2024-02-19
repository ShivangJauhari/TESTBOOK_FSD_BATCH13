// Ticket booking app

const row = 5;
const col = 20;
const seats = [];
let selectedSeats = [];
const pricePerSeat = 250;

// Create seats in the row*col grid and apeend it to the each div with class 'row' and push each seat to the seats array
for (let i = 0; i < row; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    for (let j = 0; j < col; j++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.id = `${i+1}-${j+1}`;
        seat.innerText = `${i+1}-${j+1}`;
        rowDiv.appendChild(seat);
        seats.push(seat);
    }
    document.querySelector('.container').appendChild(rowDiv);
}

// Add event listener to each seat and toggle the class '.occupied' on click
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('occupied');
        if (seat.classList.contains('occupied')) {
            selectedSeats.push(seat.id);
        } else {
            selectedSeats = selectedSeats.filter(s => s !== seat.id);
        }
        console.log(selectedSeats);
    });
});

// create a confirm button and add event listener to it
const confirmButton = document.createElement('button');
confirmButton.innerText = 'Confirm Booking';
confirmButton.className = 'confirm';
document.querySelector('.btn').appendChild(confirmButton);

// Add event listener to the confirm button
confirmButton.addEventListener('click', () => {
    totalPrice = selectedSeats.length * pricePerSeat;
    if (selectedSeats.length === 0) {
        alert('Please select a seat');
    } else {
        alert(`You have successfully booked ${selectedSeats.length} seats and your seat numbers are ${selectedSeats.join(', ') }.\n
        Total price: ${totalPrice}`);
        
        selectedSeats.forEach(seat => {
            document.getElementById(seat).classList.remove('occupied');
        });
        selectedSeats = [];
    }
});


