# Chai-Aur-Code-Tutorial

## JavaScript Basics

### Variables

In JavaScript, variables are used to store data values. You can declare variables using `const`, `let`, or `var`.

- `const`: Used for constants, whose values cannot be reassigned after initialization.
- `let`: Used for variables whose values may change during the execution of the program.
- `var`: Older way of declaring variables, with some scoping issues (avoid using it).

Example:

```javascript
const accountId = "4003001700024193";
let accountEmail = "ravikuamryadav70847@gmail.com";
var accountPassword = "12345678";
```

### Data Types

JavaScript has several built-in data types:

- **Number**: Represents numeric values (e.g., `18`, `3.14`).
- **BigInt**: Represents large integer values that cannot be represented by the Number type.
- **String**: Represents textual data (e.g., `"Ravi"`).
- **Boolean**: Represents `true` or `false` values.
- **Null**: Represents a deliberate non-value (e.g., `let state = null;`).
- **Undefined**: Represents a variable that has been declared but has not been assigned a value.
- **Symbol**: Represents unique identifiers.
- **Object**: Represents a collection of properties (e.g., objects, arrays).

Example:

```javascript
let name = "Ravi"; // string
let age = 18; // number
let isLoggedIn = false; // boolean
let state = null; // null
let undef; // undefined
```

### Data Types Summary

JavaScript data types can be broadly categorized into primitive and non-primitive (reference) types.

#### Primitive Data Types

Primitive data types are the basic data types in JavaScript. They are immutable, meaning their values cannot be changed after creation.

- **String**: Represents a sequence of characters.
  ```javascript
  let str = "Hello, world!";
  ```

- **Number**: Represents numeric values, including integers and floating-point numbers.
  ```javascript
  const score = 100;
  const scoreValue = 100.3;
  ```

- **Boolean**: Represents a logical value that can be either `true` or `false`.
  ```javascript
  const isLoggedIn = false;
  ```

- **Null**: Represents the intentional absence of a value. It is an assignment value that indicates a variable does not point to any object.
  ```javascript
  const outsideTemp = null;
  ```

- **Undefined**: Represents a variable that has been declared but has not yet been assigned a value.
  ```javascript
  let userEmail; // undefined
  ```

- **Symbol**: Represents a unique and immutable identifier. Symbols are often used as keys for object properties to avoid naming conflicts.
  ```javascript
  const id = Symbol('123');
  const anotherId = Symbol('123');
  console.log(id === anotherId); // false
  ```

- **BigInt**: Represents integers of arbitrary precision. It can be used to perform arithmetic operations on large integers that exceed the range of the Number type.
  ```javascript
  const bigNumber = 3456543576654356754n;
  ```

#### Non-Primitive (Reference) Data Types

Non-primitive data types are also known as reference types. Unlike primitive types, reference types are mutable, meaning their values can be changed after creation.

- **Array**: Represents an ordered collection of values.
  ```javascript
  const heros = ["shaktiman", "naagraj", "doga"];
  ```

- **Object**: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be any data type.
  ```javascript
  let myObj = {
      name: "hitesh",
      age: 22,
  };
  ```

- **Function**: Represents a reusable block of code that can be invoked with arguments and may return a value.
  ```javascript
  const myFunction = function() {
      console.log("Hello world");
  };
  ```

#### typeof Operator

The `typeof` operator is used to determine the data type of a value.

```javascript
console.log(typeof anotherId); // symbol
```

Note:
- The `typeof` operator returns "object" for `null`. This is a known quirk in JavaScript.
- The `typeof` operator returns "function" for functions.

For more information, refer to the ECMAScript specification: https://262.ecma-international.org/5.1/#sec-11.4.3

### Conversion Operations

JavaScript allows you to convert values from one data type to another.

- `Number()`: Converts a value to a number.
  - `"33"` => `33`
  - `"33abc"` => `NaN`
  - `true` => `1`; `false` => `0`
- `Boolean()`: Converts a value to a boolean.
  - `1` => `true`; `0` => `false`
  - `""` => `false`
  - `"hitesh"` => `true`
- `String()`: Converts a value to a string.

Example:

```javascript
let score = "33";
let valueInNumber = Number(score);
console.log(valueInNumber); // 33

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
```

### Operations

JavaScript provides various operators to perform operations on values.

- **Arithmetic Operators**: Perform mathematical calculations.
  - `+`: Addition
  - `-`: Subtraction
  - `*`: Multiplication
  - `/`: Division
  - `%`: Modulus (remainder)
  - `**`: Exponentiation

- **String Concatenation**: Combines strings together.
  - `+`: Concatenates strings (e.g., `"Hello" + " " + "World"` results in `"Hello World"`)

- **Increment and Decrement Operators**: Increase or decrease the value of a variable.
  - `++`: Increment (adds 1 to the operand)
  - `--`: Decrement (subtracts 1 from the operand)

Example:

```javascript
let value = 3;
let negValue = -value; // -3

console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 2); // 0
console.log(2 ** 3); // 8

let str1 = "Hello";
let str2 = "Hitesh";
let str3 = str1 + " " + str2; // "Hello Hitesh"

let gameCounter = 100;
gameCounter++; // 101
```

### Comparison Operators

JavaScript provides various comparison operators to compare values.

- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to
- `==`: Equal to (loose equality, with type conversion)
- `===`: Equal to (strict equality, without type conversion)
- `!=`: Not equal to (loose inequality)
- `!==`: Not equal to (strict inequality)

#### Comparison of `null` and `undefined`

JavaScript handles comparisons involving `null` and `undefined` in a peculiar way:

```javascript
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
```

Explanation:

- `null > 0` is `false` because `null` is not greater than 0.
- `null == 0` is `false` because `null` is only loosely equal to `null` and `undefined`.
- `null >= 0` is `true` because the comparison first converts `null` to a number, which is 0. Therefore, `0 >= 0` is `true`.
- `undefined` behaves even more strangely and is not comparable to numbers in a way that makes logical sense.

It's recommended to use strict equality (`===`) and strict inequality (`!==`) to avoid unexpected behavior due to type conversion.

Example:

```javascript
console.log("2" == 2);   // true (loose equality, string "2" is converted to number 2)
console.log("2" === 2);  // false (strict equality, no type conversion, string and number are different)
```

### Memory Allocation

In JavaScript, memory allocation can be categorized into two types: stack and heap.

#### Stack Memory (Primitive Data Types)

- Stack memory is used for primitive data types.
- Each variable gets its own copy of the value.
- Changes to one variable do not affect other variables.

Example:

```javascript
let myYoutubename = "CodeWithHarry";
let myAnotherYoutubeName = myYoutubename;

myAnotherYoutubeName = "CodeWithAnkit";

console.log(myYoutubename);       // Output: CodeWithHarry
console.log(myAnotherYoutubeName);  // Output: CodeWithAnkit
```

#### Heap Memory (Non-Primitive Data Types)

- Heap memory is used for non-primitive (reference) data types like objects and arrays.
- Variables store a reference to the memory location where the object is stored.
- Multiple variables can point to the same object in memory.
- Changes to the object through one variable will affect all other variables that reference the same object.

Example:

```javascript
let userOne = {
    email: "user@google.com",
    upi: "user@okhdfcbank",
};

let userTwo = userOne;
userTwo.email = "ravi@google.com";

console.log(userOne.email); // Output: ravi@google.com
console.log(userTwo.email); // Output: ravi@google.com
```

## Strings in JavaScript

Strings are sequences of characters used to represent text. In JavaScript, strings are primitive data types and are immutable, meaning their values cannot be changed after creation.

### String Creation

Strings can be created using single quotes (`'...'`), double quotes (`"..."`), or template literals (`` `...` ``).

```javascript
const name = "hitesh";
const repoCount = 50;

// Using template literals for string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com'); // String object
```

### String Properties and Methods

JavaScript provides various properties and methods to manipulate strings.

- **`length`**: Returns the length of the string.
  ```javascript
  console.log(gameName.length); // Output: 12
  ```

- **`charAt(index)`**: Returns the character at the specified index.
  ```javascript
  console.log(gameName.charAt(2)); // Output: t
  ```

- **`indexOf(substring)`**: Returns the index of the first occurrence of the specified substring.
  ```javascript
  console.log(gameName.indexOf('t')); // Output: 2
  ```

- **`substring(startIndex, endIndex)`**: Extracts a substring from the given string, starting at `startIndex` and ending before `endIndex`.
  ```javascript
  const newString = gameName.substring(0, 4);
  console.log(newString); // Output: hite
  ```

- **`slice(startIndex, endIndex)`**: Extracts a section of a string and returns it as a new string. It can also accept negative indices.
  ```javascript
  const anotherString = gameName.slice(-8, 4);
  console.log(anotherString); // Output: 
  ```

- **`trim()`**: Removes whitespace from both ends of a string.
  ```javascript
  const newStringOne = "   hitesh    ";
  console.log(newStringOne); // Output: "   hitesh    "
  console.log(newStringOne.trim()); // Output: "hitesh"
  ```

- **`replace(searchValue, newValue)`**: Replaces the first occurrence of `searchValue` with `newValue`.
  ```javascript
  const url = "https://hitesh.com/hitesh%20choudhary";
  console.log(url.replace('%20', '-')); // Output: https://hitesh.com/hitesh-choudhary
  ```

- **`includes(substring)`**: Checks if a string contains the specified substring.
  ```javascript
  console.log(url.includes('sundar')); // Output: false
  ```

- **`split(separator)`**: Splits a string into an array of substrings based on the specified separator.
  ```javascript
  console.log(gameName.split('-')); // Output: [ 'hitesh', 'hc', 'com' ]
  ```

- **`toUpperCase()`**: Converts the string to uppercase.
  ```javascript
  console.log(gameName.toUpperCase()); // Output: HITESH-HC-COM
  ```

## Numbers and Maths in JavaScript

### Numbers

In JavaScript, numbers can be represented as primitive data types or as Number objects.

#### Number Declaration

- Primitive Number:
  ```javascript
  const score = 400;
  ```
- Number Object:
  ```javascript
  const balance = new Number(100);
  console.log(balance); // Output: [Number: 100]
  ```

#### Number Properties and Methods

- **`toString()`**: Converts a number to a string.
  ```javascript
  const balance = new Number(100);
  console.log(balance.toString().length); // Output: 3
  ```

- **`toFixed(digits)`**: Formats a number using fixed-point notation.
  ```javascript
  const balance = new Number(100);
  console.log(balance.toFixed(2)); // Output: 100.00
  ```

- **`toPrecision(precision)`**: Formats a number to a specified precision.
  ```javascript
  const otherNumber = 123.8966;
  console.log(otherNumber.toPrecision(3)); // Output: 124
  ```

- **`toLocaleString(locale)`**: Converts a number to a string using locale-specific formatting.
  ```javascript
  const hundreds = 1000000;
  console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000 (Indian numbering system)
  ```

### Maths

The `Math` object provides properties and methods for mathematical constants and functions.

#### Basic Math Functions

- **`Math.abs(x)`**: Returns the absolute value of a number.
  ```javascript
  console.log(Math.abs(-4)); // Output: 4
  ```

- **`Math.round(x)`**: Returns the value of a number rounded to the nearest integer.
  ```javascript
  console.log(Math.round(4.5)); // Output: 5
  ```

- **`Math.ceil(x)`**: Returns the smallest integer greater than or equal to a number.
  ```javascript
  console.log(Math.ceil(4.1)); // Output: 5
  ```

- **`Math.floor(x)`**: Returns the largest integer less than or equal to a number.
  ```javascript
  console.log(Math.floor(4.9)); // Output: 4
  ```

- **`Math.pow(x, y)`**: Returns the base `x` to the exponent `y`.
  ```javascript
  console.log(Math.pow(2, 3)); // Output: 8
  ```

- **`Math.sqrt(x)`**: Returns the square root of a number.
  ```javascript
  console.log(Math.sqrt(9)); // Output: 3
  ```

- **`Math.min(x1, x2, ...)`**: Returns the smallest of zero or more numbers.
  ```javascript
  console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1
  ```

- **`Math.max(x1, x2, ...)`**: Returns the largest of zero or more numbers.
  ```javascript
  console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5
  ```

#### Random Numbers

- **`Math.random()`**: Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
  ```javascript
  console.log(Math.random()); // Output: A random number between 0 and 1
  ```

- Generating a random number between a specified range:
  ```javascript
  const min = 10;
  const max = 20;
  console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random number between 10 and 20
  ```
