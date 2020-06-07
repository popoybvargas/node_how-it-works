// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();

console.log(calc1.add(8, 7));

// exports
const calc2 = require('./test-module-2');
const { add, subtract, multiply, divide } = require('./test-module-2');
console.log(calc2.multiply(8, 7));
console.log(divide(56, 7));

// caching
// const module3 = require('./test-module-3');
// module3();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
