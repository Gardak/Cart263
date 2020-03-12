"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload

let tarot;

function setup() {}

function mousePressed() {
  loadJSON("assets/data/tarot_interpretations.json",tarotLoaded);
}

function tarotLoaded(data) {
  tarot = data;
  console.log(tarot);
}
