
// basic functions
const add = function(a, b) {
    console.log(a + b);
    return a + b;
}

const subtract = function(a, b) {
    console.log(a - b);
    return a - b;
}

const multiply = function(a, b) {
    console.log(a * b);
    return a * b;
}

const divide = function(a, b) {
    console.log(a / b);
    return a / b;
}


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
const btnClearDOM = document.getElementById("btnClear");
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
}

// soft clear -> without storage display
function softClear() {
    displayDOM.textContent = "";
    inputs.firstInput = undefined;
    inputs.secondInput = undefined;
}


// event handlers for buttons
btnClearDOM.onclick = () => hardClear();
number0DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "0"};
number1DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "1"};
number2DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "2"};
number3DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "3"};
number4DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "4"};
number5DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "5"};
number6DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "6"};
number7DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "7"};
number8DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "8"};
number9DOM.onclick = () => {displayDOM.textContent = displayDOM.textContent + "9"};


let inputs = {
    firstInput: undefined,
    secondInput: undefined,
    operator: undefined,
};

console.log(inputs.firstInput)


// PLUS +++++++++++ PLUS
operatorPlusDOM.onclick = () => {
    
    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "+";
            inputs.firstInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "+"
            softClear();
            inputs.firstInput = new Number(displayStorageDOM.textContent);
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput !== undefined) {
            
            inputs.operator = "+";
        }
    }
    else {
        inputs.operator = "+";
    }
}


// MINUS ------------ MINUS
operatorMinusDOM.onclick = () => {
    
    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "-";
            inputs.firstInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput;
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "-";
            softClear();
            inputs.firstInput = new Number(displayStorageDOM.textContent);
            
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput !== undefined) {
            
            inputs.operator = "-";
            
            
        }
    }
    else {
        inputs.operator = "-";
    }
}


// MULTIPLY ************** MULTIPLY
operatorMultiplyDOM.onclick = () => {
    
    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "*";
            inputs.firstInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput; 
            clearDisplay();
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "*";
            softClear();
            inputs.firstInput = new Number(displayStorageDOM.textContent);
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput !== undefined) {
            
            inputs.operator = "*";
        }
    }
    else {
        inputs.operator = "*";
    }
}


// DIVIDE ////////////////// DIVIDE
operatorDivideDOM.onclick = () => {

    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined) {
            inputs.operator = "/"
            inputs.firstInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = inputs.firstInput; 
            clearDisplay();
            
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            inputs.operator = "/"
            softClear();
            inputs.firstInput = new Number(displayStorageDOM.textContent);
        }
        
        else if (inputs.firstInput !== undefined && inputs.secondInput !== undefined) {
            
            inputs.operator = "/";
        }
    }
    else {
        inputs.operator = "/";
    }
}


// EQUAL ================ EQUAL
operatorEqualDOM.onclick = () => {

    if (displayDOM.textContent !== ""){

        if (inputs.firstInput == undefined && inputs.secondInput == undefined) {
            return 
        }

        else if (inputs.firstInput !== undefined && inputs.secondInput == undefined) {
            inputs.secondInput = new Number(displayDOM.textContent);
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            softClear();
            inputs.firstInput = new Number(displayStorageDOM.textContent);
        }

        else if (inputs.firstInput !== undefined && inputs.secondInput !== undefined) {
            displayStorageDOM.textContent = operate(inputs.operator, inputs.firstInput, inputs.secondInput);
            softClear();
            inputs.firstInput = new Number(displayStorageDOM.textContent);
        }
    }
}


