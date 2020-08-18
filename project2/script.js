const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;

function updateSlectedCount(){
        const selectedSeats = document.querySelectorAll('chose')
        const totalSeats = selectedSeats.length ;
        console.log(totalSeats);
}

// Event Listner on avalible seats
container.addEventListener('click', function(e) {
        if(e.target.classList.contains('vacentSeat')) {
                if(e.target.src='artboard-vacantImg.png'){
                e.target.src='artboard-manImg.png'; 
                e.target.class='chose'
                }
                updateSlectedCount();
      }})
