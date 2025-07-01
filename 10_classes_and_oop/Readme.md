## Do JavaScript really have classes?

JavaScript introduced the `class` syntax in ES6 (2015), but under the hood, JavaScript is still prototype-based. The `class` keyword is syntactic sugar over JavaScript's existing prototype-based inheritance. This means that while you can use `class` to define objects and inheritance in a way that looks similar to other object-oriented languages, JavaScript does not have "classes" in the traditional sense like Java or C++.

**Key points:**
- The `class` syntax makes it easier and more familiar for developers coming from class-based languages.
- All class methods are actually added to the prototype of the constructor function.
- JavaScript objects are still linked via prototypes, not classical classes.

**Example:**
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```
This is equivalent to:
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};
```

---

## Documentation for `oop.js`

This file demonstrates the basics of Object-Oriented Programming (OOP) in JavaScript, including object literals, constructor functions, and the use of `this`.

---

### 1. Object Literal

```js
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
```

- **Object Literal**: `user` is an object literal with properties (`username`, `loginCount`, `signedIn`) and a method (`getUserDetails`).
- **Method**: `getUserDetails` uses `this` to access the object's properties and logs details to the console.
- **Usage**:
  ```js
  console.log(user.username)           // Access property
  console.log(user.getUserDetails());  // Call method
  console.log(this);                   // Logs the global object (in non-strict mode)
  ```

---

### 2. Constructor Function

```js
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}
```

- **Constructor Function**: `User` is a function intended to be used with the `new` keyword to create new user objects.
- **Properties**: Each instance gets its own `username`, `loginCount`, and `isLoggedIn`.
- **Method**: Each instance gets its own `greeting` method.
- **Return**: Explicitly returns `this` (not necessary when using `new`, but shown for clarity).

---

### 3. Creating Instances

```js
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
```

- **Creating Objects**: `userOne` and `userTwo` are new objects created using the `User` constructor.
- **Constructor Property**: `userOne.constructor` refers to the function that created the instance (`User`).
- **Logging**: Outputs the constructor and the user objects.

---

### 4. Prototypes and Inheritance

JavaScript uses prototypes for inheritance. Every function has a `prototype` property, and objects created from constructors inherit from that prototype.

**Adding methods to prototype:**
```js
User.prototype.sayHello = function() {
    console.log(`Hello, ${this.username}!`);
};
userOne.sayHello(); // Output: Hello, hitesh!
```
- Methods added to the prototype are shared among all instances, saving memory.

**Prototype Chain:**
- When accessing a property or method, JavaScript looks up the object, then its prototype, and so on, until it finds the property or reaches the end of the chain (`null`).

---

### 5. ES6 Classes

ES6 introduced the `class` syntax, which is syntactic sugar over the prototype-based system.

**Example:**
```js
class UserClass {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
    }

    greeting() {
        console.log(`Welcome ${this.username}`);
    }

    static describe() {
        console.log("This is a User class");
    }
}

const userThree = new UserClass("Ravi", 5, true);
userThree.greeting(); // Welcome Ravi
UserClass.describe(); // This is a User class
```
- **Constructor**: Special method for initializing new objects.
- **Instance Methods**: Defined inside the class, shared via prototype.
- **Static Methods**: Called on the class itself, not instances.

---

### 6. Inheritance with Classes

You can create subclasses using `extends` and `super`.

```js
class Admin extends UserClass {
    constructor(username, loginCount, isLoggedIn, role) {
        super(username, loginCount, isLoggedIn);
        this.role = role;
    }

    isAdmin() {
        return this.role === "admin";
    }
}

const admin = new Admin("SuperUser", 20, true, "admin");
console.log(admin.isAdmin()); // true
```
- `super()` calls the parent class constructor.
- Subclasses inherit methods and properties from the parent.

---

### 7. Encapsulation and Private Fields

JavaScript (from ES2022) supports private fields using `#`.

```js
class SecretUser {
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    checkPassword(pw) {
        return this.#password === pw;
    }
}
const su = new SecretUser("hidden", "1234");
console.log(su.checkPassword("1234")); // true
// console.log(su.#password); // SyntaxError: Private field
```
- Private fields cannot be accessed outside the class.

---

### 8. Best Practices

- Use class syntax for clarity and maintainability.
- Define shared methods on the prototype (or inside the class body).
- Use private fields for sensitive data.
- Prefer composition over inheritance when possible.
- Avoid modifying built-in prototypes.

---

### 9. Summary Table

| Concept           | Syntax Example                | Notes                                    |
|-------------------|------------------------------|------------------------------------------|
| Object Literal    | `{ key: value, ... }`        | Simple, for single objects               |
| Constructor Func  | `function Name(...) { ... }` | Use with `new`, supports prototypes      |
| Prototype         | `Func.prototype.method = ...`| Shared methods, inheritance              |
| Class             | `class Name { ... }`         | Syntactic sugar, supports inheritance    |
| Inheritance       | `class Sub extends Base {}`  | Use `super()` in constructor             |
| Static Methods    | `static method() {}`         | Called on class, not instance            |
| Private Fields    | `#field`                     | Encapsulation, ES2022+                   |

---

### 10. The `instanceof` Operator

The `instanceof` operator is used to check if an object is an instance of a particular constructor or class. It checks the prototype chain to determine this relationship.

**Syntax:**
```js
object instanceof Constructor
```

**Example with Constructor Function:**
```js
function User(name) {
    this.name = name;
}
const user = new User("Ravi");
console.log(user instanceof User); // true
console.log(user instanceof Object); // true
```

**Example with ES6 Class:**
```js
class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
console.log(d instanceof Object); // true
```

**Key Points:**
- `instanceof` checks if the prototype property of the constructor appears anywhere in the prototype chain of the object.
- Works with both constructor functions and ES6 classes.
- Returns `true` if the object inherits from the constructor's prototype, otherwise `false`.
- Useful for type checking and ensuring correct object types in code.

---

**Summary:**  
This documentation covers object creation, prototypes, inheritance, ES6 classes, static and private members, and best practices for OOP in JavaScript. Understanding these concepts will help you write robust, maintainable, and efficient JavaScript code.





