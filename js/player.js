console.log("Welcome");

let moodIndex = 0;
let audioElement = new Audio('audio/happy.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');



let songs = [
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'},
    {moodName: 'Happy', filePath: 'audio/happy.mp3',imgPath:'assets/happy.svg'}
]



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












