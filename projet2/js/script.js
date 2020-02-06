"use strict";

/********************************************************************

Traitor Bridge
Alex Lorrain

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

let $food;
let $babies;

let numFood = 1;
let maxFood = 3;

let babiesTime = 1300;
let foodTime = 1500;
let hungry = 0.5;

const yeah = new Audio("assets/sounds/yeah.mp3");

function setup(){
  $food = $(".food");
  $babies = $(".baby");

  $food.draggable();
  $babies.droppable({
    drop: onDrop
  });

  setInterval(updateBabies, babiesTime);
  setInterval(updateFood, foodTime);

}

function onDrop(event, ui){
  console.log("Mium!")
  numFood -= 1;

  ui.draggable.remove();
  $(this).attr('src', 'assets/images/baby_happy.png');

  yeah.play();
}


function updateBabies(){
  console.log('babies updated');
  $babies.each(updateHungry)
}

function updateHungry(){
  let riskHungry = Math.random();
  if (riskHungry < hungry) {
      $(this).attr('src', 'assets/images/baby_crying.png')

  }
}

function updateFood(){
  console.log('more food');
  if (numFood < maxFood){
    numFood += 1;
    
    var newFood = $(document.createElement("IMG"));
    newFood.attr("src", "assets/images/bowl.png");
    newFood.attr("class", "food");

    newFood.appendTo('body');
    $food = $(".food");
    $food.draggable();
  }
}
