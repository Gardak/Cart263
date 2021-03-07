// Side bush visual

class Bush {

  constructor(x, y) {

    // starting Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.speed = 130;
    this.vx = windowWidth / this.speed;
    this.vy = windowHeight / this.speed;

    // Display properties
    this.size = 200;
    this.img = loadImage('assets/images/bush.png');
  }


  handleLoop() {
    // respawn them outside the screen to loop them
    if (this.x < -125 || this.y >= windowHeight - 50) {
      this.x = this.x + windowWidth * 0.5;
      this.y = this.y - windowHeight * 0.5;
    }
  }

  move() {
    //Adapt to the screen to keep perspective
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
