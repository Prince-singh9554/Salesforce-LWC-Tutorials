# Conditional Rendering in Salesforce LWC

## Overview

Conditional rendering in Salesforce Lightning Web Components (LWC) means displaying or hiding HTML elements based on a condition.

It allows a component to show different content depending on a JavaScript property's value or the user's interaction.

For example:

* Display a welcome message when a user is logged in.
* Show additional details when a checkbox is selected.
* Display different messages based on a condition.
* Show a loading spinner while data is loading.
* Display an error message when something goes wrong.

Salesforce recommends using `lwc:if`, `lwc:elseif`, and `lwc:else` instead of the older `if:true` and `if:false` directives.

## Learning Objectives

After completing this topic, you should understand:

* What conditional rendering is.
* How `lwc:if` works.
* How `lwc:elseif` works.
* How `lwc:else` works.
* How to display or hide content dynamically.
* How to handle checkbox changes using JavaScript.
* How to use getters when a condition requires calculation.
* How conditional rendering is useful in real-world Salesforce applications.

## What Is Conditional Rendering?

Conditional rendering is the process of rendering HTML elements only when a specified condition is satisfied.

In LWC, conditional rendering is controlled using directives in the HTML template.

**Basic syntax:**

```html
<template lwc:if={condition}>
    Content to display
</template>
```

**Purpose of the code**

The content inside the nested template is rendered only when `condition` evaluates to a truthy value.

**Working step by step**

1. JavaScript provides the value of `condition`.
2. LWC evaluates the condition.
3. If the condition is truthy, the content is rendered.
4. If the condition is falsy, the content is not rendered.

**Why is this used?**

Conditional rendering makes an interface dynamic by displaying only the content required for the current situation.

## The `lwc:if` Directive

The `lwc:if` directive displays content when a condition is truthy.

### Example: Display a Welcome Message

**JavaScript — `conditionalRendering.js`**

```javascript
import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = true;
}
```

**HTML — `conditionalRendering.html`**

```html
<template>
    <lightning-card title="Conditional Rendering">
        <div class="slds-p-around_medium">
            <template lwc:if={isVisible}>
                <p>Welcome to Salesforce LWC!</p>
            </template>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

This example displays a welcome message when the `isVisible` property is `true`.

**Working step by step**

1. The JavaScript property `isVisible` is initialized to `true`.
2. The HTML template checks the property using `lwc:if={isVisible}`.
3. Since the condition is true, the message is rendered.
4. If the property changes to `false`, the message is removed from the rendered UI.

**Expected output**

```text
Welcome to Salesforce LWC!
```

**Why is this used?**

It is useful for showing content only when a particular condition is satisfied, such as displaying additional information or a success message.

## The `lwc:else` Directive

The `lwc:else` directive displays alternative content when the preceding `lwc:if` condition is falsy.

### Example: Show or Hide a Message

**JavaScript — `conditionalRendering.js`**

```javascript
import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
}
```

**HTML — `conditionalRendering.html`**

```html
<template>
    <lightning-card title="If Else Example">
        <div class="slds-p-around_medium">
            <template lwc:if={isVisible}>
                <p>Content is visible.</p>
            </template>
            <template lwc:else>
                <p>Content is hidden.</p>
            </template>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

This example displays one of two messages depending on the value of `isVisible`.

**Working step by step**

1. The `isVisible` property is initialized to `false`.
2. LWC evaluates the `lwc:if` condition.
3. The first message is not rendered.
4. The `lwc:else` block is rendered instead.
5. The user sees `Content is hidden.`

**Expected output**

```text
Content is hidden.
```

**Why is this used?**

The `lwc:else` directive is useful when the interface must show an alternative message whenever a condition is not satisfied.

## The `lwc:elseif` Directive

The `lwc:elseif` directive checks another condition when the preceding `lwc:if` condition is falsy.

It is useful when an interface needs to handle multiple possible conditions.

### Example: Display a Student's Result

**JavaScript — `studentResult.js`**

```javascript
import { LightningElement } from 'lwc';

export default class StudentResult extends LightningElement {
    marks = 75;

    get isExcellent() {
        return this.marks >= 90;
    }

    get isPassed() {
        return this.marks >= 40;
    }
}
```

**HTML — `studentResult.html`**

```html
<template>
    <lightning-card title="Student Result">
        <div class="slds-p-around_medium">
            <p>Marks: {marks}</p>

            <template lwc:if={isExcellent}>
                <p>Excellent Performance!</p>
            </template>
            <template lwc:elseif={isPassed}>
                <p>Congratulations! You Passed.</p>
            </template>
            <template lwc:else>
                <p>Sorry! You Failed.</p>
            </template>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The component displays a result message based on the student's marks.

**Working step by step**

1. The `marks` property is initialized to `75`.
2. The `isExcellent` getter checks whether marks are at least 90.
3. Since 75 is less than 90, the first condition is false.
4. The `isPassed` getter checks whether marks are at least 40.
5. Since 75 is at least 40, the `lwc:elseif` block is rendered.
6. The remaining `lwc:else` block is skipped.

**Expected output**

```text
Marks: 75
Congratulations! You Passed.
```

**Why is this used?**

This pattern is useful for displaying different statuses, categories, messages, or outcomes depending on a value.

## Using a Checkbox for Conditional Rendering

A checkbox can allow users to control whether content is displayed.

### Example: Show Details

**JavaScript — `showDetails.js`**

```javascript
import { LightningElement } from 'lwc';

export default class ShowDetails extends LightningElement {
    areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
}
```

**HTML — `showDetails.html`**

```html
<template>
    <lightning-card title="Show Details">
        <div class="slds-p-around_medium">
            <lightning-input
                type="checkbox"
                label="Show Details"
                onchange={handleChange}>
            </lightning-input>

            <template lwc:if={areDetailsVisible}>
                <p>Name: Prince Singh</p>
                <p>Technology: Salesforce LWC</p>
            </template>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The component displays student details only when the user selects the checkbox.

**Working step by step**

1. `areDetailsVisible` is initialized to `false`.
2. The checkbox is displayed.
3. When the user selects or deselects the checkbox, `handleChange(event)` executes.
4. `event.target.checked` returns `true` when selected and `false` when deselected.
5. The JavaScript property is updated.
6. LWC evaluates the condition and renders or removes the details.

**Expected behavior**

* Checkbox unchecked: details are hidden.
* Checkbox checked: details are displayed.
* Checkbox unchecked again: details are hidden.

**Why is this used?**

This pattern is useful for expandable sections, optional form fields, additional record details, and user-controlled information panels.

## Using a Getter for Conditional Rendering

LWC template directives support simple property references and dot notation. For more complex conditions, calculate the result in a JavaScript getter.

### Example: Check Voting Eligibility

**JavaScript — `votingEligibility.js`**

```javascript
import { LightningElement } from 'lwc';

export default class VotingEligibility extends LightningElement {
    age = 20;

    get isEligible() {
        return this.age >= 18;
    }
}
```

**HTML — `votingEligibility.html`**

```html
<template>
    <lightning-card title="Voting Eligibility">
        <div class="slds-p-around_medium">
            <p>Age: {age}</p>

            <template lwc:if={isEligible}>
                <p>You are eligible to vote.</p>
            </template>
            <template lwc:else>
                <p>You are not eligible to vote.</p>
            </template>
        </div>
    </lightning-card>
</template>
```

**Purpose of the code**

The getter determines eligibility based on the user's age, and the template displays the corresponding message.

**Working step by step**

1. The `age` property is initialized to `20`.
2. The template requests the value of `isEligible`.
3. The getter checks `this.age >= 18`.
4. The getter returns `true`.
5. The `lwc:if` block displays the eligibility message.

**Expected output**

```text
Age: 20
You are eligible to vote.
```

**Why is this used?**

Getters are useful when a condition involves comparisons, calculations, or multiple properties.

## Conditional Rendering Execution Flow

```text
JavaScript Property or Getter
            |
            v
      Evaluate Condition
            |
            v
      Is Condition True?
         /         \
       Yes          No
        |            |
        v            v
   Render If     Check Elseif
                    |
                    v
              Another Condition?
                /        \
              Yes         No
               |           |
               v           v
          Render That   Render Else
             Block       If Present
```

## Key Takeaways

* Conditional rendering controls which UI elements are rendered.
* `lwc:if` renders content when a condition is truthy.
* `lwc:elseif` checks an additional condition.
* `lwc:else` provides fallback content.
* Event handlers can update properties that control visibility.
* Getters are useful for calculating conditions.
* Conditional rendering makes Salesforce interfaces more dynamic and user-friendly.
