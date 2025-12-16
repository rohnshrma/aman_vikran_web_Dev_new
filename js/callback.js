// This function is used to send an HTTP request to a given URL
// url  → API endpoint (where data is coming from)
// cb   → callback function to handle success or error
function sendRequest(url, cb) {
  // Create a new XMLHttpRequest object
  // This object is used to communicate with servers via HTTP
  const request = new XMLHttpRequest();

  // Listen for changes in the request state
  // readyState changes multiple times during request lifecycle
  request.addEventListener("readystatechange", () => {
    // readyState === 4 means:
    // The request is completed and response is fully received
    // status === 200 means:
    // Request was successful (OK)
    if (request.readyState === 4 && request.status === 200) {
      // Convert JSON string response into JavaScript object
      // Call callback with:
      // err = null (no error)
      // data = parsed response
      cb(null, JSON.parse(request.responseText));
    }

    // If request completed but status is NOT 200
    // Means some error occurred (404, 500, etc.)
    if (request.readyState === 4 && request.status !== 200) {
      // Call callback with:
      // err = error message
      // data = null
      cb("Failed to fetch", null);
    }
  });

  // Configure the request
  // "GET" → HTTP method
  // url   → API endpoint
  request.open("GET", url);

  // Send the request to the server
  request.send();
}

// First API call → Fetch user with id = 1
sendRequest("https://jsonplaceholder.typicode.com/users/1", (err, data) => {
  // If error occurred
  if (err) {
    console.log(err);
  }
  // If request successful
  else {
    console.log(data);

    // Second API call → Fetch user with id = 2
    sendRequest("https://jsonplaceholder.typicode.com/users/2", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);

        // Third API call → Fetch user with id = 3
        sendRequest(
          "https://jsonplaceholder.typicode.com/users/3",
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);

              // Fourth API call → Fetch user with id = 1 again
              sendRequest(
                "https://jsonplaceholder.typicode.com/users/1",
                (err, data) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(data);
                  }
                }
              );
            }
          }
        );
      }
    });
  }
});
