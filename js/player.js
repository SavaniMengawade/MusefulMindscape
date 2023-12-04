
let moodIndex = 0;
let audioElement = new Audio('audio/happy.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let durationDisplay = document.getElementById('durationDisplay');
let currentTimeDisplay = document.getElementById('currentTimeDisplay');

const sound = new Howl({src: ['audio/happy.mp3']});
//handle play-pause play

masterPlay.addEventListener('click', ()=>{
    if (sound.playing()) {
        sound.pause();
        masterPlay.src = 'assets/play-solid.svg';
    } else {
        sound.play();
        masterPlay.src = 'assets/pause-solid.svg';
    }
})


sound.on('play', function () {
    // Set interval to update seekbar and time displays every second
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
  });
  
  // Function to format time in MM:SS
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }



sound.on('seek', () => {
    // update seekbar
    let progress = (sound.seek() / sound.duration()) * 100;
    progressBar.value = progress;

    //update current time display
    currentTimeDisplay.textContent = formatTime(sound.seek());
});

//duration update
sound.on('load', () => {
    // update total duration display
    durationDisplay.textContent = formatTime(sound.duration());
});

// forward when seekbar changes
progressBar.addEventListener('input', updateChange);

function updateChange() {
    sound.seek(progressBar.value * sound.duration() / 100);
}






//--------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
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
const navSelect = document.getElementById(moodDB[mood].mood);
navSelect.style.fontWeight = 600;


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

function updateMood(selectedMood) {
    // Update audio source
    audioElement.src = `audio/${selectedMood}.mp3`;

    // Update Howl sound source
    sound.load({ src: [`audio/${selectedMood}.mp3`] });

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
        }
    });
    // Highlight mood in navbar
    const selectedNav = document.getElementById(moodDB[selectedMood].mood);
    if (selectedNav) {

        selectedNav.style.fontWeight = 600;
    }
}

// Event listeners for each mood button
happy.addEventListener('click', () => updateMood('Happy'));
romantic.addEventListener('click', () => updateMood('Romantic'));
relaxed.addEventListener('click', () => updateMood('Relaxed'));
emo.addEventListener('click', () => updateMood('Emo'));
motivated.addEventListener('click', () => updateMood('Motivated'));
energized.addEventListener('click', () => updateMood('Energized'));
focus.addEventListener('click', () => updateMood('Focus'));
chill.addEventListener('click', () => updateMood('Chill'));






