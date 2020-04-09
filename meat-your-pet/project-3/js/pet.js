class Pet{
  constructor(x,y){

    this.x = x;
    this.y = y;

    this.thirst = 30 * 60;
    this.maxThirst = this.thirst;
    this.drink = this.thirst / 3;

    this.hunger = 20 * 60;
    this.maxHunger = this.hunger;
    this.feed = this.hunger / 3;

    this.cleanliness = 45 * 60;
    this.maxCleanliness = this.cleanliness;
    this.clean = this.cleanliness / 3;

    this.statDrain = 1;
    this.statMaxDrain = 3;

    this.stage = 1;
    this.growth = 0;

    this.petImg = loadImage('assets/images/chick.png')
    this.petChirpImg = loadImage('assets/images/chick_chirp.png')

  }

  // manageStats()
  // Used to drain the stats of the pet
  manageStats() {
      if (this.hunger >= 0){
      this.hunger -= statDrain;
    }

    if (this.thirst >= 0){
      this.thirst -= statDrain;
    }

    if (this.cleanliness >= 0){
      this.cleanliness -= statDrain;
    }

    if (this.cleanliness <= 0){
      this.statDrain = this.statMaxDrain;
    } else {
      this.statDrain = 1;
    }
  }

  feed() {
    this.hunger += this.feed;
  }

  drink() {
    this.thirst += this.drink;
  }

  clean() {
    this.cleanliness += this.clean;
  }

  evolution() {
    if (this.growth >= 100){
      this.stage += 1;
      this.growth = 0;
    }
  }

  display() {



    this.thirstBar = map(this.thirst, 0, this.maxThirst, 0, width /5);
    this.hungerBar = map(this.hunger, 0, this.maxHunger, 0, width /5);
    this.cleanlinessBar = map(this.clean, 0, this.maxCleanliness, 0, width /5);

    push();
    fill(0, 230, 0);
    rectMode(CORNER);
    rect(width / 10, height - 50, this.hungerBar, 20);
    pop();

    push();
    fill(0, 220, 230);
    rectMode(CORNER);
    rect(4*width / 10, height - 50, this.cleanlinessBar, 20);
    pop();

    push();
    fill(20, 25, 230);
    rectMode(CORNER);
    rect(7*width / 10, height - 50, this.thirstBar, 20);
    pop();
  }

  // hoppingAround
  //Function to make the pet hop arround at random intervals
  // hoppingAround() {
  //   let hops = Math.floor(Math.random(hopsMax))
  // }
}
