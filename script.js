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

let btnText = ["C", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, "=", 1, 2, 3, 0];

for (let i = 0; i < btnText.length; i++) {
  const cell = document.createElement("div");
  btnCont.appendChild(cell);
  cell.classList = "cell";
  cell.textContent = btnText[i];
}
