"use strict";

const board = document.querySelector('#board');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let squaresNumbers = +prompt('Enter your number', '500');

for (let i = 0; i < squaresNumbers; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    if (hexColor === '#1d1d1d') {
      continue;
    }
  }
  element.style.backgroundColor = hexColor;
  element.style.boxShadow = `0 0 2px ${hexColor}, 0 0 10px ${hexColor}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}