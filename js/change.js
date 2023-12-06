// let happy = document.getElementById('happy');
// let romantic = document.getElementById('romantic');
// let relaxed = document.getElementById('relaxed');
// let emo = document.getElementById('emo');
// let motivated = document.getElementById('motivated');
// let energized = document.getElementById('energized');
// let focus = document.getElementById('focus');
// let chill = document.getElementById('chill');

// // Event listeners for each mood button
// happy.addEventListener('click', () => updateMood('Happy'));
// romantic.addEventListener('click', () => updateMood('Romantic'));
// relaxed.addEventListener('click', () => updateMood('Relaxed'));
// emo.addEventListener('click', () => updateMood('Emo'));
// motivated.addEventListener('click', () => updateMood('Motivated'));
// energized.addEventListener('click', () => updateMood('Energized'));
// focus.addEventListener('click', () => updateMood('Focus'));
// chill.addEventListener('click', () => updateMood('Chill'));


// function updateMood(selectedMood) {
//     // Update audio source
//     // audioElement.src = `audio/${selectedMood}.mp3`;
//     sound.pause();
//     sound.seek(0);
//     sound.pause()

//     // Update Howl sound source

    
//     sound.unload();
//     console.log(moodDB[selectedMood].music)
//     // sound.load({ _src: [moodDB[selectedMood].music] });
    
//     sound._src = [moodDB[selectedMood].music];
//     sound.load()
//     console.log(sound);

    

//     // Update music title
//     moodTitleElement.innerText = selectedMood + " Tunes";

//     // Update background color
//     backgroundColor.style.backgroundColor = moodDB[selectedMood].bgColor;

//     // Update text color
//     songText.style.color = moodDB[selectedMood].color;

//     // Update image
//     moodImage.src = moodDB[selectedMood].imgFile;

//     // Update navbar color
//     navbar.style.color = moodDB[selectedMood].color;


//     Object.values(moodDB).forEach((mood) => {
//         const navItem = document.getElementById(mood.mood);
//         if (navItem) {
//             navItem.style.fontWeight = 'normal';
//         }
//     });
//     // Highlight mood in navbar
//     const selectedNav = document.getElementById(moodDB[selectedMood].mood);
//     if (selectedNav) {

//         selectedNav.style.fontWeight = 600;
//     }
// }




// function updateTimeDisplay() {
//     // Update current time display
//     currentTimeDisplay.textContent = formatTime(sound.seek());

//     // Update total duration display
//     durationDisplay.textContent = formatTime(sound.duration());
// }



