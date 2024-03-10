
function add(x1, x2) {
    return x1 + x2;
}

function subtract(y1, y2) {
    return y1 - y2;
}

function multiply(z1, z2) {
    return z1 * z2;
}

function divide(n1, n2) {
    if (n2 == 0) {
        console.log("Error! Cannot divide by zero.");
    } else {
        return n1 / n2;
    }
}
// console.log(add(5, 7)); // Outputs: 12
// console.log(subtract(10, 3)); // Outputs: 7
// console.log(multiply(6, 9)); // Outputs: 54
// console.log(divide(8, 2)); // Outputs: 4
// console.log(divide(10, 0)); // Outputs "Error! Cannot divide by zero."

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;