// Rock particle visual

class Rock {

  constructor(x, y) {

    // starting Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.speed = 130;
    this.vx = windowWidth / this.speed;
    this.vy = windowHeight / this.speed;

    // Display properties
    this.size = random(20,40);
    this.img = loadImage('assets/images/rock.png');
  }


  handleLoop() {
    // Loop them on the course
    if (this.x < 0 || this.y > windowHeight) {
      this.x = windowWidth + random(windowWidth / 2);
      this.y = -random(windowHeight / 2);
    }
  }

  move() {

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
