const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;

// Event Listner on avalible seats
container.addEventListener('click', function(e) {
        if(e.target.classList.contains('vacentSeat')) {
                e.target.src='../project2\Images\artboard-manImg.png';
        }
})