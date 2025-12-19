// initialization
// while(condition){
// code to be executed
//update (+ , -)
// }

// var num = 1;
// while (num <= 100) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else console.log(num);
//   num += 1;
// }

// var char = prompt("ENter a character :").toLowerCase();
// while (!"aeiou".includes(char)) {
//   console.log(char);
//   char = prompt("Enter a character :").toLowerCase();
// }

// console.log("done");

// while (true) {
//   var year = parseInt(prompt("Enter year : "));

//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         alert(`${year} is a leap year.`);
//         break;
//       } else {
//         alert(`${year} is not a leap year.`);
//       }
//     } else {
//       alert(`${year} is a leap year.`);
//       break;
//     }
//   } else {
//     alert(`${year} is not a leap year.`);
//   }
// }

// var secret = Math.floor(Math.random() * 100) + 1;

// while (true) {
//   var guess = parseInt(prompt("Enter your guess : "));
//   if (guess > secret) {
//     alert("Too High! Try low.");
//   } else if (guess < secret) {
//     alert("Too Low! Try high.");
//   } else {
//     alert(`Congratulation User! you've guessed the number ${secret}`);
//     break;
//   }
// }

// - Print all numbers from 1 to 100 that are divisible by both 3 and 7.

// - Keep asking the user for a number until they enter a multiple of 5.
// while (true) {
//   var n = parseInt(prompt("Enter a number : "));
//   if (n % 5 === 0) {
//     alert("Finally a multiple of 5", n);
//     break;
//   }
//   alert(n);
// }

// - Count down from 50 to 1, but skip every number that contains the digit 4.
// - Keep asking for a password until the user types "javascript" (case-insensitive).
// - Print the first 15 powers of 2 (2¹, 2², 2³ …).
// - Ask the user for numbers and keep adding them until the sum reaches 100 or more.

// var sum = 0;
// while (sum < 100) {
//   var n = parseInt(prompt("Enter a number : "));
//   sum += n;
//   alert(sum);
// }

// - Simulate rolling a dice until you get three 6s in a row. Count total rolls.
// var nums = "";
// while (true) {
//   var n = Math.floor(Math.random() * 6) + 1;

//   if (
//     nums.length >= 2 &&
//     nums[nums.length - 1] == 6 &&
//     nums[nums.length - 2] == 6 &&
//     n == 6
//   ) {
//     alert("Hattrick three 6 in a row");
//     break;
//   }

//   alert(n);
//   nums += n;
// }
// - Print all numbers from 100 down to 1 that are prime (only divisible by 1 and themselves).
// - Keep asking for a year until the user enters a leap year.
// - Print "Hello" 20 times, but after every 5th "Hello" print "Break time!".
// - Ask the user to enter positive numbers. Stop when they - enter a negative number and show the largest number entered.
// - Generate random numbers between 1 and 10 until you get the number 7. Show how many tries it took.
// - Print the multiplication table of any number entered by the user (from 1 to 12).
// - Keep asking for marks (0–100). Stop when user enters -1 and show the average.
// - Print numbers from 1 to 200, but replace multiples of 8 with "Skip".
// - Simple login: user has 4 attempts to guess your favorite number (you choose one between 1–20).
// - Print the sequence: 1, 3, 7, 15, 31, … (each time subtract 1 then multiply by 2) — first 10 terms.
// - Keep asking for a word until the user enters a word longer than 8 characters.
// - Print all odd numbers between 1 and 100 in descending order.
// - Ask the user for a starting number and keep subtracting 7 until the result is negative. Count the steps.

// do while

// var x = 20;

// do {
//   console.log("x is greater than 100", x);
//   x -= 1;
// } while (x > 100);

var evens = [];
var odds = [];

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) evens.push(i);
  else odds.push(i);
}

console.log(evens);
console.log(odds);
