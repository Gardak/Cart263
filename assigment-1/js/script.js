"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

window.onload = setup;

let pixelNum = 1000;
let pixel;

function setup() {

  for (let i = 0; i < pixelNum; i++) {

    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    pixel.addEventListener('mouseover', paint);
    document.body.appendChild(pixel);
  }

}


function paint(e) {

    let pixel = e.target;


    pixel.style.backgroundColor = `white`;

    setTimeout(resetPixel, 2000, pixel);
}

function resetPixel(pixel) {

  pixel.style.backgroundColor = 'black';

}
