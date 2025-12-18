// // API Key:
// // 3ed1a8944ae36bde087adc8f67d0f04a
// // Base URL:
// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API
// // key}&units=metric

// function sendRequest(city) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200)
//         resolve(JSON.parse(request.responseText));
//       else if (request.readyState === 4 && request.status !== 200)
//         reject(`Failed to fetch Weather of ${city}`);
//     });
//     request.open("GET", url);
//     request.send();
//   });
// }

// const handleRequest = async (city) => {
//   try {
//     const responseData = await sendRequest(city);
//     // console.log(responseData);
//     console.log(
//       `City Name : ${responseData.name}\nTemperature : ${responseData.main.temp}\nFeels Like : ${responseData.main.feels_like}\nDescription : ${responseData.weather[0].description}`
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

// handleRequest("gurgaon");
// handleRequest("agra");
// handleRequest("delhi");
