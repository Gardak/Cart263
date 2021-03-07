let fr = 60;

let background;
let openScreen;
let winScreen;
let overscreen;

let player;

let tree1;
let tree2;
let tree3;

let bush;
let bushPack1 = [];
let bushPack2 = [];
let bushNum = 10;

let rock;
let rockPack1 = [];
let rockPack2 = [];
let rockNum = 5;

let grass;
let grassPack1 = [];
let grassPack2 = [];
let grassNum = 15;

let speedChange = 30;
let speedUp;
let speedDown;

let x;
let y;

let gameState = "INTRO";



function setup() {

  createCanvas(windowWidth, windowHeight);
  //load images
  background = loadImage('assets/images/background.png');
  openScreen = loadImage('assets/images/rebel_attack.jpg');
  winScreen = loadImage('assets/images/empire_victory.jpeg');
  overScreen = loadImage('assets/images/rebel_victory.png');
  //setup framerate for a constant timer
  frameRate(fr);
  //setup player
  player = new SpeederBike(width / 5, height * 4 / 5);
  //setup trees obstacle
  tree1 = new Tree();
  tree2 = new Tree();
  tree3 = new Tree();
  //setup side bush
  for (i = 0; i < bushNum; i++) {

    x = windowWidth / 4 + (windowWidth) * (i / bushNum);
    y = -(windowHeight) * (i / bushNum);

    bush = new Bush(x, y);
    bushPack1.push(bush);
  }
  for (i = 0; i < bushNum; i++) {
    x = windowWidth * 1.4 + (windowWidth) * (i / bushNum);
    y = -(windowHeight) * (i / bushNum);

    bush = new Bush(x, y);
    bushPack2.push(bush);
  }
  //setup rock particles
  for (i = 0; i < rockNum; i++) {

    x = windowWidth + random(windowHeight / 2);
    y = -random(windowHeight / 2);

    rock = new Rock(x, y);
    rockPack1.push(rock);
  }
  for (i = 0; i < rockNum; i++) {
    x = random(windowWidth);
    y = random(windowHeight);

    rock = new Rock(x, y);
    rockPack2.push(rock);
  }
  //setup grass particles
  for (i = 0; i < grassNum; i++) {

    x = windowWidth + random(windowHeight / 2);
    y = -random(windowHeight / 2);

    grass = new Grass(x, y);
    grassPack1.push(grass);
  }
  for (i = 0; i < grassNum; i++) {
    x = random(windowWidth);
    y = random(windowHeight);


    grass = new Grass(x, y);
    grassPack2.push(grass);
  }
  //setup annyang
  if (annyang) {
    let commands = {
      //create a command to speed up the player
      'faster': function() {
        for (let i = 0; i < grassNum; i++) {
          grassPack1[i].speed = grassPack1[i].speed - speedChange;
          grassPack2[i].speed = grassPack2[i].speed - speedChange;
        }

        for (let i = 0; i < rockNum; i++) {
          rockPack1[i].speed = rockPack1[i].speed - speedChange;
          rockPack2[i].speed = rockPack2[i].speed - speedChange;
        }

        for (let i = 0; i < bushNum; i++) {
          bushPack1[i].speed = bushPack1[i].speed - speedChange;
          bushPack2[i].speed = bushPack2[i].speed - speedChange;
        }

        tree1.speed = tree1.speed - speedChange;
        tree2.speed = tree2.speed - speedChange;
        tree3.speed = tree3.speed - speedChange;
        //increase timer rate
        player.timerTick += 1;
      },
      //setup function to slow down the player
      'slower': function() {
        for (let i = 0; i < grassNum; i++) {
          grassPack1[i].speed = grassPack1[i].speed + speedChange;
          grassPack2[i].speed = grassPack2[i].speed + speedChange;
        }

        for (let i = 0; i < rockNum; i++) {
          rockPack1[i].speed = rockPack1[i].speed + speedChange;
          rockPack2[i].speed = rockPack2[i].speed + speedChange;
        }

        for (let i = 0; i < bushNum; i++) {
          bushPack1[i].speed = bushPack1[i].speed + speedChange;
          bushPack2[i].speed = bushPack2[i].speed + speedChange;
        }

        tree1.speed = tree1.speed + speedChange;
        tree2.speed = tree2.speed + speedChange;
        tree3.speed = tree3.speed + speedChange;
        //decrease the timer tick
        player.timerTick -= 1;
      }
    };
    //add commands to annyang
    annyang.addCommands(commands);
    //make annyang start listening
    annyang.start();

  } else {
    //alert if annyang is incompatible with current browser
    alert('This game require speech recognition through Annyang. Please use a compatible browser.');
  }
}

function draw() {
  //game start up screen
  if (gameState === "INTRO") {
    push();
    rectMode(CORNER);
    image(openScreen, 0, 0, windowWidth, windowHeight);
    pop();
    showIntro();
    if (keyIsDown(32)) {
      gameState = "GAME";
    }

  } else if (gameState === "GAME") {
    //annyang listens during the game
    annyang.start();

    push();
    rectMode(CORNER);
    image(background, 0, 0, windowWidth, windowHeight);
    pop();

    //Game over if the player hits an obstacle
    if (player.health <= 0) {
      gameState = "GAMEOVER";

      //Player wins if the timer runs out
    } else if (player.timer === 0) {
      gameState = "WIN";
    }

    //manage rocks
    for (let i = 0; i < rockPack1.length; i++) {
      rockPack1[i].move();
      rockPack1[i].display();
    }
    for (let i = 0; i < rockPack2.length; i++) {
      rockPack2[i].move();
      rockPack2[i].display();
    }

    //manage grass
    for (let i = 0; i < grassPack1.length; i++) {
      grassPack1[i].move();
      grassPack1[i].display();
    }
    for (let i = 0; i < grassPack2.length; i++) {
      grassPack2[i].move();
      grassPack2[i].display();
    }

    //manage player
    player.move();
    player.display();

    //manage side bush in front of player
    for (let i = 0; i < bushPack1.length; i++) {
      bushPack1[i].move();
      bushPack1[i].display();
    }
    for (let i = 0; i < bushPack2.length; i++) {
      bushPack2[i].move();
      bushPack2[i].display();
    }

    //manage the first tree obstacle
    tree1.move(player);
    tree1.display();

    //add 2nd tree at 30% of the timer
    if (player.timer < player.maxTimer * 0.7) {
      tree2.move(player);
      tree2.display();
    }

    //add 3rd tree at 60% of the timer
    if (player.timer < player.maxTimer * 0.4) {
      tree3.move(player);
      tree3.display();
    }

    //manage timer
    player.displayTimer();

  } else if (gameState === "WIN") {
    showEnding();
  } else if (gameState === "GAMEOVER") {
    showGameOver();
  }

}



//manage start screen
function showIntro() {
  textAlign(CENTER, CENTER);

  let title = "The Rebels are attacking!\n";

  let script = "Pass through the forest to alert the Imperial base\n";
  script = script + "--Press space to start--";

  let instruction = "WASD to move around\n";
  instruction = instruction + "Shout 'Faster' to increse your speed\n";
  instruction = instruction + "Shout 'Slower' to decrease your speed\n";

  push();
  textSize(100);
  strokeWeight(10);
  stroke(200, 70, 30);
  fill(200);
  text(title, width / 2, height / 2);
  pop();

  push();
  textSize(36);
  strokeWeight(3);
  stroke(200);
  fill(200, 70, 30);
  text(script, width / 2, height * 3 / 5);
  pop();

  push();
  rectMode(CENTER);
  fill(200);
  rect(width * 4 / 5, height * 4 / 5 - 20, 530, 150);
  pop();
  push();
  textSize(30);
  noStroke();
  fill(200, 70, 30);
  text(instruction, width * 4 / 5, height * 4 / 5);
  pop();

}

//manage player victory screen
function showEnding() {
  push();
  rectMode(CORNER);
  image(winScreen, 0, 0, windowWidth, windowHeight);
  pop();
  push();
  rectMode(CENTER);
  fill(200);
  rect(width * 4 / 5, height * 4 / 5 - 20, 400, 50);
  pop();
  textAlign(CENTER, CENTER);

  let title = "You alerted the base!!\n";

  let script = "The Empire will not fall today\n";
  script = script + "You must be prepared for when they come back";

  let instruction = "Refresh the page to restart\n";

  push();
  textSize(100);
  strokeWeight(10);
  stroke(200, 70, 30);
  fill(250);
  text(title, width / 2, height / 3);
  pop();

  push();
  textSize(36);
  strokeWeight(3);
  stroke(250);
  fill(200, 70, 30);
  text(script, width / 2, height / 2);
  pop();

  push();
  textSize(30);
  noStroke();
  fill(200, 70, 30);
  text(instruction, width * 4 / 5, height * 4 / 5);
  pop();

}

//manage game over screen
function showGameOver() {
  push();
  rectMode(CORNER);
  image(overScreen, 0, 0, windowWidth * 1.7, windowHeight);
  pop();
  push();
  rectMode(CENTER);
  fill(200);
  rect(width * 4 / 5, height * 4 / 5 - 20, 400, 50);
  pop();
  textAlign(CENTER, CENTER);

  let title = "You Perished!!\n";

  let script = "The Rebels destroyed the base!!\n";
  script = script + "You have failed the Emperor";

  let instruction = "Refresh the page to restart\n";

  push();
  textSize(100);
  strokeWeight(10);
  stroke(200, 70, 30);
  fill(250);
  text(title, width / 3, height / 3);
  pop();

  push();
  textSize(36);
  strokeWeight(3);
  stroke(250);
  fill(200, 70, 30);
  text(script, width / 3, height / 2);
  pop();

  push();
  textSize(30);
  noStroke();
  fill(200, 70, 30);
  text(instruction, width * 4 / 5, height * 4 / 5);
  pop();

}
