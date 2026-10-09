# Variables in Salesforce LWC — Public, Private, and Reactive Variables

## Overview

In Salesforce Lightning Web Components (LWC), variables are used to store data and display or manage that data inside a component.

This topic covers how variables work in JavaScript classes, how data is displayed in HTML, and how components share data with one another.

The main concepts covered are:

* Public variables using `@api`
* Private variables
* Reactive variables using `@track`
* Data binding between JavaScript and HTML
* Passing data from a parent component to a child component
* Updating values and displaying changes in the UI

## Learning Objectives

After completing this topic, you should understand:

1. What variables are in LWC.
2. How public and private variables differ.
3. Why the `@api` decorator is used.
4. How the `@track` decorator works.
5. How JavaScript variables are displayed in HTML.
6. How a parent component passes values to a child component.
7. How changes in component data affect the user interface.

## Types of Variables in LWC

### Private Variables

A private variable is a property declared inside a component's JavaScript class without the `@api` decorator.

It is intended to be managed by the component itself.

**JavaScript — `variableExample.js`**

```javascript
import { LightningElement } from 'lwc';

export default class VariableExample extends LightningElement {
    studentName = 'Prince';
    age = 22;
}
```

**HTML — `variableExample.html`**

```html
<template>
    <lightning-card title="Private Variables">
        <div class="slds-p-around_medium">
            <p>Student Name: {studentName}</p>
            <p>Age: {age}</p>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

* `studentName` stores the student's name.
* `age` stores the student's age.
* `{studentName}` and `{age}` display the corresponding JavaScript property values in HTML.

**Working step by step**

1. Salesforce initializes the component.
2. The JavaScript class defines `studentName` and `age`.
3. The HTML template references both properties.
4. Salesforce renders their values in the user interface.

**Expected output**

```text
Student Name: Prince
Age: 22
```

**Why is this used?**

Private properties are useful for data that a component manages internally, such as form input values, temporary selections, and calculated results.

Note: A property without `@api` is not a public component property. It is not automatically accessible as a public property from a parent component.

## Public Variables Using `@api`

The `@api` decorator makes a property public so that a parent component can pass a value to a child component.

To use `@api`, import it from the `lwc` module.

### Child Component

**JavaScript — `variableChild.js`**

```javascript
import { LightningElement, api } from 'lwc';

export default class VariableChild extends LightningElement {
    @api studentName;
}
```

**HTML — `variableChild.html`**

```html
<template>
    <lightning-card title="Child Component">
        <div class="slds-p-around_medium">
            <p>Student Name: {studentName}</p>
        </div>
    </lightning-card>
</template>
```

### Parent Component

**HTML — `variableParent.html`**

```html
<template>
    <lightning-card title="Parent Component">
        <c-variable-child
            student-name="Prince">
        </c-variable-child>
    </lightning-card>
</template>
```

**Purpose of the code**

The parent passes the value `Prince` to the child's public property `studentName`.

**Working step by step**

1. The parent renders `<c-variable-child>`.
2. The attribute `student-name="Prince"` passes the value to the child.
3. The child's public property is named `studentName`.
4. Salesforce maps the HTML attribute `student-name` to the JavaScript property `studentName`.
5. The child template displays the received value.

**Expected output**

```text
Student Name: Prince
```

**Why is this used?**

Public properties make components reusable. The same child component can display different names depending on the value supplied by its parent.

### Important Syntax Rule

JavaScript uses camelCase for property names, while HTML attributes use kebab-case.

| JavaScript property | HTML attribute   |
| ------------------- | ---------------- |
| `studentName`       | `student-name`   |
| `userEmail`         | `user-email`     |
| `accountNumber`     | `account-number` |

## The `@track` Decorator

The `@track` decorator enables deep observation of changes to the properties of plain objects and arrays.

In modern LWC, primitive values and many property replacements are already reactive. Therefore, `@track` is generally unnecessary for simple strings, numbers, booleans, or replacing an entire object.

### Example: Tracking an Object

**JavaScript — `trackExample.js`**

```javascript
import { LightningElement, track } from 'lwc';

export default class TrackExample extends LightningElement {
    @track student = {
        name: 'Prince',
        age: 22
    };

    changeName() {
        this.student.name = 'Rahul';
    }
}
```

**HTML — `trackExample.html`**

```html
<template>
    <lightning-card title="Track Example">
        <div class="slds-p-around_medium">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>

            <lightning-button
                label="Change Name"
                onclick={changeName}>
            </lightning-button>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The code stores student details inside an object and changes one of its properties when the button is clicked.

**Working step by step**

1. The component initializes the `student` object.
2. The template displays its name and age.
3. The user clicks the **Change Name** button.
4. The `changeName()` method executes.
5. `this.student.name` changes from `Prince` to `Rahul`.
6. Because the object is tracked, the template updates to display the new name.

**Expected output after clicking the button**

```text
Name: Rahul
Age: 22
```

**Why is this used?**

It is useful when a component modifies nested properties of an object or array and those changes must be reflected in the UI.

> `@track` does not make a property public. Use `@api` for a public property and `@track` when deep observation of object or array mutations is needed.

## Private vs Public vs Reactive Variables

| Feature                                                 | Private property                   | `@api` property                    | `@track` property                            |
| ------------------------------------------------------- | ---------------------------------- | ---------------------------------- | -------------------------------------------- |
| Main purpose                                            | Internal component data            | Public component API               | Deep observation of object and array changes |
| Parent can pass a value through the component attribute | No, not as a public property       | Yes                                | Not by itself                                |
| UI updates                                              | When reactive changes are detected | When reactive changes are detected | When tracked changes affect the template     |
| Typical use                                             | Internal state                     | Parent-to-child data               | Nested object or array mutations             |

These concepts are not mutually exclusive categories. For example, a property can be both public and tracked when the use case requires it.

## Parent-to-Child Data Flow

A parent component can pass a value to a child's public property.

```text
Parent Component
       |
       | Passes a value
       v
HTML Attribute
       |
       v
Child @api Property
       |
       v
Child HTML Template
       |
       v
Value Displayed in UI
```

**Example:**

```html
<c-variable-child student-name="Prince"></c-variable-child>
```

The parent supplies the value, the child receives it through its public property, and the child template displays it.

## Updating a Variable Through a Button

Variables are often changed in response to user actions.

**JavaScript**

```javascript
import { LightningElement } from 'lwc';

export default class CounterExample extends LightningElement {
    count = 0;

    increaseCount() {
        this.count++;
    }
}
```

**HTML**

```html
<template>
    <lightning-card title="Counter Example">
        <div class="slds-p-around_medium">
            <p>Count: {count}</p>

            <lightning-button
                label="Increase"
                onclick={increaseCount}>
            </lightning-button>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

This component creates a simple counter that increases whenever the user clicks a button.

**Working step by step**

1. `count = 0` initializes the counter.
2. `{count}` displays the current value.
3. Clicking the button calls `increaseCount()`.
4. `this.count++` increases the value by one.
5. LWC detects the primitive value change and updates the displayed count.

**Expected output**

Initially:

```text
Count: 0
```

After three clicks:

```text
Count: 3
```

**Why is this used?**

The same pattern is useful for counters, quantity selectors, button-controlled values, and simple interactive interfaces.

## Important Rules to Remember

1. Import `api` from `lwc` before using `@api`.
2. A public property can receive a value from a parent component.
3. A property without `@api` is intended for internal component use.
4. Use `this.propertyName` when accessing a class property inside a JavaScript method.
5. Use `{propertyName}` to display a property in the HTML template.
6. Use `@track` when deep observation of mutations to plain objects or arrays is required.
7. Do not add `@track` automatically to every variable; modern LWC already handles many reactive updates.
8. A child component should not directly mutate a primitive public property received from its parent. Use an event to request that the parent update its own data when appropriate.

## Key Takeaways

* Variables store information used by a component.
* Private properties hold component-managed data.
* `@api` exposes public properties and supports parent-to-child data passing.
* `@track` enables deep observation of plain object and array mutations.
* Reactive properties allow the user interface to reflect relevant data changes.
* HTML templates display JavaScript property values through data binding.
* Parent-child communication makes LWC components reusable and maintainable.
