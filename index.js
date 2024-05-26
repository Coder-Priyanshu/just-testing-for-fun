document.addEventListener("DOMContentLoaded", () => {
  const rightImage = document.querySelector(".slide-right");
  const leftImage = document.querySelector(".slide-left");

  // Add the 'active' class to start the sliding effect
  setTimeout(() => {
    rightImage.classList.add("active-right");
    leftImage.classList.add("active-left");
  }, 100); // Delay to ensure the images start sliding after the page loads
});
document.addEventListener("DOMContentLoaded", () => {
  const emojiContainer = document.getElementById("emoji-container");
  const emojis = ["💕", "🧡", "💓", "💗", "💖", "💞", "🩷", "❤️"]; // Add your desired emojis here

  function createEmoji() {
    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    // Set random horizontal position
    emojiElement.style.left = Math.random() * 100 + "vw";

    // Set random animation duration and delay
    emojiElement.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2 to 5 seconds
    emojiElement.style.animationDelay = Math.random() * 2 + "s"; // 0 to 2 seconds

    emojiContainer.appendChild(emojiElement);

    // Remove the emoji after it falls
    setTimeout(() => {
      emojiContainer.removeChild(emojiElement);
    }, (parseFloat(emojiElement.style.animationDuration) + parseFloat(emojiElement.style.animationDelay)) * 1000);
  }

  // Create emojis at intervals
  setInterval(createEmoji, 100); // Adjust frequency as needed
});
const audioControlButton = document.getElementById("audio-control");
// const audioIcon = document.getElementById('audio-control');
const backgroundMusic = document.getElementById("background-music");
let isPlaying = true;
audioControlButton.addEventListener("click", () => {
  if (isPlaying) {
    backgroundMusic.pause();
    audioControlButton.src = "img/play.png";
  } else {
    backgroundMusic.play();
    audioControlButton.src = "img/pause.png";
  }
  isPlaying = !isPlaying;
});
