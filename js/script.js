'use strict';

const image = document.getElementById('image');
const backArrow = document.getElementById('backArrow');
const forwardsArrow = document.getElementById('forwardsArrow');
let imageText = document.getElementById('imageText');

//create an array to store the path to the images to be displayed
const imageArray = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
];

//create an index to keep track of which image to display
let currentImage = 0;

imageText.textContent = `Image ${currentImage + 1}/${imageArray.length}`;

//create a function to change the image source to the next one in the array
const nextSlide = function nextSlide() {
  //progress the slideshow by one
  if (currentImage < imageArray.length - 1) {
    currentImage += 1;
    image.src = imageArray[currentImage];
    imageText.textContent = `Image ${currentImage + 1}/${imageArray.length}`;
    //once the last image is reached, reset the index to 0 to display the first image
  } else {
    currentImage = 0;
    image.src = imageArray[currentImage];
    imageText.textContent = `Image ${currentImage + 1}/${imageArray.length}`;
  }
};

//add an event listener to the forwards arrow
forwardsArrow.addEventListener('click', () => {
  nextSlide();
});

//create a function to change the image source to the previous one in the array
const previousSlide = function previousSlide() {
  if (currentImage > 0) {
    //decrease the slideshow by one
    currentImage -= 1;
    image.src = imageArray[currentImage];
    imageText.textContent = `Image ${currentImage + 1}/${imageArray.length}`;
    //once the first image is reached, reset the index to (array length - 1) to display the last image
  } else {
    currentImage = imageArray.length - 1;
    image.src = imageArray[currentImage];
    imageText.textContent = `Image ${currentImage + 1}/${imageArray.length}`;
  }
};

//add an event listener to the back arrow
backArrow.addEventListener('click', () => {
  previousSlide();
});
