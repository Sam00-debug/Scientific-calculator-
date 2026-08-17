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


// ===============================
// TEST
// ===============================

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(remainder(10, 3));

console.log(power(2, 5));
console.log(square(6));
console.log(cube(3));

console.log(squareRoot(25));
console.log(cubeRoot(27));
console.log(absolute(-20));
