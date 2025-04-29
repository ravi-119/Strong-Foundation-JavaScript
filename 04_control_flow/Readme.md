# Explanation of `one.js`

This file demonstrates the use of control flow statements in JavaScript, including `if-else`, comparison operators, and logical operators.

## Code Breakdown

### 1. Checking Temperature
```javascript
const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute");
```
- `isUserloggedIn` is a boolean variable indicating if the user is logged in.
- `temperature` is set to 41.
- The `if` statement checks if `temperature` is exactly 40. If true, it logs "less than 50"; otherwise, it logs "temperature is greater than 50".
- `console.log("Execute")` runs regardless of the condition.

---

### 2. Using Variables Inside `if` Block
```javascript
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);
```
- `score` is set to 200.
- The `if` block checks if `score` is greater than 100. If true, it declares a block-scoped variable `power` and logs its value.
- The second `console.log` tries to access `power` outside the block, which will throw a `ReferenceError` because `power` is declared with `let` and is block-scoped.

---

### 3. Single-Line `if` Statement
```javascript
const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");
```
- `balance` is set to 1000.
- The `if` condition checks if `balance` is greater than 500. If true, it executes both `console.log` statements on the same line.

---

### 4. `if-else if-else` Ladder
```javascript
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}
```
- This ladder checks multiple conditions for `balance`:
  - If `balance` is less than 500, it logs "less than 500".
  - If `balance` is less than 750, it logs "less than 750".
  - If `balance` is less than 900, it logs "less than 750" (likely a typo in the code).
  - If none of the above conditions are true, it logs "less than 1200".

---

### 5. Logical Operators
```javascript
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
```
- `userLoggedIn` and `debitCard` are both `true`.
- The first `if` condition uses the `&&` (AND) operator. Since `2 == 3` is `false`, the condition fails, and "Allow to buy course" is not logged.
- The second `if` condition uses the `||` (OR) operator. Since `loggedInFromEmail` is `true`, it logs "User logged in".

---

# Explanation of `switch.js`

This file demonstrates the use of the `switch` statement in JavaScript, which is used for conditional branching based on the value of an expression.

## Code Breakdown

### 1. Basic `switch` Syntax
```javascript
switch (key) {
    case value:
        // code block
        break;

    default:
        // default code block
        break;
}
```
- The `switch` statement evaluates the expression `key` and compares it with the values in each `case`.
- If a match is found, the corresponding code block is executed.
- The `break` statement prevents the execution from falling through to the next `case`.
- The `default` block is executed if no `case` matches.

---

### 2. Example: Matching Months
```javascript
const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
```
- The variable `month` is set to `"march"`.
- The `switch` statement compares `month` with each `case`:
  - If `month` is `"jan"`, it logs `"January"`.
  - If `month` is `"feb"`, it logs `"feb"`.
  - If `month` is `"march"`, it logs `"march"`. This is the matching case, so the corresponding code block is executed.
  - If `month` is `"april"`, it logs `"april"`.
- If none of the cases match, the `default` block logs `"default case match"`.
- The `break` statement ensures that only the matching case's code block is executed.

---

### Key Points to Remember
1. **Case Sensitivity**: The comparison in `switch` is strict (`===`), so `"march"` will not match `"March"`.
2. **Break Statement**: Without `break`, execution will continue to the next `case` even if a match is found.
3. **Default Case**: The `default` block is optional but recommended to handle unexpected values.

This example demonstrates how to use `switch` for clean and readable conditional branching, especially when dealing with multiple possible values for a single variable.

---

# Explanation of `truthy.js`

This file demonstrates the concepts of truthy and falsy values in JavaScript, along with examples of nullish coalescing and ternary operators.

## Code Breakdown

### 1. Truthy and Falsy Values
```javascript
const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
```
- `userEmail` is an empty array (`[]`), which is a truthy value in JavaScript.
- The `if` condition checks if `userEmail` is truthy. Since it is, the code logs `"Got user email"`.
- **Key Point**: In JavaScript, the following values are falsy:
  - `false`
  - `0`, `-0`
  - `0n` (BigInt zero)
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN`
- All other values, including empty arrays (`[]`) and objects (`{}`), are truthy.

---

### 2. Checking for Empty Objects
```javascript
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
```
- `emptyObj` is an empty object (`{}`).
- `Object.keys(emptyObj)` returns an array of the object's keys. Since the object is empty, the array's length is `0`.
- The `if` condition checks if the length is `0`. If true, it logs `"Object is empty"`.

---

### 3. Nullish Coalescing Operator (`??`)
```javascript
let val1;
val1 = null ?? 10 ?? 20;

console.log(val1);
```
- The nullish coalescing operator (`??`) returns the first operand that is not `null` or `undefined`.
- `val1` is initially `undefined`.
- The expression `null ?? 10 ?? 20` evaluates as follows:
  - `null` is `null`, so it moves to the next operand.
  - `10` is neither `null` nor `undefined`, so it is returned.
- The code logs `10`.

---

### 4. Ternary Operator
```javascript
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
```
- The ternary operator is a shorthand for `if-else` statements.
- The condition `iceTeaPrice <= 80` is checked:
  - If true, it logs `"less than 80"`.
  - If false, it logs `"more than 80"`.
- Since `iceTeaPrice` is `100`, the condition is false, and the code logs `"more than 80"`.

---

### Key Points to Remember
1. **Truthy and Falsy**: Understand which values are considered truthy or falsy in JavaScript.
2. **Empty Objects**: Use `Object.keys(obj).length` to check if an object is empty.
3. **Nullish Coalescing (`??`)**: Use this operator to handle `null` or `undefined` values effectively.
4. **Ternary Operator**: Use the ternary operator for concise conditional expressions.

This file provides a practical understanding of truthy and falsy values, nullish coalescing, and ternary operators, which are essential for writing clean and efficient JavaScript code.






