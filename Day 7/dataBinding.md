# Data Binding in Salesforce LWC

## Overview

Data binding in Salesforce Lightning Web Components (LWC) is the process of connecting JavaScript properties with the HTML template to display and update data dynamically.

It allows the user interface to reflect changes in component data without manually manipulating the DOM.

This topic covers:

* What data binding is and why it is used.
* One-way data binding.
* Handling user input using event handlers.
* Updating JavaScript properties from HTML input fields.
* Using getters to calculate and display values.
* Understanding the difference between one-way binding and event-driven updates.

## What Is Data Binding?

Data binding connects the data stored in a component's JavaScript file with its HTML template.

For example, if a JavaScript property contains a student's name, the HTML template can display that name dynamically.

**JavaScript — `dataBinding.js`**

```javascript
import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    studentName = 'Prince';
}
```

**HTML — `dataBinding.html`**

```html
<template>
    <lightning-card title="Data Binding Example">
        <div class="slds-p-around_medium">
            <p>Student Name: {studentName}</p>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

This code displays the value of the JavaScript property `studentName` inside the HTML template.

**Working step by step**

1. `studentName = 'Prince'` initializes the property.
2. `{studentName}` connects the HTML template to that property.
3. Salesforce evaluates the property's current value.
4. The template displays `Prince`.

**Expected output**

```text
Student Name: Prince
```

**Why is this used?**

Data binding is useful for displaying dynamic information such as account names, contact details, opportunity amounts, and form values.

## One-Way Data Binding

One-way data binding means data flows from a JavaScript property to the HTML template.

```text
JavaScript Property
        |
        v
HTML Template
        |
        v
Value Displayed in UI
```

When a reactive JavaScript property changes, the corresponding UI updates automatically. However, changing a displayed value or typing into an input does not automatically update the JavaScript property unless the appropriate event handler updates it.

### Example: Displaying a Message

**JavaScript — `oneWayBinding.js`**

```javascript
import { LightningElement } from 'lwc';

export default class OneWayBinding extends LightningElement {
    message = 'Welcome to Salesforce LWC!';
}
```

**HTML — `oneWayBinding.html`**

```html
<template>
    <lightning-card title="One-Way Data Binding">
        <div class="slds-p-around_medium">
            <h2>{message}</h2>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The component displays a message stored in its JavaScript property.

**Working step by step**

1. The `message` property stores the text.
2. The HTML template references it using `{message}`.
3. Salesforce renders the value in the component.
4. If JavaScript changes `message` to another value, the UI updates.

**Expected output**

```text
Welcome to Salesforce LWC!
```

**Why is this used?**

One-way data binding is useful when displaying information that is controlled by JavaScript, such as labels, status messages, names, and calculated values.

## Handling User Input

When a user enters information into an input field, LWC does not automatically assign that input to a JavaScript property.

To update the property, we use an event handler such as `onchange`.

### Example: Input Field Data Binding

**JavaScript — `inputBinding.js`**

```javascript
import { LightningElement } from 'lwc';

export default class InputBinding extends LightningElement {
    studentName = '';

    handleChange(event) {
        this.studentName = event.target.value;
    }
}
```

**HTML — `inputBinding.html`**

```html
<template>
    <lightning-card title="Input Data Binding">
        <div class="slds-p-around_medium">
            <lightning-input
                label="Enter Student Name"
                value={studentName}
                onchange={handleChange}>
            </lightning-input>

            <p>Student Name: {studentName}</p>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

This example captures the name entered by the user and displays it below the input field.

**Working step by step**

1. `studentName = ''` initializes an empty property.
2. `value={studentName}` binds the input's displayed value to the property.
3. `onchange={handleChange}` registers a handler for input changes.
4. When the user changes the input and the change event fires, `handleChange(event)` executes.
5. `event.target.value` retrieves the input's current value.
6. `this.studentName` stores that value.
7. `{studentName}` displays the updated value in the UI.

**Expected output**

If the user enters `Prince`, the component displays:

```text
Student Name: Prince
```

**Why is this used?**

This pattern is useful for registration forms, search fields, user profiles, and other interfaces that capture user input.

## Understanding the `event` Object

An event object provides information about an interaction that occurred in the component.

In the previous example:

```javascript
handleChange(event) {
    this.studentName = event.target.value;
}
```

**Purpose of each part**

* `handleChange(event)`: Handles the change event.
* `event`: Contains information about the event.
* `event.target`: Refers to the element that triggered the event.
* `event.target.value`: Retrieves the current input value.
* `this.studentName`: Updates the component's JavaScript property.

**Example execution flow**

```text
User enters a name
        |
        v
Change event fires
        |
        v
handleChange(event) executes
        |
        v
event.target.value retrieves input
        |
        v
studentName is updated
        |
        v
HTML displays the updated name
```

## Event-Driven Two-Way Binding Behavior

LWC uses one-way property binding rather than automatic two-way binding. However, we can achieve the practical behavior of synchronizing an input and a JavaScript property by handling user events.

The flow is:

```text
JavaScript Property
        |
        v
Input Field
        |
        v
User Changes Input
        |
        v
Event Handler
        |
        v
JavaScript Property Updated
        |
        v
UI Re-renders
```

### Example: Updating a Greeting

**JavaScript — `greetingBinding.js`**

```javascript
import { LightningElement } from 'lwc';

export default class GreetingBinding extends LightningElement {
    userName = 'Student';

    handleNameChange(event) {
        this.userName = event.target.value;
    }

    get greeting() {
        return `Hello, ${this.userName}!`;
    }
}
```

**HTML — `greetingBinding.html`**

```html
<template>
    <lightning-card title="Greeting Example">
        <div class="slds-p-around_medium">
            <lightning-input
                label="Enter Your Name"
                value={userName}
                onchange={handleNameChange}>
            </lightning-input>

            <p>{greeting}</p>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The component accepts a name from the user and generates a greeting based on the current value.

**Working step by step**

1. The initial value of `userName` is `Student`.
2. The getter `greeting` returns `Hello, Student!`.
3. The user enters a different name.
4. `handleNameChange(event)` updates `userName`.
5. LWC reevaluates the getter when the template needs the `greeting` value.
6. The UI displays the updated greeting.

**Expected output**

Initially:

```text
Hello, Student!
```

After entering `Prince`:

```text
Hello, Prince!
```

**Why is this used?**

This pattern is useful for live greetings, form previews, search interfaces, and other UI elements that depend on user input.

## Using Getters in Data Binding

A getter is a JavaScript method that returns a calculated or derived value.

In an LWC template, getters are referenced like ordinary properties using curly braces.

### Example: Calculating a Full Name

**JavaScript — `fullNameBinding.js`**

```javascript
import { LightningElement } from 'lwc';

export default class FullNameBinding extends LightningElement {
    firstName = 'Prince';
    lastName = 'Singh';

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

**HTML — `fullNameBinding.html`**

```html
<template>
    <lightning-card title="Getter Example">
        <div class="slds-p-around_medium">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Full Name: {fullName}</p>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The getter combines the first name and last name to produce a full name.

**Working step by step**

1. `firstName` stores `Prince`.
2. `lastName` stores `Singh`.
3. The template requests `{fullName}`.
4. The getter executes and combines both values.
5. The template displays the returned string.

**Expected output**

```text
First Name: Prince
Last Name: Singh
Full Name: Prince Singh
```

**Why is this used?**

Getters are useful for derived values, such as full names, formatted labels, totals, and status messages. They also keep complex expressions out of the HTML template.

## Parent-to-Child Data Binding

In LWC, a parent component can pass a value to a child component through a public property declared with `@api`.

### Parent Component

**JavaScript — `parentBinding.js`**

```javascript
import { LightningElement } from 'lwc';

export default class ParentBinding extends LightningElement {
    studentName = 'Prince';
}
```

**HTML — `parentBinding.html`**

```html
<template>
    <lightning-card title="Parent Component">
        <div class="slds-p-around_medium">
            <c-child-binding
                student-name={studentName}>
            </c-child-binding>
        </div>
    </lightning-card>
</template>
```

### Child Component

**JavaScript — `childBinding.js`**

```javascript
import { LightningElement, api } from 'lwc';

export default class ChildBinding extends LightningElement {
    @api studentName;
}
```

**HTML — `childBinding.html`**

```html
<template>
    <p>Student Name from Parent: {studentName}</p>
</template>
```

**Purpose of the code**

The parent passes its `studentName` property to the child, which displays the received value.

**Working step by step**

1. The parent initializes `studentName` to `Prince`.
2. The parent passes the property through `student-name={studentName}`.
3. The child's `@api studentName` receives the value.
4. The child template displays `{studentName}`.
5. When the parent updates its property, the updated value propagates to the child.

**Why is this used?**

Parent-to-child data binding is useful for reusable components that display account details, contact information, record summaries, and other data owned by a parent.

> Parent-to-child property binding is one-way. When the child needs to request a change to parent-owned data, it should dispatch a custom event and let the parent update its property.

## Common Mistakes in Data Binding

### Using a JavaScript property without curly braces

Incorrect:

```html
<p>studentName</p>
```

This displays the literal text `studentName`.

Correct:

```html
<p>{studentName}</p>
```

This displays the value stored in the property.

### Forgetting to update the property in an event handler

Incorrect:

```html
<lightning-input onchange={handleChange}></lightning-input>
```

```javascript
handleChange(event) {
    console.log(event.target.value);
}
```

This logs the input value but does not update `studentName`.

Correct:

```javascript
handleChange(event) {
    this.studentName = event.target.value;
}
```

### Using a getter like a method in HTML

Incorrect:

```html
<p>{fullName()}</p>
```

Correct:

```html
<p>{fullName}</p>
```

In an LWC template, a getter is referenced as a property, without parentheses.

## One-Way Binding vs Event-Driven Input Updates

| Feature             | One-way binding    | Event-driven input updates              |
| ------------------- | ------------------ | --------------------------------------- |
| Direction           | JavaScript to HTML | Input event updates JavaScript, then UI |
| Syntax              | `{property}`       | `onchange={handleChange}`               |
| User input handling | Not automatic      | Explicitly handled in JavaScript        |
| Typical use         | Displaying values  | Forms and interactive fields            |

## Key Takeaways

* Data binding connects JavaScript properties with HTML templates.
* Curly braces `{}` display property values in LWC templates.
* Reactive changes in JavaScript are reflected in the UI.
* User input must be handled through event handlers when it needs to update JavaScript state.
* `event.target.value` retrieves the current value of an input.
* Getters calculate values for use in templates.
* Parent components pass values to child components using public `@api` properties.
* LWC uses one-way property binding; event handlers provide the mechanism for processing input changes.
