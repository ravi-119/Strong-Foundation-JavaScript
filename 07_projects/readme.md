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










