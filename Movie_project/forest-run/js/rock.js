

// grass visual

class Rock {

  constructor(x,y) {

    // starting Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.vx = windowWidth/100;
    this.vy = windowHeight/100;

    // Display properties
    this.size = 40;
    this.img = loadImage('assets/images/rock.png');
  }


    handleLoop() {
      // Off the left or right
      if (this.x < 0 || this.y > windowHeight) {
        this.x = windowWidth + random(windowWidth/2);
        this.y = -random(windowHeight/2);
      }
    }

  move() {

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
