# Data Parent to Child in Salesforce LWC

## Introduction

In Salesforce Lightning Web Components (LWC), Parent-to-Child Communication is used to pass data from a parent component to a child component.

A parent component can send data to its child using **public properties declared with the `@api` decorator**.

For example, a parent component can pass a student's name, email, or other information to a child component, and the child can display that information.

## Component Structure

The project contains two components:

- **Parent Component:** Stores the data and passes it to the child component.
- **Child Component:** Receives the data and displays it.

### Data Flow

```text
Parent Component
       |
       | Passes data through a public property
       |
       v
Child Component
       |
       | Receives data using @api
       |
       v
Displays the received data
```

## Parent Component

The parent component defines the data and passes it to the child component through an HTML attribute.

### Parent HTML — `parentComponent.html`

```html
<template>
    <lightning-card title="Parent Component">
        <p>Parent Component</p>

        <c-child-component
            message={parentMessage}>
        </c-child-component>
    </lightning-card>
</template>
```

### Parent JavaScript — `parentComponent.js`

```javascript
import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    parentMessage = 'Hello from Parent Component!';
}
```

### Explanation

- `parentMessage` stores the message in the parent component.
- `<c-child-component>` includes the child component inside the parent template.
- `message={parentMessage}` passes the value of `parentMessage` to the child's public property named `message`.
- The child component can access this value through its `@api` property.

**Important:** The custom element name must match the child component's folder name, using the `c-` prefix and kebab-case.

## Child Component

The child component receives the data sent by the parent and displays it.

### Child HTML — `childComponent.html`

```html
<template>
    <lightning-card title="Child Component">
        <p>Child Component</p>

        <p>Message from Parent: {message}</p>
    </lightning-card>
</template>
```

### Child JavaScript — `childComponent.js`

```javascript
import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api message;
}
```

### Explanation

- `import { LightningElement, api } from 'lwc';` imports the required LWC classes and decorator.
- `@api` makes the `message` property public so the parent component can pass data to it.
- `message` receives the value passed by the parent component.
- `{message}` displays the received value in the child component's HTML template.

## Understanding the `@api` Decorator

The `@api` decorator is used to define a public property or method in an LWC component.

In Parent-to-Child Communication, it allows the parent to pass a value to the child.

### Syntax

```javascript
import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api propertyName;
}
```

For example:

```javascript
@api message;
```

Here, `message` is a public property that can receive data from the parent component.

## Understanding Data Binding

In the parent HTML:

```html
<c-child-component message={parentMessage}></c-child-component>
```

- `message` is the public property of the child component.
- `{parentMessage}` refers to the JavaScript property defined in the parent.
- The parent passes the current value of `parentMessage` to the child.

In the child HTML:

```html
<p>{message}</p>
```

The child template displays the value received through the `message` property.

## Execution Flow

1. Salesforce loads the parent component.
2. The parent JavaScript initializes `parentMessage`.
3. The parent HTML includes the child component.
4. The parent passes `parentMessage` through the `message` attribute.
5. The child receives the value through its `@api message` property.
6. The child HTML displays the received message.

## Expected Output

**Parent Component**

Parent Component

**Child Component**

Child Component

Message from Parent: Hello from Parent Component!

## Important Points

- Parent-to-Child Communication passes data from the parent to the child.
- The `@api` decorator exposes a property publicly.
- The parent passes data using an attribute on the child component's HTML tag.
- The child accesses and displays the received value using its public property.
- If the parent value changes, the child can reflect the updated value through reactive property binding.
- Data flow should generally remain one-way: the child should not directly modify a parent-owned value. For communication back to the parent, use custom events.
- The child component must be included in the parent template and be available in the Salesforce project.

## Common Mistakes

- Forgetting to import `api` from `lwc`.
- Forgetting to add `@api` to the child property.
- Using a property name in the parent HTML that does not match the child's public property.
- Using an incorrect child component tag name.
- Trying to access the parent's private JavaScript properties directly from the child.
