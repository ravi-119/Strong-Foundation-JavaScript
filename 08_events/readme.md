# Documentation for Event Handling in one.html

This documentation explains the HTML structure and JavaScript event handling concepts demonstrated in `one.html`. The file showcases various ways to handle user interactions, event propagation, event object properties, and DOM manipulation.

---

## 1. HTML Structure Overview

- The page displays a heading and a list of images inside an unordered list (`<ul id="images">`).
- Each image is wrapped in a `<li>` and has a unique `id`.
- The last list item contains a link to Google with the `id="google"`.

**Example Structure:**
```html
<ul id="images">
  <li><img id="photoshop" ...></li>
  <li><img id="japan" ...></li>
  <li><img id="river" ...></li>
  <li><img id="owl" ...></li>
  <li><img id="prayer" ...></li>
  <li><a id="google" href="https://google.com">Google</a></li>
</ul>
```

---

## 2. Basic Event Handling

### 2.1. Inline Event Handler

```javascript
document.getElementById('owl').onclick = function(){
    alert("owl clicked")
}
```
- Assigns a click handler directly to the `owl` image.
- When clicked, an alert box appears.
- This is a simple way to attach an event, but not recommended for complex scenarios.

---

## 3. Advanced Event Handling with addEventListener

### 3.1. Event Listener on Parent (`ul#images`)

```javascript
document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
}, false)
```
- Attaches a click event to the entire `<ul>`.
- Logs a message whenever any child element inside the list is clicked.
- Demonstrates **event bubbling**: events propagate from the target element up to ancestors.

### 3.2. Event Listener on Child (`img#owl`)

```javascript
document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation()
}, false)
```
- Attaches a click event to the `owl` image.
- Logs a message and calls `e.stopPropagation()` to prevent the event from bubbling up to the parent `<ul>`.
- Demonstrates **stopping event propagation**.

### 3.3. Preventing Default Action (`a#google`)

```javascript
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("google clicked");
}, false)
```
- Attaches a click event to the Google link.
- `e.preventDefault()` stops the browser from navigating to Google.
- `e.stopPropagation()` prevents the event from bubbling.
- Logs a message to the console.

---

## 4. Event Object Properties

- The event object (`e`) provides useful information and control over the event.
- Common properties and methods:
  - `e.target`: The actual element that triggered the event.
  - `e.currentTarget`: The element the event listener is attached to.
  - `e.preventDefault()`: Prevents default browser behavior.
  - `e.stopPropagation()`: Stops the event from bubbling up.
  - Mouse position: `e.clientX`, `e.clientY`, `e.screenX`, `e.screenY`.
  - Keyboard: `e.altKey`, `e.ctrlKey`, `e.shiftKey`, `e.keyCode`.

---

## 5. Event Delegation and Dynamic Removal

### 5.1. Delegated Event for Removing Images

```javascript
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})
```
- Uses **event delegation**: a single event listener on the parent `<ul>` handles clicks for all child images.
- Checks if the clicked element is an image (`IMG`).
- If so, removes the parent `<li>` from the DOM, effectively deleting the image from the list.
- This approach is efficient for dynamic lists, as it avoids attaching individual listeners to each image.

---

## 6. Deprecated/Redundant Code

```javascript
removeIt.parentNode.removeChild(removeIt)
```
- This line is redundant because `removeIt.remove()` already removes the element from the DOM.
- Modern JavaScript prefers `element.remove()` for simplicity.

---

## 7. Summary of Concepts Demonstrated

- **Inline event handlers** vs. `addEventListener`.
- **Event bubbling** and **event propagation**.
- **Stopping propagation** with `e.stopPropagation()`.
- **Preventing default actions** with `e.preventDefault()`.
- **Event delegation** for efficient event handling.
- **DOM manipulation** (removing elements dynamically).
- **Event object properties** for advanced event handling.

---

## 8. Example: Removing Images by Clicking

- Clicking any image removes it from the list.
- Clicking the "owl" image logs a message and shows an alert (if using the inline handler).
- Clicking the Google link logs a message and does not navigate away.

---

## 9. Best Practices

- Prefer `addEventListener` over inline event handlers for flexibility and separation of concerns.
- Use event delegation for lists or dynamic content.
- Always consider event propagation and default actions when designing interactive UIs.

---

## 10. Event Bubbling and Capturing

### What is Event Bubbling?

- **Event bubbling** is the default mode of event propagation in the DOM.
- When an event occurs on an element, it first runs the handlers on that element, then on its parent, then all the way up to the root (`document`).
- Example: If you click an `<img>` inside a `<ul>`, the click event first triggers on the `<img>`, then on the `<li>`, then on the `<ul>`, and so on up the DOM tree.

### What is Event Capturing?

- **Event capturing** (also called "trickling") is the opposite of bubbling.
- The event starts from the root and travels down to the target element.
- You can enable capturing by passing `true` as the third argument to `addEventListener`:
  ```javascript
  element.addEventListener('click', handler, true); // capturing phase
  ```
- By default, event listeners use bubbling (`false`).

### Example: Bubbling vs Capturing

```html
<ul id="parent">
  <li id="child">Click me</li>
</ul>
```
```javascript
document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent UL clicked');
}, false); // bubbling

document.getElementById('child').addEventListener('click', function() {
  console.log('Child LI clicked');
}, false); // bubbling
```
- Clicking the `<li>` logs:
  1. "Child LI clicked"
  2. "Parent UL clicked"

If you use capturing:
```javascript
document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent UL clicked');
}, true); // capturing

document.getElementById('child').addEventListener('click', function() {
  console.log('Child LI clicked');
}, false); // bubbling
```
- Clicking the `<li>` logs:
  1. "Parent UL clicked"
  2. "Child LI clicked"

### Stopping Propagation

- You can stop the event from propagating further using `event.stopPropagation()`.
- This is useful when you want to prevent parent handlers from running after a child handler.

### Summary

- **Bubbling**: Event flows from the target element up to the root (default).
- **Capturing**: Event flows from the root down to the target element (less common).
- Use the third parameter of `addEventListener` to control the phase.
- `event.stopPropagation()` halts the event in its tracks.

---

## 11. Documentation for two.html

This section explains the structure and JavaScript logic of `two.html`, which demonstrates the use of `setTimeout`, clearing timeouts, and basic event handling.

### 11.1. HTML Structure

- Contains a heading (`<h1>Chai aur code</h1>`)
- A single button with id `stop`.

**HTML Example:**
```html
<h1>Chai aur code</h1>
<button id="stop">Stop</button>
```

### 11.2. JavaScript Concepts Demonstrated

#### setTimeout

- `setTimeout` schedules a function to run after a specified delay (in milliseconds).
- In this file, it is used to change the heading text after 2 seconds.

```javascript
const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS series"
}
const changeMe = setTimeout(changeText, 2000)
```
- After 2 seconds, the heading changes to "best JS series".

#### clearTimeout

- `clearTimeout` cancels a timeout set by `setTimeout` if called before the timer completes.
- The timeout id returned by `setTimeout` is stored in `changeMe`.
- When the "Stop" button is clicked, the timeout is cleared, preventing the heading from changing.

```javascript
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})
```
- This demonstrates how to provide users with control over scheduled actions.

#### Event Handling

- The "Stop" button uses `addEventListener` to listen for click events.
- On click, it cancels the pending timeout and logs "STOPPED" to the console.

### 11.3. Key Takeaways

- Use `setTimeout` to schedule delayed actions.
- Use `clearTimeout` to cancel scheduled actions before they execute.
- Attach event listeners to elements for interactive control.
- Always store the timeout id if you may need to cancel it.

---

## 12. Documentation for three.html

This section covers `three.html`, which demonstrates the use of `setInterval`, `clearInterval`, and timer-based repeated actions.

### 12.1. HTML Structure

- Contains a heading (`<h1>Chai aur Javascript</h1>`)
- Two buttons: "Start" (id `start`) and "Stop" (id `stop`)

**HTML Example:**
```html
<h1>Chai aur Javascript</h1>
<button id="start">Start</button>
<button id="stop">Stop</button>
```

### 12.2. JavaScript Concepts Demonstrated

#### setInterval

- `setInterval` repeatedly calls a function at specified intervals (in milliseconds).
- In the provided code, `sayDate` logs a string and the current timestamp every second.

```javascript
const sayDate = function(str){
    console.log(str, Date.now());
}
const intervalId = setInterval(sayDate, 1000, "hi")
```
- This will log `"hi"` and the current timestamp every second.

#### clearInterval

- `clearInterval` stops the repeated execution started by `setInterval`.
- In the provided code, `clearInterval(intervalId)` is called immediately, so the interval only runs once (or not at all, depending on timing).
- In a practical scenario, you would typically start the interval on "Start" button click and stop it on "Stop" button click.

#### Practical Usage (Suggested Improvement)

- Attach event listeners to "Start" and "Stop" buttons.
- On "Start", begin the interval if not already running.
- On "Stop", clear the interval.

**Example Implementation:**
```javascript
let intervalId;
document.getElementById('start').addEventListener('click', function(){
    if (!intervalId) {
        intervalId = setInterval(sayDate, 1000, "hi");
    }
});
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
});
```

#### Key Points

- `setInterval` is used for repeated actions (e.g., clocks, polling).
- Always store the interval id to clear it later.
- Use event listeners to provide user control over timers.

### 12.3. Summary

- Use `setInterval` for repeated execution, `clearInterval` to stop.
- Combine with event listeners for interactive timer controls.
- Always manage timer ids to avoid memory leaks or unexpected behavior.

---

### Summary

- **Bubbling**: Event flows from the target element up to the root (default).
- **Capturing**: Event flows from the root down to the target element (less common).
- Use the third parameter of `addEventListener` to control the phase.
- `event.stopPropagation()` halts the event in its tracks.

---






