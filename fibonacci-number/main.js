const sequence = prompt("Which Fibonacci number do yo want to know?");

let number = 1;
let numberBefore = 1;

// start after sequence 2
for (let i = 2; i < sequence; i++) {
  number = numberBefore + number;
  numberBefore = number - numberBefore;
};

if (sequence < 0 || isNaN(sequence)) {
  alert("Please enter a number above 0");
} else {
  if (sequence == 0) {
    number = 0;
  };
  alert(`Fibonacci ${sequence}: ${number}`);
};
