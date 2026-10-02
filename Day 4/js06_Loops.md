# JavaScript Loops

# **Loop**

A **loop** is used to execute a block of code repeatedly as long as a specified condition is satisfied.

For example, if we want to print numbers from `1` to `10`, we do not need to write `console.log()` ten times. We can use a loop to perform the same task automatically.

### Syntax

A general loop works with three main parts:

```javascript
initialization;

while (condition) {
    // Code to be repeated
    update;
}
```

### Important Parts of a Loop

1. **Initialization** – Defines where the loop starts.
2. **Condition** – Determines how long the loop should continue.
3. **Update** – Changes the value after each iteration.

### Real-Life Example

Suppose a teacher needs to check the attendance of 50 students.

Instead of manually writing:

```text
Student 1 → Check
Student 2 → Check
Student 3 → Check
...
Student 50 → Check
```

A loop can perform the repeated task automatically.

---

# **Types of Loop**

## 1. **for Loop**

The `for` loop is generally used when the number of iterations is known or can be controlled using a counter.

### Syntax

```javascript
for (initialization; condition; update) {
    // Code to execute
}
```

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Output

```text
1
2
3
4
5
```

Here:

* `let i = 1` → Initialization
* `i <= 5` → Condition
* `i++` → Update


### Real-Life Example

Suppose a teacher wants to check roll numbers from `1` to `10`.

```javascript
for (let rollNo = 1; rollNo <= 10; rollNo++) {
    console.log("Checking Roll No:", rollNo);
}
```

The loop runs 10 times.

---

## 2. **while Loop**


The `while` loop executes a block of code **as long as the condition is true**.

It is useful when the number of iterations is not necessarily known beforehand.

### Syntax

```javascript
initialization;

while (condition) {
    // Code to execute
    update;
}
```

### Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Output

```text
1
2
3
4
5
```

### Important

The update is important in a `while` loop.

If the condition never becomes `false`, the loop can become an **infinite loop**.

### Real-Life Example

Suppose a game continues while the player has at least one life remaining.

```javascript
let lives = 3;

while (lives > 0) {
    console.log("Game is running");
    lives--;
}
```

The game continues until `lives` becomes `0`.

---

## 3. **do...while Loop**

The `do...while` loop is different from the `while` loop because the code inside the loop executes **at least once**, even if the condition is initially false.

### Syntax

```javascript
do {
    // Code to execute
} while (condition);
```

### Example

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### Output

```text
1
2
3
4
5
```

Even if the condition is initially false:

```javascript
let i = 10;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### Output

```text
10
```

The condition is false, but the code executes once because `do...while` checks the condition **after** executing the code.


### Real-Life Example

Consider an ATM where the user must enter a PIN.

The PIN entry process must happen at least once.

```javascript
let pin;

do {
    pin = 1234;
    console.log("PIN entered");
} while (pin !== 1234);
```

---

## 4. for...of Loop

The `for...of` loop is used to access the **values of iterable objects** one by one.

It is commonly used with:

* Arrays
* Strings
* Sets
* Other iterable objects

### Syntax

```javascript
for (let variable of iterable) {
    // Code to execute
}
```

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

### Output

```text
Apple
Banana
Mango
```

Here, `fruit` directly contains the value of each array element.

### Real-Life Example

Suppose a shopping bag contains three fruits:

```text
Apple
Banana
Mango
```

We can access each fruit directly:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}
```

---

## 5. **for...in Loop**

The `for...in` loop is mainly used to access the **keys/properties of an object**.

### Syntax

```javascript
for (let key in object) {
    // Code to execute
}
```

### Example

```javascript
let student = {
    name: "Prince",
    age: 22,
    course: "B.Tech"
};

for (let key in student) {
    console.log(key);
}
```

### Output

```text
name
age
course
```

If we want both the key and its value:

```javascript
for (let key in student) {
    console.log(key, student[key]);
}
```

### Output

```text
name Prince
age 22
course B.Tech
```

### Real-Life Example

Suppose student information is stored in an object:

```javascript
let student = {
    name: "Prince",
    age: 22,
    city: "Lucknow"
};
```

We can use `for...in` to access all properties:

```javascript
for (let key in student) {
    console.log(key + ":", student[key]);
}
```

---

## 6. **forEach()**

`forEach()` is an **Array method** that executes a function once for each element of an array.

### Syntax

```javascript
array.forEach(function(element) {
    // Code to execute
});
```

### Example

```javascript
let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log(number);
});
```

### Output

```text
10
20
30
40
```

Using an arrow function:

```javascript
let numbers = [10, 20, 30, 40];

numbers.forEach(number => {
    console.log(number);
});
```

Using an arrow function:

```javascript
array.forEach(element => {
    // Code to execute
});
```

`forEach()` can provide three arguments:

```javascript
array.forEach((element, index, array) => {
    // Code
});
```

Where:

* `element` → Current array value
* `index` → Current array index
* `array` → Original array

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

### Output

```text
0 Apple
1 Banana
2 Mango
```

### Real-Life Example

Suppose we have a list of students and want to print each student's name.

```javascript
let students = ["Rahul", "Aman", "Prince"];

students.forEach(student => {
    console.log("Student:", student);
});
```

---

# **break**

The `break` statement is used to **completely stop a loop**.

As soon as JavaScript encounters `break`, the loop terminates and execution continues with the code after the loop.

### Syntax

```javascript
for (...) {

    if (condition) {
        break;
    }

}
```
    
### Example

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

### Output

```text
1
2
3
4
```

When `i` becomes `5`, the `break` statement stops the loop.

### Real-Life Example

Suppose we are searching for a particular student.

Once the student is found, there is no need to continue searching.

```javascript
let students = ["Rahul", "Aman", "Prince", "Rohit"];

for (let student of students) {

    if (student === "Prince") {
        console.log("Student Found");
        break;
    }

    console.log("Searching:", student);
}
```

---

# **continue**

The `continue` statement is used to **skip the current iteration** of a loop.

The loop does not stop completely. It simply moves to the next iteration.

### Syntax

```javascript
for (...) {

    if (condition) {
        continue;
    }

    // Remaining code
}
```

### Example

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

### Output

```text
1
2
4
5
```

Here, `3` is skipped, but the loop continues.

### Difference Between `break` and `continue`

| Statement  | Purpose                          |
| ---------- | -------------------------------- |
| `break`    | Completely stops the loop        |
| `continue` | Skips only the current iteration |


### Real-Life Example

Suppose a teacher is checking attendance and one student is absent.

The absent student can be skipped while checking the remaining students.

```javascript
let students = ["Rahul", "Aman", "Absent", "Prince"];

for (let student of students) {

    if (student === "Absent") {
        continue;
    }

    console.log("Attendance:", student);
}
```

### Output

```text
Attendance: Rahul
Attendance: Aman
Attendance: Prince
```

---

# 5 Practice Codes

## Practice Code 1: Print Numbers from 1 to 10

### Question

Use a `for` loop to print numbers from `1` to `10`.

### Code

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Output

```text
1
2
3
4
5
6
7
8
9
10
```

---

## Practice Code 2: Print Even Numbers

### Question

Print all even numbers from `1` to `20`.

### Code

```javascript
for (let i = 1; i <= 20; i++) {

    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}
```

### Output

```text
2
4
6
8
10
12
14
16
18
20
```

---

## Practice Code 3: Find a Student

### Question

Search for `"Prince"` in an array. Stop the loop as soon as the student is found.

### Code

```javascript
let students = ["Rahul", "Aman", "Rohit", "Prince", "Vikas"];

for (let student of students) {

    if (student === "Prince") {
        console.log("Prince Found");
        break;
    }

    console.log("Searching:", student);
}
```

### Output

```text
Searching: Rahul
Searching: Aman
Searching: Rohit
Prince Found
```

---

## Practice Code 4: Print Object Properties

### Question

Print all keys and values of an object.

### Code

```javascript
let student = {
    name: "Prince",
    age: 22,
    course: "B.Tech",
    city: "Lucknow"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}
```

### Output

```text
name: Prince
age: 22
course: B.Tech
city: Lucknow
```

---

## Practice Code 5: Calculate Sum of an Array

### Question

Calculate the sum of all numbers in an array using `forEach()`.

### Code

```javascript
let numbers = [10, 20, 30, 40, 50];

let sum = 0;

numbers.forEach(number => {
    sum = sum + number;
});

console.log("Total:", sum);
```

### Output

```text
Total: 150
```

---

# Quick Revision

| Loop / Keyword | Main Use                                     |
| -------------- | -------------------------------------------- |
| `for`          | Used when iterations are known or controlled |
| `while`        | Used for condition-based repetition          |
| `do...while`   | Executes the code at least once              |
| `for...of`     | Accesses iterable values                     |
| `for...in`     | Accesses object keys/properties              |
| `forEach()`    | Executes a function for every array element  |
| `break`        | Completely stops the loop                    |
| `continue`     | Skips the current iteration                  |

