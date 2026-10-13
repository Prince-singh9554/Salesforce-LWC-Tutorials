# Lifecycle Hooks in Salesforce LWC

## Introduction

Lifecycle Hooks are special methods in Salesforce Lightning Web Components (LWC) that execute at different stages of a component's life.

A component goes through several stages:

- Creation
- Connection to the DOM
- Rendering
- Removal from the DOM
- Error handling, when applicable

LWC provides lifecycle hooks that allow developers to execute code at these stages.

For example, we can use `connectedCallback()` to initialize data when a component is connected to the DOM and `disconnectedCallback()` to clean up resources when it is removed.

## Types of Lifecycle Hooks

Salesforce LWC provides five commonly used lifecycle hooks:

- `constructor()`
- `connectedCallback()`
- `renderedCallback()`
- `disconnectedCallback()`
- `errorCallback()`

## Lifecycle Hooks Summary Table

The following table converts the first reference image into Markdown table format.

| Lifecycle Hook | When It Runs | Common Use Cases |
|---|---|---|
| `constructor()` | When the component instance is created | Initialize variables and perform non-DOM setup |
| `connectedCallback()` | When the component is inserted into the DOM | Fetch data from Apex, initialize timers, and establish subscriptions or event listeners |
| `renderedCallback()` | After each render, including re-renders | Perform post-render logic or initialize third-party UI libraries |
| `disconnectedCallback()` | When the component is removed from the DOM | Clear timers, unsubscribe from services, and clean up resources |
| `errorCallback()` | When an eligible error occurs in a descendant component's lifecycle or rendering | Catch and log errors and display fallback UI |

## Lifecycle Hooks Using a Movie Theater Example

The following table converts the second reference image into Markdown table format.

| Lifecycle Hook | Movie Theater Role | Purpose |
|---|---|---|
| `constructor()` | Actor reads the script | Initialize the component |
| `connectedCallback()` | Actor enters the stage | The component is connected to the DOM; perform setup |
| `renderedCallback()` | Props and costume are ready | The DOM has rendered; run post-render logic |
| `disconnectedCallback()` | Actor exits the stage | Perform cleanup work |
| `errorCallback()` | Actor forgets lines | Catch eligible errors from child components |

**Remember:** The movie theater analogy is a learning aid. Actual lifecycle behavior follows the Salesforce framework.

## Understanding `constructor()`

### What Is `constructor()`?

The `constructor()` is a JavaScript class constructor that runs when a component instance is created.

It is generally used to initialize properties and prepare the component's initial state.

### Syntax

```javascript
import { LightningElement } from 'lwc';

export default class LifecycleExample extends LightningElement {

    constructor() {
        super();

        console.log('Constructor executed');
    }
}
```

### Explanation

- `constructor()` is called when the component instance is created.
- `super()` calls the constructor of the parent class, `LightningElement`.
- `super()` must be called before accessing `this`.
- `console.log()` displays a message in the browser console.

### When Should You Use It?

Use `constructor()` to initialize state that does not depend on DOM elements or public properties supplied by the parent.

### Important Points

- The first statement must be `super()` when defining the constructor.
- Child elements are not available at this stage.
- Public properties supplied by the parent have not yet been assigned.
- Do not try to access the component's rendered DOM here.

## Understanding `connectedCallback()`

### What Is `connectedCallback()`?

The `connectedCallback()` lifecycle hook executes when the component is inserted into the DOM.

DOM stands for **Document Object Model**. It represents the structure of a web page.

This hook is useful for initializing data and setting up operations that should begin when the component becomes active.

### Syntax

```javascript
connectedCallback() {
    console.log('Component connected to DOM');
}
```

### Example

```javascript
import { LightningElement } from 'lwc';

export default class LifecycleExample extends LightningElement {

    username = 'Prince';

    connectedCallback() {
        console.log('Connected Callback executed');
        console.log('Username:', this.username);
    }
}
```

### Explanation

- Salesforce inserts the component into the DOM.
- `connectedCallback()` executes.
- The method can access the component's initialized JavaScript state.
- The messages appear in the browser console.

### Common Use Cases

- Fetching data from Apex.
- Initializing data or caches.
- Subscribing to Lightning Message Service.
- Registering required external event listeners.
- Setting up timers when appropriate.

### Important Points

- `connectedCallback()` can execute more than once if the component is removed and reinserted.
- The component's own child elements have not been rendered yet.
- Avoid querying child elements here.
- If initialization depends on a public property, ensure the logic handles changes to that property correctly.

## Understanding `renderedCallback()`

### What Is `renderedCallback()`?

The `renderedCallback()` lifecycle hook executes after a component has rendered.

It can execute multiple times during the component's lifetime. For example, when a reactive property used by the template changes, LWC may render the component again.

### Syntax

```javascript
renderedCallback() {
    console.log('Component rendered');
}
```

### Example

```javascript
import { LightningElement } from 'lwc';

export default class LifecycleExample extends LightningElement {

    hasRendered = false;

    renderedCallback() {

        if (this.hasRendered) {
            return;
        }

        this.hasRendered = true;

        console.log('First render completed');
    }
}
```

### Explanation

- `renderedCallback()` executes after rendering.
- `hasRendered` initially contains `false`.
- The first time the method executes, the condition is false.
- The method changes `hasRendered` to `true`.
- On subsequent calls, the method returns early.

This example demonstrates how to perform an operation only once.

### Common Use Cases

- Initializing third-party libraries that require rendered DOM elements.
- Measuring elements after rendering.
- Performing certain DOM-dependent operations.
- Registering a programmatic event listener when declarative HTML event handling is unsuitable.

### Important Points

- This hook can execute repeatedly.
- Avoid updating reactive fields unconditionally inside `renderedCallback()`.
- Doing so may trigger another render and cause an infinite loop.
- Use a guard flag when a post-render operation must run only once.
- Prefer declarative event listeners in HTML whenever possible.

## Understanding `disconnectedCallback()`

### What Is `disconnectedCallback()`?

The `disconnectedCallback()` hook executes when a component is removed from the DOM.

It is primarily used to clean up resources that the component no longer needs.

### Syntax

```javascript
disconnectedCallback() {
    console.log('Component disconnected from DOM');
}
```

### Example

```javascript
import { LightningElement } from 'lwc';

export default class LifecycleExample extends LightningElement {

    timerId;

    connectedCallback() {
        this.timerId = setInterval(() => {
            console.log('Timer is running');
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.timerId);

        console.log('Timer cleared');
    }
}
```

### Explanation

- When the component connects, `connectedCallback()` starts a timer.
- `setInterval()` executes the callback every second.
- The timer identifier is stored in `timerId`.
- When the component is removed, `disconnectedCallback()` executes.
- `clearInterval()` stops the timer.

### Common Use Cases

- Clearing intervals and timeouts.
- Unsubscribing from message channels.
- Removing manually registered external event listeners.
- Disconnecting observers.
- Releasing resources and performing cleanup.

### Important Points

- Clean up resources created during setup.
- Do not assume the component will remain connected permanently.
- A component may be disconnected and connected again.

## Understanding `errorCallback()`

### What Is `errorCallback()`?

The `errorCallback(error, stack)` lifecycle hook acts as an error boundary for eligible errors thrown by descendant components.

It can be used to log errors and display fallback UI when a child component encounters an error during construction, rendering, or a lifecycle hook.

### Syntax

```javascript
errorCallback(error, stack) {
    console.error('Child component error:', error);
    console.error('Component stack:', stack);
}
```

### Parameters

- `error`: The error object containing information about the error.
- `stack`: The component stack information that helps identify where the error occurred.

### Example

```javascript
import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    errorMessage;

    errorCallback(error, stack) {
        this.errorMessage = 'Something went wrong while displaying a child component.';

        console.error('Error:', error);
        console.error('Stack:', stack);
    }
}
```

### HTML

```html
<template>
    <lightning-card title="Error Handling">

        <template lwc:if={errorMessage}>
            <p>{errorMessage}</p>
        </template>

        <template lwc:else>
            <c-child-component></c-child-component>
        </template>

    </lightning-card>
</template>
```

### Explanation

- The parent contains a child component.
- If an eligible error occurs in a descendant component, the parent's `errorCallback()` can execute.
- The error information is logged.
- `errorMessage` is updated.
- The template can display a fallback message instead of the normal child content.

**Important:** `errorCallback()` does not catch every possible error. For example, errors thrown in the component's own event handlers or asynchronous callbacks generally require their own error handling, such as `try...catch`.

## Lifecycle Execution Flow

For a typical component's initial lifecycle, the general sequence is:

```text
Component Instance Created
          |
          v
    constructor()
          |
          v
  connectedCallback()
          |
          v
       Rendering
          |
          v
  renderedCallback()
          |
          v
 Reactive Property Changes?
          |
          v
    Re-rendering
          |
          v
  renderedCallback()
  (may run again)
          |
          v
 Component Removed
          |
          v
 disconnectedCallback()
```

`errorCallback()` is not simply the next step in this sequence. It executes when an eligible descendant error occurs.

## Parent and Child Component Lifecycle

When a parent component contains a child component, their lifecycle hooks follow framework-managed ordering.

A simplified initial lifecycle looks like this:

```text
Parent constructor()
        |
        v
Parent connectedCallback()
        |
        v
Parent rendering begins
        |
        v
Child constructor()
        |
        v
Child connectedCallback()
        |
        v
Child renderedCallback()
        |
        v
Parent renderedCallback()
```

This is a simplified illustration of the usual initial rendering sequence.

Important details:

- The parent's `constructor()` runs before the child's constructor.
- The parent's `connectedCallback()` runs before the child's `connectedCallback()`.
- The child is rendered before the parent's `renderedCallback()` completes its post-render work.
- The framework manages the actual rendering process.

## Difference Between All Five Lifecycle Hooks

| Hook | Main Purpose | Can Access Rendered Child Elements? | Typical Example |
|---|---|---|---|
| `constructor()` | Initialize the component | No | Set initial properties |
| `connectedCallback()` | Setup when connected | No, the component's children are not rendered yet | Fetch data |
| `renderedCallback()` | Perform post-render logic | Yes, rendered template elements can be accessed | Initialize a chart library |
| `disconnectedCallback()` | Clean up on removal | Do not rely on rendered children still being available | Clear timers |
| `errorCallback()` | Handle eligible descendant errors | Depends on the error and component state | Show fallback UI |

## Common Mistakes

### 1) Accessing DOM Elements in `constructor()`

- The component's template has not rendered yet. Use `renderedCallback()` for operations that require rendered DOM elements.

### 2) Assuming `connectedCallback()` Runs Only Once

- A component can be removed and inserted again. Make initialization safe to run more than once.

### 3) Updating Reactive State Unconditionally in `renderedCallback()`

- This can cause repeated rendering. Use a guard or move the logic to a more appropriate method.

### 4) Forgetting Cleanup

- Timers, subscriptions, and external event listeners may continue running after the component is removed unless they are cleaned up properly.

### 5) Assuming `errorCallback()` Catches All Errors

- It is intended for eligible errors in descendant components. Use ordinary error handling for event handlers and asynchronous operations.

## Best Practices

- Use `constructor()` for simple initialization.
- Use `connectedCallback()` for connection-related setup.
- Use `renderedCallback()` only for logic that requires rendered DOM.
- Use `disconnectedCallback()` to release resources.
- Use `errorCallback()` as an error boundary for descendant components.
- Keep lifecycle methods focused and easy to maintain.
- Prevent unnecessary repeated work.
- Avoid infinite render loops.
- Follow Salesforce's lifecycle documentation when working with complex parent-child components.
ng when each hook runs helps developers initialize components correctly, perform post-render operations, clean up resources, and handle errors.
