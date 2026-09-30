# 🚀 JavaScript

> **JavaScript is a programming language used to make web pages *interactive* and *dynamic*.**

---

## 🔥 What Does JavaScript Do?

JavaScript adds **behavior and logic** to a web page.

It allows us to:

* 🖱️ Respond to **user actions**
* 🔄 Manipulate and update **web content**
* 🌐 Connect with **servers and APIs**
* ⚡ Create **dynamic and interactive** web pages
* 🧩 Build **complex web applications**

---

## 🌐 Where Does JavaScript Run?

JavaScript traditionally runs inside the **web browser**.

It is:

* ⚡ **Event-driven** → It responds to actions/events.
* 💻 **Client-side** → Code can execute in the user's browser.
* 🔄 **Dynamic** → Web page content can change without reloading the entire page.

### Example

```javascript
button.addEventListener("click", function () {
    alert("Hello JavaScript!");
});
```

👉 Here, JavaScript waits for the **click event** and then performs an action.

---

## 🛠️ Where Is JavaScript Used?

JavaScript is used in many areas:

| Area                        | Use                                           |
| --------------------------- | --------------------------------------------- |
| 🌐 Web Development          | Interactive websites & web applications       |
| 🎮 Game Development         | Browser-based games                           |
| 🖥️ Desktop Applications    | Desktop apps using technologies like Electron |
| 📱 Mobile Apps              | Mobile applications                           |
| 🖥️ Server-side Development | Backend development using Node.js             |

---

## 🧩 HTML + CSS + JavaScript

A simple way to understand their roles:

```text
        🌐 WEB PAGE
             │
     ┌───────┼────────┐
     │       │        │
    HTML    CSS   JavaScript
     │       │        │
  Structure Design   Behavior
     │       │        │
     └───────┼────────┘
             ↓
      Interactive Web Page
```

### 🦴 HTML → Structure

HTML provides the **structure/skeleton** of the webpage.

> Think of HTML as the **skeleton of the body**.

---

### 🎨 CSS → Design

CSS controls the **look and appearance** of the webpage.

> Think of CSS as the **skin/clothes of the body**.

---

### 🧠 JavaScript → Behavior

JavaScript adds **logic, behavior and interaction**.

> Think of JavaScript as the **nervous system**, bringing everything to life.

---

## 🧠 Easy Analogy

Think of a **human body**:

| Web Technology | Human Body        | Role                   |
| -------------- | ----------------- | ---------------------- |
| 🏗️ HTML       | 🦴 Skeleton       | Structure              |
| 🎨 CSS         | 👕 Skin/Clothes   | Appearance             |
| ⚡ JavaScript   | 🧠 Nervous System | Behavior & Interaction |

### 💡 Remember

> **HTML = Structure** 🏗️
> **CSS = Design** 🎨
> **JavaScript = Behavior** ⚡

Together:

```text
HTML + CSS + JavaScript
        ↓
Structure + Design + Behavior
        ↓
   Interactive Website 🌐
```

---



# Variable

Variable is like a container that stores data values. In JavaScript, we use the `var`, `let`, and `const` keywords to declare variables.
Syntax:
```javascript
var variableName = value;
let variableName = value;
const variableName = value;
```

Variable Name can be written in different ways:
1) It should start with a letter, underscore (_), or dollar sign ($).
2) It can contain letters, digits, underscores, and dollar signs.

### Note : Variable can store numbers, strings, boolean, objects, arrays.
Example: **(Practice :- javascript01.js)**
```javascript
var name = "John";
let $age = 30;
const _PI = 3.14;
adultOrNot = false;
myCarInfo = {"key" : "value"};
myListOfBooks = ['HIndi', 'English', 'Mathematics', 'etc'];
```

### var, let and const
---
- var is older and less commonly used.
- let is preferred usually and is used when values will change
- const is used when values will not change
- variable declared with const cannot be updated

|Feature       | var   | let	 | const         |
| ------------- | --------------------- | --------------------- | --------------- |
Scope	| Function or global scope	| Block-scope { }	| Block-scope { } |
Reassignment	| Can be updated	| Can be updated	| Cannot be updated |
Redeclaration	| Can be redeclared	| Cannot be redeclared	| Cannot be redeclared |
Hoisting	| Initialized as undefined	| Hoisted, not initialized	| Hoisted, not initialized |