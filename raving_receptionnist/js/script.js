

// Raving receptionnist Redux
// By Alex Lorrain
// Teacher : Pippin Bar

"use strict";

let $spans;
let $secret;
let secretsFound = 0;
let secretsTotal;

const intervalTime = 500;
const riskRevealed = 0.1;

$(document).ready(setup);

function setup() {
  console.log('setup');

  $spans = $('span');
  $secret = $('secret');
  secretsTotal = $('.secret').length;
  console.log(secretsTotal);

  setInterval(update, intervalTime);

  $spans.on('click' , spanClick);
  $secret.on('mouseover', )
}

function update() {
  console.log('Udated!');

  $spans.each(updateSpan);
  $('.secretsTotal').text(secretsTotal);
  $('.secretsFound').text(secretsFound);
}

function secretFound(){
  $(this).addClass('.found');
}

function updateSpan() {
  console.log('Updating span');

  let riskRedacted = Math.random();
  if (riskRedacted < riskRevealed) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

  function spanClick() {
      $(this).removeClass('revealed');
      $(this).addClass('redacted');
    }
