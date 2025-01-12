const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operation = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.innerText;

    // Handle numbers and decimal
    if (!isNaN(buttonText) || buttonText === '.') {
      currentInput += buttonText;
      display.innerText = currentInput;
    }

    // Handle operations
    else if (buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '/' || buttonText === '%') {
      operation = buttonText;
      result = currentInput;
      currentInput = '';
    }

    // Handle equals (=)
    else if (buttonText === '=') {
      performCalculation();
    }

    // Clear the display (EC - Clear)
    else if (buttonText === 'EC') {
      currentInput = '';
      display.innerText = '0';
    }
 // Handle scientific functions
 else if (buttonText === 'sin') {
    currentInput = Math.sin(toRadians(currentInput)).toString();
    display.innerText = currentInput;
  } else if (buttonText === 'cos') {
    currentInput = Math.cos(toRadians(currentInput)).toString();
    display.innerText = currentInput;
  } else if (buttonText === 'tan') {
    currentInput = Math.tan(toRadians(currentInput)).toString();
    display.innerText = currentInput;
  } else if (buttonText === '√') {
    currentInput = Math.sqrt(currentInput).toString();
    display.innerText = currentInput;
  } else if (buttonText === 'log') {
    currentInput = Math.log10(currentInput).toString();
    display.innerText = currentInput;
  } else if (buttonText === 'x!') {
    currentInput = factorial(currentInput).toString();
    display.innerText = currentInput;
  } else if (buttonText === 'Π') {
    currentInput = (Math.PI).toString();
    display.innerText = currentInput;
  } else if (buttonText === 'e') {
    currentInput = (Math.E).toString();
    display.innerText = currentInput;
  }
});
});

// Perform basic operations
function performCalculation() {
let num1 = parseFloat(result);
let num2 = parseFloat(currentInput);

switch (operation) {
  case '+':
    display.innerText = num1 + num2;
    break;
  case '-':
    display.innerText = num1 - num2;
    break;
  case 'x':
    display.innerText = num1 * num2;
    break;
  case '/':
    display.innerText = num1 / num2;
    break;
  case '%':
    display.innerText = num1 % num2;
    break;
}
currentInput = '';
operation = '';
}

// Convert degrees to radians
function toRadians(degrees) {
return degrees * (Math.PI / 180);
}

// Factorial function
function factorial(n) {
if (n === 0 || n === 1) return 1;
return n * factorial(n - 1);
}