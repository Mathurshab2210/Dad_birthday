window.addEventListener('load', function() {
  var audio = document.getElementById('birthdayAudio');

  // Play the audio
  audio.play();
});


const panels=document.querySelectorAll('.panel')
panels.forEach((panel)=>{//loop on every cards
    console.log(panel)
  panel.addEventListener("click",()=>{//add a click event
    removeActiveClasses()
    panel.classList.add("active");//when i click i add a class style 'active '
  })//
})
function removeActiveClasses(){
    panels.forEach((panel)=>{//when i click in other cards i remove active class on the others panel
        panel.classList.remove("active")
    })
}


// Get all elements with class "nft-left-overlay" and add mouseover and mouseout event listeners
document.querySelectorAll(".nft-left-overlay").forEach(function (element) {
  element.addEventListener("mouseover", function () {
    // Find the closest ancestor with class "nft-cube" and toggle the "left" class
    var nftCube = this.closest(".nft-cube");
    if (nftCube) {
      nftCube.classList.toggle("left");
    }
  });

  element.addEventListener("mouseout", function () {
    // Find the closest ancestor with class "nft-cube" and toggle the "left" class
    var nftCube = this.closest(".nft-cube");
    if (nftCube) {
      nftCube.classList.toggle("left");
    }
  });
});

// Get all elements with class "nft-right-overlay" and add mouseover and mouseout event listeners
document.querySelectorAll(".nft-right-overlay").forEach(function (element) {
  element.addEventListener("mouseover", function () {
    // Find the closest ancestor with class "nft-cube" and toggle the "right" class
    var nftCube = this.closest(".nft-cube");
    if (nftCube) {
      nftCube.classList.toggle("right");
    }
  });

  element.addEventListener("mouseout", function () {
    // Find the closest ancestor with class "nft-cube" and toggle the "right" class
    var nftCube = this.closest(".nft-cube");
    if (nftCube) {
      nftCube.classList.toggle("right");
    }
  });
});
