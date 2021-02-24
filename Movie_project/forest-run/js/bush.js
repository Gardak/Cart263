
// grass visual

class Bush {

  constructor(x,y) {

    // starting Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.vx = windowWidth/100;
    this.vy = windowHeight/100;

    this.dmg = 1;

    // Display properties
    this.size = 200;
    this.img = loadImage('assets/images/bush.png');
  }


    handleLoop() {
      // Off the left or right
      if (this.x < -125 || this.y >= windowHeight-50) {
        this.x = this.x + windowWidth*0.5;
        this.y = this.y - windowHeight*0.5;
      }
    }

    // Damage the player by touching him
      hurtPlayer(player){
        let d = dist(this.x, this.y, player.x, player.y);
          if ( d < this.size/2 + player.size/2) {
            player.health -= this.dmg;
            console.log('works');
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
