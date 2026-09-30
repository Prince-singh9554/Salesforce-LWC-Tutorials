# **Object in JavaScript**
- Objects are variables that can store both values and functions.
- Values are stored as key:value pairs called properties.
- Functions are stored as key:function() pairs called methods.

**Notation**
```javascript
let object_name = {
  property_1: value_1,
  property_2: value_2,
  property_3: value_3,
  ...
  property_n: value_n
};
```

**Example**
```javascript
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
```
Here,
- type, model, and color ---> properties
- "Fiat", "500", and "white" ---> property values

### **Create an empty object, and add the properties later**
```javascript
// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

### **Create a new JavaScript object using new Object():**
```javascript
// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});

```
#### **KeyPoint** :- A JavaScript object is a collection of properties and that Properties can be changed, added, and deleted.
```javascript
let student = {
    name: "Prince",
    age: 22
};

student.age = 23;
student.city = "Lucknow";
delete student.age;
console.log(student);
```



# **JavaScript Object Methods**
> - Methods are actions that can be performed on objects and the Methods are functions stored as property values.

**Example**
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

### **Use of keys(), values() and entries()**
These function return an array
```javascript
let details = {
  name: "Prince",
  age: 22,
  gender: 'Male'
};
console.log(Object.keys(details));    // [ 'name', 'age', 'gender' ]
console.log(Object.values(details));    // [ 'Prince', 22, 'Male' ]
console.log(Object.entries(details));   // [ [ 'name', 'Prince' ], [ 'age', 22 ], [ 'gender', 'Male' ] ]
```