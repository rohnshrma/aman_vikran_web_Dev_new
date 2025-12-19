// This function returns a Promise manually
// Promise represents a value that will be available in the future
function fetchhhhh() {
  // Creating a new Promise
  // resolve → called when task is successful
  // reject  → called when task fails
  return new Promise((resolve, reject) => {
    // prompt() takes input from the user as STRING
    // parseInt converts string input into number
    let age = parseInt(prompt("Enter age : "));

    // setTimeout simulates an async operation (like API call)
    // This will run after 5 seconds (5000 ms)
    setTimeout(() => {
      // Ternary operator:
      // condition ? success : failure
      age >= 18
        ? resolve("Eligible") // Promise fulfilled
        : reject("Not Eligible"); // Promise rejected
    }, 5000);
  });
}

// Consuming the Promise
fetchhhhh()
  // Runs if resolve() is called
  .then((data) => console.log(data))

  // Runs if reject() is called
  .catch((err) => console.log(err));
