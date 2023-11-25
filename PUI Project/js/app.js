// Wrap every letter in a span
var textWrapper = document.querySelector('.firstAnimation');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.firstAnimation .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.mfirstAnimationl3',
    opacity: 0,
    duration: 900,
    easing: "easeOutExpo",
    delay: 1000
  });



document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');

    // Wait for 2 seconds and then remove the 'hidden' class
    setTimeout(function() {
        content.classList.add('hidden');
    }, 6000);
});



console.log("Welcome to Museful Mindscape");