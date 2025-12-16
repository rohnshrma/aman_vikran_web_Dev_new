// This function sends an HTTP GET request
// and RETURNS a Promise
function sendReq(url) {
  // Create and return a Promise
  // resolve → success
  // reject  → failure
  return new Promise((resolve, reject) => {
    // Create XMLHttpRequest object (old but important API)
    const request = new XMLHttpRequest();

    // Listen for request state changes
    request.addEventListener("readystatechange", () => {
      // readyState === 4 → request completed
      // status === 200 → successful response
      if (request.readyState === 4 && request.status === 200) {
        // Convert JSON string response to JavaScript object
        // Resolve the Promise with the data
        resolve(JSON.parse(request.responseText));
      }

      // If request completed but status is NOT 200
      if (request.readyState === 4 && request.status !== 200) {
        // Reject the Promise with an error message
        reject("Failed to fetch");
      }
    });

    // Configure the request
    // "GET" → HTTP method
    // url   → API endpoint
    request.open("GET", url);

    // Send request to server
    request.send();
  });
}

// Async function to handle the request
async function handleRequest(url) {
  try {
    // await pauses execution until Promise resolves
    // sendReq(url) returns a Promise
    let data = await sendReq(url);

    // Log the API response
    console.log(data);
  } catch (err) {
    // Runs if Promise is rejected
    console.log(err);
  }
}

handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
