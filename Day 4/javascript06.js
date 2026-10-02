// This file contains examples of different types of loops in JavaScript, including for loop, while loop, do...while loop, for...of loop, for...in loop, and forEach() method.
// It also demonstrates the use of break and continue statements within loops.

// ============================== 1. for Loop ==================================


console.log("----- 1. for Loop -----");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}



// ============================== 2. while Loop ==================================


console.log("----- 2. while Loop -----");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



// ============================== 3. do...while Loop ==================================


console.log("----- 3. do...while Loop -----");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);



// ============================== 4. for...of Loop ==================================


console.log("----- 4. for...of Loop -----");

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}



// ============================== 5. for...in Loop ==================================


console.log("----- 5. for...in Loop -----");

let student = {
    name: "Prince",
    age: 22,
    course: "B.Tech"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}



// ============================== 6. forEach() ==================================


console.log("----- 6. forEach() -----");

let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});



// ============================== break ==================================


console.log("----- break -----");

for (let num = 1; num <= 10; num++) {

    if (num === 6) {
        break;
    }

    console.log(num);
}



// ============================== continue ==================================


console.log("----- continue -----");

for (let num = 1; num <= 10; num++) {

    if (num === 6) {
        continue;
    }

    console.log(num);
}