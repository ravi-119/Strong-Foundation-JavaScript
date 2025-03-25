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

## Key Learnings
- Function declaration and calling
- Parameter handling
- Return statements
- Default parameters
- Basic error handling
