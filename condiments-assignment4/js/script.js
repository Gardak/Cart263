/*

Condiments
Pippin Barr

Chooses random words from local JSON data to fill out a sentence
describing a condiment based on cats and rooms... weird.

Uses:

Corpora
https://github.com/dariusk/corpora

*/

$(document).ready(function() {

  //Wait for a click on the mousse to refresh the page
  document.addEventListener("click",refreshPhrase);

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {

  //A variable to use data outside the function
  let dataFile = data;

  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let condiment = getRandomElement(data.condiments);
  // Assume it's singular
  let verbCondiment = 'is';
  // Check if the last latter of the condiment is an 's'
  if (condiment.charAt(condiment.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verbCondiment = 'are';
  }

  // Now the cat
  let cat = getRandomElement(data.cats);

  // Same again for room
  let room = getRandomElement(data.rooms);

  //check if it starts with a vowel
  let verbRoom = 'a';
  if (room.charAt(0) === 'a' || room.charAt(0) === 'e' || room.charAt(0) === 'i' || room.charAt(0) === 'o' || room.charAt(0) === 'u') {
    // If so, assume it's plural (this is a flawed assumption)
    verbRoom = 'an';
  }

  //Giving the cat something to smoke
  let cannabis = getRandomElement(data.cannabis);

  //Chosing the music the cat listens
  let music = getRandomElement(data.genres);

  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated
  let description = `${condiment} ${verbCondiment} like a ${cat} in ${verbRoom} ${room} smoking a blunt of ${cannabis} and listening to some ${music}.`;

  // Finally, we add it to the page and hey presto!
  $('body').append(description)
}

// dataError()
//
// Called if the JSON does not load for some reason.
// Reports the error to the console.
function dataError(request, text, error) {
  console.error(error);
}

// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function refreshPhrase(dataFile) {
  gotData(dataFile);
  console.log(condiment);
}
