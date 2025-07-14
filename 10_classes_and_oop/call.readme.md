# Understanding `.call()` in JavaScript: Deep Dive with Example

## Overview
This documentation explains the concepts demonstrated in `call.js`, focusing on how JavaScript's `.call()` method is used to control the context (`this`) within functions, especially in the context of constructor functions and object creation. We'll break down the code, explain each part, and discuss why and how `.call()` is useful in real-world scenarios.

---

## The Code
```js
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
```

---

## Key Concepts

### 1. The `this` Keyword
- In JavaScript, `this` refers to the object that is executing the current function.
- In a regular function, `this` refers to the global object (or `undefined` in strict mode).
- In a constructor function (called with `new`), `this` refers to the newly created object.

### 2. Constructor Functions
- Functions like `SetUsername` and `createUser` are designed to be used as constructors (i.e., with the `new` keyword).
- When you use `new createUser(...)`, a new object is created, and `this` inside `createUser` refers to that new object.

### 3. The `.call()` Method
- `.call()` is a method available on all functions in JavaScript.
- It allows you to call a function with a specific `this` value and arguments provided individually.
- Syntax: `func.call(thisArg, arg1, arg2, ...)`
- This is useful for function borrowing and inheritance patterns.

---

## Step-by-Step Code Explanation

### `SetUsername` Function
```js
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
```
- This function assigns a `username` property to the object referenced by `this`.
- The comment suggests that, in a real application, this function might also perform complex database operations.
- It logs "called" to the console whenever executed.

### `createUser` Function
```js
function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}
```
- This function is also a constructor.
- It uses `SetUsername.call(this, username)` to invoke `SetUsername` in the context of the new object being created by `createUser`.
    - This means that `SetUsername` will set the `username` property on the same object that `createUser` is constructing.
- Then, it sets `email` and `password` properties on the same object.

### Creating a User
```js
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
```
- `new createUser(...)` creates a new object and runs the `createUser` function with `this` bound to that object.
- Inside `createUser`, `SetUsername.call(this, username)` sets the `username` property on the same object.
- The resulting object has `username`, `email`, and `password` properties.
- The `console.log(chai)` will output the created object, but since `createUser` does not explicitly return an object, and constructor functions should use `new`, if you forget `new`, `this` will refer to the global object (or undefined in strict mode).

---

## Why Use `.call()` Here?
- **Code Reuse:** Instead of duplicating the logic for setting the username in every user-related constructor, you can reuse `SetUsername`.
- **Inheritance Pattern:** This is a classic way to achieve inheritance before ES6 classes. The child constructor borrows the parent constructor's logic using `.call()`.
- **Explicit Context:** `.call()` ensures that `SetUsername` operates on the correct object (`this`), not the global object.

---

## Practical Notes
- Always use `new` with constructor functions to avoid polluting the global object.
- If you want to use modern JavaScript, consider using ES6 `class` syntax and `super()` for inheritance.
- `.call()` is also useful for borrowing methods from other objects or for functional programming patterns.

---

## Example Output
When you run the code:
```
called
createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
```
- The first line is from the `console.log` in `SetUsername`.
- The second line is the object created by `createUser`.

---

## Summary
- `.call()` allows you to invoke a function with a specific `this` context.
- It's a powerful tool for code reuse and inheritance in JavaScript.
- The example demonstrates how to use `.call()` to share logic between constructor functions.

---

## Further Reading
- [MDN: Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN: Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
