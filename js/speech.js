





//text to speech converter

// let text = document.getElementById('text');
// let speech = document.getElementById('speech');
// speech.addEventListener('click',textToSpeech())

// function textToSpeech(){
//     const temp = new SpeechSynthesisUtterance(text.innerText);
//     speechSynthesis.speak(temp);
// }


// let text = document.getElementById('text');
// let speechButton = document.getElementById('speech');
// let isSpeaking = false;
// let utterance;

// speechButton.addEventListener('click', toggleSpeech);

// function toggleSpeech() {
//     if (!isSpeaking) {
//         startSpeech();
//     } else {
//         stopSpeech();
//     }
// }

// function startSpeech() {
//     utterance = new SpeechSynthesisUtterance(text.innerText);
//     speechSynthesis.speak(utterance);
//     isSpeaking = true;

//     // Add event listeners for pause and stop
//     utterance.onend = function () {
//         isSpeaking = false;
//     };

//     speechButton.innerText = 'Pause';
//     speechButton.removeEventListener('click', toggleSpeech);
//     speechButton.addEventListener('click', pauseSpeech);
// }

// function pauseSpeech() {
//     if (isSpeaking) {
//         speechSynthesis.pause();
//         isSpeaking = false;
//         speechButton.innerText = 'Resume';
//     } else {
//         speechSynthesis.resume();
//         isSpeaking = true;
//         speechButton.innerText = 'Pause';
//     }
// }

// function stopSpeech() {
//     speechSynthesis.cancel();
//     isSpeaking = false;
//     speechButton.innerText = 'Speak';
//     speechButton.removeEventListener('click', pauseSpeech);
//     speechButton.addEventListener('click', toggleSpeech);
// }


// const speechButton = document.getElementById('speech');
//         const textContents = document.querySelectorAll('.textContent .text, .card .text');

//         let currentSpeech = null;

//         function startSpeech() {
//             if (currentSpeech) {
//                 // Stop the current speech
//                 speechSynthesis.cancel();
//                 currentSpeech = null;
//             } else {
//                 // Concatenate text content from all elements
//                 const fullText = Array.from(textContents).map(element => element.textContent).join(' ');

//                 // Start new speech
//                 currentSpeech = new SpeechSynthesisUtterance(fullText);
//                 speechSynthesis.speak(currentSpeech);
//             }
//         }

//         speechButton.addEventListener('click', startSpeech);


const speechButton = document.getElementById('speech');
        const textContents = document.querySelectorAll('.textContent .text, .card .text');

        // Check if speech has already started
        let speechStarted = false;
        let currentSpeech = null;

        function startSpeech() {
            if (!speechStarted) {
                // Concatenate text content from all elements
                const fullText = Array.from(textContents).map(element => element.textContent).join(' ');

                // Start new speech
                currentSpeech = new SpeechSynthesisUtterance(fullText);
                speechSynthesis.speak(currentSpeech);

                // Set flag to indicate speech has started
                speechStarted = true;
            } else {
                // Pause the speech if it's already started
                speechSynthesis.pause();
            }
        }

        speechButton.addEventListener('click', startSpeech);