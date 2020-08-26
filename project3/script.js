const video = document.getElementById('video');
const play = document.getElementById("play");
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const playPauseButton = document.getElementById('play-pause-id');
console.log(playPauseButton);

let buttons = ["/project3/assets/images/Play-btn.png","/project3/assets/images/Pause-btn.png"]

//Function
function toggleVideo()  {
   if(video.paused){
       video.play();
   }else if(video.played){
       video.pause();
   }
}
function updateIcon()  {
    if(video.paused){
        playPauseButton.innerHTML =`<img src="${buttons[0]}" alt="Play-btn" id="play" class="play"></img>`
    }else if(video.played){ 
        playPauseButton.innerHTML=`<img src="${buttons[1]}" alt="stop-btn" id="stop" width="60%" class="stop"></img>`
    }
}
function updateProgress() {
   progress.value = (video.currentTime/video.duration)*100;
  let minutes = Math.floor(video.currentTime /60);
  let seconds = Math.floor(video.currentTime % 60);
  timestamp.innerHTML = `${minutes}:${seconds} `
  
   
}

function stopVideo() {
      video.pause();
      video.currentTime = 0;
}

function setprogress(e) {
    video.currentTime = progress.value*video.duration /100;
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