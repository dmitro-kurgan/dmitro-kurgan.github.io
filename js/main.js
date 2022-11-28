"use strict";

var images = ['full-carezza-lake.jpg', 'full-lonely.jpg', 'full-uluwatu.jpg'];
var src = './images/';
var block = document.getElementById('bgImage');
var handler = setInterval(carousel, 10000);
var countEnd = 6;
var startDelay = 1500;
var count = 0;
var imageIndex;
images.forEach(function (img) {
  new Image().src = src + img;
});
function getIndex() {
  localStorage.getItem('image') ? imageIndex = localStorage.getItem('image') : imageIndex = Math.floor(Math.random() * images.length);
}
getIndex();
function carousel() {
  if (++count === countEnd) clearInterval(handler);
  localStorage.setItem('image', imageIndex);
  if (block) {
    setTimeout(function () {
      block.style.opacity = '1';
    }, startDelay);
    block.style.background = "url(\"".concat(src).concat(images[imageIndex], "\") no-repeat center center fixed");
    block.style.backgroundSize = 'cover';
  }
  imageIndex++;
  if (imageIndex >= images.length) imageIndex = 0;
}
carousel();