let moodIndex = 0;
// let audioElement = new Audio('audio/happy.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let durationDisplay = document.getElementById('durationDisplay');
let currentTimeDisplay = document.getElementById('currentTimeDisplay');
let moodImg = document.querySelector('.musicAnimation');


//handle play-pause play

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const mood =  params.get('mood');

console.log("mood = " + mood);



const sound = new Howl({src: [moodDB[mood].music]});


//update music title
const moodTitleElement = document.querySelector('.genreTitle');
moodTitleElement.innerText = mood + " Tunes";
// console.log("mood = " + moodTitleElement);

//update music

// sound.load({ src: [moodDB[mood].music] });

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
const navSelect = document.getElementById(moodDB[mood].mood);
navSelect.style.fontWeight = 600;
navSelect.style.textDecoration = "underline";






function handlePlayPauseClick() {
    if (sound.playing()) {
        sound.pause();
        masterPlay.src = 'assets/play-solid.svg';
        moodImg.classList.remove('spinner');
    } else {
        sound.play();
        masterPlay.src = 'assets/pause-solid.svg';
        moodImg.classList.add('spinner');
        // moodImage.parentElement.classList.toggle('playing');
    }
}

masterPlay.addEventListener('click', handlePlayPauseClick);

// masterPlay.addEventListener('click', ()=>{
//     if (sound.playing()) {
//         sound.pause();
//         masterPlay.src = 'assets/play-solid.svg';
//         moodImg.classList.remove('spinner');
//     } else {
//         sound.play();
//         masterPlay.src = 'assets/pause-solid.svg';
//         moodImg.classList.add('spinner');
//         // moodImage.parentElement.classList.toggle('playing');
//     }
// })








function updateSeekBarAndTimeDisplays() {
    // Update seekbar and time displays every second
    let updateInterval = setInterval(function () {
        // Update seekbar
        let progress = (sound.seek() / sound.duration()) * 100;
        progressBar.value = progress;

        // Update current time display
        currentTimeDisplay.textContent = formatTime(sound.seek());

        // Update duration display
        durationDisplay.textContent = formatTime(sound.duration());

        // Check if the sound has finished playing
        if (!sound.playing()) {
            // Clear the interval if the sound is not playing
            clearInterval(updateInterval);
        }
    }, 1000);
}

sound.on('play', updateSeekBarAndTimeDisplays);

// sound.on('play', function () {
//     // Set interval to update seekbar and time displays every second
//     let updateInterval = setInterval(function () {
//       // Update seekbar
//       let progress = (sound.seek() / sound.duration()) * 100;
//       progressBar.value = progress;
  
//       // Update current time display
//       currentTimeDisplay.textContent = formatTime(sound.seek());
  
//       // Update duration display
//       durationDisplay.textContent = formatTime(sound.duration());
  
//       // Check if the sound has finished playing
//       if (!sound.playing()) {
//         // Clear the interval if the sound is not playing
//         clearInterval(updateInterval);
//       }
//     }, 1000);
//   });
  
  // Function to format time in MM:SS
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }


  function handleSeekEvent() {
    // update seekbar
    let progress = (sound.seek() / sound.duration()) * 100;
    progressBar.value = progress;

    //update current time display
    currentTimeDisplay.textContent = formatTime(sound.seek());
}

sound.on('seek', handleSeekEvent);

// sound.on('seek', () => {
//     // update seekbar
//     let progress = (sound.seek() / sound.duration()) * 100;
//     progressBar.value = progress;

//     //update current time display
//     currentTimeDisplay.textContent = formatTime(sound.seek());
// });

//duration update


function handleLoadEvent() {
    // update total duration display
    durationDisplay.textContent = formatTime(sound.duration());
}

sound.on('load', handleLoadEvent);

// sound.on('load', () => {
//     // update total duration display
//     durationDisplay.textContent = formatTime(sound.duration());
// });

// forward when seekbar changes
progressBar.addEventListener('input', updateChange);

function updateChange() {
    sound.seek(progressBar.value * sound.duration() / 100);
}


function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


let happy = document.getElementById('happy');
let romantic = document.getElementById('romantic');
let relaxed = document.getElementById('relaxed');
let emo = document.getElementById('emo');
let motivated = document.getElementById('motivated');
let energized = document.getElementById('energized');
let focus = document.getElementById('focus');
let chill = document.getElementById('chill');

// Event listeners for each mood button
happy.addEventListener('click', () => updateMood('Happy'));
romantic.addEventListener('click', () => updateMood('Romantic'));
relaxed.addEventListener('click', () => updateMood('Relaxed'));
emo.addEventListener('click', () => updateMood('Emo'));
motivated.addEventListener('click', () => updateMood('Motivated'));
energized.addEventListener('click', () => updateMood('Energized'));
focus.addEventListener('click', () => updateMood('Focus'));
chill.addEventListener('click', () => updateMood('Chill'));


function updateMood(selectedMood) {
    // Update audio source
    // audioElement.src = `audio/${selectedMood}.mp3`;
    sound.pause();
    sound.seek(0);
    sound.pause()

    // Update Howl sound source

    
    sound.unload();
    console.log(moodDB[selectedMood].music)
    // sound.load({ _src: [moodDB[selectedMood].music] });
    
    sound._src = [moodDB[selectedMood].music];
    sound.load()
    console.log(sound);

    handleLoadEvent();
    handleSeekEvent()

    // Update music title
    moodTitleElement.innerText = selectedMood + " Tunes";

    // Update background color
    backgroundColor.style.backgroundColor = moodDB[selectedMood].bgColor;

    // Update text color
    songText.style.color = moodDB[selectedMood].color;

    // Update image
    moodImage.src = moodDB[selectedMood].imgFile;

    // Update navbar color
    navbar.style.color = moodDB[selectedMood].color;


    Object.values(moodDB).forEach((mood) => {
        const navItem = document.getElementById(mood.mood);
        if (navItem) {
            navItem.style.fontWeight = 'normal';
            navItem.style.textDecoration = "none";
        }
    });
    // Highlight mood in navbar
    const selectedNav = document.getElementById(moodDB[selectedMood].mood);
    if (selectedNav) {

        selectedNav.style.fontWeight = 600;
        selectedNav.style.textDecoration = "underline";
    }

    setTimeout(updateTimeDisplay, 100);
}




function updateTimeDisplay() {
    // Update current time display
    currentTimeDisplay.textContent = formatTime(sound.seek());

    // Update total duration display
    durationDisplay.textContent = formatTime(sound.duration());
}


