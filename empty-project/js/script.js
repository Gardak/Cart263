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
    pixel.addEventListener('click', removePixel);
    document.body.appendChild(pixel);
  }

}


function paint(e) {

    let pixel = e.target;

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    pixel.style.backgroundColor = `rgb(${r} ,${g},${b})`;

    setTimeout(resetPixel, 2000, pixel);
}

function removePixel(e) {
  let pixel = e.target;

  pixel.style.opacity = '0';
}

function resetPixel(pixel) {

  pixel.style.backgroundColor = 'black';

}
