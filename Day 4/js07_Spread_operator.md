# Spread Operator in JavaScript

## **1. Spread Operator**

The **Spread Operator** (`...`) is used to **expand or unpack the elements of an iterable** such as an array or the properties of an object.

The spread operator is represented by **three dots (`...`)**.

```javascript
...
```

It allows us to take the individual elements from one array/object and use them inside another array/object.

### Basic Example

```javascript
let numbers = [10, 20, 30];

let newNumbers = [...numbers];

console.log(newNumbers);
```

### Output

```text
[10, 20, 30]
```

Here:

```javascript
...numbers
```

expands the array into:

```text
10, 20, 30
```

So:

```javascript
[...numbers]
```

creates a new array containing those values.

---

# 2. Spread Operator with Arrays

The spread operator can be used to copy or combine arrays.

### Example 1: Copy an Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let newFruits = [...fruits];

console.log(newFruits);
```

### Output

```text
["Apple", "Banana", "Mango"]
```

The original array remains separate from the new array.

---

### Example 2: Combine Two Arrays

```javascript
let fruits = ["Apple", "Banana"];

let vegetables = ["Potato", "Tomato"];

let food = [...fruits, ...vegetables];

console.log(food);
```

### Output

```text
["Apple", "Banana", "Potato", "Tomato"]
```

### Flow

```text
fruits
   ↓
["Apple", "Banana"]
   ↓
...fruits
   ↓
Apple, Banana

vegetables
   ↓
["Potato", "Tomato"]
   ↓
...vegetables
   ↓
Potato, Tomato

        ↓

[...fruits, ...vegetables]

        ↓

["Apple", "Banana", "Potato", "Tomato"]
```

---

# 3. Add New Elements Using Spread Operator

We can add new elements before or after the existing elements of an array.

### Example

```javascript
let numbers = [20, 30, 40];

let newNumbers = [10, ...numbers, 50];

console.log(newNumbers);
```

### Output

```text
[10, 20, 30, 40, 50]
```

Here:

```javascript
[10, ...numbers, 50]
```

means:

```text
10
+
20, 30, 40
+
50
```

---

# 4. Spread Operator with Objects

The spread operator can also be used with objects.

It expands the properties of one object into another object.

### Example

```javascript
let student = {
    name: "Prince",
    age: 22
};

let newStudent = {
    ...student
};

console.log(newStudent);
```

### Output

```text
{
    name: "Prince",
    age: 22
}
```

---

# 5. Combine Two Objects

The spread operator can be used to combine properties from multiple objects.

### Example

```javascript
let student = {
    name: "Prince",
    age: 22
};

let address = {
    city: "Lucknow",
    state: "Uttar Pradesh"
};

let studentDetails = {
    ...student,
    ...address
};

console.log(studentDetails);
```

### Output

```text
{
    name: "Prince",
    age: 22,
    city: "Lucknow",
    state: "Uttar Pradesh"
}
```

### Flow

```text
student
   ↓
{name, age}

address
   ↓
{city, state}

       ↓

{
    ...student,
    ...address
}

       ↓

{
    name,
    age,
    city,
    state
}
```

---

# 6. Updating Object Properties Using Spread

The spread operator is very useful when we want to create a new object while changing one or more existing properties.

### Example

```javascript
let student = {
    name: "Prince",
    age: 22,
    city: "Lucknow"
};

let updatedStudent = {
    ...student,
    age: 23
};

console.log(updatedStudent);
```

### Output

```text
{
    name: "Prince",
    age: 23,
    city: "Lucknow"
}
```

Here the original object is not directly modified.

```text
Original Object
      ↓
{name, age: 22, city}
      ↓
    ...student
      ↓
Change age
      ↓
Updated Object
{name, age: 23, city}
```

---

# 7. Spread Operator in Function Calls

The spread operator can be used to pass the elements of an array as individual arguments to a function.

### Example

```javascript
let numbers = [10, 20, 30];

console.log(Math.max(...numbers));
```

### Output

```text
30
```

Without spread:

```javascript
Math.max(numbers);
```

This does not pass the three numbers individually.

With spread:

```javascript
Math.max(...numbers);
```

It becomes conceptually:

```javascript
Math.max(10, 20, 30);
```

---

# 8. Spread Operator with Strings

A string is iterable, so the spread operator can expand a string into individual characters.

### Example

```javascript
let name = "Prince";

let letters = [...name];

console.log(letters);
```

### Output

```text
["P", "r", "i", "n", "c", "e"]
```

### Flow

```text
"Prince"
   ↓
...name
   ↓
P r i n c e
   ↓
["P", "r", "i", "n", "c", "e"]
```

---

# 9. Spread Operator vs Normal Assignment

It is important to understand the difference between assigning an array directly and using the spread operator.

### Without Spread Operator

```javascript
let numbers = [10, 20, 30];

let newNumbers = numbers;

newNumbers.push(40);

console.log(numbers);
```

### Output

```text
[10, 20, 30, 40]
```

Both variables refer to the same array.

### With Spread Operator

```javascript
let numbers = [10, 20, 30];

let newNumbers = [...numbers];

newNumbers.push(40);

console.log(numbers);
console.log(newNumbers);
```

### Output

```text
[10, 20, 30]

[10, 20, 30, 40]
```

The spread operator creates a **new array**.

---

# 10. Spread Operator and Shallow Copy

The spread operator creates a **shallow copy**, not a deep copy.

For simple values such as numbers, strings and booleans, this usually behaves as expected.

```javascript
let numbers = [10, 20, 30];

let copy = [...numbers];

copy.push(40);

console.log(numbers);
console.log(copy);
```

Output:

```text
[10, 20, 30]

[10, 20, 30, 40]
```

However, nested objects or arrays are still referenced.

### Example

```javascript
let student = {
    name: "Prince",
    address: {
        city: "Lucknow"
    }
};

let copy = {
    ...student
};

copy.address.city = "Delhi";

console.log(student.address.city);
```

Output:

```text
Delhi
```

This happens because the spread operator performs a **shallow copy**.

---

# 11. Spread Operator vs Rest Operator

Both use the same `...` syntax, but they perform opposite jobs.

### Spread Operator

**Spread = Expand**

It expands elements.

```javascript
let numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```text
10 20 30
```

### Rest Operator

**Rest = Collect**

It collects multiple values into an array.

```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

### Easy Way to Remember

```text
Spread
   ↓
Expand / Unpack
   ↓
...

Rest
   ↓
Collect / Pack
   ↓
...
```

The same `...` syntax gets its meaning from **where it is used**.

---

# 12. Real-Life Example

Suppose we have two shopping lists.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let vegetables = ["Potato", "Tomato", "Carrot"];
```

We want to create one complete shopping list.

Without spread:

```javascript
let shoppingList = [fruits, vegetables];

console.log(shoppingList);
```

Output:

```text
[
    ["Apple", "Banana", "Mango"],
    ["Potato", "Tomato", "Carrot"]
]
```

This creates a nested array.

Using spread:

```javascript
let shoppingList = [...fruits, ...vegetables];

console.log(shoppingList);
```

Output:

```text
[
    "Apple",
    "Banana",
    "Mango",
    "Potato",
    "Tomato",
    "Carrot"
]
```

---
