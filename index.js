let inputBtns = document.querySelectorAll(".input-btn");
let screen = document.querySelector(".screen");
let expArr = [];
let currentInput = "0";
let previousOperation = "null";

function compute(expression) {
  if (expression.length == 1) {
    return expression[0];
  }

  let movingRes = expression[0];
  for (let i = 1; i < expression.length; i++) {
    switch (expression[i]) {
      case "+":
        movingRes += expression[i + 1];
        break;

      case "-":
        movingRes -= expression[i + 1];
        break;

      case "×":
        movingRes *= expression[i + 1];
        break;

      case "÷":
        movingRes /= expression[i + 1];
        break;
        i++;
    }
  }
  return movingRes;
}

for (let i = 0; i < inputBtns.length; i++) {
  inputBtns[i].addEventListener("click", function (event) {
    let btnPressed = event.target.innerText;

    switch (btnPressed) {
      case "0":
        if (currentInput.toLowerCase() == "infinity") {
          currentInput = "0";
          break;
        }
        if (currentInput != "0") {
          currentInput += btnPressed;
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (currentInput.toLowerCase() == "infinity") {
          currentInput = "0";
          break;
        }
        if (currentInput == "0" || null) {
          currentInput = btnPressed;
        } else {
          currentInput += btnPressed;
        }
        break;
      case "C":
        expArr = [];
        currentInput = "0";
        break;

      case "←":
        let len = currentInput.length;
        if (len > 1) {
          currentInput = currentInput.slice(0, len - 1);
        } else {
          currentInput = "0";
        }
        break;

      case "÷":
      case "-":
      case "×":
      case "+":
        expArr.push(parseInt(currentInput));
        expArr.push(btnPressed);
        currentInput = "0";

        break;

      case "=":
        expArr.push(parseInt(currentInput));
        let operator = null;
        let result = compute(expArr);
        expArr = [];
        currentInput = result.toString();
        break;
    }

    screen.innerText = currentInput;
  });
}
