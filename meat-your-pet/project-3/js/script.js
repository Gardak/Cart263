"use strict";

/********************************************************************

Meat your pet
Alex Lorrain

Take care of your animal. Feed him, bathe him and speak to him.
But be careful not to get attach too much.
*********************************************************************/

let gameState = "intro"
let spaceBar = 32;
let fKey = 70;
let dKey = 68;
let cKey = 67;

function preload() {

  // music = loadSound("assets/sounds/epic.mp3")
  background = loadImage('assets/images/farm.jpg');

}

// setup()
//
// Sets up the game
function setup() {

  createCanvas(windowWidth, windowHeight);
   background( 255, 0, 0);
  imageMode(CENTER)
  pet = new Pet(windowWidth/2 , windowHeight / 2, windowWidth, windowHeight);
}


function draw() {
  image(background,0,0);

  if (gameState === "intro"){

    introScreen();

    if (keyIsDown(spaceBar)){
        gameState = "game";
    }

  } else if (gameState === "game") {
      pet.display();
      pet.manageStats();
      if (keyIsDown(fKey)){
        pet.feed();
      } else if (keyIsDown(dKey)) {
        pet.drink();
      } else if (keyIsDown(cKey)) {
        pet.clean();
      }
  } else if (gameState === "gameOver") {
    gameOverScreen();
    if (keyIsDown(spaceBar)){
        gameState = "intro";
    }
  }
}

function introScreen() {
  textAlign(CENTER, CENTER);

      let title = "Meet your pet\n";

      let text = "Raise your pet as good as you can\n";
      text = text + "--Press space to start--";

      let instruction = "Press F to feed your pet\n";
      instruction = instruction + "Press D to give your pet something to drink\n";
      instruction = instruction + "Press C to clean your pet\n";

      push();
      textSize(100);
      strokeWeight(10);
      stroke(200,70,30);
      fill(250);
      text(title, width / 2, height / 3);
      pop();

      push();
      textSize(36);
      strokeWeight(3);
      stroke(250);
      fill(200,70,30);
      text(text, width / 2, height / 2);
      pop();

      push();
      textSize(30);
      noStroke();
      fill(200,70,30);
      text(instruction, width * 4/5, height * 4/5);
      pop();

}

function gameOverScreen() {
  textAlign(CENTER, CENTER);

      let title = "Poor pet\n";

      let text = "You failed to take care of your pet\n";
      text = text + "--Press space to restart--";

      push();
      textSize(100);
      strokeWeight(10);
      stroke(200,70,30);
      fill(250);
      text(title, width / 2, height / 3);
      pop();

      push();
      textSize(36);
      strokeWeight(3);
      stroke(250);
      fill(200,70,30);
      text(text, width / 2, height / 2);
      pop();
}
