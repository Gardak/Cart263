"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let sineWave = new Pizzicato.Sound({
  source: 'wave',
  options: {
    frequency: 440,
    attack: 2,
    release: 2
  }
});

function setup() {}

function mousePressed() {
  sineWave.play();
  setTimeout(sineWave.stop, 2000);
}

function stopSineWave() {
  sineWave.stop();
}
