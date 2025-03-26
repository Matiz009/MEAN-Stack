//take 10 minutes to do this
// console.log("Before...");
// setTimeout(function () {
//   console.log("Reading a user from DB");
// }, 0);
// console.log("After...");

//write output of this code in the comments

// console.log("Before");
// const user = getUser();
// console.log(user);
// console.log("After");

// function getUser() {
//   setTimeout(function () {
//     console.log("DB Query entertained");
//     return { id: 9, name: "usman" };
//   }, 1000);
//   return "dummy";
// }

// const p = new Promise(function (resolve, reject) {
//   if (true) resolve({ name: "hareem" });
//   else reject(new Error("Failed"));
// });
// p.then((result) => {
//   console.log(result.name);
// });
// p.catch((error) => {
//   console.log("Error Caught" + error.message);
// });

// const promise = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // Parse JSON response
//     .then((data) => resolve(data)) // Resolve the promise with data
//     .catch((error) => reject(error)); // Handle errors
// });

// promise
//   .then((users) => {
//     console.log("Fetched Users:", users);
//     return "Another Promise";
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json(); // Parse JSON response
    return users;
    // console.log("Fetched Users:", users);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function processPromises() {
  try {
    const value1 = await fetchUsers();
    console.log(value1);

    const value2 = "Yet Another Promise";
    console.log(value2);
  } catch (error) {
    console.error("Error in processing:", error);
  }
}

// Call the function
processPromises();
