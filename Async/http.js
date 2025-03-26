const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

http.get("http://localhost:3000", (res) => {
  console.log("Response received from the server");
  res.on("data", (data) => {
    console.log(data.toString());
  });
});
