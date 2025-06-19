# Documentation for Color-Changing Buttons Script

This section explains a JavaScript snippet that allows users to change the background color of a web page by clicking on different buttons. The script demonstrates DOM selection, event handling, and dynamic style manipulation.

---

## 1. Logging a Message

```javascript
console.log("hitesh")
```
- Logs the string `"hitesh"` to the browser console. This is likely for debugging or confirming the script is running.

---

## 2. Selecting Elements

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
```
- `document.querySelectorAll('.button')` selects all elements with the class `button` and stores them in a NodeList called `buttons`.
- `document.querySelector('body')` selects the `<body>` element for later style manipulation.

---

## 3. Adding Event Listeners to Buttons

```javascript
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // ...color logic...
  });
});
```
- Iterates over each button in the `buttons` NodeList.
- Logs each button element to the console.
- Adds a `'click'` event listener to each button.
- When a button is clicked:
  - Logs the event object `e` and the event target (`e.target`) to the console.
  - Proceeds to check the button's `id` to determine which color to apply.

---

## 4. Changing the Background Color

```javascript
if (e.target.id === 'grey') {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === 'white') {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === 'blue') {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === 'yellow') {
  body.style.backgroundColor = e.target.id;
}
```
- For each possible color (`grey`, `white`, `blue`, `yellow`), checks if the clicked button's `id` matches.
- If so, sets the body's background color to the value of the button's `id`.
- This assumes each button has an `id` corresponding to a valid CSS color name.

---

## 5. How It Works

- Each button with class `button` should have an `id` set to a color name (e.g., `<button class="button" id="blue">Blue</button>`).
- When a button is clicked, the script changes the background color of the page to match the button's `id`.
- The script logs useful information to the console for debugging and understanding event flow.

---

## 6. Example HTML Structure

```html
<button class="button" id="grey">Grey</button>
<button class="button" id="white">White</button>
<button class="button" id="blue">Blue</button>
<button class="button" id="yellow">Yellow</button>
```
- Place these buttons in your HTML to use the script effectively.

---

## 7. Summary

- Demonstrates DOM selection, event handling, and dynamic style changes.
- Useful for interactive UI features where user actions trigger visual feedback.
- Can be extended for more colors or effects by adding more buttons and corresponding logic.

---










# Documentation for BMI Calculator Form Script

This section explains a JavaScript snippet that implements a BMI (Body Mass Index) calculator using a web form. The script demonstrates form handling, input validation, and dynamic DOM updates.

---

## 1. Selecting the Form

```javascript
const form = document.querySelector('form');
```
- Selects the first `<form>` element in the document and stores it in the `form` variable.

---

## 2. Why Not Read Input Values Immediately?

```javascript
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
```
- If you try to read input values outside the event handler, you'll get empty values because the DOM hasn't received user input yet.

---

## 3. Handling Form Submission

```javascript
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // ...rest of code...
});
```
- Adds a `'submit'` event listener to the form.
- `e.preventDefault();` prevents the default form submission (which would reload the page).

---

## 4. Reading and Parsing Input Values

```javascript
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
```
- Reads the values from the height and weight input fields (with IDs `height` and `weight`).
- Parses the values as integers.
- Selects the element with ID `results` to display output.

---

## 5. Input Validation

```javascript
if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid weight ${weight}`;
}
```
- Checks if height or weight is empty, negative, or not a number.
- If invalid, displays an error message in the `results` element.

---

## 6. Calculating and Displaying BMI

```javascript
else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
}
```
- If inputs are valid, calculates BMI using the formula:  
  BMI = weight (kg) / [height (m)]²  
  (height is converted from cm to m² by dividing by 10,000)
- Rounds the result to two decimal places.
- Displays the BMI inside the `results` element.

---

## 7. Summary

- Demonstrates form event handling and preventing default submission.
- Shows how to read and validate user input from form fields.
- Calculates BMI and updates the DOM with the result or error messages.
- Useful for interactive web forms requiring validation and dynamic feedback.

---



# Documentation for Live Digital Clock Script

This section explains a JavaScript snippet that displays a live digital clock on a web page. The script demonstrates DOM selection, periodic updates using `setInterval`, and dynamic content rendering.

---

## 1. Selecting the Clock Element

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
```
- Selects the HTML element with the ID `clock` and stores it in the `clock` variable.
- The commented alternative uses `querySelector`, which works similarly for this use case.

---

## 2. Setting Up Periodic Updates

```javascript
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
- Uses `setInterval` to execute a function every 1000 milliseconds (1 second).
- Inside the function:
  - Creates a new `Date` object representing the current date and time.
  - Uses `date.toLocaleTimeString()` to get the current time as a human-readable string (e.g., "10:23:45 AM").
  - Updates the `innerHTML` of the `clock` element to display the current time.
- The commented `console.log` can be used for debugging to print the time in the browser console.

---

## 3. How It Works

- Place an element with the ID `clock` in your HTML (e.g., `<div id="clock"></div>`).
- The script continuously updates this element every second to show the current local time.
- Useful for creating real-time clocks or time displays in web applications.

---

## 4. Example HTML Structure

```html
<div id="clock"></div>
```
- Add this element to your HTML to display the live clock.

---

## 5. Summary

- Demonstrates DOM selection and periodic updates with `setInterval`.
- Dynamically renders the current time in a specified element.
- Can be extended for different time formats or additional features.

---



