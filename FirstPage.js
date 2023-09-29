// for the tagline
// Function to add the "show" class and trigger the animation
function animateTaglines() {
    const taglines = document.querySelectorAll(".tagline");
    
    taglines.forEach(function (tagline, index) {
      tagline.classList.add("show");
    });
  }
  
  // Initially trigger the animation
  animateTaglines();
  
  // Set up a repeating interval for the animation
  setInterval(animateTaglines, 2000); // 2000 milliseconds (2 seconds)
  
  
// for the full screen navigation
function toggleNav() {
    var nav = document.getElementById("myNav");
    if (nav.style.width === "100%") {
        nav.style.width = "0%";
    } else {
        nav.style.width = "100%";
    }
}

// for slideshow of image
let slideIndex = 0;
let slideshowInterval;

// Start the slideshow
startSlideshow();

function startSlideshow() {
    slideshowInterval = setInterval(function () {
        changeSlide(1); // Auto transition to the next slide
    }, 3000); // Change slide every 3 seconds
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

function showSlides() {
    let slides = document.getElementsByClassName("slideshow-slide");
    let captions = document.getElementsByClassName("caption");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex >= slides.length) { // Use '>=', not '>'
        slideIndex = 0; // Reset to the first slide
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Set to the last slide
    }

    slides[slideIndex].style.display = "block"; // Use 'slideIndex' directly
}


function changeSlide(n) {
    stopSlideshow(); // Stop the automatic slideshow
    slideIndex += n;
    showSlides();
    startSlideshow(); // Restart the automatic slideshow
}

// Initially, show the first slide
showSlides();
