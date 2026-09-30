// Function Expression Demo
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Prince"));   // Output: Hello Prince


// ========================= Function (Simple Method) ===============================
function addition(num1,num2,num3=5){
    num4 = 10;
    return num1+num2+num3+num4;
}

console.log(addition(12,22)); // It take 5 as default parameter and Output: 49
console.log(addition(12,22,6));   // It take 6 as parameter and Output: 50

// ========================== Function Expression ==========================
const greeting = function(){
    let age = 22;
    console.log('Hello, I am ' + age + ' years old');
}
console.log(greeting);  // Output: [Function: greeting]
greeting();  // Output: Hello, I am 22 years old


// ================ Arrow Fuction ==========================
const greetingMessage = () => {
    let age = 22;
    console.log('Hello, I am ' + age + ' years old');
}
greetingMessage();
