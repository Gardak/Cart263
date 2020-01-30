"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

let $animal;
let $fly;

const buzz = new Audio("assets/sounds/buzz.mp3");
const chew = new Audio("assets/souds/crunch.wav");

function setup(){
  $animal = $("#animal");
  $fly = $("#fly");

  $fly.draggable({
    start: function(){
      buzz.play();
    },
    stop: function(){
      buzz.stop();
    }
  });
  $animal.droppable({
    drop: onDrop
  });
}

function onDrop(event, ui){
  console.log("Mium!")

  ui.draggable.remove();
  $(this).attr('src', 'assets/images/chewing.gif')

  chew.loop() = true;
  chew.play();
}
