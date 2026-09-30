# Arrays in JavaScript
---
- Arrays are a type of **data structure** in JavaScript that can hold **multiple values** in a single variable.
- Each value is stored at a specific place called **index**

**Key characteristics of JavaScript arrays are:**

- Elements: An array is a list of values, known as elements.
- Ordered: Array elements are ordered based on their index.
- Zero indexed: The first element is at index 0, the second at index 1, and so on.
- Dynamic size: Arrays can grow or shrink as elements are added or removed.
- Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

**Syntax:**
```javascript
let arrayName = [element1, element2, element3];
```

Some examples of arrays:
```javascript
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
const points1 = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];
console.log(fruits);
console.log(numbers);
console.log(points1);
console.log(points2);
```

# 📦 JavaScript Array Methods

> JavaScript `Array` provides many built-in **properties and methods** to create, access, search, modify, transform, and process arrays.

---

## 📌 Array Creation

| Method            | Description                                 |
| ----------------- | ------------------------------------------- |
| `[]`              | Creates a new Array                         |
| `new Array()`     | Creates a new Array                         |
| `Array.from()`    | Creates an array from an object             |
| `Array.of()`      | Creates an array from a number of arguments |
| `Array.isArray()` | Checks whether an object is an array        |

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

---

# 🔍 Accessing & Searching

| Method            | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `at()`            | Returns an element at a specified index                   |
| `indexOf()`       | Searches for an element and returns its position          |
| `lastIndexOf()`   | Searches from the end and returns the position            |
| `includes()`      | Checks whether an array contains a specified element      |
| `find()`          | Returns the first element that passes a test              |
| `findIndex()`     | Returns the index of the first element that passes a test |
| `findLast()`      | Returns the last element that passes a test               |
| `findLastIndex()` | Returns the index of the last element that passes a test  |

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.at(1));
// Banana

console.log(fruits.includes("Mango"));
// true

console.log(fruits.indexOf("Apple"));
// 0
```

---

# ➕ Adding & Removing Elements

| Method        | Description                                          |
| ------------- | ---------------------------------------------------- |
| `push()`      | Adds elements to the **end** of an array             |
| `pop()`       | Removes the **last** element                         |
| `unshift()`   | Adds elements to the **beginning**                   |
| `shift()`     | Removes the **first** element                        |
| `splice()`    | Adds or removes elements                             |
| `toSpliced()` | Adds or removes elements and returns a **new array** |

### Example

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]
```

---

# 🔄 Copying & Extracting

| Method         | Description                                          |
| -------------- | ---------------------------------------------------- |
| `slice()`      | Selects part of an array and returns a **new array** |
| `copyWithin()` | Copies elements within the same array                |
| `with()`       | Returns a new array with an updated element          |

### Example

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.slice(1, 3);

console.log(result);
// [20, 30]
```

---

# 🔁 Iteration Methods

These methods are commonly used to **process each element** of an array.

| Method      | Description                                              |
| ----------- | -------------------------------------------------------- |
| `forEach()` | Calls a function for each array element                  |
| `map()`     | Creates a new array with transformed elements            |
| `filter()`  | Creates a new array containing elements that pass a test |
| `find()`    | Returns the first matching element                       |
| `some()`    | Checks if **any** element passes a test                  |
| `every()`   | Checks if **every** element passes a test                |

### Example

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.map(num => num * 2);

console.log(result);
// [20, 40, 60, 80]
```

---

# 🧮 Reduce Methods

| Method          | Description                                               |
| --------------- | --------------------------------------------------------- |
| `reduce()`      | Reduces array values to a single value from left to right |
| `reduceRight()` | Reduces array values to a single value from right to left |

### Example

```javascript
let numbers = [10, 20, 30];

let total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
// 60
```

### Flow

```text
10 + 20 + 30
     ↓
    60
```

---

# 🔀 Sorting & Reversing

| Method         | Description                          |
| -------------- | ------------------------------------ |
| `sort()`       | Sorts the elements of an array       |
| `reverse()`    | Reverses the array                   |
| `toSorted()`   | Sorts and returns a **new array**    |
| `toReversed()` | Reverses and returns a **new array** |

### Important Difference

```javascript
let numbers = [3, 1, 2];

numbers.sort();

console.log(numbers);
// [1, 2, 3]
```

`sort()` changes the **original array**.

### `toSorted()`

```javascript
let numbers = [3, 1, 2];

let sorted = numbers.toSorted();

console.log(numbers);
// [3, 1, 2]

console.log(sorted);
// [1, 2, 3]
```

`toSorted()` creates a **new array**.

---

# 🔗 Combining Arrays

| Method      | Description                                 |
| ----------- | ------------------------------------------- |
| `concat()`  | Joins arrays and returns a new array        |
| `flat()`    | Flattens nested arrays                      |
| `flatMap()` | Maps elements and creates a flattened array |

### Example — `concat()`

```javascript
let fruits = ["Apple", "Banana"];
let vegetables = ["Potato", "Tomato"];

let result = fruits.concat(vegetables);

console.log(result);

// ["Apple", "Banana", "Potato", "Tomato"]
```

### Example — `flat()`

```javascript
let numbers = [1, [2, 3], [4, 5]];

console.log(numbers.flat());

// [1, 2, 3, 4, 5]
```

---

# ✏️ Filling & Replacing

| Method         | Description                                               |
| -------------- | --------------------------------------------------------- |
| `fill()`       | Fills array elements with a static value                  |
| `copyWithin()` | Copies elements to another position within the same array |
| `with()`       | Returns a new array with an updated element               |

### Example — `fill()`

```javascript
let numbers = [1, 2, 3, 4];

numbers.fill(0);

console.log(numbers);

// [0, 0, 0, 0]
```

---

# 🔤 Converting Arrays

| Method       | Description                              |
| ------------ | ---------------------------------------- |
| `join()`     | Joins array elements into a string       |
| `toString()` | Converts an array into a string          |
| `valueOf()`  | Returns the primitive value of the array |

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));

// Apple, Banana, Mango
```

---

# 🔢 Array Information

| Property / Method | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `length`          | Returns the number of elements                             |
| `keys()`          | Returns an iterator containing array indexes               |
| `entries()`       | Returns an iterator containing key/value pairs             |
| `constructor`     | Returns the function that created the Array prototype      |
| `prototype`       | Allows properties and methods to be added to Array objects |

### Example — `length`

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);

// 3
```

---

# 🧠 Quick Revision

### 📌 Create

```text
[]          → Create Array
new Array() → Create Array
from()      → Create from iterable/object
of()        → Create from arguments
```

### 📌 Search

```text
at()
indexOf()
lastIndexOf()
includes()
find()
findIndex()
findLast()
findLastIndex()
```

### 📌 Add / Remove

```text
push()      → Add at end
pop()       → Remove from end

unshift()   → Add at beginning
shift()     → Remove from beginning

splice()    → Add/Remove
toSpliced() → Add/Remove → New Array
```

### 📌 Process

```text
forEach() → Execute for each element
map()     → Transform elements
filter()  → Select elements
some()    → At least one?
every()   → All?
reduce()  → Convert to one value
```

### 📌 Modify / Sort

```text
sort()
reverse()
fill()
copyWithin()
```

### 📌 Non-Mutating Alternatives

```text
toSorted()
toReversed()
toSpliced()
with()
```

> 💡 **Important:** `toSorted()`, `toReversed()`, `toSpliced()` and `with()` return a **new array** instead of changing the original array.

---

# 🎯 Most Important Methods for Beginners

If you are learning JavaScript/LWC, first focus on these:

```text
1. push()
2. pop()
3. shift()
4. unshift()
5. slice()
6. splice()
7. forEach()
8. map()
9. filter()
10. find()
11. findIndex()
12. includes()
13. reduce()
14. sort()
15. some()
16. every()
```

> 🚀 **Learning Tip:** Don't try to memorize all Array methods at once. First understand **map(), filter(), forEach(), find(), reduce(), slice(), and splice()** because these are frequently used in JavaScript and LWC.
