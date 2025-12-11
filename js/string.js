// Concept: Strings - A sequence of characters (alphabets, numbers, special symbols, or whitespace) enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
// Strings are used to represent text in JavaScript.

// var fName = prompt("Enter your name : ");
// var fName - Declares a variable named fName using the var keyword (an older way to declare variables in JavaScript, function-scoped).
// prompt("Enter your name : ") - Displays a browser dialog box with the message "Enter your name : ", collects user input as a string, and assigns it to fName.
// Note: The prompt function always returns a string, even if the user enters numbers or leaves it blank (returns empty string or null if canceled).
// Example: If the user enters "Alice", fName will hold the string "Alice".

// console.log(fName);
// console.log(fName) - Outputs the value of fName to the browser's console for debugging or inspection.
// Example: If fName is "Alice", the console will display Alice.

// var age = Number(prompt("Enter your age : "));
// var age - Declares a variable named age using var.
// prompt("Enter your age : ") - Displays a dialog box asking for the user's age, returning the input as a string.
// Number(...) - Converts the string input from prompt to a number (e.g., "25" becomes 25).
// Note: If the input cannot be converted to a number (e.g., "abc"), age will be NaN (Not a Number).
// Example: If the user enters "25", age will hold the number 25.

// console.log(age, typeof age);
// console.log(age, typeof age) - Outputs two values to the console: the value of age and its data type.
// typeof age - Returns the type of the age variable as a string (e.g., "number" if conversion was successful).
// Example: If age is 25, the console will display 25 "number".

// Concept: Concatenation - Combining two or more strings using the + operator to create a new string.
// console.log(
//   "hello world my name is " + fName + " and i am " + age + " years old."
// );
// "hello world my name is " + fName + " and i am " + age + " years old." - Concatenates multiple strings and variables.
// The + operator joins the static strings with the values of fName and age.
// Note: Since age is a number, JavaScript automatically converts it to a string during concatenation.
// Example: If fName is "Alice" and age is 25, the console outputs "hello world my name is Alice and i am 25 years old.".

// console.log(-"123" + 123);
// -"123" + 123 - Demonstrates type coercion and operator precedence.
// -"123" - The unary minus (-) converts the string "123" to a number (-123).
// -123 + 123 - Performs numeric addition, resulting in 0.
// Example: The console outputs 0.
// Note: If the string cannot be converted to a number (e.g., -"abc"), the result would be NaN.

// console.log(`hello world my name is ${fName} and i am ${age ** 2} years old.`);
// Concept: Template Literals - Strings enclosed in backticks (` `) that allow embedding expressions using ${expression}.
// `hello world my name is ${fName} and i am ${age ** 2} years old.` - A template literal that inserts fName and the result of age ** 2.
// ${fName} - Embeds the value of fName directly into the string.
// ${age ** 2} - Evaluates the expression age ** 2 (age squared) and embeds the result.
// Example: If fName is "Alice" and age is 25, age ** 2 is 625, so the console outputs "hello world my name is Alice and i am 625 years old.".
// Note: Template literals are more readable than concatenation and allow complex expressions inside ${}.

// console.log("hello world my name is ", fName, "and i am", age, "years old.");
// console.log("hello world my name is ", fName, "and i am", age, "years old.") - Outputs multiple arguments separated by commas.
// Unlike concatenation, console.log with multiple arguments separates values with spaces in the output.
// Example: If fName is "Alice" and age is 25, the console outputs "hello world my name is Alice and i am 25 years old.".
// Note: This is not concatenation; each argument is logged individually, and console.log formats them with spaces.

// Concept: Indexing - Accessing individual characters in a string or items in an array using their position (index).
// Indexing starts at 0 for the first character (left-to-right, positive indexing).
// Negative indexing (e.g., -1 for the last character) counts from right-to-left.
// Example for "hello": h(0), e(1), l(2), l(3), o(4) | o(-1), l(-2), l(-3), e(-4), h(-5).

// first character is always on the 0th position
// last character is always on the str.length - 1 = th position

// var x = "john";
// var x - Declares a variable x and assigns it the string "john".
// "john" - A string with characters: j(0), o(1), h(2), n(3).

// console.log(x[0]);
// x[0] - Accesses the character at index 0 in the string x, which is "j".
// Example: The console outputs "j".
// Note: Square brackets [] are used to access characters in a string or items in an array.

// console.log(x[1]);
// x[1] - Accesses the character at index 1 in the string x, which is "o".
// Example: The console outputs "o".

// console.log(x[2]);
// x[2] - Accesses the character at index 2 in the string x, which is "h".
// Example: The console outputs "h".

// console.log(x[3]);
// x[3] - Accesses the character at index 3 in the string x, which is "n".
// Example: The console outputs "n".
// Note: If an index is out of range (e.g., x[4]), the result is undefined.

// Concept: String Methods - Built-in functions available on string objects to manipulate or extract information from strings.
// String methods do not modify the original string (strings are immutable in JavaScript); they return a new string or value.

// var myName = "john johnny";
// var myName - Declares a variable myName and assigns it the string "john johnny".
// "john johnny" - A string with characters: j(0), o(1), h(2), n(3),  (4), j(5), o(6), h(7), n(8), n(9), y(10).

// returns character on the specified index (takes positive index only)
// console.log(myName.charAt(0));
// myName.charAt(0) - Returns the character at index 0, which is "j".
// Example: The console outputs "j".
// Note: charAt only accepts positive indices; if the index is out of range, it returns an empty string.

// console.log(myName.charAt(-1));
// myName.charAt(-1) - Attempts to access the character at index -1, which is invalid for charAt.
// Example: The console outputs "" (empty string).
// Note: charAt does not support negative indexing.

// returns character on the specified index (takes positive and negative index)
// console.log(myName.at(0));
// myName.at(0) - Returns the character at index 0, which is "j".
// Example: The console outputs "j".
// Note: The at() method is a newer alternative to charAt and supports both positive and negative indices.

// console.log(myName.at(-1));
// myName.at(-1) - Returns the character at index -1 (last character), which is "y".
// Example: The console outputs "y".
// Note: Negative indexing with at() counts from the end of the string (-1 is the last character).

// concatenation
// console.log(myName.concat("is", "a good boy"));
// myName.concat("is", "a good boy") - Concatenates the string myName with "is" and "a good boy", returning a new string.
// Example: The console outputs "john johnnyisa good boy".
// Note: The concat method can take multiple arguments and is an alternative to the + operator for concatenation.

// return a new string with all letters in uppercase
// console.log(myName.toUpperCase());
// myName.toUpperCase() - Returns a new string with all characters in myName converted to uppercase.
// Example: The console outputs "JOHN JOHNNY".
// Note: The original string myName remains unchanged.

// return a new string with all letters in lowercase
// console.log(myName.toLowerCase());
// myName.toLowerCase() - Returns a new string with all characters in myName converted to lowercase.
// Example: The console outputs "john johnny".
// Note: The original string myName remains unchanged.

// return true if the string contains specified substring
// console.log(myName.includes("oh"));
// myName.includes("oh") - Checks if the substring "oh" exists in myName, returning true if found, false otherwise.
// Example: The console outputs true (since "oh" is in "john").
// Note: includes is case-sensitive.

// console.log(myName.includes("x"));
// myName.includes("x") - Checks if the substring "x" exists in myName.
// Example: The console outputs false (since "x" is not in "john johnny").

// returns index of the first occurrence of the specified substring
// console.log(myName.indexOf("o"));
// myName.indexOf("o") - Returns the index of the first occurrence of the substring "o" in myName, or -1 if not found.
// Example: The console outputs 1 (since "o" first appears at index 1 in "john johnny").

// console.log(myName.indexOf("x"));
// myName.indexOf("x") - Returns the index of the first occurrence of "x", or -1 since "x" is not found.
// Example: The console outputs -1.

// console.log(myName.indexOf("o", 2));
// myName.indexOf("o", 2) - Searches for "o" starting from index 2 (inclusive), returning the first occurrence's index.
// Example: The console outputs 6 (since "o" appears at index 6 in "johnny", after index 2).

// returns index of the last occurrence of the specified substring
// console.log(myName.lastIndexOf("o"));
// myName.lastIndexOf("o") - Returns the index of the last occurrence of "o" in myName, or -1 if not found.
// Example: The console outputs 6 (since the last "o" is at index 6 in "johnny").

// console.log(myName.lastIndexOf("x"));
// myName.lastIndexOf("x") - Returns the index of the last occurrence of "x", or -1 since "x" is not found.
// Example: The console outputs -1.

// console.log(myName.lastIndexOf("o", 3));
// myName.lastIndexOf("o", 3) - Searches for the last occurrence of "o" from index 3 (inclusive) backward.
// Example: The console outputs 1 (since the last "o" within indices 0 to 3 is at index 1).

// console.log(myName.length);
// myName.length - Returns the number of characters in the string myName.
// Example: The console outputs 11 (since "john johnny" has 11 characters, including the space).
// Note: length is a property, not a method, so it does not require parentheses.

// replace first occurrence of the specified string with new one
// console.log(myName.replace("o", "x"));
// myName.replace("o", "x") - Replaces the first occurrence of "o" with "x", returning a new string.
// Example: The console outputs "jxhn johnny".
// Note: The original string myName remains unchanged.

// console.log(myName.replace(/o/g, "x"));
// myName.replace(/o/g, "x") - Uses a regular expression with the global flag (/g) to replace all occurrences of "o" with "x".
// Example: The console outputs "jxhn jxhnny".
// Note: The /g flag ensures all matches are replaced, not just the first.

// replace all occurrences of the specified string with new one
// console.log(myName.replaceAll("o", "x"));
// myName.replaceAll("o", "x") - Replaces all occurrences of "o" with "x", returning a new string.
// Example: The console outputs "jxhn jxhnny".
// Note: replaceAll is a newer method (ES2021) and is equivalent to replace with /g for simple strings.

// return substring between range
// console.log(myName.substring(0, 4));
// myName.substring(0, 4) - Returns the substring from index 0 (inclusive) to index 4 (exclusive).
// Example: The console outputs "john".
// Note: If the second argument is omitted, it returns from the start index to the end.

// console.log(myName.slice(0, 4));
// myName.slice(0, 4) - Returns the substring from index 0 (inclusive) to index 4 (exclusive).
// Example: The console outputs "john".
// Note: slice is similar to substring but also supports negative indices (e.g., slice(-4) would start from the 4th character from the end).

// return a new string with leading and trailing whitespaces removed
// console.log("      rohan sharma     ".trim());
// "      rohan sharma     ".trim() - Removes leading and trailing whitespace from the string, returning a new string.
// Example: The console outputs "rohan sharma".
// Note: Internal spaces are preserved; only spaces at the start and end are removed.

// repeat the string given number of times
// console.log(myName.repeat(4));
// myName.repeat(4) - Repeats the string myName 4 times, returning a new string.
// Example: The console outputs "john johnnyjohn johnnyjohn johnnyjohn johnny".
// Note: The argument must be a non-negative integer.

// adds extra length to string (adds space by default in end)
// console.log(myName.padEnd(11, "x"));
// myName.padEnd(11, "x") - Extends the string to a length of 11 by adding "x" at the end, but since myName is already 11 characters, no padding occurs.
// Example: The console outputs "john johnny".
// Note: If the target length is less than or equal to the string's length, the original string is returned.

// console.log(myName.padEnd(22, "x"));
// myName.padEnd(22, "x") - Extends the string to a length of 22 by adding "x" characters at the end.
// Example: The console outputs "john johnnyxxxxxxxxxxx" (11 characters + 11 "x"s).
// Note: If no fill string is provided, spaces are used by default.

// adds extra length to string (adds space by default in start)
// console.log(myName.padStart(11, "x"));
// myName.padStart(11, "x") - Extends the string to a length of 11 by adding "x" at the start, but since myName is already 11 characters, no padding occurs.
// Example: The console outputs "john johnny".

// console.log(myName.padStart(22, "x"));
// myName.padStart(22, "x") - Extends the string to a length of 22 by adding "x" characters at the start.
// Example: The console outputs "xxxxxxxxxxxjohn johnny" (11 "x"s + 11 characters).
// Note: If no fill string is provided, spaces are used by default.

// console.log(myName.padStart(22, "-").padEnd(33, "*"));
// myName.padStart(22, "-") - Extends the string to length 22 by adding "-" at the start, resulting in "-----------john johnny".
// .padEnd(33, "*") - Further extends the result to length 33 by adding "*" at the end, adding 11 "*"s.
// Example: The console outputs "-----------john johnny***********".
// Note: Chaining methods applies them sequentially, each operating on the result of the previous.

// returns true if the string starts with the specified substring, else false
// console.log(myName.startsWith("jo"));
// myName.startsWith("jo") - Checks if myName starts with the substring "jo", returning true if it does.
// Example: The console outputs true (since "john johnny" starts with "jo").
// Note: startsWith is case-sensitive.

// console.log(myName.startsWith("ho"));
// myName.startsWith("ho") - Checks if myName starts with "ho", returning false since it does not.
// Example: The console outputs false.

// console.log(myName.startsWith("ny", 9));
// myName.startsWith("ny", 9) - Checks if the substring starting at index 9 is "ny", returning true if it does.
// Example: The console outputs true (since at index 9, "ny" appears in "johnny").
// Note: The second argument specifies the starting position for the check.

// var text = "Hello, JavaScript World!";
// Declares a variable text and assigns it the string "Hello, JavaScript World!".
// This string will be used for most examples to demonstrate string methods.

var text = "Hello, JavaScript World!";

// Concept: endsWith - Checks if a string ends with a specified substring, returning true or false.
// It is case-sensitive and can optionally check within a specified length of the string.

console.log(text.endsWith("World!"));
// text.endsWith("World!") - Checks if text ends with "World!", returning true.
// Example output: true (since the string ends with "World!").

console.log(text.endsWith("world!"));
// text.endsWith("world!") - Checks if text ends with "world!", returning false due to case sensitivity.
// Example output: false.

console.log(text.endsWith("Script", 15));
// text.endsWith("Script", 15) - Checks if the substring of text from index 0 to 15 (exclusive) ends with "Script".
// The substring from 0 to 15 is "Hello, JavaScri" (15 characters), which ends with "Scri", not "Script".
// Example output: false.
// Note: The second argument limits the string length considered for the check.

console.log(text.endsWith("JavaScript", 16));
// text.endsWith("JavaScript", 16) - Checks if the substring from 0 to 16 (exclusive) ends with "JavaScript".
// The substring from 0 to 16 is "Hello, JavaScrip" (16 characters), which ends with "JavaScript" when considering the full word.
// Example output: true.

// Concept: split - Divides a string into an array of substrings based on a specified delimiter.

console.log(text.split(" "));
// text.split(" ") - Splits the string at each space (" ") into an array of substrings.
// Example output: ["Hello,", "JavaScript", "World!"].
// Note: The delimiter is removed from the result.

console.log(text.split(","));
// text.split(",") - Splits the string at each comma (","), including the comma and space as a single delimiter.
// Example output: ["Hello", " JavaScript World!"].
// Note: The space after the comma is included in the second element.

console.log(text.split(""));
// text.split("") - Splits the string into an array of individual characters.
// Example output: ["H", "e", "l", "l", "o", ",", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "W", "o", "r", "l", "d", "!"].
// Note: An empty string delimiter splits every character.

console.log(text.split(" ", 2));
// text.split(" ", 2) - Splits the string at spaces but limits the array to 2 elements.
// Example output: ["Hello,", "JavaScript"].
// Note: The second argument limits the number of splits.

// Concept: match - Searches a string for matches against a regular expression, returning an array of matches or null.

console.log(text.match(/[A-Z]/g));
// text.match(/[A-Z]/g) - Searches for all uppercase letters using a regular expression with global flag (/g).
// Example output: ["H", "J", "S", "W"] (matches "H" from Hello, "J" and "S" from JavaScript, "W" from World).
// Note: Returns null if no matches are found.

console.log(text.match(/\w+/g));
// text.match(/\w+/g) - Matches one or more word characters (letters, digits, or underscores).
// Example output: ["Hello", "JavaScript", "World"] (matches whole words, ignoring punctuation).
// Note: The \w+ pattern matches consecutive word characters.

console.log(text.match("Java"));
// text.match("Java") - Searches for the substring "Java" (treated as a string, not a regex).
// Example output: ["Java"] (returns an array with the first match and additional properties like index).
// Note: Without /g, only the first match is returned.

// Concept: search - Returns the index of the first match of a regular expression or string, or -1 if not found.

console.log(text.search("Java"));
// text.search("Java") - Returns the index where "Java" first appears in the string.
// Example output: 7 (since "Java" starts at index 7 in "Hello, JavaScript World!").
// Note: Unlike indexOf, search can use regular expressions.

console.log(text.search(/[A-Z]/));
// text.search(/[A-Z]/) - Returns the index of the first uppercase letter.
// Example output: 0 (since "H" is at index 0).
// Note: Returns -1 if no match is found.

console.log(text.search("python"));
// text.search("python") - Searches for "python", returning -1 since it’s not found.
// Example output: -1.

// Concept: charCodeAt - Returns the UTF-16 code unit (an integer) of the character at the specified index.

console.log(text.charCodeAt(0));
// text.charCodeAt(0) - Returns the UTF-16 code unit for the character at index 0 ("H").
// Example output: 72 (the UTF-16 code for "H").
// Note: Returns NaN if the index is out of range.

console.log(text.charCodeAt(7));
// text.charCodeAt(7) - Returns the UTF-16 code unit for the character at index 7 ("J").
// Example output: 74 (the UTF-16 code for "J").
// Note: Useful for character encoding or ASCII/Unicode manipulation.

console.log(text.charCodeAt(100));
// text.charCodeAt(100) - Attempts to access an out-of-range index, returning NaN.
// Example output: NaN.

// Concept: normalize - Returns the Unicode normalized form of the string, useful for handling special characters.

var accented = "café";
// Declares a variable accented and assigns it the string "café" (with the é character).

console.log(accented.normalize("NFC"));
// accented.normalize("NFC") - Normalizes the string to Unicode Normalization Form C (composed form).
// Example output: "café" (ensures é is a single composed character).
// Note: NFC is the default for most applications, ensuring consistent character representation.

console.log(accented.normalize("NFD"));
// accented.normalize("NFD") - Normalizes to Unicode Normalization Form D (decomposed form), splitting é into e and a combining accent.
// Example output: "café" (may look the same in some consoles, but é is represented as two code points).
// Note: Useful for text processing when comparing or sorting strings with accents.

// Additional Example: Combining endsWith with other methods
var fileName = "document.pdf";

console.log(
  fileName.endsWith(".pdf") && fileName.toLowerCase().includes("doc")
);
// fileName.endsWith(".pdf") - Checks if fileName ends with ".pdf" (true).
// fileName.toLowerCase().includes("doc") - Converts fileName to lowercase and checks if it includes "doc" (true).
// Combines both with && (logical AND) to check if the file is a PDF document.
// Example output: true (since both conditions are met).
// Note: Demonstrates practical use of endsWith in file validation.
