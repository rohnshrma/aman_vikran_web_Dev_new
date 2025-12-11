// arithmetic operators

// + : sum
// - : difference
// * : product
// / : quotient
// % : remainder
// ** : exponential

var a = 12;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// assignment operator

// = : regular assignment
// += : add and assign
// -= : substract and assign
// *= : multiply and assign
// /= : quotient and assign
// %= : remainder and assign
// **= : exponential and assign

var x = 10;
console.log(x);

x += 4; // add and assign
console.log(x);

x -= 5; // substract and assign
console.log(x);

x *= 4; // multiply and assign
console.log(x);

x /= 5; // quotient and assign
console.log(x);

x %= 4; // remainder and assign
console.log(x);

x **= 5; // exponential and assign
console.log(x);

// comparison

// == : equals to (return true if values are same)
console.log(12 == "12"); // true

// === : strict equals to ( returns true if values and data types are sames)
console.log(12 === "12"); // false

// != : not equals to (returns true if values are not equal)
console.log(12 != "12"); // false

// !== : strict not equals to (return true if values or data type are not same)
console.log(12 !== "12"); // true

// > : greater than
// >= : greater than or equals to
// < : lesser than
// <= : lesser than or equals to

// logical operators
// and (&&) : return true if all operands are true
// or (||) : return true if any of the operands are true
// not (!) : reverse boolean outcome

console.log(12 > 10 && 10 < 12); // t && t = true
console.log(12 > 100 && 10 < 12); // f && t = false
console.log(12 > 100 && 100 < 12); // f && f = false

console.log(12 > 10 || 10 < 12); // t || t = true
console.log(12 > 100 || 10 < 12); // f || t = true
console.log(12 > 100 || 100 < 12); // f || f = false

console.log(!true);
console.log(!12 > 10);
