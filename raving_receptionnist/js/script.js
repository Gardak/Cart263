

// Raving receptionnist Redux
// By Alex Lorrain
// Teacher : Pippin Bar

"use strict";

let $spans;

let secretFound = 0;
const secretTotal = 9;

const intervalTime = 500;
const riskRevealed = 0.1;

$(document).ready(setup);

function setup() {
  console.log('setup');
  $spans = $('span');
  setInterval(update, intervalTime);

  $spans.on('click' , spanClick);

}

function update() {
  console.log('Udated!');

  $spans.each(updateSpan);

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
