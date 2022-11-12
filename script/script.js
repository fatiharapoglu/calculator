// basic math functions with rounding decimals 6 if necessary
const add = function(a, b) {
    return Math.round(((a + b) + Number.EPSILON) * 1000000) / 1000000;
};

const subtract = function(a, b) {
    return Math.round(((a - b) + Number.EPSILON) * 1000000) / 1000000;
};

const multiply = function(a, b) {
    return Math.round(((a * b) + Number.EPSILON) * 1000000) / 1000000;
};

const divide = function(a, b) {
    return Math.round(((a / b) + Number.EPSILON) * 1000000) / 1000000;
};


// calculations
function operate(operator, a, b) {

    if (operator == "+") {
        return add(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "*") {
        return multiply(a, b);
    }
    else if (operator == "/") {
        return divide(a, b);
    }
};


// DOMs
const operatorPlusDOM = document.getElementById("operatorPlus");
const operatorMinusDOM = document.getElementById("operatorMinus");
const operatorMultiplyDOM = document.getElementById("operatorMultiply");
const operatorDivideDOM = document.getElementById("operatorDivide");
const operatorEqualDOM = document.getElementById("operatorEqual");
const btnBackspaceDOM = document.getElementById("btnBackspace");
const btnClearDOM = document.getElementById("btnClear");
const btnCEDOM = document.getElementById("btnCE");
const btnDotDOM = document.getElementById("btnDot");
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
const displayStorageDOM = document.getElementById("displayStorage");
const displayOperatorDOM = document.getElementById("displayOperator");


// clear display function
function clearDisplay() {
    displayDOM.textContent = "";
};

// hard clear -> everything to initial, for AC button
function hardClear() {
    displayDOM.textContent = "";
    inputs.firstInput = undefined;
    inputs.secondInput = undefined;
    inputs.operator = undefined;
    displayStorageDOM.textContent = "";
    displayOperatorDOM.textContent = "";
};

// soft clear -> without storage display
function softClear() {
    displayDOM.textContent = "";
    inputs.firstInput = undefined;
    inputs.secondInput = undefined;
};


// event handlers for buttons with removing the possibility to display numbers like 0234523
number1DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "1"}
    else {displayDOM.textContent = displayDOM.textContent + "1"}
};
number2DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "2"}
    else {displayDOM.textContent = displayDOM.textContent + "2"}
};
number3DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "3"}
    else {displayDOM.textContent = displayDOM.textContent + "3"}
};
number4DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "4"}
    else {displayDOM.textContent = displayDOM.textContent + "4"}
};
number5DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "5"}
    else {displayDOM.textContent = displayDOM.textContent + "5"}
};
number6DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "6"}
    else {displayDOM.textContent = displayDOM.textContent + "6"}
};
number7DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "7"}
    else {displayDOM.textContent = displayDOM.textContent + "7"}
};
number8DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "8"}
    else {displayDOM.textContent = displayDOM.textContent + "8"}
};
number9DOM.onclick = () => {
    if (displayDOM.textContent == "0") {displayDOM.textContent = "9"}
    else {displayDOM.textContent = displayDOM.textContent + "9"}
};

// zero
number0DOM.onclick = () => {
    
    if (displayDOM.textContent == "0") return;
    else {
        displayDOM.textContent = displayDOM.textContent + "0"
    }
};


btnClearDOM.onclick = () => hardClear();
btnCEDOM.onclick = () => clearDisplay();

let inputs = {
    firstInput: undefined,
    secondInput: undefined,
    operator: undefined,
};


// PLUS +++++++++++ PLUS
operatorPlusDOM.onclick = () => {
    
    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "+";
            displayOperatorDOM.textContent = inputs.operator;
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "+"
            displayOperatorDOM.textContent = inputs.operator;
            softClear();
            inputs.firstInput = Number(displayStorageDOM.textContent);
        }
    }
    
    else {
        inputs.operator = "+";
        displayOperatorDOM.textContent = inputs.operator;
    }
};


// MINUS ------------ MINUS
operatorMinusDOM.onclick = () => {
    
    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "-";
            displayOperatorDOM.textContent = "–";
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "-";
            displayOperatorDOM.textContent = "–";
            softClear();
            inputs.firstInput = Number(displayStorageDOM.textContent);
            
        }
    }

    else {
        inputs.operator = "-";
        displayOperatorDOM.textContent = "–";
    }
};


// MULTIPLY ************** MULTIPLY
operatorMultiplyDOM.onclick = () => {
    
    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "*";
            displayOperatorDOM.textContent = "x";
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput; 
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "*";
            displayOperatorDOM.textContent = "x";
            softClear();
            inputs.firstInput = Number(displayStorageDOM.textContent);
        }
    }
    
    else {
        inputs.operator = "*";
        displayOperatorDOM.textContent = "x";
    }
};


// DIVIDE ////////////////// DIVIDE
operatorDivideDOM.onclick = () => {

    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "/"
            displayOperatorDOM.textContent = "÷";
            inputs.firstInput = Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput; 
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {

            inputs.secondInput = Number(displayDOM.textContent);

            if (inputs.secondInput == "0") {
                alert("bruh");
                hardClear();
            }
            else if (inputs.secondInput !== "0") {
                displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
                inputs.operator = "/"
                displayOperatorDOM.textContent = "÷";
                softClear();
                inputs.firstInput = Number(displayStorageDOM.textContent);
            }
        }
    }
    else {
        inputs.operator = "/";
        displayOperatorDOM.textContent = "÷";
    }
};


// EQUAL ================ EQUAL
operatorEqualDOM.onclick = () => {

    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined && inputs.secondInput == undefined) {
            
            if (inputs.operator == "-") {
                inputs.firstInput = Number(0 - displayDOM.textContent);
                displayStorageDOM.textContent = inputs.firstInput
                clearDisplay();
            }
            else return;
        }

        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            
            inputs.secondInput = Number(displayDOM.textContent);
            
            if (inputs.secondInput == "0" && inputs.operator == "/") {
                alert("dude");
                hardClear();
            }
            else {
                displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
                softClear();
                inputs.firstInput = Number(displayStorageDOM.textContent);
            }
        }
    }
};


// DOT ........................... DOT
btnDotDOM.onclick = () => {
    
    if (displayDOM.textContent.includes(".")) return;

    if (displayDOM.textContent == "") {
        displayDOM.textContent = displayDOM.textContent + "0."
    }

    else if (displayDOM.textContent !== "") {
        displayDOM.textContent = displayDOM.textContent + "."
    }
};


// backspace button
btnBackspaceDOM.onclick = () => {

    if (displayDOM.textContent == "") return;

    else {
        displayDOM.textContent = displayDOM.textContent.slice(0, -1)
    }
};

