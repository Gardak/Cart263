"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

function setup() {

  $.getJSON("assets/data/data.json")
  .done(dataLoaded)//when it loads
  .fail(dataError);//When it fails
}

function dataLoaded(data){

  let randomCondiment = getRandomElement(data.condiments);

  console.log(randomCondiment);

  let verb = "is";
  if (randomCondiment.charAt(randomCondiment.length - 1) === "s"){
    verb = "are";
  }

  let randomCat = getRandomElement(data.cats);

  let randomRoom = getRandomElement(data.rooms);

  let randomDescriptions = `${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom}.`;
  console.error(randomDescriptions);
  $('body').append(`<p> ${randomDescriptions} </p>`);
}

function dataError(request, textStatus, error){
  console.error(error);
}


//function to get an element from an array
function getRandomElement(array){
  let element = array[ Math.floor(Math.random() * array.length) ];
  return element;
}
