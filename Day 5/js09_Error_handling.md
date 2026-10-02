# **Error Handling in JavaScript**

## **Error Handling**

**Error Handling** is the process of detecting, handling, and responding to errors that occur while a JavaScript program is running.

Without error handling, an error can stop the execution of the remaining code.

### **Example**

```javascript
console.log("Program Started");

console.log(userName);

console.log("Program Finished");
```

Here, `userName` is not defined, so JavaScript throws a `ReferenceError` and the remaining code does not execute normally.

### **Why Error Handling Is Important**

```text
Program
   ↓
Error Occurs
   ↓
Error Handling
   ↓
Handle / Report Error
   ↓
Program continues safely
```

---

## **Types of Errors**

JavaScript has several common types of errors.

### 1) **SyntaxError**

Occurs when JavaScript syntax is incorrect.

```javascript
if (true {
    console.log("Hello");
}
```

---

### 2) **ReferenceError**

Occurs when we try to access a variable that does not exist.

```javascript
console.log(userName);
```

Output:

```text
ReferenceError: userName is not defined
```

---

### 3) **TypeError**

Occurs when an operation is performed on an inappropriate data type.

```javascript
let number = 10;

number.toUpperCase();
```

---

### 4) **RangeError**

Occurs when a value is outside the allowed range.

```javascript
let number = 10;

number.toFixed(200);
```

---

### 5) **URIError**

Occurs when an invalid URI-related function is used.

```javascript
decodeURIComponent("%");
```

---

## **`try...catch`**

`try...catch` is the most common way to handle runtime errors.

* `try` → contains code that may produce an error.
* `catch` → handles the error.

### **Syntax**

```javascript
try {
    // Code that may cause an error
}
catch (error) {
    // Handle the error
}
```

### **Example**

```javascript
try {
    console.log(userName);
}
catch (error) {
    console.log("An error occurred");
}
```

Output:

```text
An error occurred
```

### **Flow**

```text
try
 ↓
Error occurs
 ↓
catch
 ↓
Handle error
 ↓
Program continues
```

---

## **Error Object**

The `catch` block receives an **Error object**.

```javascript
try {
    console.log(userName);
}
catch (error) {

    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
```

### **`error.name`**

Returns the type of error.

```text
ReferenceError
```

### **`error.message`**

Returns the error description.

```text
userName is not defined
```

### **`error.stack`**

Provides detailed information about where the error occurred.

```javascript
catch (error) {
    console.log(error.stack);
}
```

---

## **`finally`**

The `finally` block executes **whether an error occurs or not**.

It is commonly used for cleanup operations.

### **Syntax**

```javascript
try {
    // Code
}
catch (error) {
    // Handle error
}
finally {
    // Always executes
}
```

### **Example**

```javascript
try {

    console.log("Trying to execute code");

}
catch (error) {

    console.log("Error occurred");

}
finally {

    console.log("Process completed");
}
```

Output:

```text
Trying to execute code
Process completed
```

---

## **`throw` Statement**

The `throw` statement is used to **manually create an error** when a condition is invalid.

### **Syntax**

```javascript
throw new Error("Error message");
```

### **Example**

```javascript
let age = 15;

if (age < 18) {

    throw new Error("Age must be 18 or above");

}
```

Here, we manually generate an error because the age is less than 18.

---

## **`throw` with `try...catch`**

We can combine `throw` with `try...catch` to create and handle our own errors.

```javascript
let age = 15;

try {

    if (age < 18) {
        throw new Error("You must be 18 or older");
    }

    console.log("Access Granted");

}
catch (error) {

    console.log("Error:", error.message);

}
```

Output:

```text
Error: You must be 18 or older
```

### **Flow**

```text
age = 15
   ↓
age < 18 ?
   ↓
YES
   ↓
throw new Error()
   ↓
catch
   ↓
Display error message
```

---

# **Custom Error Types**

JavaScript provides built-in error constructors.

```javascript
Error
TypeError
ReferenceError
RangeError
SyntaxError
URIError
```

### **Example**

```javascript
try {

    throw new TypeError("Invalid data type");

}
catch (error) {

    console.log(error.name);
    console.log(error.message);
}
```

Output:

```text
TypeError
Invalid data type
```

---

## **Nested `try...catch`**

A `try...catch` can exist inside another `try...catch`.

```javascript
try {

    console.log("Outer try started");

    try {

        console.log(userName);

    }
    catch (error) {

        console.log("Inner error handled");

    }

    console.log("Outer try continues");

}
catch (error) {

    console.log("Outer error handled");

}
```

Output:

```text
Outer try started
Inner error handled
Outer try continues
```

---

## **Error Handling with Functions**

Error handling can be used inside functions.

```javascript
function divide(a, b) {

    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    }
    catch (error) {

        console.log("Error:", error.message);

        return null;
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
```

Output:

```text
5
Error: Cannot divide by zero
null
```

---

## **Error Handling with JSON**

`JSON.parse()` can throw an error when the JSON string is invalid.

### **Valid JSON**

```javascript
let data = '{"name":"Prince"}';

try {

    let user = JSON.parse(data);

    console.log(user.name);

}
catch (error) {

    console.log("Invalid JSON");

}
```

### **Invalid JSON**

```javascript
let data = '{"name":"Prince"';

try {

    let user = JSON.parse(data);

    console.log(user);

}
catch (error) {

    console.log("Invalid JSON");

}
```

Output:

```text
Invalid JSON
```

---

## **Error Handling with `async/await`**

Errors from asynchronous operations can also be handled using `try...catch`.

```javascript
async function getData() {

    try {

        let response = await fetch("https://example.com/data");

        let data = await response.json();

        console.log(data);

    }
    catch (error) {

        console.log("Failed to fetch data");
        console.log(error.message);

    }
}

getData();
```

### **Flow**

```text
async function
      ↓
await operation
      ↓
Success ─────────→ Continue
      │
      ↓
Error
      ↓
catch
      ↓
Handle Error
```

---
---
---


## **Practice Code**

### **`try...catch`**

```javascript
try {

    console.log(userName);

}
catch (error) {

    console.log("Error:", error.message);

}
```

### **`try...catch...finally`**

```javascript
try {

    let result = 10 / 2;

    console.log(result);

}
catch (error) {

    console.log("Something went wrong");

}
finally {

    console.log("Execution completed");

}
```

### **`throw`**

```javascript
function checkAge(age) {

    if (age < 18) {

        throw new Error("You are not eligible");

    }

    console.log("You are eligible");
}

try {

    checkAge(16);

}
catch (error) {

    console.log(error.message);

}
```

### **JSON Error Handling**

```javascript
let jsonData = '{"name":"Prince"';

try {

    let data = JSON.parse(jsonData);

    console.log(data);

}
catch (error) {

    console.log("Invalid JSON data");

}
```

### **Function Error Handling**

```javascript
function withdraw(balance, amount) {

    try {

        if (amount > balance) {

            throw new Error("Insufficient balance");

        }

        return balance - amount;

    }
    catch (error) {

        console.log(error.message);

        return balance;
    }
}

let balance = withdraw(5000, 7000);

console.log("Remaining Balance:", balance);
```

---
