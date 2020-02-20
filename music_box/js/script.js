"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let frequencies = [
  220.00,
  233.08,
  246.94,
  261.63,
  277.18,
  293.66,
  311.13,
  329.63,
  349.23,
  369.99,
  392.00
]

let drum;
let drumLoop = [
  'x',
  'o',
  'x',
  'o',
  '*',
     ,
  'o',
  '*'
]

var currentBeat = 0;

// Add sounds from my assets
let kick = new Pizzicato.Sound('/assets/sounds/kick.wav');
let hihat = new Pizzicato.Sound('/assets/sounds/hihat.wav');
let snare = new Pizzicato.Sound('/assets/sounds/snare.wav');

// Create a sound with Pizzicato
let synth = new Pizzicato.Sound({
  source: 'wave',
    options: {
      frequency: 440,
      volume: 0.2
    }
})

// setup()
//
// Description of setup

function setup() {

}

function mousePressed(){
  setInterval(playRandomNote,500);
  setInterval(playDrum,250);
}

function playRandomNote() {
  let note = frequencies[Math.floor(Math.random() * frequencies.length)];
  console.log(note);
  synth.frequency = note;
  synth.play();
}

function playDrum() {
  drum = drumLoop[currentBeat];
  currentBeat++;
  if (drum === 'x'){
    kick.play();
  } else if (drum === 'o') {
    hihat.play();
  } else if (drum === '*') {
    snare.play();
  }
  if (currentBeat >= drumLoop.length){
    currentBeat = 0;
  }
}
