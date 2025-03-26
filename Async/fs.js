const fs = require("node:fs");

fs.writeFile("example.txt", "This is an example", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});

fs.readFile("./index.js", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// fs.mkdir("Node JS Core modules", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder created successfully");
//   }
// });

// fs.rmdir("Node JS Core modules", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder deleted successfully");
//   }
// });

// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });
