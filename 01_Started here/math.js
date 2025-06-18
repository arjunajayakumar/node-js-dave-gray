const add = (a,b)=> a + b;
const subtract = (a,b)=> a - b;
const multiply = (a,b)=> a * b;
const divide = (a,b)=> a / b;

// Custom module export
module.exports = {add, subtract, multiply, divide}

// We can also import in this way as well
// exports.add = (a,b)=> a + b;
// exports.subtract = (a,b)=> a - b;
// exports.multiply = (a,b)=> a * b;
// exports.divide = (a,b)=> a / b;