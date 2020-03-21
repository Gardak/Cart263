class Pet{
  constructor(x,y){

    this.x = x;
    this.y = y;

    this.thirst = 30 * 60;
    this.drink = this.thirst / 2;
    this.hunger = 20 * 60;
    this.feed = this.hunger / 2;
    this.cleanliness = 45 * 60;
    this.clean = this.cleanliness / 2;
    this.evolution = 0;


  }

  manageStats() {
    if (this.hunger > 0){
      this.hunger -= 1;
    }

    if (this.thirst > 0){
      this.thirst -= 1;
    }

    if (this.cleanliness > 0){
      this.cleanliness -= 1;
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

  // hoppingAround
  //Function to make the pet hop arround at random intervals
  // hoppingAround() {
  //   let hops = Math.floor(Math.random(hopsMax))
  // }
}
