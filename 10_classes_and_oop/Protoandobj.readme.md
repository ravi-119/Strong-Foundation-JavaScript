# JavaScript Objects, Prototypes, and Inheritance - In Depth

## Table of Contents

- [1. Functions as Objects](#1-functions-as-objects)
- [2. The Prototype Chain](#2-the-prototype-chain)
- [3. Constructor Functions and `new`](#3-constructor-functions-and-new)
- [4. Prototypes and Inheritance](#4-prototypes-and-inheritance)
- [5. Extending Built-in Prototypes](#5-extending-built-in-prototypes)
- [6. Practical Examples](#6-practical-examples)
- [7. Best Practices & Cautions](#7-best-practices--cautions)
- [8. References](#8-references)

---

## 1. Functions as Objects

In JavaScript, **functions are first-class objects**. This means:
- You can assign properties to functions.
- Functions have a special property called `prototype`.

**Example:**
```js
function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 2; // Assigning a property to a function
console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}
```

---

## 2. The Prototype Chain

Every JavaScript object has an internal link to another object called its **prototype**.
- When you access a property, JS looks for it on the object.
- If not found, it looks up the prototype chain.

**Visual:**
```
object --> prototype --> prototype's prototype --> ... --> Object.prototype --> null
```

---

## 3. Constructor Functions and `new`

A **constructor function** is a function designed to create objects.

**How `new` works:**
1. Creates a new empty object.
2. Sets the new object's prototype to the constructor's `prototype`.
3. Binds `this` to the new object and calls the constructor.
4. Returns the new object (unless the constructor returns an object).

**Example:**
```js
function createUser(username, score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function() {
    this.score++;
};
createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
};

const chai = new createUser("chai", 25);
chai.printMe(); // score is 25
```

---

## 4. Prototypes and Inheritance

Objects can **inherit** from other objects via prototypes.

**Example:**
```js
const User = { name: "chai", email: "chai@google.com" };
const Teacher = { makeVideo: true };
Teacher.__proto__ = User; // Teacher inherits from User
console.log(Teacher.name); // "chai"
```

**Modern syntax:**
```js
Object.setPrototypeOf(TeachingSupport, Teacher);
```

---

## 5. Extending Built-in Prototypes

You can add methods to built-in types like `Object`, `Array`, or `String`.

**Example:**
```js
Object.prototype.hitesh = function() {
    console.log("hitesh is present in all objects");
};
Array.prototype.heyHitesh = function() {
    console.log("Hitesh says hello");
};
String.prototype.trueLength = function() {
    console.log(`True length is: ${this.trim().length}`);
};
```
**Usage:**
```js
let arr = ["thor", "spiderman"];
arr.heyHitesh(); // Hitesh says hello

"hitesh     ".trueLength(); // True length is: 6
```

---

## 6. Practical Examples

- **Function as object:** Assigning properties to functions.
- **Constructor with prototype:** Sharing methods across instances.
- **Prototype chain:** Inheriting properties and methods.
- **Extending built-in prototypes:** Adding custom methods to all arrays or strings.

---

## 7. Best Practices & Cautions

- **Avoid modifying built-in prototypes** in production code. It can cause conflicts and bugs.
- Use `Object.create` or ES6 `class` for cleaner inheritance.
- Prefer `Object.setPrototypeOf` over `__proto__` for setting prototypes.

---

## 8. References

- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

---
