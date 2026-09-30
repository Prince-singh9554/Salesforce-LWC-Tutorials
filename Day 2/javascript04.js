// =========================== Object Demo =================================
const person = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);
console.log(person.fullName());

// ============================== A JavaScript object is a collection of properties and  ==================================
// ============================== that Properties can be changed, added, and deleted ======================================
let student = {
    name: "Prince",
    age: 22
};

student.age = 23;   // change property
student.city = "Lucknow";   // add property
delete student.age;   // delete property
console.log(student);


// ==================== JavaScript Object Methods ===========================
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};
console.log(person1.getId());


// ============================= Use of keys(), values() and entries() ================================
let details = {
  name: "Prince",
  age: 22,
  gender: 'Male'
};
console.log(Object.keys(details));
console.log(Object.values(details));
console.log(Object.entries(details));
console.log(typeof Object.entries(details));    // return object in all cases whether for keys(), values() or entries
