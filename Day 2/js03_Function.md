# Funtion in JavaScript
---
- Functions are Code Blocks.
- Functions are reusable code blocks designed to perform a particular task. 
- Functions are executed when they are called or invoked. 
- Functions are fundamental in all programming languages. 

### Function Declaration
- A function can be defined using the function keyword, followed by a name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.


### Function Syntax
```javascript
function name( p1, p2, ... ) {
  // code to be executed
}
```
**Key points:**
- Parameters -> The names listed in the function definition
- Arguments -> The values sent to the function when it is called
- Function Code -> The work done inside the function
- Return Output -> The value returned from the function


## Parameter passed in function Definition
> In function calling we pass an Argument and in function definition function accept that argument as a parameter.

**General Function**
```javascript
function addition(num1,num2,num3=5){
    num4 = 10;
    return num1+num2+num3+num4;
}

totalSum = addition(12,22);
console.log(totalSum);
```

**Function Expression**
```javascript
const greeting = function(){
    let age = 22;
    console.log('Hello, I am ' + age + ' years old');
}
console.log(greeting);
```

**Arrow Function**
```javascript
const greetingMessage = () => {
    let age = 22;
    console.log('Hello, I am ' + age + ' years old');
}
greetingMessage();
```

---
