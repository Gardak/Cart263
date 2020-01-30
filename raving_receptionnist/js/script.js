

// Raving receptionnist Redux
// By Alex Lorrain
// Teacher : Pippin Bar

"use strict";

// Variables
let $redacted;
let $secret;
let secretsFound = 0;
let secretsTotal;

// Constant
const intervalTime = 500;
const riskRevealed = 0.1;

// Run the function when the doc is ready
$(document).ready(setup);

function setup() {
  console.log('setup');

// Setup the secrets and the redacted amounts
  $redacted = $('.redacted');
  $secret = $('.secret');
  secretsTotal = $('.secret').length;
  console.log(secretsTotal);

// Start the interval for the updates
  setInterval(update, intervalTime);

  $redacted.on('click' , redactedClick);
  $secret.on('mouseover', secretFound);
}

function update() {
  console.log('Udated!');

  $redacted.each(updateRedacted);
  $('.secretsTotal').text(secretsTotal);
  $('.secretsFound').text(secretsFound);
}

function secretFound(){
  $(this).addClass('found');
  $(this).removeClass('secret');
  secretsFound++;
  $(this).off('mouseover');
}

function updateRedacted() {
  console.log('Updating redacted');

  let riskRedacted = Math.random();
  if (riskRedacted < riskRevealed) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

  function redactedClick() {
      $(this).removeClass('revealed');
      $(this).addClass('redacted');
    }
