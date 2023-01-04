//Assignment 1
let num1 = +prompt("Enter a number");
let num2 = 20;
if (num1 > 20) {
  console.log((num1 - num2) * 2);
} else {
  console.log(num1 - num2);
}

//Assignment 2
let num1 = +prompt("Enter num1");
let num2 = +prompt("Enter num2");
let num3 = +prompt("Enter num3");
if (num1 > num2 && num1 > num3) {
  console.log("num1 is the largest");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is the largest");
} else {
  console.log("num3 is the largest");
}

//Assignment 3
let num1 = +prompt("Enter num1");
let num2 = +prompt("Enter num2");
let num3 = +prompt("Enter num3");
let product = num1 * num2 * num3;
console.log(`${num1} * ${num2} * ${num3} = ${product}`);
if (product > 0) {
  console.log(`sign "+"`);
} else {
  console.log(`sign "-"`);
}

//Assignment 4
let num = +prompt("Enter a number");
if (50 <= num && num <= 100) {
  console.log(`${num} is in the range of 50 to 100`);
} else {
  console.log(`${num} is not in the range of 50 to 100`);
}

//Assignment 5
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
if (num1 - 100 > num2 - 100) {
  console.log("num1 is closer to the 100");
} else {
  console.log("num2 is closer to the 100");
}

//Assignment 6
let day = prompt("Enter the day of the week");
if (day === "Sunday" || day === "Saturday") {
  console.log(`${day} is not a weekday`);
} else {
  console.log(`${day} is a weekday`);
}

//Assignment 7
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let operand = prompt("Enter an operand");
if (operand === "*") {
  console.log(`${num1} ${operand} ${num2} = ${num1 * num2}`);
} else if (operand === "/") {
  console.log(`${num1} ${operand} ${num2} = ${num1 / num2}`);
} else if (operand === "+") {
  console.log(`${num1} ${operand} ${num2} = ${num1 + num2}`);
} else {
  console.log(`${num1} ${operand} ${num2} = ${num1 - num2}`);
}
