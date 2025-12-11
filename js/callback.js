function sendRequest(url, cb) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      cb(null, JSON.parse(request.responseText));
    }
    if (request.readyState === 4 && request.status !== 200) {
      cb("Failed to fetch", null);
    }
  });

  request.open("GET", url);

  request.send();
}

sendRequest("https://jsonplaceholder.typicode.com/users/1", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
