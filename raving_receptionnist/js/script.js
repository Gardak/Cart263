

// Raving receptionnist Redux
// By Alex Lorrain
// Teacher : Pippin Bar

"use strict";

let $span = $('span');

$(document).ready(setup);

function setup() {
  console.log('setup');

  setInterval(update, 500);

  $span.on('click' , spanClick);

}

function update() {
  console.log('Udated!');

  $span.each(updateSpan);

}

function updateSpan() {
  console.log('Updating span');

  let riskRedacted = Math.random();
  if (riskRedacted < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

  function spanClick() {
      $(this).removeClass('revealed');
      $(this).addClass('redacted');
    }
