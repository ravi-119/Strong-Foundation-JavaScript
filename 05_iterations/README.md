# Documentation for `one.js`

This file demonstrates various JavaScript iteration techniques, including `for` loops, nested loops, and the use of `break` and `continue` statements. Below is a step-by-step explanation of the code:

---

## 1. Basic `for` Loop
```javascript
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}
```
- A `for` loop iterates from `0` to `10`.
- Inside the loop:
  - The current value of `i` is assigned to `element`.
  - If `element` equals `5`, a message is prepared to log `"5 is best number"` (commented out).
  - The value of `element` is also prepared to be logged (commented out).

---

## 2. Nested `for` Loops
```javascript
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
}
```
- The outer loop runs from `1` to `10`.
- For each iteration of the outer loop, the inner loop also runs from `1` to `10`.
- Inside the inner loop:
  - The current values of `i` and `j` are prepared to be logged (commented out).
  - The multiplication of `i` and `j` is also prepared to be logged in the format `i * j = result` (commented out).

---

## 3. Iterating Over an Array
```javascript
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}
```
- An array `myArray` contains three superhero names.
- The loop iterates through the array using the `index`.
- Inside the loop:
  - The current element of the array is assigned to `element`.
  - The value of `element` is prepared to be logged (commented out).

---

## 4. Using `break` and `continue`
### Example with `break` (Commented Out)
```javascript
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
// }
```
- A loop runs from `1` to `20`.
- If the value of `index` equals `5`, the message `"Detected 5"` is logged, and the loop terminates using `break`.
- Otherwise, the current value of `index` is logged.

### Example with `continue`
```javascript
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
}
```
- A loop runs from `1` to `20`.
- If the value of `index` equals `5`, the message `"Detected 5"` is logged, and the loop skips the rest of the current iteration using `continue`.
- Otherwise, the current value of `index` is logged.

---

## Summary
This file demonstrates:
1. Basic `for` loops for iterating over numbers.
2. Nested `for` loops for generating multiplication tables.
3. Iterating over arrays using `for` loops.
4. The use of `break` to terminate a loop early.
5. The use of `continue` to skip an iteration in a loop.

Uncomment the `console.log` statements to observe the output in a JavaScript runtime environment.

---

# Documentation for `two.js`

This file demonstrates the use of `while` and `do-while` loops in JavaScript, along with examples of iterating over arrays.

---

## 1. Using a `while` Loop to Increment a Variable
```javascript
let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }
```
- A variable `index` is initialized to `0`.
- A `while` loop is prepared to run as long as `index` is less than or equal to `10`.
- Inside the loop:
  - The current value of `index` is prepared to be logged (commented out).
  - The value of `index` is incremented by `2` in each iteration.

---

## 2. Iterating Over an Array Using a `while` Loop
```javascript
let myArray = ['flash', "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}
```
- An array `myArray` contains three superhero names.
- A variable `arr` is initialized to `0`.
- A `while` loop runs as long as `arr` is less than the length of `myArray`.
- Inside the loop:
  - The current element of the array is prepared to be logged (commented out).
  - The value of `arr` is incremented by `1` in each iteration.

---

## 3. Using a `do-while` Loop
```javascript
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
```
- A variable `score` is initialized to `11`.
- A `do-while` loop is used to execute the block of code at least once, regardless of the condition.
- Inside the loop:
  - The current value of `score` is logged.
  - The value of `score` is incremented by `1`.
- The loop condition checks if `score` is less than or equal to `10`. Since `score` starts at `11`, the loop runs only once.

---

## Summary
This file demonstrates:
1. The use of `while` loops to iterate based on a condition.
2. Iterating over arrays using a `while` loop.
3. The use of `do-while` loops to ensure the block of code executes at least once.

Uncomment the `console.log` statements to observe the output in a JavaScript runtime environment.

---

# Documentation for `three.js`

This file demonstrates the use of the `for...of` loop in JavaScript for iterating over arrays, strings, and maps, and explains why it cannot be used directly with plain objects.

---

## 1. Using `for...of` with Arrays
```javascript
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
```
- An array `arr` is defined with five numbers.
- The `for...of` loop iterates over each element in the array.
  - In each iteration, the current element is assigned to `num`.
  - The value of `num` is prepared to be logged (commented out).

---

## 2. Using `for...of` with Strings
```javascript
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
```
- A string `greetings` is defined.
- The `for...of` loop iterates over each character in the string.
  - In each iteration, the current character is assigned to `greet`.
  - The character is prepared to be logged with a message (commented out).

---

## 3. Using `for...of` with Maps
```javascript
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
```
- A `Map` object `map` is created.
- Key-value pairs are added to the map using `set`.
  - Note: Setting the same key (`'IN'`) twice will overwrite the previous value.
- The map can be logged to view its contents (commented out).
- The `for...of` loop iterates over each `[key, value]` pair in the map.
  - In each iteration, `key` and `value` are assigned from the current entry.
  - The key and value are prepared to be logged in a formatted string (commented out).

---

## 4. Attempting `for...of` with Objects (Not Supported)
```javascript
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
```
- An object `myObject` is defined with two properties.
- Attempting to use `for...of` directly on an object will result in an error because plain objects are not iterable.
- The commented-out code shows an invalid usage of `for...of` with an object.

---

## Summary
This file demonstrates:
1. Iterating over arrays and strings using `for...of`.
2. Iterating over maps using `for...of` to access key-value pairs.
3. The limitation that plain objects cannot be directly iterated with `for...of`.

Uncomment the `console.log` statements to observe the output in a JavaScript runtime environment.

---

# Documentation for `four.js`

This file demonstrates the use of the `for...in` loop in JavaScript for iterating over the properties of objects and the indices of arrays. It also explains why `for...in` is not suitable for iterating over Map objects.

---

## 1. Defining an Object

```javascript
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
```
- `const myObject = { ... }`  
  - Declares a constant variable named `myObject` and assigns it an object with four properties.
  - Each property represents a programming language shortcut as the key and its full name as the value.
    - `js: 'javascript'` — Key is `'js'`, value is `'javascript'`.
    - `cpp: 'C++'` — Key is `'cpp'`, value is `'C++'`.
    - `rb: "ruby"` — Key is `'rb'`, value is `'ruby'`.
    - `swift: "swift by apple"` — Key is `'swift'`, value is `'swift by apple'`.

---

## 2. Iterating Over Object Properties with `for...in`

```javascript
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
```
- `for (const key in myObject) { ... }`  
  - Uses a `for...in` loop to iterate over all enumerable property keys in `myObject`.
  - On each iteration, `key` is assigned the name of a property (e.g., `'js'`, `'cpp'`, etc.).
  - Inside the loop, you can access the value using `myObject[key]`.
  - The commented-out line:
    - `//console.log(`${key} shortcut is for ${myObject[key]}`);`
    - Would print a message like: `js shortcut is for javascript`.

---

## 3. Defining an Array

```javascript
const programming = ["js", "rb", "py", "java", "cpp"]
```
- `const programming = ["js", "rb", "py", "java", "cpp"]`
  - Declares a constant array named `programming` containing five strings, each representing a programming language shortcut.

---

## 4. Iterating Over Array Indices with `for...in`

```javascript
for (const key in programming) {
    //console.log(programming[key]);
}
```
- `for (const key in programming) { ... }`
  - Uses a `for...in` loop to iterate over the enumerable property keys (indices) of the `programming` array.
  - On each iteration, `key` is a string representing the index (e.g., `'0'`, `'1'`, etc.).
  - The commented-out line:
    - `//console.log(programming[key]);`
    - Would print each element of the array in order.

---

## 5. Attempting to Use `for...in` with a Map (Not Recommended)

```javascript
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
```
- The code above is commented out.
- `const map = new Map()` creates a new Map object.
- `map.set(...)` adds key-value pairs to the map.
- Attempting to use `for...in` on a Map object:
  - `for (const key in map) { ... }`
  - This is not recommended because `for...in` is designed for plain objects, not Map objects.
  - It will not iterate over the map's entries as expected.
  - Instead, it may iterate over inherited properties or methods, not the actual data.
- To iterate over a Map, use `for...of` with `map.entries()` or directly on the map.

---

## Summary

This file demonstrates:
1. How to define and iterate over the properties of a plain object using `for...in`.
2. How to use `for...in` to iterate over the indices of an array (not the values directly).
3. Why `for...in` is not suitable for Map objects, and that a different approach is needed for Maps.

Uncomment the `console.log` statements to observe the output in a JavaScript runtime environment.

---

# Documentation for `five.js`

This file demonstrates the use of the `forEach` method in JavaScript for iterating over arrays, including arrays of primitive values and arrays of objects. Each section below explains the code line by line and the concepts involved.

---

## 1. Defining an Array of Strings

```javascript
const coding = ["js", "ruby", "java", "python", "cpp"]
```
- `const coding = [...]`
  - Declares a constant array named `coding` containing five strings.
  - Each string represents a programming language or its shortcut.

---

## 2. Using `forEach` with an Anonymous Function

```javascript
// coding.forEach( function (val){
//     console.log(val);
// } )
```
- `coding.forEach(function(val) { ... })`
  - Iterates over each element in the `coding` array.
  - For each iteration, the current element is passed as `val` to the function.
  - The commented-out `console.log(val);` would print each language shortcut to the console.

---

## 3. Using `forEach` with an Arrow Function

```javascript
// coding.forEach( (item) => {
//     console.log(item);
// } )
```
- `coding.forEach((item) => { ... })`
  - Uses an arrow function to iterate over the array.
  - `item` represents the current element.
  - The commented-out `console.log(item);` would print each language shortcut.

---

## 4. Passing a Named Function to `forEach`

```javascript
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
```
- `function printMe(item) { ... }`
  - Defines a function named `printMe` that takes one argument and logs it.
- `coding.forEach(printMe)`
  - Passes the `printMe` function to `forEach`, so each element is logged by the function.

---

## 5. Using `forEach` with Multiple Parameters

```javascript
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
```
- `coding.forEach((item, index, arr) => { ... })`
  - The callback receives three arguments:
    - `item`: the current element.
    - `index`: the index of the current element.
    - `arr`: the entire array.
  - The commented-out `console.log(item, index, arr);` would print the value, its index, and the whole array for each iteration.

---

## 6. Defining an Array of Objects

```javascript
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
```
- `const myCoding = [ ... ]`
  - Declares a constant array named `myCoding` containing three objects.
  - Each object represents a programming language with two properties:
    - `languageName`: the full name of the language.
    - `languageFileName`: the typical file extension for that language.

---

## 7. Iterating Over an Array of Objects with `forEach`

```javascript
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
```
- `myCoding.forEach((item) => { ... })`
  - Iterates over each object in the `myCoding` array.
  - For each iteration, `item` is the current object.
  - `console.log(item.languageName);` prints the `languageName` property of each object (e.g., "javascript", "java", "python").

---

## Summary

This file demonstrates:
1. How to use the `forEach` method to iterate over arrays of primitive values and objects.
2. Different ways to provide callback functions to `forEach` (anonymous, arrow, named).
3. How to access array elements, their indices, and the array itself within a `forEach` callback.
4. How to iterate over arrays of objects and access their properties.

Uncomment the `console.log` statements to observe the output in a JavaScript runtime environment.

---

# Documentation for `six.js`

This file demonstrates the use of array iteration methods in JavaScript, including `forEach` and `filter`, and how to work with arrays of numbers and objects. Each section below explains the code line by line and the concepts involved.

---

## 1. Using `forEach` and Return Value

```javascript
// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);
```
- `const coding = [...]`
  - Declares an array of programming language shortcuts.
- `coding.forEach((item) => { ... })`
  - Iterates over each element in the `coding` array.
  - The callback receives `item` as the current element.
  - The commented-out `console.log(item);` would print each element.
  - The `return item` inside `forEach` does **not** collect values; `forEach` always returns `undefined`.
- `console.log(values);`
  - Would print `undefined` because `forEach` does not return a new array.

---

## 2. Using `filter` to Create a New Array

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
```
- `const myNums = [...]`
  - Declares an array of numbers from 1 to 10.
- `myNums.filter((num) => { return num > 4 })`
  - Uses the `filter` method to create a new array containing only numbers greater than 4.
  - The callback receives `num` as the current element.
  - Returns `true` for numbers greater than 4, so those are included in the new array.
- The result is stored in `newNums` (commented out).

---

## 3. Filtering with `forEach` and Manual Push

```javascript
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);
```
- `const newNums = []`
  - Declares an empty array to store filtered numbers.
- `myNums.forEach((num) => { ... })`
  - Iterates over each number in `myNums`.
  - If `num > 4`, the number is pushed into `newNums`.
- `console.log(newNums);`
  - Would print the array of numbers greater than 4.
- This approach is more verbose than using `filter`, but achieves the same result.

---

## 4. Array of Book Objects

```javascript
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
```
- `const books = [ ... ]`
  - Declares an array of objects, each representing a book.
  - Each object has properties:
    - `title`: the book's title.
    - `genre`: the book's genre.
    - `publish`: the year the book was published.
    - `edition`: the year of the book's edition.

---

## 5. Filtering Books by Genre

```javascript
let userBooks = books.filter( (bk) => bk.genre === 'History')
```
- `books.filter((bk) => bk.genre === 'History')`
  - Uses `filter` to create a new array containing only books where the `genre` is `'History'`.
  - The callback receives `bk` as the current book object.
  - Returns `true` if the book's genre is `'History'`.
- The result is stored in `userBooks`.

---

## 6. Filtering Books by Publish Year and Genre

```javascript
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
```
- `books.filter((bk) => { return bk.publish >= 1995 && bk.genre === "History" })`
  - Filters the `books` array for books published in or after 1995 **and** with genre `'History'`.
  - The callback returns `true` only for books meeting both conditions.
- The filtered array is assigned to `userBooks`, replacing the previous value.
- `console.log(userBooks);`
  - Prints the filtered array of books to the console.

---

## Summary

This file demonstrates:
1. The difference between `forEach` and `filter` (return value and use cases).
2. How to use `filter` to create new arrays based on conditions.
3. How to manually filter arrays using `forEach` and `push`.
4. How to filter arrays of objects using multiple conditions.

Uncomment the `console.log` statements to observe the output in a JavaScript runtime environment.

---

# Documentation for `seven.js`

This file demonstrates the use of the `map` and `filter` array methods in JavaScript, including method chaining. Each section below explains the code line by line and the concepts involved.

---

## 1. Defining an Array of Numbers

```javascript
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
- `const myNumers = [...]`
  - Declares a constant array named `myNumers` containing the numbers 1 through 10.

---

## 2. Using `map` to Transform Array Elements

```javascript
// const newNums = myNumers.map( (num) => { return num + 10})
```
- `myNumers.map((num) => { return num + 10 })`
  - (Commented out) Would create a new array by adding 10 to each element of `myNumers`.
  - `map` returns a new array with the results of applying the callback to each element.

---

## 3. Chaining `map` and `filter` Methods

```javascript
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
```
- `const newNums = myNumers ...`
  - Declares a new constant `newNums` and assigns it the result of a chain of array operations.
- `.map((num) => num * 10 )`
  - Multiplies each element of `myNumers` by 10.
  - The result is a new array: `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`.
- `.map((num) => num + 1)`
  - Adds 1 to each element of the previous array.
  - The result is: `[11, 21, 31, 41, 51, 61, 71, 81, 91, 101]`.
- `.filter((num) => num >= 40)`
  - Filters the array to include only numbers greater than or equal to 40.
  - The final result is: `[41, 51, 61, 71, 81, 91, 101]`.

---

## 4. Outputting the Result

```javascript
console.log(newNums);
```
- `console.log(newNums);`
  - Prints the final array `[41, 51, 61, 71, 81, 91, 101]` to the console.

---

## Summary

This file demonstrates:
1. How to use `map` to transform each element of an array.
2. How to chain multiple `map` and `filter` methods for complex transformations.
3. How to use `filter` to select elements based on a condition.
4. The concept of method chaining for concise and readable array processing.

Uncomment the commented-out `map` example to see its effect separately.

---

# Documentation for `eight.js`

This file demonstrates the use of the `reduce` method in JavaScript for accumulating values from arrays, both for simple sums and for summing properties of objects within an array. Each section below explains the code line by line and the concepts involved.

---

## 1. Defining an Array of Numbers

```javascript
const myNums = [1, 2, 3]
```
- `const myNums = [1, 2, 3]`
  - Declares a constant array named `myNums` containing the numbers 1, 2, and 3.

---

## 2. Using `reduce` with a Callback Function

```javascript
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
```
- `myNums.reduce(function (acc, currval) { ... }, 0)`
  - (Commented out) Would use the `reduce` method to sum all elements in `myNums`.
  - The callback receives two arguments:
    - `acc`: the accumulator, which holds the running total.
    - `currval`: the current value being processed in the array.
  - `console.log(...)` would print the accumulator and current value at each step.
  - `return acc + currval` adds the current value to the accumulator.
  - The second argument `0` is the initial value of the accumulator.

---

## 3. Using `reduce` with an Arrow Function

```javascript
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
```
- `myNums.reduce((acc, curr) => acc + curr, 0)`
  - Uses an arrow function to sum all elements in `myNums`.
  - `acc` starts at 0, and each `curr` is added to it.
  - The result is stored in `myTotal`.

---

## 4. Outputting the Total

```javascript
console.log(myTotal);
```
- `console.log(myTotal);`
  - Prints the sum of the array (`6`) to the console.

---

## 5. Defining an Array of Shopping Cart Items

```javascript
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
```
- `const shoppingCart = [ ... ]`
  - Declares an array of objects, each representing an item in a shopping cart.
  - Each object has:
    - `itemName`: the name of the course.
    - `price`: the price of the course.

---

## 6. Using `reduce` to Sum Object Properties

```javascript
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
```
- `shoppingCart.reduce((acc, item) => acc + item.price, 0)`
  - Uses `reduce` to sum the `price` property of each object in the `shoppingCart` array.
  - `acc` starts at 0, and each `item.price` is added to it.
  - The result is stored in `priceToPay`.

---

## 7. Outputting the Total Price

```javascript
console.log(priceToPay);
```
- `console.log(priceToPay);`
  - Prints the total price of all items in the shopping cart (`22996`) to the console.

---

## Summary

This file demonstrates:
1. How to use `reduce` to sum numbers in an array.
2. How to use `reduce` to accumulate values from object properties in an array.
3. The difference between using a traditional function and an arrow function with `reduce`.
4. How to provide an initial value to the accumulator in `reduce`.

Uncomment the commented-out code to see the step-by-step accumulation process.








