const container = document.querySelector('.container');
const seatSpace = document.querySelector('.row-space');
const seats = document.querySelectorAll('.seat')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;

// Event Listner on avalible seats
seatSpace.addEventListener('click', (e) => {
        e.target.classList.add('.male');
    
})