# JavaScript Training

# Expressions and statements

Expression - A unit of code that produces a value.
Statement - An instruction to perform an action; doesn't produce a value.

```js
//Example for statements
5 //produces a value 10

5 + 5//produces a value 10

"John"//produces a string

String(1234)//produces/returns a string "1234".

1 + 1 === 2//produces a boolean value true;

//Examples of Statements
var newVar = 1;

function calcAge = {
	return 2012 - age;
}
```

# Truthy and falsey values

The below values are rendered as false when checked through boolean.
`0, 0n, null, undefined, false, NaN, ""`

Usage as below:

```jsx
const newVar = 0;
newVar ? console.log("true") : console.log("false");

//RESULT
false;
```

# Data structures

Arrays = used for storing and retrieving ordered data

Objects = used for storing and retrieving unstructured data with properties. You can assign name (key) to a value and retrieve the value using the key.

Objects can be initialized using `new Object(), Object.create()` and also using object literal syntax (as below)

```jsx
const newObj = {
  name: "john",
  age: 12,
  married: true,
  findDOB: function () {
    return (this.DOB = 2020 - this.age);
  },
};
```

# Dot and Bracket notation to retrieve data in objects

Dot notation is used when you have the exact key in hand to retrieve the value. Bracket notation can be used for calculated key using expressions.

```jsx
const newObj = {
	name: "john",
	age: 12,
	married: true,
	1001: true;
	findDOB: function(){
		return this.DOB = 2020 - this.age;
	}
}

console.log(newObj.name)//bracket notation
console.log(newObj[1000 + 1])//dot notation

```

# Continue and Break in loops

Continue will skip the current element in an iteration if the condition is not true. While Break will stop at the current element if the condition is not true.

```jsx
for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue; //Numbers until 10 except 5 will be printed in console.
  }
  console.log(i);
}

for (i = 0; i < 10; i++) {
  if (i === 5) {
    break; //Until 4 printed in console.
  }
  console.log(i);
}
```

# For and while loops

While loop is more flexible as it needs only condition to run, while For loop needs counter, condition, and increments.

Use for loop when you know how many times the loop has to run. For example, loop over the elements of an array.

Use when loop when you don't know how many times the loop has to run. For example, loop until a specific value is achieved from random selection.

# Array methods

```jsx
Array(); //creates an array of empty objects
//Example
Array(10); //creates an array of 10 empty positions.

Array.from(Array(10)); //creates an array of 10 "undefined elements"

shift(); //remove an element from the last position of an array.

unshift(); //add an element to the last position of an array.

pop(); // Remove an element from the first position of an array.

push(); //add an element to the first position of an array/

Array.from(); //creates another array from an array-like object, with callback
//Example
const inputArray = [1, 2, 3];
const outputArray = Array.from(inputArray, (x) => x + 1);
console.log(outputArray); //output = [2, 3, 4]

join(); //creates a string from the array with a custom operator
//Example
console.log([1, 2, 3, 4].join(",")); //creates a string "1, 2, 3, 4"

Object.keys(); //returns an array with strings of "keys" of an object/Array
//Example
Object.keys([5, 6, 7, 8]); //returns an array ["0", "1", "2", "3"]
```

# String methods

```jsx
repeat(); //createas a string by concatenating a number of same elements
//Example
console.log("a".repeat(5)); /// creates "55555"
//For older browsers .join() is used.
Array(6).join("a"); //creates "55555"
```
