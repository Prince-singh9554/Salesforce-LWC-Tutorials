# Reactivity Check in Salesforce LWC

## Introduction

Reactivity is one of the most important concepts in Salesforce Lightning Web Components (LWC).

**Reactivity means that when a value changes, the component's UI can automatically update to reflect that change.**

For example, suppose a component displays an email address:

```html
<p>{email}</p>
```

If the JavaScript property `email` changes and the property is used in the template, LWC updates the displayed value automatically.

Reactivity helps us build dynamic and interactive user interfaces without manually changing the HTML.

## What Is Reactivity?

Reactivity is the mechanism through which LWC detects relevant data changes and updates the component's rendered output.

For example:

### JavaScript

```javascript
import { LightningElement } from 'lwc';

export default class ReactivityExample extends LightningElement {

    username = 'Prince';

    changeName() {
        this.username = 'Developer';
    }
}
```

### HTML

```html
<template>
    <lightning-card title="Reactivity Example">

        <p>User Name: {username}</p>

        <lightning-button
            label="Change Name"
            onclick={changeName}>
        </lightning-button>

    </lightning-card>
</template>
```

### Working

1. Initially, `username` contains `"Prince"`.
2. The HTML displays `Prince`.
3. The user clicks the **Change Name** button.
4. The `changeName()` method executes.
5. `this.username` changes to `"Developer"`.
6. LWC detects the relevant change and updates the UI.

The displayed value changes from `Prince` to `Developer`.

## Types of Reactivity

Reactivity can be understood through three important categories:

- Primitive values
- Objects
- Arrays

### Primitive Values

Primitive values include strings, numbers, Booleans, `null`, `undefined`, `bigint`, and symbols.

Example:

```javascript
username = 'Prince';
age = 22;
isActive = true;
```

When a new value is assigned to a field used by the template, LWC can detect the change.

```javascript
this.username = 'Salesforce Developer';
this.age = 23;
this.isActive = false;
```

The component can display the updated values automatically.

**Important:** You do not need `@track` for ordinary primitive fields.

### Object Reactivity

An object stores data in key-value pairs.

Example:

```javascript
userDetails = {
    name: 'Prince',
    email: 'prince@example.com'
};
```

You can display its properties in the HTML template.

```html
<template>
    <p>Name: {userDetails.name}</p>
    <p>Email: {userDetails.email}</p>
</template>
```

#### Assigning a New Object

```javascript
this.userDetails = {
    name: 'Rahul',
    email: 'rahul@example.com'
};
```

Here, the complete object is replaced with a new object. LWC can detect the new assignment and update the rendered values.

#### Modifying an Existing Object

```javascript
this.userDetails.name = 'Rahul';
```

This modifies a nested property without assigning a new object to `userDetails`.

By default, LWC does not observe every internal object mutation. To make changes to properties of a plain object observable, use `@track`, where appropriate.

```javascript
import { LightningElement, track } from 'lwc';

export default class ObjectReactivity extends LightningElement {

    @track userDetails = {
        name: 'Prince',
        email: 'prince@example.com'
    };

    changeName() {
        this.userDetails.name = 'Rahul';
    }
}
```

Now changes to the tracked object's properties can trigger an update when they affect data used by the template.

### Array Reactivity

An array stores multiple values.

Example:

```javascript
@track fruits = ['Apple', 'Banana', 'Mango'];
```

The array can be displayed using a loop.

```html
<template>
    <template for:each={fruits} for:item="fruit">
        <p key={fruit}>{fruit}</p>
    </template>
</template>
```

#### Replacing an Array

```javascript
this.fruits = ['Apple', 'Orange', 'Grapes'];
```

Assigning a new array allows LWC to detect the new value.

#### Modifying an Array

```javascript
this.fruits.push('Orange');
```

Without `@track`, an internal array mutation such as `push()` is not automatically observed in the same way as assigning a new array.

To make internal changes to a plain array observable, you can use `@track`:

```javascript
@track fruits = ['Apple', 'Banana', 'Mango'];

addFruit() {
    this.fruits.push('Orange');
}
```

Another common approach is to assign a new array:

```javascript
this.fruits = [...this.fruits, 'Orange'];
```

This creates a new array and assigns it to `fruits`.

## Understanding the `@track` Decorator

The `@track` decorator tells LWC to observe changes to the internal properties of plain JavaScript objects and the elements of arrays.

### Syntax

```javascript
import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {

    @track userDetails = {
        name: 'Prince',
        age: 22
    };
}
```

### When Should You Use `@track`?

| Situation | Is `@track` needed? |
|---|---|
| Updating a string | No |
| Updating a number | No |
| Updating a Boolean | No |
| Assigning a new object | Usually no |
| Changing a property inside a plain object | Useful |
| Assigning a new array | Usually no |
| Mutating an array's elements | Useful |

`@track` does not make every JavaScript object deeply reactive. For example, mutations inside `Date`, `Map`, and `Set` objects are not observed by `@track` in the same way as plain objects and arrays.

Also, a rerender is needed only when the changed data affects a value accessed during rendering.

## Parent-to-Child Reactivity

In a parent-child component structure, the parent can pass data to the child through public properties decorated with `@api`.

When the parent updates the value it owns, the new value can propagate to the child through property binding.

### Component Structure

```text
ReactivityCheck/
│
├── Parent Component
│   ├── Stores the data
│   ├── Handles the Change Data button
│   └── Passes properties to the child
│
└── Child Component
    ├── Receives public properties using @api
    └── Displays the received data
```

This diagram explains the concept; verify the exact filenames in your GitHub folder.

### Parent Component HTML

The following example illustrates the parent-child binding pattern used in a reactivity demonstration.

```html
<template>
    <lightning-card title="Reactivity Check">

        <p>This is a parent component</p>

        <lightning-button
            variant="success"
            label="Change data"
            onclick={emailChange}>
        </lightning-button>

        <c-reactivity-within-child
            email-change={email2}
            my-product-details={myProductDetails}>
        </c-reactivity-within-child>

    </lightning-card>
</template>
```

### Understanding the Parent HTML

- `lightning-card` provides the card layout.
- `lightning-button` displays the button that triggers the `emailChange` handler.
- `onclick={emailChange}` connects the button click to the parent JavaScript method.
- `c-reactivity-within-child` embeds the child component in the parent template.
- `email-change={email2}` passes the parent's `email2` property to the child's public property `emailChange`.
- `my-product-details={myProductDetails}` passes the parent's product details to the child's public property `myProductDetails`.

The attribute names use kebab-case in the parent HTML, while the corresponding JavaScript properties use camelCase.

### Parent Component JavaScript

The following is an illustrative example of the logic required by the parent template. Adapt the initial values to match your actual project.

```javascript
import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    email2 = 'first@example.com';

    myProductDetails = {
        name: 'Laptop',
        price: 50000
    };

    emailChange() {
        this.email2 = 'updated@example.com';

        this.myProductDetails = {
            ...this.myProductDetails,
            price: 55000
        };
    }
}
```

### Explanation

- `email2` stores the email value that the parent passes to the child.
- `myProductDetails` stores the product's name and price.
- `emailChange()` executes when the user clicks the button.
- The method assigns a new email value to `email2`.
- The spread operator (`...`) copies the existing product properties into a new object.
- The new object contains the updated price.
- The updated values are passed to the child through reactive property binding.

**Important:** The example replaces the product object rather than mutating its nested properties. This makes the change easier for LWC to detect without needing `@track`.

### Child Component JavaScript

```javascript
import { LightningElement, api } from 'lwc';

export default class ReactivityWithinChild extends LightningElement {

    @api emailChange;

    @api myProductDetails;
}
```

### Explanation

- `LightningElement` is the base class for an LWC component.
- `api` is imported to expose public properties.
- `@api emailChange` allows the parent to provide the email value.
- `@api myProductDetails` allows the parent to provide the product object.

The child receives these values from the parent. It should generally treat data owned by the parent as read-only.

### Child Component HTML

```html
<template>
    <lightning-card title="Child Component">

        <p>Email: {emailChange}</p>

        <p>Product Name: {myProductDetails.name}</p>

        <p>Product Price: {myProductDetails.price}</p>

    </lightning-card>
</template>
```

### Explanation

- `{emailChange}` displays the email received from the parent.
- `{myProductDetails.name}` displays the product name.
- `{myProductDetails.price}` displays the product price.
- When the parent assigns updated values, the child receives the new property values and its displayed content can update automatically.

## Understanding the Spread Operator in Reactivity

The spread operator (`...`) is useful when creating a new object based on an existing object.

Example:

```javascript
this.myProductDetails = {
    ...this.myProductDetails,
    price: 55000
};
```

Suppose the existing object is:

```javascript
{
    name: 'Laptop',
    price: 50000
}
```

The new object becomes:

```javascript
{
    name: 'Laptop',
    price: 55000
}
```

The existing name is preserved, and the price is updated.

This is a shallow copy. If an object contains nested objects, those nested objects are not automatically cloned.

## Understanding One-Way Data Flow

In LWC, data should generally flow from parent to child.

```text
Parent owns the data
        |
        v
Parent passes data through @api
        |
        v
Child receives the data
        |
        v
Child displays the data
```

The child should not directly modify an object or array passed down by the parent.

If the child needs to request a change, it can dispatch a custom event. The parent handles the event, updates the data it owns, and passes the new value back to the child.

This keeps the data flow predictable and reduces unexpected side effects.

## Execution Flow of the Reactivity Check

1. Salesforce renders the parent component.
2. The parent initializes its JavaScript properties.
3. The parent template includes the child component.
4. The parent's values are passed through the child's public properties.
5. The child displays the received values.
6. The user clicks the Change Data button.
7. The parent event handler executes.
8. The parent updates its email and creates a new product object.
9. LWC detects the relevant property assignments.
10. The new values propagate to the child.
11. The child displays the updated email and product price.

## Expected Output

Before clicking the button:

```text
Reactivity Check

This is a parent component

Child Component
Email: first@example.com
Product Name: Laptop
Product Price: 50000
```

After clicking the button:

```text
Reactivity Check

This is a parent component

Child Component
Email: updated@example.com
Product Name: Laptop
Product Price: 55000
```

The displayed values change without manually editing the child HTML.

## Common Mistakes

### Forgetting `@api`

If a child property is not public, the parent cannot pass data to it as a public component property.

### Using Incorrect Property Names

The property names in the parent HTML must correspond to the public properties defined in the child JavaScript.

For example:

```html
<c-reactivity-within-child email-change={email2}>
</c-reactivity-within-child>
```

corresponds to:

```javascript
@api emailChange;
```

### Expecting Every Object Mutation to Trigger an Update

This example may not trigger the expected update without `@track`:

```javascript
this.myProductDetails.price = 55000;
```

For predictable updates, create a new object:

```javascript
this.myProductDetails = {
    ...this.myProductDetails,
    price: 55000
};
```

### Trying to Modify Parent-Owned Data in the Child

A child should treat values passed from its parent as read-only. Instead, it should notify the parent when a change is needed.

### Assuming `@track` Is Required for Every Property

Primitive fields are already reactive, and assigning a new object or array is generally sufficient. Use `@track` when you need to observe internal changes to plain objects or arrays.

## Best Practices

- Use descriptive names for JavaScript properties.
- Use `@api` for properties that must be supplied by a parent component.
- Prefer assigning new objects or arrays when updating complex data.
- Use `@track` when internal mutations of plain objects or arrays need to be observed.
- Keep data ownership in the parent component.
- Use custom events for child-to-parent communication.
- Test the UI before and after a data change.
- Use the browser console to investigate unexpected rendering behavior.

## Conclusion

Reactivity allows Salesforce LWC components to update their rendered UI when relevant data changes.

Primitive fields are reactive by default. Assigning a new object or array can also trigger updates, while observing internal changes to plain objects and arrays may require `@track`.

In parent-child communication, the parent owns the data and passes it to the child using public `@api` properties. When the parent updates its values, the child can receive and display those updated values automatically.

Understanding reactivity is essential for building dynamic, reusable, and maintainable Lightning Web Components.
