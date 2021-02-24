
let player;

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

let x;
let y;

let gameState = "INTRO";



function setup() {

  createCanvas(windowWidth, windowHeight);

  player = new SpeederBike( width/5 , height * 4/5);

  for (i = 0; i < bushNum; i++){

      x = windowWidth/4 + (windowWidth) * (i/bushNum);
      y = -(windowHeight) * (i/bushNum);

      bush = new Bush(x,y);
      bushPack1.push(bush);
      }
    for (i = 0; i < bushNum; i++){
      x = windowWidth*1.4 + (windowWidth) * (i/bushNum);
      y = -(windowHeight) * (i/bushNum);

        bush = new Bush(x,y);
        bushPack2.push(bush);
      }

  for (i = 0; i < rockNum; i++){

      x = windowWidth + random(windowHeight/2);
      y = -random(windowHeight/2);

      rock = new Rock(x,y);
      rockPack1.push(rock);
      }
    for (i = 0; i < rockNum; i++){
      x = random(windowWidth);
      y = random(windowHeight);

        rock = new Rock(x,y);
        rockPack2.push(rock);
      }

  for (i = 0; i < grassNum; i++){

      x = windowWidth + random(windowHeight/2);
      y = -random(windowHeight/2);

      grass = new Grass(x,y);
      grassPack1.push(grass);
      //console.log('grassSpawn');
      }
    for (i = 0; i < grassNum; i++){
      x = random(windowWidth);
      y = random(windowHeight);


        grass = new Grass(x,y);
        grassPack2.push(grass);
        //console.log('grassSpawn');
      }
  }

function draw() {

  background(6, 128, 49);
  line( 0, windowHeight/2, windowWidth/2, 0);
  line( windowWidth/2, windowHeight, windowWidth, windowHeight/2);
    if (gameState === "INTRO") {

      showIntro();
      if (keyIsDown(32)){
        gameState = "GAME" ;
      }

    } else if (gameState === "GAME") {

      if (player.health <= 0){
        gameState = "GAMEOVER";
      } else if (player.timer === 0) {
        gameState = "WIN";
      }

      for (let i = 0; i < bushPack1.length; i++){
        bushPack1[i].move();
        bushPack1[i].display();
        bushPack1[i].hurtPlayer(player);
      }
      for (let i = 0; i < bushPack2.length; i++){
        bushPack2[i].move();
        bushPack2[i].display();
        bushPack2[i].hurtPlayer(player);
      }

      for (let i = 0; i < rockPack1.length; i++){
        rockPack1[i].move();
        rockPack1[i].display();
      }
      for (let i = 0; i < rockPack2.length; i++){
        rockPack2[i].move();
        rockPack2[i].display();
      }

    for (let i = 0; i < grassPack1.length; i++){
      grassPack1[i].move();
      grassPack1[i].display();
    }
    for (let i = 0; i < grassPack2.length; i++){
      grassPack2[i].move();
      grassPack2[i].display();
    }

    player.move();
    player.display();

  } else if (gameState === "WIN") {
    showEnding();
  } else if (gameState === "GAMEOVER") {
    showGameOver();
  }

  }




  function showIntro() {
      textAlign(CENTER, CENTER);

      let title = "Mordak's Revenge\n";

      let script = "Destroy his minions\n";
      script = script + "--Press space to start--";

      let instruction = "WASD to move around\n";
      instruction = instruction + "Left click to launch a fire ball\n";
      instruction = instruction + "1, 2, 3 to choose spell\n";

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
      text(script, width / 2, height / 2);
      pop();

      push();
      textSize(30);
      noStroke();
      fill(200,70,30);
      text(instruction, width * 4/5, height * 4/5);
      pop();

    }

    function showEnding() {
        textAlign(CENTER, CENTER);

        let title = "You Survive!!\n";

        let script = "Mordak will not have his revenge today\n";
        script = script + "You must be prepared for when he comes back";

        let instruction = "Refresh the page to restart\n";

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
        text(script, width / 2, height / 2);
        pop();

        push();
        textSize(30);
        noStroke();
        fill(200,70,30);
        text(instruction, width * 4/5, height * 4/5);
        pop();

      }

      function showGameOver() {
          textAlign(CENTER, CENTER);

          let title = "You Perished!!\n";

          let script = "Mordak got his revenge!!\n";
          script = script + "Who will stop Mordak in his rampage?";

          let instruction = "Refresh the page to restart\n";

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
          text(script, width / 2, height / 2);
          pop();

          push();
          textSize(30);
          noStroke();
          fill(200,70,30);
          text(instruction, width * 4/5, height * 4/5);
          pop();

        }
