let wordBox = document.querySelectorAll('.word-box');
let orderedWords = document.getElementById('ordered');
let randomWords = document.getElementById('random');


wordBox.forEach(x => x.addEventListener('click', function() {
  if(x.parentNode.classList[0] === 'container--random') {
    orderedWords.appendChild(x)
  } else {
    randomWords.appendChild(x)
  }
} ))