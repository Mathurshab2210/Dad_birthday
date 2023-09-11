  // Vanilla JavaScript code for the birthday envelope animation
  function goToDesiredLink() {
    // Replace 'your_desired_link_here' with the URL you want to navigate to
    window.location.href = 'index.html';
  }

  // Function to initialize the animation when the document is ready
  document.addEventListener("DOMContentLoaded", function() {
    // Get the envelope element
    var envelope = document.querySelector(".envelope");

    // Check if the envelope does not have the 'open' class
    if (!envelope.classList.contains("open")) {
      // Add a click event listener to the envelope
      envelope.addEventListener("click", function() {
        // Remove the 'new' class and add the 'open' class when clicked
        envelope.classList.remove("new");
        envelope.classList.add("open");
      });
    }
  });
  
     // Play audio on hover
     var flipCard = document.getElementById('flipCard');
     var hoverAudio = document.getElementById('hoverAudio');
 
     flipCard.addEventListener('mouseenter', function() {
       if (hoverAudio.readyState >= 1) { // Check if audio is loaded and ready
         hoverAudio.play();
       }
     });
 
     flipCard.addEventListener('mouseleave', function() {
       hoverAudio.pause();
       hoverAudio.currentTime = 0; // Reset the audio to the beginning
     });
     // Play audio on hover
     var flipCard = document.getElementById('flipCard2');
     var hoverAudio = document.getElementById('hoverAudio');
 
     flipCard.addEventListener('mouseenter', function() {
       if (hoverAudio.readyState >= 1) { // Check if audio is loaded and ready
         hoverAudio.play();
       }
     });
 
     flipCard.addEventListener('mouseleave', function() {
       hoverAudio.pause();
       hoverAudio.currentTime = 0; // Reset the audio to the beginning
     });
     // Play audio on hover
     var flipCard = document.getElementById('play_music');
     var hoverAudio2 = document.getElementById('hoverAudio2');
 
     flipCard.addEventListener('mouseenter', function() {
       if (hoverAudio2.readyState >= 1) { // Check if audio is loaded and ready
         hoverAudio2.play();
       }
     });
 
     flipCard.addEventListener('mouseleave', function() {
       hoverAudio2.pause();
       hoverAudio.currentTime = 0; // Reset the audio to the beginning
     });
     function refreshPage() {
        location.reload();
    }
