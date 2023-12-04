var textWrapper = document.querySelector('.firstAnimation');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.firstAnimation .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.firstAnimation .letter',
    opacity: 1, // Set opacity to 1
    duration: 900,
    easing: "easeOutExpo",
    delay: 1000,
    complete: function (anim) {
      // Code to run after the animation completes
      console.log("Animation complete!");
    }
  });



document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');

    // Wait for 2 seconds and then remove the 'hidden' class
    setTimeout(function() {
        content.classList.add('hidden');
    }, 6000);
});



console.log("Welcome to Museful Mindscape");




Jump('.textContent',{
  // duration in milliseconds
  duration: 1000,
  // offset in pixels
  offset: 0,
  // fired after scroll
  callback: null,
  
  // easing function
  easing: 'easeInOutQuad',
  // enable accessibility
  a11y: false
  
});







