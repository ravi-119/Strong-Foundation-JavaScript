# Promises in JavaScript

## Introduction

A **Promise** in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner alternative to callbacks for handling asynchronous code, making it easier to read and maintain.

## Why Use Promises?

- Avoid "callback hell" (nested callbacks)
- Write cleaner, more readable asynchronous code
- Chain multiple asynchronous operations

## States of a Promise

A Promise can be in one of three states:

1. **Pending**: The initial state; the operation has not completed yet.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

Once a promise is fulfilled or rejected, it is considered **settled** and cannot change state.

| State     | Description                                 |
|-----------|---------------------------------------------|
| Pending   | Initial state, neither fulfilled nor rejected|
| Fulfilled | Operation completed successfully             |
| Rejected  | Operation failed                            |

## Creating a Promise

You can create a promise using the `Promise` constructor:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* success */) {
    resolve('Success value');
  } else {
    reject('Error reason');
  }
});
```

## Consuming Promises

Use `.then()` to handle fulfillment and `.catch()` to handle rejection:

```javascript
myPromise
  .then(result => {
    console.log('Fulfilled:', result);
  })
  .catch(error => {
    console.error('Rejected:', error);
  });
```

You can also chain multiple `.then()` calls:

```javascript
myPromise
  .then(result => {
    // do something
    return anotherPromise();
  })
  .then(anotherResult => {
    // do something else
  })
  .catch(error => {
    // handle any error from the chain
  });
```

## Example: Simulating an Asynchronous Operation

```javascript
function asyncTask(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('Task completed!');
      } else {
        reject('Task failed!');
      }
    }, 1000);
  });
}

asyncTask(true)
  .then(message => console.log(message))   // Task completed!
  .catch(error => console.error(error));

asyncTask(false)
  .then(message => console.log(message))
  .catch(error => console.error(error));   // Task failed!
```

## Promise Methods

- **Promise.all([promises])**: Resolves when all promises resolve, or rejects if any promise rejects.
- **Promise.race([promises])**: Resolves or rejects as soon as one promise resolves or rejects.
- **Promise.allSettled([promises])**: Resolves after all promises have settled (either fulfilled or rejected).
- **Promise.any([promises])**: Resolves as soon as any promise is fulfilled, or rejects if all are rejected.

## Promise Libraries: Q and Bluebird

Before native Promises were widely available in JavaScript (ES6/ES2015), developers used third-party libraries to work with promises and asynchronous code. Two popular libraries are **Q** and **Bluebird**.

### Q

- One of the earliest and most widely used promise libraries.
- Provides a promise API and utilities for working with asynchronous code.
- Supports features like promise chaining, error handling, and more.
- Can be used in both Node.js and browsers.

**Example:**
```javascript
const Q = require('q');

function asyncTask() {
  const deferred = Q.defer();
  setTimeout(() => deferred.resolve('Done!'), 1000);
  return deferred.promise;
}

asyncTask().then(result => console.log(result));
```

### Bluebird

- A powerful and fast promise library for JavaScript.
- Offers a full-featured promise API and many utility methods (e.g., `map`, `reduce`, `each`).
- Known for its performance and additional features like cancellation, promisification, and debugging tools.
- Can be used as a drop-in replacement for native promises.

**Example:**
```javascript
const Promise = require('bluebird');

function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
  });
}

asyncTask().then(result => console.log(result));
```

### Why Use These Libraries?

- Provided promise support before native promises existed.
- Offer extra utilities and features not found in native promises.
- Still useful for legacy projects or when advanced features are needed.

> **Note:** Modern JavaScript environments have built-in Promise support, so these libraries are less commonly needed today, but they remain relevant for advanced use cases.

## Summary

- Promises represent the result of asynchronous operations.
- They have three states: pending, fulfilled, and rejected.
- Use `.then()` and `.catch()` to handle results and errors.
- Promises make asynchronous code easier to manage and read.

---

## In-Depth Guide: Understanding Promises with `promises.js`

This section provides a conceptual and practical walkthrough of the `promises.js` file, helping you understand how Promises work in real-world JavaScript.

### 1. What is a Promise?

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises help manage asynchronous code, making it more readable and maintainable.

### 2. Creating and Consuming Promises

#### Example 1: Basic Promise Creation and Consumption

```javascript
const promiseOne = new Promise(function(resolve, reject){
    // Simulate an async task (e.g., DB call, network request)
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});
```
**Concept:**  
- A new Promise is created. Inside, an asynchronous task is simulated with `setTimeout`.
- After 1 second, `resolve()` is called, marking the promise as fulfilled.
- `.then()` is used to execute code after the promise is resolved.

#### Example 2: Inline Promise Creation

```javascript
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});
```
**Concept:**  
- Promises can be created and consumed immediately without storing them in a variable.

### 3. Passing Data with Promises

```javascript
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});
```
**Concept:**  
- Promises can resolve with data, which is then available in the `.then()` handler.

### 4. Handling Errors and Chaining

```javascript
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
 .then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));
```
**Concept:**  
- If `error` is true, the promise is rejected; otherwise, it is resolved.
- `.then()` can be chained to process data step by step.
- `.catch()` handles any errors (rejections).
- `.finally()` runs regardless of the outcome.

### 5. Using Promises with Async/Await

```javascript
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
```
**Concept:**  
- `async/await` syntax allows you to write asynchronous code that looks synchronous.
- `await` pauses execution until the promise settles.
- Errors are handled using `try...catch`.

### 6. Fetching Data from an API with Async/Await

```javascript
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();
```
**Concept:**  
- The Fetch API returns a promise.
- `await` is used to wait for the fetch and for parsing the JSON.
- Errors are caught and logged.

### 7. Fetching Data from an API with Promises

```javascript
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
```
**Concept:**  
- Fetch returns a promise.
- `.then()` is used to handle the response and parse JSON.
- `.catch()` handles errors.

### 8. Promise Utilities

```javascript
// promise.all
// yes this is also available, kuch reading aap b kro.
```
**Concept:**  
- `Promise.all` allows you to run multiple promises in parallel and wait for all to resolve.
- If any promise rejects, the whole `Promise.all` rejects.

---

## Key Takeaways

- Promises simplify asynchronous programming in JavaScript.
- They have three states: pending, fulfilled, and rejected.
- Use `.then()`, `.catch()`, and `.finally()` for handling results and errors.
- `async/await` makes working with promises even easier.
- Promises are essential for modern JavaScript, especially when dealing with APIs and asynchronous tasks.

---

*Refer to the code and explanations above to deepen your understanding of how Promises work in real-world JavaScript applications.*







