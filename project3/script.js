const video = document.getElementById('video');
console.log(video);
const play = document.getElementById("play");
console.log(play);
const stop = document.getElementById('stop');
console.log(stop);
const progress = document.getElementById('progress');
console.log(progress);
const timestamp = document.getElementById('timestamp');
console .log(timestamp);

//Function
function toggleVideo()  {
   if(video.paused){
       video.play();
   }else if(video.played){
       video.pause();
   }
}
function updateIcon(e)  {
    console.log(e.target);
}
function updateProgress(e) {
    console.log(e.target);
}

function stopVideo(e) {
    console.log(e.target);
}

function setprogress(e) {
    console.log(e.target);
}

//Event Listners
// 1- Video Element - click to play or pause the video
video.addEventListener('click', toggleVideo);

// 2- Video Element -pause to toggle play icon to pause icon
video.addEventListener('pause',updateIcon);
// 3- Video Element -play to toggle pause icom to play icon
video.addEventListener('play',updateIcon); 
// 4- Video Element -play progress bar d time span
video.addEventListener('timeupdate',updateProgress);
// 5- Play Button - click to play or pause the video
play.addEventListener('click',toggleVideo);
// 6- Stop Button - click to reset video and pause video 
stop.addEventListener('click',stopVideo);
// 7- Prograss bar - change podition to change time of playback
progress.addEventListener('change',setprogress);