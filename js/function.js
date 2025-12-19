// function declaration
//  function keyword is used to create a function followed by function name

// function bmiCalculator() {
//   let weight = parseInt(prompt("Enter your weight : "));
//   let height = parseFloat(prompt("Enter your height : "));
//   let bmi = weight / height ** 2;
//   if (bmi < 18.5) console.log("underweight as your bmi is ", bmi);
//   else if (bmi >= 18.5 && bmi < 25)
//     console.log("normal weight as your bmi is ", bmi);
//   else if (bmi >= 25 && bmi < 30)
//     console.log("over weight as your bmi is ", bmi);
//   else console.log("obese as your bmi is ", bmi);
// }

// the code inside of a function runs only when the function is called by its name
// bmiCalculator();

// parameters

// function bmiCalculator(weight, height) {
//   let bmi = weight / height ** 2;
//   if (bmi < 18.5) console.log("underweight as your bmi is ", bmi);
//   else if (bmi >= 18.5 && bmi < 25)
//     console.log("normal weight as your bmi is ", bmi);
//   else if (bmi >= 25 && bmi < 30)
//     console.log("over weight as your bmi is ", bmi);
//   else console.log("obese as your bmi is ", bmi);
// }

// bmiCalculator(100, 1.8);
// bmiCalculator(70, 1.6);

// ================ return keyword

// function prints() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   return;
//   console.log(4);
//   console.log(5);
// }

// prints();

// function add(x, y) {
//   var sum = x + y; // local scope
//   return sum;
// }

// let result = add(12, 3);
// console.log(result);

// 3
// function findMax(arr) {
//   let max = arr[0];
//   for (var i = 0; i < arr.length; i += 1) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function expressions
// arrow and anonymous function

// anonymous function

// function(){

// }

// 1. assign it as a value to a variable

// let addition = function (x, y) {
//   return x + y;
// };

// console.log(addition(13, 45));

// 2. use  it as a value of a callback function

// function lifeSpan(average_age, yob, cb) {
//   let age = cb(yob);
//   let years_left = average_age - age;
//   console.log(
//     `Years Left : ${years_left}\nMonths Left : ${
//       years_left * 12
//     }\nWeeks Left : ${years_left * 52}\nDays Left : ${years_left * 365}`
//   );
// }

// lifeSpan(90, 1999, function (yob) {
//   return new Date().getFullYear() - yob;
// });

// arrow function

// ()=>{}

// use it as a value  to a variable

// let sub = (a, b) => a - b;

// let bmi = (weight, height) => weight / height ** 2;

// let square = (n) => n ** 2;

// 2. use  it as a value of a callback function

// let lifeSpan = (average_age, yob, cb) => {
//   let age = cb(yob);
//   let years_left = average_age - age;
//   console.log(
//     `Years Left : ${years_left}\nMonths Left : ${
//       years_left * 12
//     }\nWeeks Left : ${years_left * 52}\nDays Left : ${years_left * 365}`
//   );
// };

// lifeSpan(90, 1999, (yob) => new Date().getFullYear() - yob);
