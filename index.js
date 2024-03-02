// ⛔️ Uncaught SyntaxError: missing ) after argument list

// EXAMPLE 1 - Correct all errors in the argument list of your function calls

console.log('hello' + ' world'); // 👈️ use + operator

console.log('hello'.slice(0, 2)); // 👈️ separate arguments by comma

// ------------------------------------------------------------------

// // EXAMPLE 2 - Concatenate strings with the addition (+) operator

// console.log('hello ' + 'world'); // 👉️ hello world
// console.log('age: ' + String(30)); // 👉️ age: 30

// ------------------------------------------------------------------

// // EXAMPLE 3 - Separate function arguments by commas

// console.log('hello'.slice(0, 2)); // 👉️ 'he'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Call the function correctly when passing multiple arguments

// function sum(a, b) {
//   return a + b;
// }
// const result = sum(10, 15);

// console.log(result); // 👉️ 25

// ------------------------------------------------------------------

// // EXAMPLE 5 - Make sure to terminate your string literals

// // ✅ alternate quotes
// const str2 = "it's him";

// // ✅ template literal
// const str3 = `it's him`;

// // ✅ a template literal with a variable
// const num = 42;

// const str4 = `The number is ${num}`;
// console.log(str4); // 👉️ The number is 42

// ------------------------------------------------------------------

// // Make sure you don't have missing parentheses or brackets

// console.log('a', 'B');
