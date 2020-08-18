const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

function updateSlectedCount(){
        let selectedSeats = document.getElementsByClassName('chose')
        let totalSeats = selectedSeats.length;
        console.log(totalSeats);
        count.innerText = totalSeats;
        total.innerText = movieSelect.value * totalSeats;
}


movieSelect.addEventListener('change', (e) =>{
        ticketPrice = +e.target.value;
        const screen =document.querySelectorAll('movie-trailer')
        screen.id=e.target.id;
       
        updateSlectedCount();
})

// Event Listner on avalible seats
container.addEventListener('click', function(e) {
        if(e.target.classList.contains('vacentSeat')) {
                e.target.src='artboard-manImg.png';   
                e.target.className='chose'
                updateSlectedCount();
      }})
