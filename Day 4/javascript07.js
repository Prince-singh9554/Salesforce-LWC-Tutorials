// This file contains examples of different use cases of the Spread Operator
// in JavaScript, including copying arrays, combining arrays, adding elements,
// copying objects, combining objects, updating objects, passing array values
// to functions, and converting strings into arrays.


// ============================== 1. Copy an Array ==================================


console.log("----- 1. Copy an Array -----");

let numbers = [10, 20, 30, 40];

let copiedNumbers = [...numbers];

console.log("Original Array:", numbers);
console.log("Copied Array:", copiedNumbers);



// ============================== 2. Combine Two Arrays ==================================


console.log("----- 2. Combine Two Arrays -----");

let fruits = ["Apple", "Banana", "Mango"];

let vegetables = ["Potato", "Tomato", "Carrot"];

let foodItems = [...fruits, ...vegetables];

console.log("Combined Array:", foodItems);



// ============================== 3. Add New Elements to an Array ==================================


console.log("----- 3. Add New Elements to an Array -----");

let originalNumbers = [20, 30, 40];

let newNumbers = [10, ...originalNumbers, 50];

console.log("Original Array:", originalNumbers);
console.log("New Array:", newNumbers);



// ============================== 4. Copy an Object ==================================


console.log("----- 4. Copy an Object -----");

let student = {
    name: "Prince",
    age: 22,
    course: "B.Tech"
};

let copiedStudent = {
    ...student
};

console.log("Original Object:", student);
console.log("Copied Object:", copiedStudent);



// ============================== 5. Combine Two Objects ==================================


console.log("----- 5. Combine Two Objects -----");

let personalDetails = {
    name: "Prince",
    age: 22
};

let addressDetails = {
    city: "Lucknow",
    state: "Uttar Pradesh"
};

let studentDetails = {
    ...personalDetails,
    ...addressDetails
};

console.log("Combined Object:", studentDetails);



// ============================== 6. Update Object Property ==================================


console.log("----- 6. Update Object Property -----");

let user = {
    name: "Prince",
    age: 22,
    city: "Lucknow"
};

let updatedUser = {
    ...user,
    age: 23
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);



// ============================== 7. Add New Property to an Object ==================================


console.log("----- 7. Add New Property to an Object -----");

let employee = {
    name: "Prince",
    department: "IT"
};

let updatedEmployee = {
    ...employee,
    salary: 50000
};

console.log("Original Employee:", employee);
console.log("Updated Employee:", updatedEmployee);



// ============================== 8. Pass Array Values to a Function ==================================


console.log("----- 8. Pass Array Values to a Function -----");

let marks = [85, 90, 78, 95];

let highestMarks = Math.max(...marks);

console.log("Marks:", marks);
console.log("Highest Marks:", highestMarks);



// ============================== 9. Convert String into an Array ==================================


console.log("----- 9. Convert String into an Array -----");

let name = "Prince";

let characters = [...name];

console.log("Original String:", name);
console.log("Characters Array:", characters);



// ============================== 10. Merge Multiple Arrays ==================================


console.log("----- 10. Merge Multiple Arrays -----");

let first = [1, 2, 3];

let second = [4, 5, 6];

let third = [7, 8, 9];

let allNumbers = [
    ...first,
    ...second,
    ...third
];

console.log("Merged Array:", allNumbers);



// ============================== 11. Find Minimum Value ==================================


console.log("----- 11. Find Minimum Value -----");

let prices = [500, 250, 800, 150, 1000];

let minimumPrice = Math.min(...prices);

console.log("Prices:", prices);
console.log("Minimum Price:", minimumPrice);



// ============================== 12. Add Array Elements at Different Positions ==================================


console.log("----- 12. Add Array Elements at Different Positions -----");

let students = ["Aman", "Rahul", "Rohit"];

let updatedStudents = [
    "Priya",
    ...students,
    "Neha"
];

console.log("Original Students:", students);
console.log("Updated Students:", updatedStudents);