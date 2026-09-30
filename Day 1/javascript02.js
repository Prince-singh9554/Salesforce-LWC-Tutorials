// let fruits = ['apple', 'banana', 'orange'];
// let numbers = [1, 2, 3, 4, 5];
// const points1 = new Array(40, 100, 1, 5, 25, 10);
// const points2 = [40, 100, 1, 5, 25, 10];
// console.log(fruits);
// console.log(numbers);
// console.log(points1);
// console.log(points2);


// ============================== Array creation ===========================================

/*
Method	Description
[]	--->  Creates a new Array
new Array()	--->  Creates a new Array
Array.from()	--->  Creates an array from an object
Array.of()	--->  Creates an array from a number of arguments
Array.isArray()	--->  Checks whether an object is an array    */

let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1);


let fruits2 = new Array("Apple", "Banana", "Mango");
console.log(fruits2);


let text = "HELLO";
let fruits3 = Array.from(text);
console.log(fruits3);


let number = Array.of(10, 20, 30);
console.log(number);


let fruits4 = ["Apple", "Banana", "Mango"];
let name = "Prince";
console.log(Array.isArray(fruits4));
console.log(Array.isArray(name));


// ===================================== Accessing & Searching =======================================
/*
Method	Description
at()	--->  Returns an element at a specified index
indexOf()	---> Searches for an element and returns its position
lastIndexOf()	---> Searches from the end and returns the position
includes()	---> Checks whether an array contains a specified element
find()	---> Returns the first element that passes a test
findIndex()	---> Returns the index of the first element that passes a test
findLast()	---> Returns the last element that passes a test
findLastIndex()	---> Returns the index of the last element that passes a test    */

let numbers = [10, 20, 30, 40, 50];
console.log(numbers.at(2));
console.log(numbers.indexOf(30));
console.log(numbers.lastIndexOf(30));
console.log(numbers.includes(40));
console.log(numbers.find(num => num > 25));
console.log(numbers.findIndex(num => num > 25));
console.log(numbers.findLast(num => num > 25));
console.log(numbers.findLastIndex(num => num > 25));




// =================================== Adding & Removing Elements =====================================
/*
Method	Description
push()	--->  Adds elements to the end of an array
pop()	--->  Removes the last element
unshift()	--->  Adds elements to the beginning
shift()	--->  Removes the first element
splice()	--->  Adds or removes elements
toSpliced()	--->  Adds or removes elements and returns a new array  */

let values = [10, 20, 30];

values.push(40);
console.log(values);

values.pop();
console.log(values);

values.unshift(5);
console.log(values);

values.shift();
console.log(values);

values.splice(1, 1, 25);
console.log(values);

let newValues = values.toSpliced(1, 1, 100);
console.log(values);
console.log(newValues);


// =================================== Copying & Extracting ===================================
/*
Method	Description
slice()	--->  Selects part of an array and returns a new array
copyWithin()	--->  Copies elements within the same array
with()	--->  Returns a new array with an updated element   */

let scores = [10, 20, 30, 40, 50];

let selectedScores = scores.slice(1, 4);
console.log(selectedScores);

scores.copyWithin(0, 3);
console.log(scores);

let updatedScores = scores.with(2, 100);
console.log(updatedScores);


// ================================ Sorting & Reversing ==================================
/*
Method	Description
sort()	--->  Sorts the elements of an array
reverse()	--->  Reverses the array
toSorted()	--->  Sorts and returns a new array
toReversed()	--->  Reverses and returns a new array */

let prices = [50, 20, 40, 10, 30];

prices.sort();
console.log(prices);

prices.reverse();
console.log(prices);

let sortedPrices = prices.toSorted();
console.log(sortedPrices);

let reversedPrices = prices.toReversed();
console.log(reversedPrices);




// ================================ Combining Arrays ==============================
/*
Method	Description
concat()	--->  Joins arrays and returns a new array
flat()	--->  Flattens nested arrays
flatMap()	--->  Maps elements and creates a flattened array */

let firstSet = [10, 20, 30];
let secondSet = [40, 50, 60];

let combinedSet = firstSet.concat(secondSet);
console.log(combinedSet);

let nestedSet = [10, [20, 30], [40, 50]];
let flatSet = nestedSet.flat();
console.log(flatSet);

let mappedSet = [1, 2, 3];
let flatMappedSet = mappedSet.flatMap(value => [value, value * 2]);
console.log(flatMappedSet);


// =========================== Converting Arrays =====================================
/*
Method	Description
join()	--->  Joins array elements into a string
toString()	--->  Converts an array into a string
valueOf()	--->  Returns the primitive value of the array */

let subjects = ["JavaScript", "LWC", "Apex"];

let subjectText = subjects.join(", ");
console.log(subjectText);

let subjectString = subjects.toString();
console.log(subjectString);

let subjectValue = subjects.valueOf();
console.log(subjectValue);