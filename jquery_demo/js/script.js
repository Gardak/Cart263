"use strict";

$(document).ready(setup);

function setup() {

$('div').on('click',onClick);

  }

  function onClick() {
    $(this).fadeOut(500, fadeComplete);
  }

  function fadeComplete() {
    $('body').css({
      backgroundColor: ''
    });
  }
