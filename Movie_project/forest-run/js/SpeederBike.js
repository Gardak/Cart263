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
    this.speed = 175;
    this.speedX = windowWidth / this.speed;
    this.speedY = windowHeight / this.speed;

    // Health properties
    this.maxHealth = 1;
    this.health = this.maxHealth;

    // Input properties
    this.upKey = 87;
    this.downKey = 83;
    this.leftKey = 65;
    this.rightKey = 68;

    // Display properties
    this.sizeX = 300;
    this.sizeY = 150;
    this.img = loadImage('assets/images/speeder_bike.png');

    //Bottom screen icon properties
    this.faceX = 0;
    this.faceY = windowHeight - 55;
    this.faceSize = 40;
    this.face = loadImage('assets/images/helmet.png');

    //timer setup
    this.maxTimer = 5400;
    this.timer = this.maxTimer;
    this.timerTick = 1;
  }


  handleMovement() {
    //move North-West
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speedX;
      this.vy = -this.speedY;
    //move South-East
    } else if (keyIsDown(this.rightKey)) {
      this.vx = +this.speedX;
      this.vy = +this.speedY;
      //move North-East
    } else if (keyIsDown(this.upKey)) {
      this.vx = +this.speedX;
      this.vy = -this.speedY;
      //move South-West
    } else if (keyIsDown(this.downKey)) {
      this.vx = -this.speedX;
      this.vy = +this.speedY;
      //stay in place if no input
    } else {
      this.vx = 0;
      this.vy = 0;
    }
  }


  move() {

    this.handleMovement();

    // Update position
    this.x += this.vx;
    this.y += this.vy;


  }



  display() {
    rectMode(CENTER);
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);
  }


  displayTimer() {
    //update timer
    this.timer = this.timer - this.timerTick;
    //display timer
    push();
    rectMode(CENTER);
    fill(150);
    rect(width / 2, height - 40, width * 2 / 3, 20)
    pop();
    //update icon on the timer bar
    this.faceX = map(this.timer, 0, this.maxTimer, (windowWidth * 5 / 6), windowWidth / 6)
    rectMode(CENTER);
    image(this.face, this.faceX, this.faceY, this.faceSize, this.faceSize);
  }

}
