// fetch() is a modern way to make HTTP requests in JavaScript
// It returns a Promise
// The URL is the API endpoint from where we want data
fetch("https://jsonplaceholder.typicode.com/users/1")
  // .then() runs when the Promise is RESOLVED
  // response → represents the HTTP response from the server
  .then((response) => {
    // response.json() reads the response body
    // and converts JSON string into a JavaScript object
    // IMPORTANT:
    // response.json() also returns a Promise
    return response.json();
  })

  // This .then() receives the actual parsed JavaScript data
  .then((data) => {
    // Print the fetched user data in console
    console.log(data);
  })

  // .catch() runs if ANY error occurs in fetch or .then()
  // Example errors:
  // - Network failure
  // - Invalid JSON
  // - Server not reachable
  .catch((err) => {
    // Log the error
    console.log(err);
  });
