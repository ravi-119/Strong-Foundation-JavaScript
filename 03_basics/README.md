# JavaScript Functions Tutorial

This document explains basic concepts of functions in JavaScript with examples.

## Function Basics

### Simple Function
```javascript
function sayMyName(){
    // Prints individual letters of "HITESH"
}
```
A basic function that demonstrates function declaration and execution.

### Function with Parameters
```javascript
function addTwoNumbers(number1, number2){
    return number1 + number2
}
```
- Takes two parameters
- Returns their sum
- Example usage: `const result = addTwoNumbers(3, 5)`

### Function with Default Parameters
```javascript
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
```
- Takes username as parameter with "sam" as default value
- Includes null check
- Returns login confirmation message
- Example usage: `loginUserMessage("hitesh")`

## Advanced Function Concepts

### Rest Parameters in Functions
```javascript
function calculateCartPrice(...num1){
    return num1
}
```
- Uses rest operator (`...`) to accept multiple arguments
- Converts arguments into an array
- Example usage: `calculateCartPrice(200, 400, 500, 2000)`

### Working with Objects in Functions
```javascript
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
```
- Takes an object as parameter
- Accesses object properties
- Can be used with literal objects or object variables
- Example usage:
  ```javascript
  handleObject({
      username: "sam",
      price: 399
  })
  ```

### Array Handling Functions
```javascript
function returnSecondValue(getArray){
    return getArray[1]
}
```
- Takes an array as parameter
- Demonstrates array indexing
- Example usage: `returnSecondValue([200, 400, 500, 1000])`

## Key Learnings
- Function declaration and calling
- Parameter handling
- Return statements
- Default parameters
- Basic error handling
- Rest parameters
- Object parameter handling
- Array parameter handling
- Template literals with object properties

## Understanding Scopes in JavaScript

### Global Scope
```javascript
var c = 300
let a = 300
```
- Variables declared outside any function or block have global scope
- Can be accessed from anywhere in the code
- `var` declarations are added to the global object
- `let` and `const` declarations are not added to the global object

### Block Scope
```javascript
if (true) {
    let a = 10
    const b = 20
}
```
- Variables declared inside a block (between `{}`) have block scope
- `let` and `const` are block-scoped
- Cannot be accessed outside the block
- Helps prevent variable leakage

### Function Scope
```javascript
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username); // Can access parent's variables
    }
    // console.log(website); // Cannot access child's variables
}
```
- Variables declared inside a function are only accessible within that function
- Nested functions can access variables from parent functions
- Parent functions cannot access variables from nested functions
- Creates closure scope

### Hoisting
```javascript
console.log(addone(5)) // Works fine
function addone(num){
    return num + 1
}

addTwo(5) // Error: Cannot access before initialization
const addTwo = function(num){
    return num + 2
}
```
- Function declarations are hoisted (can be used before declaration)
- Function expressions using `let/const` are not hoisted
- Variables declared with `var` are hoisted (initialized as undefined)
- Variables declared with `let/const` are not hoisted (temporal dead zone)

## Key Scope Concepts
- Global scope vs Local scope
- Block-level scope with `let` and `const`
- Function scope and closures
- Variable hoisting behavior
- Temporal Dead Zone for `let/const`
