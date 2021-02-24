

// PLayer's speeder bike

class SpeederBike {

  constructor(x, y) {

    // starting Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.spawn = 100;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;

    // Health properties
    this.maxHealth = 20;
    this.health = this.maxHealth;

    // Input properties
    this.upKey = 87;
    this.downKey = 83;
    this.leftKey = 65;
    this.rightKey = 68;

    // Display properties
    this.healthBar = 0;
    this.healthFill =0;
    this.sizeX = 100;
    this.sizeY = 50;
    this.img = loadImage('assets/images/speeder_bike.jpg');

    this.timer = 2;
  }


  handleMovement() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = +this.speed;
      this.vy = +this.speed;
        }
        else if (keyIsDown(this.upKey)) {
      this.vx = +this.speed;
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.downKey)) {
      this.vx = -this.speed;
      this.vy = +this.speed;
    }
    else {
      this.vx = 0;
      this.vy = 0;
    }
  }

    handleCollision() {
      // Off the left or right
      if (this.x > width - this.size*2) {
        this.x = width - this.size*2;
      }
      else if (this.x < 0) {
        this.x = 0;
      }

      // Off the top or bottom
      if (this.y > height - this.size*2) {
        this.y = height - this.size*2;
      }
      else if (this.y < 0) {
        this.y = 0;
      }

    }

  move() {

    this.handleMovement();

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Handle wrapping
    this.handleCollision();
    // console.log('move');

    console.log(this.health);
  }



display() {
  push();

    rectMode(CENTER);
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);

pop();
    this.healthBar = map(this.health, 0, this.maxHealth, 0, width /2);
    this.healthFill = map(this.health, 0, 100, 255, 0);

    push();
      fill(this.healthFill, 100, 30);
      rectMode(CENTER);
      rect(width / 2, height - 40, this.healthBar, 20);
    pop();
  }

}
