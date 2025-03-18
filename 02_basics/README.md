## Arrays in JavaScript

This section covers the basics of arrays in JavaScript, including array creation and common array methods.

### `01_arrays.js`

This file demonstrates how to create and manipulate arrays in JavaScript. It covers the following concepts:

-   **Array Creation:** Demonstrates different ways to create arrays.
    ```javascript
    const myArr = [0, 1, 2, 3, 4, 5];
    const myHeors = ["shaktiman", "naagraj"];
    const myArr2 = new Array(1, 2, 3, 4);
    ```
-   **Array Methods:** Shows how to use various array methods such as `push`, `pop`, `unshift`, `shift`, `includes`, `indexOf`, and `join`.
    ```javascript
    // Adding and removing elements
    myArr.push(6); // Adds 6 to the end of the array
    myArr.pop();  // Removes the last element from the array

    myArr.unshift(9); // Adds 9 to the beginning of the array
    myArr.shift();   // Removes the first element from the array

    // Checking for elements
    myArr.includes(9); // Checks if the array includes 9
    myArr.indexOf(3);  // Returns the index of 3 in the array

    // Converting array to string
    myArr.join();    // Joins all elements of the array into a string
    ```
-   **Slice and Splice:** Explains the difference between `slice` and `splice`.
    ```javascript
    // Slice
    const myn1 = myArr.slice(1, 3); // Returns a new array with elements from index 1 to 2 (exclusive of 3)

    // Splice
    const myn2 = myArr.splice(1, 3); // Removes elements from index 1 to 3 (inclusive) and returns them as a new array.  Modifies the original array.
    ```
