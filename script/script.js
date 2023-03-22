// basic math functions with rounding decimals 6 if necessary
const add = function (a, b) {
    return Math.round((a + b + Number.EPSILON) * 1000000) / 1000000;
};
const subtract = function (a, b) {
    return Math.round((a - b + Number.EPSILON) * 1000000) / 1000000;
};
const multiply = function (a, b) {
    return Math.round((a * b + Number.EPSILON) * 1000000) / 1000000;
};
const divide = function (a, b) {
    return Math.round((a / b + Number.EPSILON) * 1000000) / 1000000;
};

// calculations
function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    }
}

// create object for storing inputs
let inputs = {
    firstInput: undefined,
    secondInput: undefined,
    operator: undefined,
};

// DOM consts
const operatorPlusDOM = document.getElementById("operator-plus");
const operatorMinusDOM = document.getElementById("operator-minus");
const operatorMultiplyDOM = document.getElementById("operator-multiply");
const operatorDivideDOM = document.getElementById("operator-divide");
const operatorEqualDOM = document.getElementById("operator-equal");
const btnBackspaceDOM = document.getElementById("btn-backspace");
const btnClearDOM = document.getElementById("btn-clear");
const btnCEDOM = document.getElementById("btn-CE");
const btnDotDOM = document.getElementById("btn-dot");
const number0DOM = document.getElementById("number0");
const number1DOM = document.getElementById("number1");
const number2DOM = document.getElementById("number2");
const number3DOM = document.getElementById("number3");
const number4DOM = document.getElementById("number4");
const number5DOM = document.getElementById("number5");
const number6DOM = document.getElementById("number6");
const number7DOM = document.getElementById("number7");
const number8DOM = document.getElementById("number8");
const number9DOM = document.getElementById("number9");
const displayDOM = document.getElementById("display");
const displayStorageDOM = document.getElementById("display-storage");
const displayOperatorDOM = document.getElementById("display-operator");
const modalDOM = document.querySelector(".modal");
const spanDOM = document.querySelector(".close");
const errorDOM = new Audio("./assets/error.mp3");

// clear display function
function clearDisplay() {
    displayDOM.textContent = "";
}

// hard clear -> everything to initial, for AC button
function hardClear() {
    displayDOM.textContent = "";
    inputs.firstInput = undefined;
    inputs.secondInput = undefined;
    inputs.operator = undefined;
    displayStorageDOM.textContent = "";
    displayOperatorDOM.textContent = "";
}

// soft clear -> without storage display
function softClear() {
    displayDOM.textContent = "";
    inputs.firstInput = undefined;
    inputs.secondInput = undefined;
}

// event handlers for buttons with removing the possibility to display numbers like 0234523
const number1Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "1";
    } else {
        displayDOM.textContent = displayDOM.textContent + "1";
    }
};
const number2Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "2";
    } else {
        displayDOM.textContent = displayDOM.textContent + "2";
    }
};
const number3Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "3";
    } else {
        displayDOM.textContent = displayDOM.textContent + "3";
    }
};
const number4Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "4";
    } else {
        displayDOM.textContent = displayDOM.textContent + "4";
    }
};
const number5Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "5";
    } else {
        displayDOM.textContent = displayDOM.textContent + "5";
    }
};
const number6Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "6";
    } else {
        displayDOM.textContent = displayDOM.textContent + "6";
    }
};
const number7Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "7";
    } else {
        displayDOM.textContent = displayDOM.textContent + "7";
    }
};
const number8Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "8";
    } else {
        displayDOM.textContent = displayDOM.textContent + "8";
    }
};
const number9Function = function () {
    if (displayDOM.textContent == "0") {
        displayDOM.textContent = "9";
    } else {
        displayDOM.textContent = displayDOM.textContent + "9";
    }
};

// zero function
const number0Function = function () {
    if (displayDOM.textContent == "0") return;
    else {
        displayDOM.textContent = displayDOM.textContent + "0";
    }
};

// PLUS +++++++++++ PLUS
const plusFunction = function () {
    if (displayDOM.textContent !== "") {
        if (inputs.firstInput == undefined) {
            inputs.operator = "+";
            displayOperatorDOM.textContent = inputs.operator;
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        } else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(
                inputs.operator,
                inputs.firstInput,
                inputs.secondInput
            );
            inputs.operator = "+";
            displayOperatorDOM.textContent = inputs.operator;
            softClear();
            inputs.firstInput = Number(displayStorageDOM.textContent);
        }
    } else {
        inputs.operator = "+";
        displayOperatorDOM.textContent = inputs.operator;
    }
};

// MINUS ------------ MINUS
const minusFunction = function () {
    if (displayDOM.textContent !== "") {
        if (inputs.firstInput == undefined) {
            inputs.operator = "-";
            displayOperatorDOM.textContent = "–";
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        } else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(
                inputs.operator,
                inputs.firstInput,
                inputs.secondInput
            );
            inputs.operator = "-";
            displayOperatorDOM.textContent = "–";
            softClear();
            inputs.firstInput = Number(displayStorageDOM.textContent);
        }
    } else {
        inputs.operator = "-";
        displayOperatorDOM.textContent = "–";
    }
};

// MULTIPLY ************** MULTIPLY
const multiplyFunction = function () {
    if (displayDOM.textContent !== "") {
        if (inputs.firstInput == undefined) {
            inputs.operator = "*";
            displayOperatorDOM.textContent = "x";
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        } else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(
                inputs.operator,
                inputs.firstInput,
                inputs.secondInput
            );
            inputs.operator = "*";
            displayOperatorDOM.textContent = "x";
            softClear();
            inputs.firstInput = Number(displayStorageDOM.textContent);
        }
    } else {
        inputs.operator = "*";
        displayOperatorDOM.textContent = "x";
    }
};

// DIVIDE ////////////////// DIVIDE
const divideFunction = function () {
    if (displayDOM.textContent !== "") {
        if (inputs.firstInput == undefined) {
            inputs.operator = "/";
            displayOperatorDOM.textContent = "÷";
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        } else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            if (inputs.secondInput == "0") {
                openModal();
                errorDOM.play();
                hardClear();
            } else if (inputs.secondInput !== "0") {
                displayStorageDOM.textContent = operate(
                    inputs.operator,
                    inputs.firstInput,
                    inputs.secondInput
                );
                inputs.operator = "/";
                displayOperatorDOM.textContent = "÷";
                softClear();
                inputs.firstInput = Number(displayStorageDOM.textContent);
            }
        }
    } else {
        inputs.operator = "/";
        displayOperatorDOM.textContent = "÷";
    }
};

// EQUAL ================ EQUAL
const equalFunction = function () {
    if (displayDOM.textContent !== "") {
        if (inputs.firstInput == undefined && inputs.secondInput == undefined) {
            if (inputs.operator == "-") {
                inputs.firstInput = Number(0 - displayDOM.textContent);
                displayStorageDOM.textContent = inputs.firstInput;
                clearDisplay();
            } else return;
        } else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            if (inputs.secondInput == "0" && inputs.operator == "/") {
                openModal();
                errorDOM.play();
                hardClear();
            } else {
                displayStorageDOM.textContent = operate(
                    inputs.operator,
                    inputs.firstInput,
                    inputs.secondInput
                );
                softClear();
                inputs.firstInput = Number(displayStorageDOM.textContent);
            }
        }
    }
};

// DOT ........................... DOT
const dotFunction = function () {
    if (displayDOM.textContent.includes(".")) return;
    if (displayDOM.textContent == "") {
        displayDOM.textContent = displayDOM.textContent + "0.";
    } else if (displayDOM.textContent !== "") {
        displayDOM.textContent = displayDOM.textContent + ".";
    }
};

// backspace function
const backspaceFunction = function () {
    if (displayDOM.textContent == "") return;
    else {
        displayDOM.textContent = displayDOM.textContent.slice(0, -1);
    }
};

// mouse click events
number1DOM.onclick = () => number1Function();
number2DOM.onclick = () => number2Function();
number3DOM.onclick = () => number3Function();
number4DOM.onclick = () => number4Function();
number5DOM.onclick = () => number5Function();
number6DOM.onclick = () => number6Function();
number7DOM.onclick = () => number7Function();
number8DOM.onclick = () => number8Function();
number9DOM.onclick = () => number9Function();
number0DOM.onclick = () => number0Function();
operatorPlusDOM.onclick = () => plusFunction();
operatorMinusDOM.onclick = () => minusFunction();
operatorMultiplyDOM.onclick = () => multiplyFunction();
operatorDivideDOM.onclick = () => divideFunction();
operatorEqualDOM.onclick = () => equalFunction();
btnDotDOM.onclick = () => dotFunction();
btnBackspaceDOM.onclick = () => backspaceFunction();
btnClearDOM.onclick = () => hardClear();
btnCEDOM.onclick = () => clearDisplay();

// keyboard events
window.addEventListener(
    "keydown",
    (event) => {
        if (event.defaultPrevented) {
            return;
        }
        switch (event.key) {
            case "1":
                number1Function();
                break;
            case "2":
                number2Function();
                break;
            case "3":
                number3Function();
                break;
            case "4":
                number4Function();
                break;
            case "5":
                number5Function();
                break;
            case "6":
                number6Function();
                break;
            case "7":
                number7Function();
                break;
            case "8":
                number8Function();
                break;
            case "9":
                number9Function();
                break;
            case "Backspace":
                backspaceFunction();
                break;
            case "0":
                number0Function();
                break;
            case "+":
                plusFunction();
                break;
            case "-":
                minusFunction();
                break;
            case "*":
                multiplyFunction();
                break;
            case "/":
                divideFunction();
                break;
            case "Enter":
                equalFunction();
                break;
            case ".":
                dotFunction();
                break;
            default:
                return;
        }
        event.preventDefault();
    },
    true
);

// error modal settings
function openModal() {
    modalDOM.style.display = "block";
}

spanDOM.onclick = function () {
    modalDOM.style.display = "none";
};
