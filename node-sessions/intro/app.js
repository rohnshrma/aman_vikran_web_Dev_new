// Import the 'fs' (File System) module to work with files
const fs = require("fs");

// Import the 'http' module to create an HTTP server
const http = require("http");

// ====================== Server Setup ======================

// Synchronously read the contents of 'joke.json' as a UTF-8 string
// This blocks the event loop until the file is read
let data = fs.readFileSync("./data-json/joke.json", "utf-8");

// Log the file contents to the console for debugging
console.log(data);

// Create an HTTP server that listens for requests
const server = http.createServer((req, res) => {
  // Log the requested URL path for each incoming request
  console.log(req.url);

  // If the request is for the root path
  if (req.url === "/") {
    // Respond with a welcome message
    res.end("welcome from the server");
  }
  // If the request is for the '/api' endpoint
  else if (req.url === "/api") {
    // Respond with the contents of 'joke.json'
    res.end(data);
  }
  // For any other path
  else {
    // Respond with a "PAGE NOT FOUND" message
    res.end("PAGE NOT FOUND");
  }
});

// Start the server on localhost (127.0.0.1) at port 3000
server.listen(3000, "127.0.0.1", () => {
  // Log a message when the server starts successfully
  console.log("server started on port : ", 3000);
});

// ====================== File Read and Write Examples ======================

// The following code is commented out. It demonstrates various ways to read and write files using the 'fs' module:

// Synchronously read a text file (blocks the event loop)
// let data = fs.readFileSync("./data-txt/data.txt", "utf-8");

// Log a message and the file contents
// console.log("hello");
// console.log(data);

// Asynchronously read a text file (non-blocking)
// fs.readFile("./data-txt/data.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// Synchronously write to a text file (overwrites file, blocks event loop)
// fs.writeFileSync("./data-txt/data.txt", "nahi bataunga", "utf-8");

// Asynchronously write to a text file (non-blocking)
// fs.writeFile(
//   "./data-txt/data.txt",
//   "nahi bataunga,............",
//   "utf-8",
//   () => {
//     console.log("write written successfully");
//   }
// );
