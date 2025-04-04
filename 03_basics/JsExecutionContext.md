# JavaScript Execution Context

JavaScript Execution Context is the environment where JavaScript code is executed. When you run JavaScript code, an execution context is created.

## Types of Execution Context

1. **Global Execution Context (GEC)**
   - Created when JavaScript code starts running
   - Creates two things:
     - `window` object (in browsers)
     - `this` keyword
   - There can only be one GEC

2. **Function Execution Context (FEC)**
   - Created when a function is called
   - Each function gets its own execution context
   - Created during function invocation

## Phases of Execution Context

### 1. Memory Creation Phase (Creation Phase)
- Variables are allocated memory with `undefined`
- Function declarations are stored with their definition
- `this` value is determined

### 2. Code Execution Phase
- Values are assigned to variables
- Functions are executed
- Code is run line by line

## Example

```javascript
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
```

### Execution Flow:
1. Global Execution Context created
2. Memory phase allocates space for variables and functions
3. Code execution phase begins
4. When `addNum()` is called, new Function Execution Context is created
5. Process repeats for each function call

## Call Stack
- Manages execution contexts
- Works on LIFO (Last In First Out) principle
- Global Execution Context is at the bottom
- Function contexts are pushed and popped as needed
