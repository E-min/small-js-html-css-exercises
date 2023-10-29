let randomNumber = Math.floor(Math.random() * 100);
let roundCount = 0;
let numbersGuessed = [];
for (roundCount; roundCount < 5; roundCount++) {
  let guessedNumber = Number(prompt(`Guess a number between 0 and 100 (Type your answer below) \nFor testing try: ${randomNumber}`));
  numbersGuessed.push(guessedNumber);
  guessedNumber < 0 || guessedNumber > 100
    ? (alert("You must enter a number between 0 and 100"), (roundCount = 5))
    : guessedNumber < randomNumber
    ? (alert(`Numbers you have guessed: ${numbersGuessed.join(", ")}`),
      alert("Go higher!"))
    : guessedNumber > randomNumber
    ? (alert(`Numbers you have guessed: ${numbersGuessed.join(", ")}`),
      alert("Go lower!"))
    : guessedNumber === randomNumber
    ? (alert("Congratulation!"), (roundCount = 5))
    : (alert("You must enter a number"), (roundCount = 5));
}
alert("Refresh the page if you want to play more");
