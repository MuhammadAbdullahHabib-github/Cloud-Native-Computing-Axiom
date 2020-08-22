// Ticket

 window.addEventListener('load',()=>{
     const movie = localStorage.getItem('Movie');
     const seat = localStorage.getItem('SEAT');
     const price = localStorage.getItem('Price');

     let seatInfo = document.getElementById('seatInfo');
     seatInfo.innerHTML =`<h3>${seat}</h3>`; 
     let movieInfo = document.getElementById('movieInfo');
     movieInfo.innerHTML =`<h3>${movie}</h3>`; 
     let priceInfo = document.getElementById('priceInfo');
     priceInfo.innerHTML =`<h3>${price}</h3>`; 
 })