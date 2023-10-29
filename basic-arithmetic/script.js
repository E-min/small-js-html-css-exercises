let numone = Number(prompt("Enter first number"));
let numtwo = Number(prompt("Enter second number"));
let artoprt = prompt("Enter one arithmetic operator (eg. +, -, *, /)");
let total = 0;
let Switch = false;

if (artoprt == "+") {
  total += numone + numtwo;
} else if (artoprt == "-") {
  total += numone - numtwo;
} else if (artoprt == "*") {
  total += numone * numtwo;
} else if (artoprt == "/") {
  total += numone / numtwo;
} else {
  Switch = true;
}

Switch == false ? alert(total) : alert("Enter one of these (+, -, *, /)");
