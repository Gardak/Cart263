

// Raving receptionnist Redux
// By Alex Lorrain
// Teacher : Pippin Bar

"use strict";

let $redacted;
let $secret;
let secretsFound = 0;
let secretsTotal;

const intervalTime = 500;
const riskRevealed = 0.1;

$(document).ready(setup);

function setup() {
  console.log('setup');

  $redacted = $('.redacted');
  $secret = $('.secret');
  secretsTotal = $('.secret').length;
  console.log(secretsTotal);

  setInterval(update, intervalTime);

  $redacted.on('click' , spanClick);
  $secret.on('mouseover', secretFound);
}

function update() {
  console.log('Udated!');

  $redacted.each(updateSpan);
  $('.secretsTotal').text(secretsTotal);
  $('.secretsFound').text(secretsFound);
}

function secretFound(){
  $(this).addClass('found');
  $(this).removeClass('secret');
  secretsFound++;
  $(this).off('mouseover');
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
