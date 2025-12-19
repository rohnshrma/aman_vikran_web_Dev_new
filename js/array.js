var marks = [23, 23, 232, 43423, 2, 3, 23, 23];

// var names = ["john", "marie", "jasie"];

// // add a new item at the end of the array
// marks.push(232323232);
// console.log(marks);

// //remove last item from an array
// marks.pop();
// console.log(marks);

// // return item on the specified index (positive and negative)
// console.log(marks.at(0));
// console.log(marks.at(-1));

// console.log(marks.concat(marks, names)); // returns a new array

// console.log(names + marks); // does not working , return a string

// // returns a flattened array
// console.log(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//   ].flat()
// );
// console.log(names.slice(0, 2));

// // add a new item at the start of an array
// names.unshift(1234);
// console.log(names);

// // removes first from an array
// names.shift();
// console.log(names);

// names.reverse();
// console.log(names);

// // splice : add, remove

// // names.splice(1, 0, "rohan");
// // names.splice(1, 1, "rohan");
// // names.splice(1, 2);
// // console.log(names);

// forEach , map, filter

// console.log each item from an array

// for Each doesn't return anything

// for (var i = 0; i < marks.length; i += 1) {
//   console.log(marks[i]);
// }

// marks.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// marks.forEach((item, index, arr) => console.log(item));

// map lets you perform an action on each item and return a new array

// var sqs = marks.map((mark) => mark ** 2);

// console.log(sqs);

// var areEvens = marks.map((mark) => mark % 2 == 0);

// var areEvens = marks.map((mark) => {
//   return mark % 2 == 0;
// });

// var areEvens = marks.map((mark) =>
//   mark % 2 == 0 ? `${mark} is even` : `${mark} is odd`
// );

// console.log(areEvens);

// var areEvens = marks.map((mark) => {
//   if (mark % 2 == 0) {
//     return `${mark} is even`;
//   } else {
//     return `${mark} is odd`;
//   }
// });

// console.log(areEvens);

// var res = [];

// marks.forEach((mark) => {
//   if (mark % 2 === 0) {
//     res.push(`${mark} is even`);
//   } else {
//     res.push(`${mark} is odd`);
//   }
// });

// console.log(res);

// var evens = [];

// marks.forEach((mark) => {
//   if (mark % 2 === 0) evens.push(mark);
// });

// console.log(evens);

// filter return an array consisting of items which passed the condition

// let evens = marks.filter((mark) => {
//   return mark % 2 === 0;
// });

// console.log(marks.filter((mark) => mark % 2 === 0));

// reducer : single value

// when value of pv is not provided explicitly
// pv : arr[0]
// cv : arr[1]

// var sum = marks.reduce((pv, cv) => {
//   // pv = pv + cv
//   return pv + cv;
// });
// console.log(sum);

// var max = marks.reduce((max, cv) => {
//   if (cv > max) {
//     return cv;
//   } else {
//     return max;
//   }
// }, marks[0]);

// console.log(max);

// var max = marks.reduce((max, cv) => (cv > max ? cv : max), marks[0]);

// console.log(max);

// sort

// var sorted = marks.sort((a, b) => a - b);
// var sorted = marks.sort((a, b) => b - a);

// console.log(sorted);

var names = ["joe", "alien", "jammie", "jil", "jason", "josie"];
// names.sort((a, b) => a.length - b.length);

// names.sort((a, b) => a.localeCompare(b));

// console.log(names);

// some : return True \ false

console.log(names.some((a) => a.startsWith("j")));
console.log(names.every((a) => a.startsWith("j")));
