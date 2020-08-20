const movieOption = document.querySelector('#movie');
let ticketCount = document.getElementById('count');
let ticketPrice = document.getElementById('total');
let totalVacentSeats = 0;
let totalSeatsBooked = 0;
let movieTrailor = ['https://www.youtube.com/embed/qSqVVswa420','https://www.youtube.com/embed/BIhNsAtPbPI','https://www.youtube.com/embed/7TavVZMewpY','https://www.youtube.com/embed/XiHiW4N7-bo','https://www.youtube.com/embed/2QKg5SZ_35I']
const screen = document.querySelector('.screen');
movieOption.addEventListener("change", (e) => {
        if(+e.target.value === 200){
                screen.innerHTML = `<iframe class='movie-trailer' width='650' height='290' src='${movieTrailor[0]}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        }else if(+e.target.value === 150){
                screen.innerHTML = `<iframe class='movie-trailer' width='650' height='290' src='${movieTrailor[1]}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        }else if(+e.target.value === 210){
                screen.innerHTML = `<iframe class='movie-trailer' width='650' height='290' src='${movieTrailor[2]}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        }else if(+e.target.value === 180){
                screen.innerHTML = `<iframe class='movie-trailer' width='650' height='290' src='${movieTrailor[3]}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        }else if(+e.target.value === 140){
                screen.innerHTML = `<iframe class='movie-trailer' width='650' height='290' src='${movieTrailor[4]}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        }
})

function updateCount(){
        

        let totalSeatCount =  (  totalSeatsBooked -  totalVacentSeats );
        console.log(totalSeatCount)
        ticketCount.innerText = totalSeatCount;
        ticketPrice.innerText = totalSeatCount * movieOption.value;
}

let container = document.querySelector('.container');
container.addEventListener("click",(e) => {
        if(e.target.classList.contains('vacentSeat')){
                e.target.src = 'occupiedImg2.png';
                e.target.className = 'occupied'; 
                ++totalSeatsBooked; 
        } else if( e.target.classList.contains('occupied')){
                e.target.src = 'artboard-vacantImg.png';
                e.target.className = 'vacentSeat';
                ++totalVacentSeats;
        }
        updateCount();
})
















































// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.seat')
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');
// const screen = document.querySelector('.screen');
// let option = document.querySelectorAll('.movieClass');
// let movietrailer = ['https://www.youtube.com/embed/qSqVVswa420','https://www.youtube.com/embed/BIhNsAtPbPI','https://www.youtube.com/embed/7TavVZMewpY','https://www.youtube.com/embed/XiHiW4N7-bo','https://www.youtube.com/embed/2QKg5SZ_35I']
// let ticketPrice = +movieSelect.value;

// function updateSlectedCount(){
//         let selectedSeats = document.getElementsByClassName('chose')
//         let totalSeats = selectedSeats.length;
//         count.innerText = totalSeats;
//         total.innerText = movieSelect.value * totalSeats;
// }

// movieSelect.addEventListener('change', (e) =>{
//         ticketPrice = +e.target.value;
//         screen.innerHTML = `<iframe class='movie-trailer' width="650" height="290" src="${movietrailer[+e.target.value]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//           updateSlectedCount();
// })

// // Event Listner on avalible seats
// container.addEventListener('click', function(e) {
//         if(e.target.classList.contains('vacentSeat')) {
//                 e.target.src='occupiedImg2.png'; 
//                 e.target.className='chose'
//                 updateSlectedCount();
//  }})

 




 