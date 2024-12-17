/*
const greet = (name) => {
    console.log(`Hello ${name}`);
};

greet("Mahi");
greet("Mahima");
*/

const calculator = require("./calculator");
const {add, sub, mul, div} = calculator;

console.log(add(5, 4));
console.log(sub(5, 4));
console.log(mul(5, 4));
console.log(div(5, 4));