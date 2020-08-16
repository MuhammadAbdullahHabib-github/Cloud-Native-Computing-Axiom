const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document. getElementById("count");
const total = document.getElementById('total');
const moviesSelect = document.getElementById('movie');
let ticketPrice = moviesSelect.value;
console.log(ticketPrice);

//Function to updade counts

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row.seat.selected');
    const countSelectedSeats =selectedSeats.length;
    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice*countSelectedSeats
}

//Event listner for change in select Movie DropDown
moviesSelect.addEventListener('change',(e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Event Listner on avalible seats
container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat') && !(e.target.classList.contains('.occupied'))){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})
