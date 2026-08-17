// ===============================
// BASIC MATHS
// ===============================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function square(a) {
    return a ** 2;
}

function cube(a) {
    return a ** 3;
}

function squareRoot(a) {
    return Math.sqrt(a);
}

function cubeRoot(a) {
    return Math.cbrt(a);
}

function absolute(a) {
    return Math.abs(a);
}


// =================================
// GET HTML ELEMENTS
// =================================

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const operation =
    document.getElementById("operation");

const calculate =
    document.getElementById("calculate");

const result =
    document.getElementById("result");


// =================================
// CALCULATE
// =================================

calculate.addEventListener("click", function () {

    // Convert input text into numbers
    const a = Number(number1.value);
    const b = Number(number2.value);

    let answer;


    // Choose operation
    if (operation.value === "add") {

        answer = add(a, b);

    }

    else if (operation.value === "subtract") {

        answer = subtract(a, b);

    }

    else if (operation.value === "multiply") {

        answer = multiply(a, b);

    }

    else if (operation.value === "divide") {

        answer = divide(a, b);

    }

    else if (operation.value === "remainder") {

        answer = remainder(a, b);

    }

    else if (operation.value === "power") {

        answer = power(a, b);

    }


    // Display answer
    result.textContent =
        "Result: " + answer;

});
