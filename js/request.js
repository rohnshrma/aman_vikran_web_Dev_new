const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(JSON.parse(request.responseText));
  }
  if (request.readyState === 4 && request.status !== 200) {
    console.log("Failed to fetch");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users/1");

request.send();
