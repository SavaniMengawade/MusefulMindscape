console.log("Welcome");

let moodIndex = 0;
let audioElement = new Audio('audio/happy.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');


//handle play-pause play

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.src = 'assets/pause-solid.svg'
    }
    else{
        audioElement.pause();
        masterPlay.src = 'assets/play-solid.svg'
    }
})


//handle seekbar



//time update

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
})


//forward when i change

progressBar.addEventListener('change',updateChange);

function updateChange(){
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
}


//extract mood

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const mood =  params.get('mood');

// console.log("mood = " + mood);


//update music title
const moodTitleElement = document.querySelector('.genreTitle');
moodTitleElement.innerText = mood + " Tunes";
console.log("mood = " + moodTitleElement);


//update bg color
const backgroundColor = document.getElementById('musicPlayer');
backgroundColor.style.backgroundColor = moodDB[mood].bgColor;

//update text color
const songText = document.querySelector('.songInfo');
songText.style.color = moodDB[mood].color;

//update Image
const moodImage = document.querySelector('.moodImg');
moodImage.src = moodDB[mood].imgFile;

//update navbar color
const navbar = document.querySelector('.moodList');
navbar.style.color = moodDB[mood].color;


//highlight mood in navbar
console.log(navbar.innerText.toLowerCase());











