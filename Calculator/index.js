document.addEventListener("DOMContentLoaded", function () {
  // Get input fields and result display
  const input1 = document.getElementById("input-1");
  const input2 = document.getElementById("input-2");
  const resultDisplay = document.getElementById("result");

  // Function to perform calculation
  function calculate(operator) {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = "Please enter valid numbers!";
      resultDisplay.style.color = "red";
      return;
    }

    let result;
    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") {
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }

    // Show result
    resultDisplay.textContent = `Result: ${result}`;
    resultDisplay.style.color = "green";
  }

  // Attach event listeners to buttons
  document
    .getElementById("add-btn")
    .addEventListener("click", () => calculate("+"));
  document
    .getElementById("subtract-btn")
    .addEventListener("click", () => calculate("-"));
  document
    .getElementById("multi-btn")
    .addEventListener("click", () => calculate("*"));
  document
    .getElementById("div-btn")
    .addEventListener("click", () => calculate("/"));
});

//Objects in Js

let person = {
  name: "John",
  age: 30,
  city: "New York",

  // Method
  getPersonInfo: function () {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  },

  //array inside an object
  hobbies: ["reading", "traveling", "coding"],
};

// Accessing object properties
const [name, age, city] = [person.name, person.age, person.city];

console.log(name); // John

const [hobbies] = [person.hobbies];
console.log(hobbies); // ["reading", "traveling", "coding"]

hobbies.push("playing");

console.log(hobbies); // ["reading", "traveling", "coding", "playing"]
