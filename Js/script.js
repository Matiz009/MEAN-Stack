// var q = 12;
// var q = "hi";
// console.log(q); // hi
// // The variable q is redeclared with a new value. The old value is replaced with the new value.
// // The output is hi.
// let t = 12;
// t = "hi";
// console.log(t); // SyntaxError: Identifier 't' has already been declared

// const r = 12;
// r = "hi";
// console.log(r); // SyntaxError: Identifier 'r' has already been declared
// function test() {
//   var a = 12;
//   var b = "12";
//   if (a === b) {
//     var c = "hi";
//     console.log(c); // hi
//   }
//   var a = "hi";
//   console.log(a); // hi
// }
// test();
// // The variable a is redeclared with a new value. The old value is replaced with the new value.

// //different methods of writing a function

// // Method 1
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // 5

// // Method 2

// var add = function (a, b) {
//   return a + b;
// };

// console.log(add(2, 3)); // 5

// // Method 3
// var add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// // Method 4
// var add = new Function("a", "b", "return a + b");

// console.log(add(2, 3)); // 5

// // Method 5
// var add = new Function("a,b", "return a + b");

// //10 minutes lab to make a calculator using functions take 15 minutes to do it

// a = b ? console.log("true") : console.log("false");

let heading1 = document.getElementById("heading-1");
heading1.innerHTML = "Lecture 3: Js DOM Manipulation";
heading1.style.color = "red";
