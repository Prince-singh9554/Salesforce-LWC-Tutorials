// This file explains the different use cases of Error Handling in JavaScript.
// It covers try, catch, finally, throw, Error object, custom validation,
// JSON parsing, functions, and real-life examples.

// ============================== 1. try...catch ==================================

console.log("----- 1. try...catch -----");

try {

    let userName = user;

    console.log("Username:", userName);

}
catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}



// ============================== 2. try...catch...finally ==================================

console.log("\n----- 2. try...catch...finally -----");

try {

    let number1 = 20;
    let number2 = 5;

    let result = number1 / number2;

    console.log("Result:", result);

}
catch (error) {

    console.log("Something went wrong:", error.message);

}
finally {

    console.log("Calculation process completed");

}



// ============================== 3. throw Statement ==================================

console.log("\n----- 3. throw Statement -----");

function checkAge(age) {

    if (age < 18) {

        throw new Error("Age must be 18 or above");

    }

    console.log("You are eligible.");
}

try {

    checkAge(16);

}
catch (error) {

    console.log("Error:", error.message);

}



// ============================== 4. Real-Life Login Validation ==================================

console.log("\n----- 4. Real-Life Login Validation -----");

function login(email, password) {

    try {

        if (email === "") {

            throw new Error("Email is required");

        }

        if (password === "") {

            throw new Error("Password is required");

        }

        if (!email.includes("@")) {

            throw new Error("Invalid email format");

        }

        if (password.length < 6) {

            throw new Error("Password must contain at least 6 characters");

        }

        console.log("Login Successful");

    }
    catch (error) {

        console.log("Login Failed:", error.message);

    }
}

login("prince@gmail.com", "123456");
login("", "123456");
login("princegmail.com", "123456");
login("prince@gmail.com", "123");




// ============================== 5. JSON Parsing Error ==================================

console.log("\n----- 5. JSON Parsing Error -----");

let jsonData = '{"name":"Prince","age":22';

try {

    let userData = JSON.parse(jsonData);

    console.log("Name:", userData.name);
    console.log("Age:", userData.age);

}
catch (error) {

    console.log("JSON Error:", error.message);

}




// ============================== 6. Function with Error Handling ==================================

console.log("\n----- 6. Function with Error Handling -----");

function divideNumbers(number1, number2) {

    try {

        if (number2 === 0) {

            throw new Error("Cannot divide by zero");

        }

        let result = number1 / number2;

        return result;

    }
    catch (error) {

        console.log("Division Error:", error.message);

        return null;
    }
}

let result1 = divideNumbers(100, 5);
let result2 = divideNumbers(100, 0);

console.log("Result 1:", result1);
console.log("Result 2:", result2);




// ============================== 7. Bank Account Example ==================================

console.log("\n----- 7. Bank Account Example -----");

let account = {

    holderName: "Prince",
    balance: 10000,

    withdraw: function (amount) {

        try {

            if (amount <= 0) {

                throw new Error("Withdrawal amount must be greater than 0");

            }

            if (amount > this.balance) {

                throw new Error("Insufficient balance");

            }

            this.balance = this.balance - amount;

            console.log(
                "₹" + amount +
                " withdrawn successfully"
            );

            console.log(
                "Remaining Balance: ₹" + this.balance
            );

        }
        catch (error) {

            console.log(
                "Transaction Failed:",
                error.message
            );

        }
    }
};

account.withdraw(3000);
account.withdraw(10000);
account.withdraw(-500);



// ============================== 8. Custom Error Type ==================================

console.log("\n----- 8. Custom Error Type -----");

function validateMarks(marks) {

    if (marks < 0 || marks > 100) {

        throw new RangeError(
            "Marks must be between 0 and 100"
        );

    }

    console.log("Valid Marks:", marks);
}

try {

    validateMarks(120);

}
catch (error) {

    console.log("Error Type:", error.name);
    console.log("Error Message:", error.message);

}



// ============================== 9. Nested try...catch ==================================

console.log("\n----- 9. Nested try...catch -----");

try {

    console.log("Outer try started");

    try {

        let data = JSON.parse('{"name":"Prince"');

        console.log(data);

    }
    catch (error) {

        console.log("Inner Error:", error.message);

    }

    console.log("Outer try continues");

}
catch (error) {

    console.log("Outer Error:", error.message);

}



// ============================== 10. Complete Real-Life Example ==================================

console.log("\n----- 10. Complete Student Registration Example -----");

function registerStudent(student) {

    try {

        if (!student.name) {

            throw new Error("Student name is required");

        }

        if (!student.email) {

            throw new Error("Student email is required");

        }

        if (!student.email.includes("@")) {

            throw new Error("Invalid email address");

        }

        if (!student.age) {

            throw new Error("Student age is required");

        }

        if (student.age < 18) {

            throw new Error(
                "Student must be 18 or older"
            );

        }

        console.log("Student Registration Successful");

        console.log("Name:", student.name);
        console.log("Email:", student.email);
        console.log("Age:", student.age);

    }
    catch (error) {

        console.log(
            "Registration Failed:",
            error.message
        );

    }
    finally {

        console.log("Registration process completed");

    }
}

let student1 = {
    name: "Prince",
    email: "prince@gmail.com",
    age: 22
};

let student2 = {
    name: "Rahul",
    email: "rahulgmail.com",
    age: 17
};

registerStudent(student1);

console.log("\n-----------------------------");

registerStudent(student2);
