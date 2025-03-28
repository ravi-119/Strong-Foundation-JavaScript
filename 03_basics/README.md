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
