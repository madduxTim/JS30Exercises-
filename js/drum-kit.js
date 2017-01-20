  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!audio) return; // keeps it only looking for the keys we define and stops the function from running.
    audio.currentTime = 0; 
    audio.play();
    key.classList.add("playing");
  }
  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip it if it's not a transform
    this.classList.remove("playing");
  };
  
  const keys = document.querySelectorAll(".key");
// you cannot simply attach a listener to an array-like collection of selectors. you have to explicitly loop through each 
// with something like the following: 
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  
  window.addEventListener("keydown", playSound);