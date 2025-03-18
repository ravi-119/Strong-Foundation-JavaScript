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

### `02_array.js`

This file demonstrates additional array operations in JavaScript, including concatenation, spread operator usage, flattening arrays, and the use of `Array.isArray`, `Array.from`, and `Array.of`.

-   **Array Concatenation:** Demonstrates how to concatenate arrays using `concat` and the spread operator.
    ```javascript
    const marvel_heros = ["thor", "Ironman", "spiderman"];
    const dc_heros = ["superman", "flash", "batman"];

    // Concatenating arrays
    const allHeros = marvel_heros.concat(dc_heros); // Returns a new array with all elements from both arrays

    // Using spread operator
    const all_new_heros = [...marvel_heros, ...dc_heros]; // Returns a new array with all elements from both arrays
    ```
-   **Flattening Arrays:** Shows how to flatten nested arrays using the `flat` method.
    ```javascript
    const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
    const real_another_array = another_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated
    ```
-   **Array Type Checking and Creation:** Demonstrates the use of `Array.isArray`, `Array.from`, and `Array.of`.
    ```javascript
    // Checking if a variable is an array
    Array.isArray("Hitesh"); // Returns false

    // Creating an array from a string
    Array.from("Hitesh"); // Returns ["H", "i", "t", "e", "s", "h"]

    // Creating an array from variables
    let score1 = 100;
    let score2 = 200;
    let score3 = 300;
    Array.of(score1, score2, score3); // Returns [100, 200, 300]
    ```
