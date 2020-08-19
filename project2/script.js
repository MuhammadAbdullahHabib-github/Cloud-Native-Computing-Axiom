const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const screen = document.querySelector('.screen');
let option = document.querySelectorAll('.movieClass');
let movietrailer = ['https://www.youtube.com/embed/qSqVVswa420','https://www.youtube.com/embed/qSqVVswa420','https://www.youtube.com/embed/7TavVZMewpY','https://www.youtube.com/embed/XiHiW4N7-bo','https://www.youtube.com/embed/2QKg5SZ_35I']
let ticketPrice = +movieSelect.value;

function updateSlectedCount(){
        let selectedSeats = document.getElementsByClassName('chose')
        let totalSeats = selectedSeats.length;
        count.innerText = totalSeats;
        total.innerText = movieSelect.value * totalSeats;
}

movieSelect.addEventListener('change', (e) =>{
        ticketPrice = +e.target.value;
        screen.innerHTML = `<iframe class='movie-trailer' width="650" height="290" src="${movietrailer[+e.target.value]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          updateSlectedCount();
})

// Event Listner on avalible seats
container.addEventListener('click', function(e) {
        if(e.target.classList.contains('vacentSeat')) {
                e.target.src='occupied.png'; 
                e.target.className='chose'
                updateSlectedCount();
 }})

 




 