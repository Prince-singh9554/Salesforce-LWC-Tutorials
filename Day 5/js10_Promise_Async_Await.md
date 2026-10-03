# **JavaScript Promise, Async and Await**

## **Why Do We Need Promises?**

JavaScript executes normal code from top to bottom.

```javascript
console.log("Start");

console.log("Process");

console.log("End");
```

Output:

```text
Start
Process
End
```

However, some operations take time to complete, such as:

* API requests
* Database operations
* File operations
* Timers
* Server requests
* Fetching data

These are called **asynchronous operations**.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Data Received");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Data Received
```

JavaScript does not stop the entire program while waiting for the asynchronous operation.

**Promises** provide a structured way to handle the future result of such operations.

---

# **Promise**

### **Definition**

A **Promise** is an object that represents the eventual result of an asynchronous operation.

A Promise can have three states:

```text
             Promise
                |
        -----------------
        |       |       |
     Pending Fulfilled Rejected
              Success   Failure
```

### **Real-Life Example**

Think about ordering a product online:

```text
Order Placed
     ↓
   Pending
     ↓
 ┌───┴────┐
 ↓        ↓
Success   Failure
 ↓        ↓
Delivered Cancelled
```

The Promise works in a similar way.

---

# **Promise States**

### **Pending**

The operation is still in progress.

```text
Request Started
      ↓
   Pending
```

### **Fulfilled**

The operation completed successfully.

```text
Request
   ↓
Success
   ↓
Fulfilled
```

### **Rejected**

The operation failed.

```text
Request
   ↓
Failure
   ↓
Rejected
```

Once a Promise becomes **fulfilled** or **rejected**, its state cannot change again.

---

# **Creating a Promise**

### **Syntax**

```javascript
let promise = new Promise((resolve, reject) => {

    // asynchronous operation

});
```

A Promise constructor receives two functions:

```text
resolve → Success
reject  → Failure
```

### **Example**

```javascript
let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {

        resolve("Operation Successful");

    }
    else {

        reject("Operation Failed");

    }

});
```

If `success` is `true`:

```javascript
resolve("Operation Successful");
```

The Promise becomes **fulfilled**.

If `success` is `false`:

```javascript
reject("Operation Failed");
```

The Promise becomes **rejected**.

---

# **Consuming a Promise**

Creating a Promise is only one part.

We also need to handle its result.

Common Promise methods are:

```text
.then()
.catch()
.finally()
```

---

# **`.then()`**

`.then()` handles the successful result of a Promise.

### **Example**

```javascript
let promise = new Promise((resolve, reject) => {

    resolve("Data received successfully");

});

promise.then((result) => {

    console.log(result);

});
```

Output:

```text
Data received successfully
```

### **Flow**

```text
Promise
   ↓
resolve()
   ↓
.then()
   ↓
Success Result
```

---

# **`.catch()`**

`.catch()` handles a rejected Promise.

```javascript
let promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});

promise.catch((error) => {

    console.log(error);

});
```

Output:

```text
Something went wrong
```

### **Flow**

```text
Promise
   ↓
reject()
   ↓
.catch()
   ↓
Handle Error
```

---

# **`.finally()`**

`.finally()` executes whether the Promise succeeds or fails.

```javascript
let promise = new Promise((resolve, reject) => {

    resolve("Operation Successful");

});

promise
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    })
    .finally(() => {

        console.log("Process Completed");

    });
```

Output:

```text
Operation Successful
Process Completed
```

---

# **Promise with `setTimeout()`**

Promises are commonly used to represent operations that finish later.

```javascript
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("Data loaded after 2 seconds");

    }, 2000);

});

promise.then((result) => {

    console.log(result);

});
```

### **Flow**

```text
Promise Created
      ↓
setTimeout()
      ↓
Wait 2 seconds
      ↓
resolve()
      ↓
.then()
      ↓
Display Result
```

---

# **Promise with a Condition**

Promises can also be used to handle success and failure based on a condition.

```javascript
function checkPayment(amount) {

    return new Promise((resolve, reject) => {

        if (amount > 0) {

            resolve("Payment Successful");

        }
        else {

            reject("Invalid Payment Amount");

        }

    });

}

checkPayment(500)
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    });
```

Output:

```text
Payment Successful
```

---

# **Promise Chaining**

Promise chaining allows multiple asynchronous operations to be executed in sequence.

```javascript
function stepOne() {

    return Promise.resolve("Step One Completed");

}

function stepTwo(message) {

    return Promise.resolve(
        message + " → Step Two Completed"
    );

}

function stepThree(message) {

    return Promise.resolve(
        message + " → Step Three Completed"
    );

}

stepOne()
    .then((result) => {

        console.log(result);

        return stepTwo(result);

    })
    .then((result) => {

        console.log(result);

        return stepThree(result);

    })
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log("Error:", error);

    });
```

### **Flow**

```text
stepOne()
   ↓
.then()
   ↓
stepTwo()
   ↓
.then()
   ↓
stepThree()
   ↓
.then()
   ↓
Final Result
```

**Important:**
When the next `.then()` needs the result of the previous operation, return the next Promise from the previous `.then()`.

---

# **Promise vs Callback**

Before Promises, asynchronous operations were commonly handled with callbacks.

```javascript
getData(function(data) {

    processData(data, function(result) {

        saveData(result, function(response) {

            console.log(response);

        });

    });

});
```

Deeply nested callbacks can make code difficult to understand. This is commonly called **Callback Hell**.

With Promises:

```javascript
getData()
    .then(processData)
    .then(saveData)
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    });
```

The flow becomes easier to follow.

---

# **`async`**

The `async` keyword is used to create an **async function**.

### **Syntax**

```javascript
async function functionName() {

}
```

### **Example**

```javascript
async function greet() {

    return "Hello Prince";

}

greet().then((message) => {

    console.log(message);

});
```

Output:

```text
Hello Prince
```

### **Important Rule**

An `async` function **always returns a Promise**.

For example:

```javascript
async function getNumber() {

    return 100;

}
```

Conceptually:

```text
getNumber()
     ↓
 Promise
     ↓
   100
```

---

# **`async` with an Object**

```javascript
async function getUser() {

    return {
        name: "Prince",
        age: 22
    };

}

getUser().then((user) => {

    console.log(user.name);
    console.log(user.age);

});
```

Output:

```text
Prince
22
```

---

# **`await`**

The `await` keyword waits for a Promise to settle and gives you its fulfilled value.

It is normally used inside an `async` function.

### **Syntax**

```javascript
let result = await promise;
```

### **Example**

```javascript
function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data Received");

        }, 2000);

    });

}

async function displayData() {

    let result = await getData();

    console.log(result);

}

displayData();
```

### **Flow**

```text
displayData()
      ↓
await getData()
      ↓
Promise Pending
      ↓
Wait for Promise
      ↓
Promise Fulfilled
      ↓
result receives data
      ↓
console.log()
```

---

# **Why Is `await` Useful?**

Without `await`:

```javascript
getData()
    .then((result) => {

        console.log(result);

    });
```

With `await`:

```javascript
let result = await getData();

console.log(result);
```

`async/await` makes sequential asynchronous code look more like normal synchronous code, which often makes it easier to read.

---

# **`async` + `await` Together**

This is the most common usage.

```javascript
function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Prince",
                age: 22
            });

        }, 2000);

    });

}

async function showUser() {

    let user = await getUser();

    console.log("Name:", user.name);
    console.log("Age:", user.age);

}

showUser();
```

### **Flow**

```text
showUser()
    ↓
await getUser()
    ↓
Wait
    ↓
User data received
    ↓
user variable
    ↓
Display data
```

---

# **Error Handling with `async/await`**

The most common way to handle errors with `async/await` is `try...catch`.

```javascript
function getData() {

    return new Promise((resolve, reject) => {

        let success = false;

        if (success) {

            resolve("Data received");

        }
        else {

            reject("Failed to load data");

        }

    });

}

async function displayData() {

    try {

        let result = await getData();

        console.log(result);

    }
    catch (error) {

        console.log("Error:", error);

    }

}

displayData();
```

### **Flow**

```text
async function
      ↓
await Promise
      ↓
 ┌────┴─────┐
 ↓          ↓
Success    Error
 ↓          ↓
Continue   catch
            ↓
       Handle Error
```

---

# **`async/await` with `finally`**

```javascript
async function processData() {

    try {

        let result = await getData();

        console.log(result);

    }
    catch (error) {

        console.log("Error:", error);

    }
    finally {

        console.log("Process Completed");

    }

}
```

`finally` executes in both success and failure cases.

---

# **Sequential `await`**

When multiple `await` statements are written one after another, the later operation waits for the earlier one.

```javascript
function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("User Data");

        }, 2000);

    });

}

function getOrders() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Order Data");

        }, 2000);

    });

}

async function loadData() {

    let user = await getUser();

    console.log(user);

    let orders = await getOrders();

    console.log(orders);

}

loadData();
```

### **Flow**

```text
getUser()
   ↓
Wait 2 seconds
   ↓
User Data
   ↓
getOrders()
   ↓
Wait 2 seconds
   ↓
Order Data
```

Approximate waiting time:

```text
2 seconds + 2 seconds = 4 seconds
```

This is appropriate when the second operation **depends on the result of the first**.

---

# **Parallel Promises with `Promise.all()`**

If multiple operations are independent, they can be started together.

```javascript
async function loadData() {

    let [user, orders] = await Promise.all([
        getUser(),
        getOrders()
    ]);

    console.log(user);
    console.log(orders);

}
```

### **Flow**

```text
               Promise.all()
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
       getUser()          getOrders()
          ↓                   ↓
       2 seconds           2 seconds
          └─────────┬─────────┘
                    ↓
              Both complete
                    ↓
                 Continue
```

The approximate time can be close to:

```text
max(2, 2) = 2 seconds
```

instead of approximately 4 seconds.

---

# **`Promise.all()`**

`Promise.all()` waits for multiple Promises.

```javascript
Promise.all([
    promise1,
    promise2,
    promise3
])
.then((results) => {

    console.log(results);

})
.catch((error) => {

    console.log(error);

});
```

### **Important**

`Promise.all()` is fulfilled only when **all Promises are fulfilled**.

If one Promise rejects, the combined Promise rejects.

---

# **`Promise.allSettled()`**

`Promise.allSettled()` waits for all Promises and reports the result of each one, whether fulfilled or rejected.

```javascript
let promises = [

    Promise.resolve("User Loaded"),

    Promise.reject("Orders Failed"),

    Promise.resolve("Products Loaded")

];

Promise.allSettled(promises)
    .then((results) => {

        console.log(results);

    });
```

The results contain statuses such as:

```text
fulfilled
rejected
fulfilled
```

---

# **`Promise.race()`**

`Promise.race()` settles when the **first Promise settles**.

```javascript
let promise1 = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Promise 1");

    }, 3000);

});

let promise2 = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Promise 2");

    }, 1000);

});

Promise.race([
    promise1,
    promise2
])
.then((result) => {

    console.log(result);

});
```

Output:

```text
Promise 2
```

Because Promise 2 settles first.

---

# **`Promise.any()`**

`Promise.any()` returns the first **fulfilled** Promise.

```javascript
let promise1 = Promise.reject("Server 1 Failed");

let promise2 = Promise.resolve("Server 2 Connected");

let promise3 = Promise.resolve("Server 3 Connected");

Promise.any([
    promise1,
    promise2,
    promise3
])
.then((result) => {

    console.log(result);

});
```

Output:

```text
Server 2 Connected
```

Rejected Promises are ignored unless all Promises reject.

---

# **Promise Methods Comparison**

| Method                 | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `Promise.all()`        | Waits for all; rejects if any Promise rejects |
| `Promise.allSettled()` | Waits for all and returns every result        |
| `Promise.race()`       | Returns the first settled Promise             |
| `Promise.any()`        | Returns the first fulfilled Promise           |

---

# **Real-Life API Example**

Suppose a dashboard needs three independent pieces of data:

* User information
* Products
* Orders

```javascript
async function loadDashboard() {

    try {

        let [user, products, orders] = await Promise.all([
            getUser(),
            getProducts(),
            getOrders()
        ]);

        console.log("User:", user);
        console.log("Products:", products);
        console.log("Orders:", orders);

    }
    catch (error) {

        console.log(
            "Dashboard loading failed:",
            error
        );

    }

}
```

### **Flow**

```text
                loadDashboard()
                      ↓
                 Promise.all()
                      ↓
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
     getUser()    getProducts()   getOrders()
        ↓             ↓             ↓
        └─────────────┼─────────────┘
                      ↓
              All successful?
                 /          \
               YES           NO
                ↓             ↓
             Continue       catch
                ↓
        Display Dashboard
```

---

# **Promise vs Async/Await**

### **Promise Style**

```javascript
getUser()
    .then((user) => {

        return getOrders(user.id);

    })
    .then((orders) => {

        console.log(orders);

    })
    .catch((error) => {

        console.log(error);

    });
```

### **Async/Await Style**

```javascript
async function loadOrders() {

    try {

        let user = await getUser();

        let orders = await getOrders(user.id);

        console.log(orders);

    }
    catch (error) {

        console.log(error);

    }

}
```

Both approaches work with Promises.

`async/await` is generally easier to read when asynchronous operations must happen in sequence.

---

# **Important Rules**

### **`async` always returns a Promise**

```javascript
async function test() {

    return 10;

}
```

Conceptually:

```text
test()
 ↓
Promise
 ↓
10
```

---

### **`await` waits for a Promise**

```javascript
let result = await promise;
```

The async function pauses at that point until the Promise settles, while JavaScript can continue handling other work outside that async function.

---

### **Handle possible errors**

```javascript
try {

    let result = await promise;

}
catch (error) {

    console.log(error);

}
```

---

### **Use `Promise.all()` for independent operations**

Instead of:

```javascript
let user = await getUser();

let products = await getProducts();
```

Consider:

```javascript
let [user, products] = await Promise.all([
    getUser(),
    getProducts()
]);
```

---
