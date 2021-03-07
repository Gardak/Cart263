// grass visual

class Grass {

  constructor(x, y) {

    // starting Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.speed = 130;
    this.vx = windowWidth / this.speed;
    this.vy = windowHeight / this.speed;

    // Display properties
    this.healthBar = 0;
    this.healthFill = 0;
    this.size = 30;
    this.img = loadImage('assets/images/grass.png');
  }


  handleLoop() {
    // Off the left or right
    if (this.x < 0 || this.y > windowHeight) {
      this.x = windowWidth + random(windowWidth / 2);
      this.y = -random(windowHeight / 2);
    }
  }

  move() {
    //adapt the direction to the screen to keep perspective
    this.vx = windowWidth / this.speed;
    this.vy = windowHeight / this.speed;

    this.handleLoop();
    // Update position
    this.x -= this.vx;
    this.y += this.vy;
  }



  display() {
    push();

    rectMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);

    pop();
  }

}
