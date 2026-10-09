# Iterator Framework in Lightning Web Components (LWC)

## Overview

The Iterator Framework in Lightning Web Components (LWC) allows us to iterate over an array and display multiple items dynamically in an HTML template.

Salesforce LWC provides two main directives for rendering lists:

* `for:each`
* `iterator`

The `for:each` directive is useful when we simply want to display every item in an array.

The `iterator` directive is useful when we need additional information about each item, such as:

* `value` — The current item.
* `index` — The current item's index.
* `first` — Indicates whether the current item is the first item.
* `last` — Indicates whether the current item is the last item.

For example, an iterator can help us highlight the first and last contacts in a list.

## What Is the Iterator Framework?

The Iterator Framework is a feature of LWC templates that allows us to process an array and render its items one by one.

Suppose we have the following employee data in JavaScript:

```javascript
employees = [
    { Id: '101', Name: 'Prince', Department: 'IT' },
    { Id: '102', Name: 'Rahul', Department: 'HR' },
    { Id: '103', Name: 'Aman', Department: 'Sales' }
];
```

Instead of writing separate HTML for every employee, we can use the `iterator` directive to render all employees dynamically.

This makes the code reusable, readable, and easier to maintain.

## Iterator Syntax

The basic syntax of the iterator directive is:

```html
<template iterator:iteratorName={arrayName}>
    <!-- Repeated HTML elements -->
</template>
```

Here is the meaning of each part:

* `iterator:` tells LWC to use the iterator directive.
* `iteratorName` is a lowercase alias used to access the current iteration's information.
* `{arrayName}` refers to the array defined in the JavaScript class.
* The nested template contains the HTML elements repeated for every array item.

**Important:** The iterator name must be lowercase. For example, `iterator:emp` is valid, while `iterator:Emp` is not.

## Project Structure

Create a Lightning Web Component named `iteratorFramework`.

The component contains these files:

```text
iteratorFramework/
│
├── iteratorFramework.html
├── iteratorFramework.js
├── iteratorFramework.css
└── iteratorFramework.js-meta.xml
```

## JavaScript Code

**File: `iteratorFramework.js`**

```javascript
import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {

    employees = [
        {
            Id: '101',
            Name: 'Prince',
            Department: 'IT'
        },
        {
            Id: '102',
            Name: 'Rahul',
            Department: 'HR'
        },
        {
            Id: '103',
            Name: 'Aman',
            Department: 'Sales'
        },
        {
            Id: '104',
            Name: 'Priya',
            Department: 'Finance'
        }
    ];

}
```

### Code Explanation

**1. Import LightningElement**

```javascript
import { LightningElement } from 'lwc';
```

This imports the base class required to create a Lightning Web Component.

**2. Define the component class**

```javascript
export default class IteratorFramework extends LightningElement {
```

This creates the `IteratorFramework` component class.

**3. Create the employees array**

```javascript
employees = [
    { Id: '101', Name: 'Prince', Department: 'IT' },
    { Id: '102', Name: 'Rahul', Department: 'HR' },
    { Id: '103', Name: 'Aman', Department: 'Sales' },
    { Id: '104', Name: 'Priya', Department: 'Finance' }
];
```

The array contains four employee objects. Each object has a unique ID, a name, and a department.

The HTML template will use this array to display the employee information.

## HTML Code

**File: `iteratorFramework.html`**

```html
<template>
    <lightning-card title="Iterator Framework" icon-name="standard:people">

        <div class="employee-container">

            <template iterator:emp={employees}>

                <div key={emp.value.Id}
                     class="employee-card">

                    <template lwc:if={emp.first}>
                        <div class="first-badge">
                            First Employee
                        </div>
                    </template>

                    <p>
                        <strong>Name:</strong>
                        {emp.value.Name}
                    </p>

                    <p>
                        <strong>Department:</strong>
                        {emp.value.Department}
                    </p>

                    <p>
                        <strong>Index:</strong>
                        {emp.index}
                    </p>

                    <template lwc:if={emp.last}>
                        <div class="last-badge">
                            Last Employee
                        </div>
                    </template>

                </div>

            </template>

        </div>

    </lightning-card>
</template>
```

### Code Explanation

**1. Lightning Card**

```html
<lightning-card title="Iterator Framework" icon-name="standard:people">
```

This creates a Salesforce Lightning card with a title and an icon.

**2. Iterator Directive**

```html
<template iterator:emp={employees}>
```

This instructs LWC to iterate over the `employees` array.

The name `emp` is our iterator alias.

**3. Access the Current Employee**

```html
{emp.value.Name}
{emp.value.Department}
```

The `value` property contains the current employee object.

For example, during the first iteration:

```javascript
emp.value = {
    Id: '101',
    Name: 'Prince',
    Department: 'IT'
};
```

Therefore, `emp.value.Name` displays `Prince`.

**4. Access the Index**

```html
{emp.index}
```

The index represents the current item's zero-based position in the array.

For four employees, the indexes are `0`, `1`, `2`, and `3`.

**5. Identify the First Employee**

```html
<template lwc:if={emp.first}>
    <div class="first-badge">
        First Employee
    </div>
</template>
```

The `first` property is `true` only for the first item.

Therefore, the First Employee label appears only for Prince.

**6. Identify the Last Employee**

```html
<template lwc:if={emp.last}>
    <div class="last-badge">
        Last Employee
    </div>
</template>
```

The `last` property is `true` only for the last item.

Therefore, the Last Employee label appears only for Priya.

**7. Unique Key**

```html
<div key={emp.value.Id}>
```

The `key` directive provides a unique identifier for each repeated element. LWC uses keys to efficiently identify list items when the rendered list changes.

Use a stable, unique ID when available. Do not use the array index as the key.

## CSS Code

**File: `iteratorFramework.css`**

```css
.employee-container {
    padding: 16px;
}

.employee-card {
    padding: 16px;
    margin-bottom: 12px;
    border: 1px solid #d8dde6;
    border-radius: 8px;
    background-color: #ffffff;
}

.first-badge {
    color: #ffffff;
    background-color: #2e844a;
    padding: 6px 10px;
    margin-bottom: 12px;
    border-radius: 4px;
    font-weight: bold;
}

.last-badge {
    color: #ffffff;
    background-color: #ba0517;
    padding: 6px 10px;
    margin-top: 12px;
    border-radius: 4px;
    font-weight: bold;
}

.employee-card p {
    margin: 8px 0;
}
```

### CSS Explanation

* `.employee-container` adds spacing around the employee list.
* `.employee-card` styles each employee's information as a separate card.
* `.first-badge` styles the first employee label in green.
* `.last-badge` styles the last employee label in red.
* `.employee-card p` adds spacing between employee details.

The CSS classes apply only to the corresponding elements rendered by the HTML template.

## Component Configuration

**File: `iteratorFramework.js-meta.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>67.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Iterator Framework</masterLabel>
    <description>
        Demonstrates the Iterator Framework in Lightning Web Components.
    </description>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>
```

This metadata file makes the component available for selection in Lightning App Builder. The API version should be compatible with the Salesforce org you are using.

## How the Iterator Works Step by Step

Let's understand how the code executes.

**Step 1:** The component loads and initializes the `employees` array.

**Step 2:** The HTML template encounters:

```html
<template iterator:emp={employees}>
```

**Step 3:** LWC processes the first employee, Prince.

* `emp.value.Name` returns `Prince`.
* `emp.value.Department` returns `IT`.
* `emp.index` returns `0`.
* `emp.first` is `true`.
* `emp.last` is `false`.

The First Employee label is displayed.

**Step 4:** LWC processes the second employee, Rahul.

* `emp.value.Name` returns `Rahul`.
* `emp.index` returns `1`.
* Both `emp.first` and `emp.last` are `false`.

Neither badge is displayed.

**Step 5:** LWC processes the third employee, Aman.

* `emp.value.Name` returns `Aman`.
* `emp.index` returns `2`.
* Both `emp.first` and `emp.last` are `false`.

Neither badge is displayed.

**Step 6:** LWC processes the fourth employee, Priya.

* `emp.value.Name` returns `Priya`.
* `emp.index` returns `3`.
* `emp.first` is `false`.
* `emp.last` is `true`.

The Last Employee label is displayed.

**Step 7:** The component renders all four employee cards in the browser.

## Execution Flow

```text
Component Loads
       |
       v
Initialize employees Array
       |
       v
Iterator Reads the Array
       |
       v
Process Current Employee
       |
       v
Read emp.value and emp.index
       |
       v
Check emp.first and emp.last
       |
       v
Render Employee Card
       |
       v
More Employees Remaining?
       |
       +---- Yes ----> Process Next Employee
       |
       +---- No -----> Finish Rendering
```

## Expected Output

The Lightning card displays four employee cards.

| Index | Name   | Department | Label          |
| ----: | ------ | ---------- | -------------- |
|     0 | Prince | IT         | First Employee |
|     1 | Rahul  | HR         | —              |
|     2 | Aman   | Sales      | —              |
|     3 | Priya  | Finance    | Last Employee  |

The first employee receives a green label, and the last employee receives a red label.

The table above represents the expected result of the example code.

## Understanding Iterator Properties

| Property               | Meaning                       | Example                                           |
| ---------------------- | ----------------------------- | ------------------------------------------------- |
| `emp.value`            | Current item object           | `{ Id: '101', Name: 'Prince', Department: 'IT' }` |
| `emp.value.Name`       | Current employee's name       | `Prince`                                          |
| `emp.value.Department` | Current employee's department | `IT`                                              |
| `emp.index`            | Zero-based index of the item  | `0`                                               |
| `emp.first`            | Whether the item is first     | `true` for Prince                                 |
| `emp.last`             | Whether the item is last      | `true` for Priya                                  |

## Difference Between for:each and iterator

Both directives can render an array, but they serve slightly different purposes.

| Feature              | `for:each`                  | `iterator`                                   |
| -------------------- | --------------------------- | -------------------------------------------- |
| Main purpose         | Render items in a list      | Render items with iteration metadata         |
| Access current item  | Directly through `for:item` | Through `iteratorName.value`                 |
| Access index         | Optional `for:index`        | `iteratorName.index`                         |
| First item detection | Requires additional logic   | `iteratorName.first`                         |
| Last item detection  | Requires additional logic   | `iteratorName.last`                          |
| Unique key required  | Yes                         | Yes                                          |
| Best use case        | Simple lists                | Lists requiring first/last-specific behavior |

### Example: for:each

```html
<template for:each={employees} for:item="employee">
    <div key={employee.Id}>
        {employee.Name}
    </div>
</template>
```

### Example: iterator

```html
<template iterator:emp={employees}>
    <div key={emp.value.Id}>
        {emp.value.Name}

        <template lwc:if={emp.first}>
            (First Employee)
        </template>
    </div>
</template>
```

Use `for:each` for straightforward list rendering. Choose `iterator` when you need information about an item's position, especially whether it is the first or last item.

## Common Mistakes

**1. Using an uppercase iterator name**

Incorrect:

```html
<template iterator:Emp={employees}>
```

Correct:

```html
<template iterator:emp={employees}>
```

The iterator alias must be lowercase.

**2. Accessing the current item incorrectly**

Incorrect:

```html
{emp.Name}
```

Correct:

```html
{emp.value.Name}
```

With the iterator directive, the current item is accessed through `emp.value`.

**3. Forgetting the key**

Incorrect:

```html
<div>
    {emp.value.Name}
</div>
```

Correct:

```html
<div key={emp.value.Id}>
    {emp.value.Name}
</div>
```

Every item in a rendered list needs a unique key.

**4. Using a non-unique key**

Avoid using a value such as the employee's department as a key if multiple employees can belong to the same department.

Use a stable unique identifier, such as `emp.value.Id`.

**5. Using `first` and `last` without checking them**

The properties `emp.first` and `emp.last` are Boolean values. Use `lwc:if` to conditionally render a label or other element.

## Real-Life Applications

The Iterator Framework is useful in many Salesforce applications:

1. **Contact Lists:** Highlight the first and last contact in a displayed list.
2. **Opportunity Lists:** Apply special styling to the first or last opportunity.
3. **Invoice Line Items:** Render product rows and apply different styling to boundary rows.
4. **Task Lists:** Display tasks with position-aware labels.
5. **Product Catalogs:** Render products and add special elements at the beginning or end of the list.
