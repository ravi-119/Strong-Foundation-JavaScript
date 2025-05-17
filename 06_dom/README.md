# Documentation for `one.html`

This file demonstrates the basic structure of an HTML document and introduces key concepts of the DOM (Document Object Model) structure, which is the foundation for DOM manipulation in JavaScript.

---

## 1. Document Type Declaration

```html
<!DOCTYPE html>
```
- Declares the document type and version of HTML (HTML5).
- Ensures the browser renders the page in standards mode.

---

## 2. Root HTML Element

```html
<html lang="en">
```
- The root element of the HTML document.
- `lang="en"` specifies the language as English, which helps with accessibility and SEO.

---

## 3. Head Section

```html
<head>
    <meta charset="UTF-8">
    <title>DOM learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
```
- `<head>` contains metadata and resources for the document.
- `<meta charset="UTF-8">` sets the character encoding to UTF-8, supporting most characters and symbols.
- `<title>DOM learning</title>` sets the title of the page, shown in the browser tab.
- `<style> ... </style>` defines a CSS class `.bg-black` that sets a dark background and white text color.

---

## 4. Body Section

```html
<body class="bg-black">
    <div >
        <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
        <img src="https://cdn.sanity.io/images/gpji8x82/production/5910b5ee6fa6049fedc86092a3bc6547d64d15b5-960x540.jpg?w=800" alt="DOM Structure Example" width="400">
    </div>
</body>
```
- `<body class="bg-black">`
  - The main content of the page.
  - Applies the `.bg-black` class for styling (dark background, white text).

- `<div>`
  - A container for grouping related elements.

- `<h1 id="title" class="heading"> ... </h1>`
  - Main heading with:
    - `id="title"`: unique identifier for DOM selection/manipulation.
    - `class="heading"`: allows styling or selection by class.
    - Contains a `<span style="display: none;">test text</span>`:
      - Inline style hides the text visually, but it remains in the DOM and can be accessed/manipulated via JavaScript.

- `<h2>Lorem ipsum dolor sit.</h2>` (repeated 3 times)
  - Secondary headings, useful for DOM queries like `getElementsByTagName` or `querySelectorAll`.

- `<p>Lorem ipsum dolor sit amet.</p>`
  - A paragraph element, can be selected/manipulated via DOM methods.

- `<input type="password" name="" id="">`
  - An input field of type password.
  - Can be accessed and manipulated (e.g., value, attributes) via DOM.

- `<ul> ... </ul>`
  - An unordered list containing four list items.
  - Each `<li class="list-item"> ... </li>`:
    - Represents a list item.
    - `class="list-item"` allows selection/manipulation of all list items as a group.

- `<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/DOM-model.svg" alt="DOM Structure Example" width="400">`
  - Adds an image illustrating the DOM structure.
  - `src` points to a public SVG showing the DOM tree.
  - `alt` provides alternative text for accessibility.
  - `width="400"` sets the display width.

---

## 5. Closing Tags

```html
</div>
</body>
</html>
```
- Properly closes the `<div>`, `<body>`, and `<html>` elements.

---

## DOM Structure and Manipulation Concepts

- **DOM Structure**: The HTML elements form a tree-like structure (the DOM), where each tag is a node. Elements can be selected and manipulated using JavaScript.
- **IDs and Classes**: IDs (`id="title"`) are unique and used for direct selection. Classes (`class="heading"`, `class="list-item"`) can be shared and used for group selection.
- **Hidden Elements**: Elements with `display: none` are not visible but still exist in the DOM and can be shown/hidden or modified via JavaScript.
- **Form Elements**: Inputs can be accessed and their values or attributes changed dynamically.
- **Lists and Iteration**: List items with a common class can be selected as a NodeList or HTMLCollection for batch operations.
- **Images in the DOM**: Images are also DOM elements and can be manipulated (e.g., changing `src`, `alt`, or styles) via JavaScript.

---

## Summary

This file provides a foundational HTML structure for practicing DOM selection and manipulation, including:
- Selecting elements by tag, class, or ID.
- Accessing and modifying text, attributes, and styles.
- Iterating over collections of elements (like list items).
- Understanding the hierarchical structure of the DOM for scripting.
- Visualizing the DOM tree structure with an image.

You can use JavaScript to manipulate any of these elements by selecting them with methods like `getElementById`, `getElementsByClassName`, `querySelector`, and `querySelectorAll`.
