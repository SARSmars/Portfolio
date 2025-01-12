// Elements
const heroSubheading = document.getElementById('heroSubheading');

// Array of strings to be typed out one after another
const textArray = [
  " Web Developer",
  "Tech Enthusiast",
  // "Freelancer"
  "Mechanical Engineer"
];

// Variables to control the typing effect
let currentTextIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 100; // Adjust typing speed here (milliseconds)
let deletingSpeed = 50;
let isDeleting = false;

// Typing effect function
function typeEffect() {
  // Get the current text to display
  const currentText = textArray[currentTextIndex];
  
  // Determine the current display state based on whether we're typing or deleting
  if (isDeleting) {
    heroSubheading.innerHTML = currentText.substring(0, currentCharIndex);
    currentCharIndex--;
    
    // If all characters are deleted, switch to typing mode and move to the next text
    if (currentCharIndex < 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length; // Cycle through the textArray
      setTimeout(typeEffect, 500); // Pause before starting to type the next text
      return;
    }
  } else {
    heroSubheading.innerHTML = currentText.substring(0, currentCharIndex) + "<span class='typing-cursor'></span>";
    currentCharIndex++;
    
    // If the entire text has been typed, start deleting after a pause
    if (currentCharIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pause before starting to delete
      return;
    }
  }
  
  // Continue typing or deleting based on the mode
  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Start the typing effect
typeEffect();
