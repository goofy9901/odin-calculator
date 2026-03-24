"use strict";

const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
container.classList = "container";

const calcContainer = document.createElement("div");
container.appendChild(calcContainer);
calcContainer.classList = "calcCont";

const calculation = document.createElement("div");
calcContainer.appendChild(calculation);
calculation.classList = "calc";

const btnCont = document.createElement("div");
calcContainer.appendChild(btnCont);
btnCont.classList = "btnCont";

let n = 4;

for (let i = 0; i < n * n; i++) {
  const cell = document.createElement("div");
  btnCont.appendChild(cell);
  cell.classList = "cell";
}

btnText = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "+", "-", "*", "/", "C", "="];

for (let i = 0; i < btnText.length; i++) {}
