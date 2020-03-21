"use strict";

/********************************************************************

Meat your pet
Alex Lorrain

Take care of your animal. Feed him, bathe him and speak to him.
But be careful not to get attach too much.
*********************************************************************/

// setup()
//
// Sets up the game
function setup() {
  createCanvas(500, 500);

  // Setup the music
  music = loadSound("assets/sounds/epic.mp3")

  imageMode(CENTER)
  pet = new Pet(width/2 , height / 2);
  background = loadImage('assets/images/________');
}


function gameplay() {

}
