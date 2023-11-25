





//text to speech converter

// let text = document.getElementById('text');
// let speech = document.getElementById('speech');
// speech.addEventListener('click',textToSpeech())

// function textToSpeech(){
//     const temp = new SpeechSynthesisUtterance(text.innerText);
//     speechSynthesis.speak(temp);
// }


let text = document.getElementById('text');
let speechButton = document.getElementById('speech');
let isSpeaking = false;
let utterance;

speechButton.addEventListener('click', toggleSpeech);

function toggleSpeech() {
    if (!isSpeaking) {
        startSpeech();
    } else {
        stopSpeech();
    }
}

function startSpeech() {
    utterance = new SpeechSynthesisUtterance(text.innerText);
    speechSynthesis.speak(utterance);
    isSpeaking = true;

    // Add event listeners for pause and stop
    utterance.onend = function () {
        isSpeaking = false;
    };

    speechButton.innerText = 'Pause';
    speechButton.removeEventListener('click', toggleSpeech);
    speechButton.addEventListener('click', pauseSpeech);
}

function pauseSpeech() {
    if (isSpeaking) {
        speechSynthesis.pause();
        isSpeaking = false;
        speechButton.innerText = 'Resume';
    } else {
        speechSynthesis.resume();
        isSpeaking = true;
        speechButton.innerText = 'Pause';
    }
}

function stopSpeech() {
    speechSynthesis.cancel();
    isSpeaking = false;
    speechButton.innerText = 'Speak';
    speechButton.removeEventListener('click', pauseSpeech);
    speechButton.addEventListener('click', toggleSpeech);
}