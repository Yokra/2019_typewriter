"use strict";

let typewriterText = document.querySelector("#typewriter").textContent;
let counter = 0;

init();

function init() {
  document.querySelector("#typewriter").textContent = "";

  typewriterLoop();
}

function typewriterLoop() {
  counter++;
  document.querySelector("#typewriter").textContent = typewriterText.substring(
    0,
    counter
  );
  if (typewriterText.length > counter) {
    setTimeout(typewriterLoop, Math.random() * 200);
  }
}
