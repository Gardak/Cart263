// Tree Obstacle

class Tree {

  constructor() {

    // starting Position ouside the screen
    this.x = windowWidth + random(windowHeight / 2);;
    this.y = -random(windowHeight / 2);;

    // Velocity and speed
    this.speed = 130;
    this.vx = windowWidth / this.speed;
    this.vy = windowHeight / this.speed;

    //Kill the player when they enter contact
    this.dmg = 1;

    // Display properties
    this.size = 200;
    this.img = loadImage('assets/images/tree.png');
  }


  handleLoop() {
    // restart beyond the canvas on its top right
    if (this.x < 0 || this.y > windowHeight) {
      this.x = windowWidth + random(windowWidth / 2);
      this.y = -random(windowHeight / 2);
    }
  }

  hurtPlayer(player) {
    //Create the tree hitbox
    let d = dist(this.x, this.y, player.x, player.y);
    //Kill the player when they come in contact
    if (d < (this.size + 25) && (this.y + 150) < player.y) {
      player.health -= this.dmg;
    }
  }

  //Make it move and keep track of the player
  move(player) {
    //Adapt it to the size of the screen for the perspective
    this.vx = windowWidth / this.speed;
    this.vy = windowHeight / this.speed;

    this.hurtPlayer(player);
    this.handleLoop();
    // Update position
    this.x -= this.vx;
    this.y += this.vy;
  }



  display() {
    push();
    
    rectMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size * 1.75);

    pop();
  }

}
