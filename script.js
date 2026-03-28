"use strict";

const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
container.classList = "container";

const calcContainer = document.createElement("div");
container.appendChild(calcContainer);
calcContainer.classList = "calcCont";

const display = document.createElement("div");
calcContainer.appendChild(display);
display.classList = "display";

const btnCont = document.createElement("div");
calcContainer.appendChild(btnCont);
btnCont.classList = "btnCont";

let btnText = ["C", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, "=", 1, 2, 3, 0];

for (let i = 0; i < btnText.length; i++) {
  const cell = document.createElement("div");
  btnCont.appendChild(cell);
  cell.classList = "cell";
  cell.textContent = btnText[i];
  cell.addEventListener("click", function () {
    display.textContent += cell.textContent;
  });
}

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let number1 = "";
let number2 = "";
let result = "";
let operator = "";

const operate = function () {
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
  }
};
