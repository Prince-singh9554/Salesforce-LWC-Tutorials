# Slots and Getters/Setters in Salesforce LWC

## Introduction

Salesforce Lightning Web Components (LWC) supports reusable components. A parent component can include a child component and pass data or HTML markup to it.

In this topic, we learn two important concepts:

- **Slots:** Allow a parent component to pass HTML markup into a child component.
- **Getters and Setters:** Allow a component to control how a property is read or how a new value is processed when assigned.

These concepts help developers create reusable, flexible, and maintainable components.

## What Is a Slot?

A slot is a placeholder inside a child component where markup provided by its parent component can appear.

Instead of hardcoding all the content inside a child component, we can allow the parent to decide what content should be displayed.

### Example

Suppose we have a parent component and a child component.

The parent passes a heading and a paragraph to the child. The child provides a slot where that markup is rendered.

### Child HTML — `slotChild.html`

```html
<template>
    <lightning-card title="Child Component">
        <slot></slot>
    </lightning-card>
</template>
```

### Parent HTML — `slotParent.html`

```html
<template>
    <c-slot-child>
        <h2>Hello from Parent</h2>
        <p>This content is passed into the child component.</p>
    </c-slot-child>
</template>
```

### Output

```text
Child Component

Hello from Parent

This content is passed into the child component.
```

### Explanation

- `<c-slot-child>` includes the child component in the parent template.
- The heading and paragraph are passed as markup between the opening and closing child tags.
- `<slot></slot>` marks where the supplied markup appears.
- The parent controls the supplied content, while the child controls the location where that content is rendered.

## Types of Slots

There are two common types of slots in LWC.

### 1) Default Slot

A default slot is an unnamed slot.

#### Child HTML

```html
<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
```

#### Parent HTML

```html
<template>
    <c-slot-child>
        <p>This is default slot content.</p>
    </c-slot-child>
</template>
```

The paragraph appears where the child component defines `<slot></slot>`.

### 2) Named Slot

A named slot allows the parent to supply content for a specific placeholder in the child component.

#### Child HTML

```html
<template>
    <lightning-card title="Named Slot Example">
        <div slot="header">
            <slot name="heading"></slot>
        </div>

        <div>
            <slot></slot>
        </div>
    </lightning-card>
</template>
```

#### Parent HTML

```html
<template>
    <c-slot-child>
        <h2 slot="heading">My Custom Heading</h2>

        <p>This is the default slot content.</p>
    </c-slot-child>
</template>
```

### Important Points

- The child defines a named slot using `name="heading"`.
- The parent assigns content to that slot using `slot="heading"`.
- The names must match.
- Content without a `slot` attribute is assigned to the default slot.

## What Is a Getter?

A getter is a JavaScript method that allows a property-like value to be calculated or returned when accessed.

In LWC, getters are commonly used to prepare values for display in the HTML template.

### Syntax

```javascript
get propertyName() {
    return value;
}
```

### Example

```javascript
import { LightningElement } from 'lwc';

export default class GetterExample extends LightningElement {

    firstName = 'Prince';
    lastName = 'Singh';

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
```

#### HTML

```html
<template>
    <p>Full Name: {fullName}</p>
</template>
```

### Output

```text
Full Name: Prince Singh
```

### Explanation

- `firstName` stores the first name.
- `lastName` stores the last name.
- `get fullName()` returns the combined name.
- `{fullName}` displays the value returned by the getter.

A getter is useful when a displayed value depends on other properties or needs simple processing before rendering.

## What Is a Setter?

A setter is a JavaScript method that executes when a value is assigned to a property.

In LWC, a custom setter is especially useful when a child component receives a public property from its parent and needs to process that value before using it.

### Syntax

```javascript
set propertyName(value) {
    // Process the received value
}
```

A public property implemented with a custom setter must also have a getter. Annotate either the getter or the setter with `@api`, but not both.

## Understanding `@api` with Getters and Setters

The `@api` decorator exposes a public property or method so that other components can interact with it.

A parent can supply a value to a child's public property. A custom setter can process the incoming value.

### Child JavaScript — `slotChildSetter.js`

```javascript
import { LightningElement, api } from 'lwc';

export default class SlotChildSetter extends LightningElement {

    _message = '';

    @api
    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value
            ? value.toUpperCase()
            : '';
    }
}
```

### Child HTML — `slotChildSetter.html`

```html
<template>
    <lightning-card title="Child Component">
        <p>Message: {message}</p>
    </lightning-card>
</template>
```

### Parent HTML

```html
<template>
    <c-slot-child-setter
        message="hello from parent">
    </c-slot-child-setter>
</template>
```

### Output

```text
Child Component

Message: HELLO FROM PARENT
```

### Explanation

- `_message` stores the processed value internally.
- `get message()` returns the stored value.
- `set message(value)` receives a new value when the public property is assigned.
- `@api` exposes the getter as a public property.
- `value.toUpperCase()` converts the incoming text to uppercase.
- The HTML template displays the value returned by the getter.

The setter processes the value before the child displays it.

## Why Use a Setter Instead of a Normal Property?

Consider this public property:

```javascript
@api message;
```

This exposes the property directly. The child can display the supplied value, but this declaration does not provide custom processing logic when a new value is assigned.

With a getter and setter, the child can perform additional tasks, such as:

- Converting text to uppercase.
- Applying default values.
- Normalizing incoming data.
- Calculating or preparing a value for display.
- Updating internal state when the public property changes.

## Understanding the Difference

| Feature | Slot | Getter | Setter |
|---|---|---|---|
| Main purpose | Receives parent-provided markup | Returns a value | Processes an assigned value |
| Used in | Component HTML | Component JavaScript | Component JavaScript |
| Typical syntax | `<slot></slot>` | `get name()` | `set name(value)` |
| Common use | Reusable layout and content | Calculated display values | Transforming incoming data |

Slots and getters/setters solve different problems. A slot handles **markup composition**, while getters and setters handle **property access and value processing**.

## Understanding the Execution Flow

### Slot Execution Flow

1. Salesforce loads the parent component.
2. The parent includes the child component.
3. The parent supplies markup inside the child component tags.
4. The child template defines a slot.
5. The supplied markup appears in the corresponding slot.

### Getter and Setter Execution Flow

1. Salesforce loads the parent component.
2. The parent supplies a value to a child's public property.
3. The child's setter receives the assigned value.
4. The setter processes the value.
5. The processed value is stored in a private field.
6. The getter returns the stored value.
7. The child template displays the returned value.

## Important Best Practices

- Use slots when a parent needs to provide custom markup to a reusable child component.
- Use named slots when content must appear in specific regions.
- Use getters for values derived from other properties.
- Use setters when incoming values need processing.
- If you implement a custom setter for a public property, also implement its getter.
- Decorate either the getter or setter with `@api`, not both.
- Store the underlying value in a separate field, such as `_message`, to avoid recursively calling the setter.
- Keep getters and setters simple and avoid unnecessary side effects.
- Remember that slots and public properties serve different purposes.
