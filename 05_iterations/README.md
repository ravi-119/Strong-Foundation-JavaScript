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





