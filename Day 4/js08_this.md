# JavaScript `this` Keyword

## 1. **`this` Keyword**


The `this` keyword refers to the **object/context associated with the current function call**.

Its value depends on **how the function is called**.

### Example

```javascript
let student = {
    name: "Prince",

    showName: function() {
        console.log(this.name);
    }
};

student.showName();
```

### Output

```text
Prince
```

Here:

```text
student.showName()
        ↓
   this = student
        ↓
   this.name
        ↓
     Prince
```

---

## 2. `this` Inside an Object Method

When a regular function is called as an object method, `this` refers to the object that calls it.

### Example

```javascript
let student = {
    name: "Prince",
    age: 22,

    displayInfo: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.displayInfo();
```

### Output

```text
Prince
22
```

---

## 3. `this` in a Regular Function

For a regular function, `this` depends on how the function is called.

In strict mode, a regular function called without an object has:

```javascript
"use strict";

function showThis() {
    console.log(this);
}

showThis();
```

### Output

```text
undefined
```

---

## 4. `this` with Multiple Objects

The same function can be used by different objects.

```javascript
function introduce() {
    console.log("My name is", this.name);
}

let student1 = {
    name: "Prince",
    introduce: introduce
};

let student2 = {
    name: "Rahul",
    introduce: introduce
};

student1.introduce();
student2.introduce();
```

### Output

```text
My name is Prince
My name is Rahul
```

Here:

```text
student1.introduce()
        ↓
    this = student1


student2.introduce()
        ↓
    this = student2
```

---

## 5. `this` in Constructor Function

When a constructor function is called using `new`, `this` refers to the newly created object.

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student = new Student("Prince", 22);

console.log(student.name);
console.log(student.age);
```

### Output

```text
Prince
22
```

---

## 6. `this` in a Class

In a class, `this` generally refers to the current instance.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(this.name);
        console.log(this.age);
    }
}

let student = new Student("Prince", 22);

student.displayInfo();
```

### Output

```text
Prince
22
```

---

## 7. `this` in Arrow Function

Arrow functions **do not have their own `this`**.

They use `this` from their surrounding scope.

### Example

```javascript
let student = {
    name: "Prince",

    showName: function() {

        let display = () => {
            console.log(this.name);
        };

        display();
    }
};

student.showName();
```

### Output

```text
Prince
```

Here the arrow function uses the `this` of `showName()`.

---

## 8. Regular Function vs Arrow Function

| Regular Function                   | Arrow Function                                                           |
| ---------------------------------- | ------------------------------------------------------------------------ |
| Has its own `this` behavior        | Does not have its own `this`                                             |
| `this` depends on how it is called | Uses surrounding `this`                                                  |
| Can be used as object methods      | Usually avoid using as object methods when you need the object as `this` |

### Easy Rule

```text
Regular Function
       ↓
this depends on the call


Arrow Function
       ↓
this comes from surrounding scope
```

---

## 9. `this` with `call()`

`call()` allows us to explicitly set `this`.

```javascript
function introduce() {
    console.log("My name is", this.name);
}

let student = {
    name: "Prince"
};

introduce.call(student);
```

### Output

```text
My name is Prince
```

---

## 10. `this` with `apply()`

`apply()` is similar to `call()`, but arguments are passed as an array.

```javascript
function introduce(city, course) {
    console.log(this.name);
    console.log(city);
    console.log(course);
}

let student = {
    name: "Prince"
};

introduce.apply(student, ["Lucknow", "B.Tech"]);
```

### Output

```text
Prince
Lucknow
B.Tech
```

---

## 11. `this` with `bind()`

`bind()` creates a new function with a specific `this` value.

```javascript
function showName() {
    console.log(this.name);
}

let student = {
    name: "Prince"
};

let newFunction = showName.bind(student);

newFunction();
```

### Output

```text
Prince
```

---

## 12. `this` in Nested Functions

A regular nested function does **not automatically inherit** the `this` of the outer function.

An arrow function can be used when we want to use the outer `this`.

```javascript
let student = {
    name: "Prince",

    showName: function() {

        let display = () => {
            console.log(this.name);
        };

        display();
    }
};

student.showName();
```

### Output

```text
Prince
```

---
---

# 14. Practice Codes

## Practice Code 1: Object Method

```javascript
let student = {
    name: "Prince",

    showName: function() {
        console.log(this.name);
    }
};

student.showName();
```

---

## Practice Code 2: Constructor

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student = new Student("Prince", 22);

console.log(student.name);
console.log(student.age);
```

---

## Practice Code 3: `call()`

```javascript
function greet() {
    console.log("Hello", this.name);
}

let student = {
    name: "Prince"
};

greet.call(student);
```

---

## Practice Code 4: Arrow Function

```javascript
let student = {
    name: "Prince",

    showName: function() {

        let display = () => {
            console.log(this.name);
        };

        display();
    }
};

student.showName();
```

---

## Practice Code 5: `bind()`

```javascript
function showName() {
    console.log(this.name);
}

let student = {
    name: "Prince"
};

let newFunction = showName.bind(student);

newFunction();
```

---
