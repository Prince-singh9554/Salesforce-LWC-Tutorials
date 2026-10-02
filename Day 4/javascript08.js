// This file explains the different use cases of the `this` keyword in JavaScript.
// It covers `this` in object methods, multiple objects, constructor functions,
// classes, call/apply/bind, and arrow functions.
// Each example is slightly complex to make the concept clear.

// ============================== 1. this in Object Method ==================================

console.log("----- 1. this in Object Method -----");

let student = {
    name: "Prince",
    age: 22,
    course: "B.Tech",

    displayInfo: function () {
        console.log("Name   :", this.name);
        console.log("Age    :", this.age);
        console.log("Course :", this.course);
    }
};

student.displayInfo();


// ============================== 2. Same Function with Multiple Objects ==================================

console.log("\n----- 2. Same Function with Multiple Objects -----");

function introduce() {
    console.log("Name :", this.name);
    console.log("Role :", this.role);
    console.log("City :", this.city);
}

let developer = {
    name: "Prince",
    role: "Python Developer",
    city: "Lucknow"
};

let salesforceDeveloper = {
    name: "Rahul",
    role: "Salesforce Developer",
    city: "Delhi"
};

developer.introduce = introduce;            // Here, in developer.introduce() introduce is a key  and "introduce" on right side behaves like a value. So, we are assigning the function introduce to the key introduce of developer object.
salesforceDeveloper.introduce = introduce;      // Same here

developer.introduce();          // Here the function actually called and the value of `this` is developer object. So, it will print the values of developer object.
salesforceDeveloper.introduce();        // same here



// ============================== 3. this in Constructor Function ==================================

console.log("\n----- 3. this in Constructor Function -----");

function Employee(name, department, salary) {

    this.name = name;
    this.department = department;
    this.salary = salary;

    this.displaySalary = function () {
        console.log(this.name + " earns ₹" + this.salary);
    };
}

let employee1 = new Employee("Prince", "Development", 50000);
let employee2 = new Employee("Aman", "Testing", 45000);

console.log(employee1.name);
console.log(employee1.department);

console.log(employee2.name);
console.log(employee2.department);

employee1.displaySalary();
employee2.displaySalary();



// ============================== 4. this in Class ==================================

console.log("\n----- 4. this in Class -----");

class BankAccount {

    constructor(accountHolder, balance) {

        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {

        this.balance = this.balance + amount;

        console.log(
            this.accountHolder +
            " deposited ₹" +
            amount +
            ". Current Balance = ₹" +
            this.balance
        );
    }

    withdraw(amount) {

        if (amount <= this.balance) {

            this.balance = this.balance - amount;

            console.log(
                this.accountHolder +
                " withdrew ₹" +
                amount +
                ". Current Balance = ₹" +
                this.balance
            );

        } else {

            console.log("Insufficient Balance");
        }
    }
}

let account1 = new BankAccount("Prince", 10000);

account1.deposit(3000);
account1.withdraw(2500);



// ============================== 5. this with call(), apply() and bind() ==================================

console.log("\n----- 5. this with call(), apply() and bind() -----");

function employeeDetails(company, experience) {

    console.log("Name       :", this.name);
    console.log("Role       :", this.role);
    console.log("Company    :", company);
    console.log("Experience :", experience + " years");
}

let person1 = {
    name: "Prince",
    role: "Python Developer"
};

let person2 = {
    name: "Rahul",
    role: "Salesforce Developer"
};


// ---------- call() ----------

console.log("\n--- Using call() ---");

employeeDetails.call(person1,"ABC Technologies",2);         // call() executes the function immediately and `this` is set to person1.


// ---------- apply() ----------

console.log("\n--- Using apply() ---");

employeeDetails.apply(person2,["XYZ Solutions", 3]);            // apply() works similar to call().



// ---------- bind() ----------

console.log("\n--- Using bind() ---");

let showPerson1 = employeeDetails.bind(person1,"Tech Company",2);       // bind() returns a new function with `this` set to person1. It does not execute the function immediately. We can call the new function later.

showPerson1();



// ============================== 6. this in Regular Function and Arrow Function ==================================

console.log("\n----- 6. this in Regular Function and Arrow Function -----");

let user = {

    name: "Prince",

    regularFunction: function () {

        console.log("Regular Function:");
        console.log("this.name =", this.name);

        let arrowFunction = () => {

            console.log("Arrow Function:");
            console.log("this.name =", this.name);
        };

        arrowFunction();
    }
};

user.regularFunction();


// ============================== 7. Real-Life Example: Shopping Cart ==================================

console.log("\n----- 7. Real-Life Example: Shopping Cart -----");

let shoppingCart = {

    customerName: "Prince",

    products: [
        {
            name: "Laptop",
            price: 60000
        },
        {
            name: "Mouse",
            price: 1000
        },
        {
            name: "Keyboard",
            price: 2000
        }
    ],

    calculateTotal: function () {

        let total = 0;

        this.products.forEach((product) => {

            total = total + product.price;
        });

        console.log("Customer :", this.customerName);
        console.log("Total    : ₹" + total);
    }
};

shoppingCart.calculateTotal();

