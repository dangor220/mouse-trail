const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#9c4c4c', '#f4a460', '#ffe4b5', '#98fb98', '#66cdaa', '#7fffd4', '#dda0dd']
const SQUARES_NUMBER = 624;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square);
}


function setColor(element) {
  element.style.backgroundColor = getRandomColor();
  element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]; 
}