// var age = 32;
// if (age >= 18) console.log("eligible");

// var age = 32;
// if (age >= 18) console.log("eligible");
// else console.log("Not Eligible");

var day = parseInt(prompt("Enter a day", "0-6"));

// if else ladder
if (day === 0) console.log("Sunday");
else if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else console.log(`${day} is not a valid day`);

// switch statement
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log(`${day} is not a valid day`);
    break;
}

//0-4 : free
//5-10 : ₹100
//11-14 : ₹200
//15 - : ₹500

var age = parseInt(prompt("Enter your age :"));
switch (age) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("FREE");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("₹100");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
    console.log("₹200");
    break;
  default:
    console.log("₹500");
    break;
}

// 90-100 : A
// 80-90 : B
// 70-80 : C
// 60-70 : D
// 0 - 59 : F

var marks = parseInt(prompt("Enter marks", marks));
switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("A");
    break;
  case marks >= 80 && marks < 90:
    console.log("B");
    break;
  case marks >= 70 && marks < 80:
    console.log("C");
    break;
  case marks >= 60 && marks < 70:
    console.log("D");
    break;
  case marks >= 0 && marks < 60:
    console.log("F");
    break;
  default:
    console.log("Invalid Marks");
    break;
}
