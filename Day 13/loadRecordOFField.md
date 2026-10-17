# LDS Without Output Field in LWC

## Introduction

In this example, we retrieve Case record fields using Lightning Data Service and display their values directly in the HTML template through JavaScript properties.

Unlike the previous approach using `lightning-output-field`, this component uses:

- `getRecord` to retrieve record data.
- `getFieldValue` to extract individual field values.
- `@wire` to connect the record retrieval function to the component.
- JavaScript getters to make the values available to the HTML template.

The component displays three fields:

- Case Number
- Case Origin
- Type

## What Is getRecord?

### Content

`getRecord` is a function imported from `lightning/uiRecordApi`. It retrieves a Salesforce record and its requested fields through Lightning Data Service.

It returns record data in a structured format, which can then be processed in JavaScript.

### Syntax

```javascript
import { getRecord } from 'lightning/uiRecordApi';

@wire(getRecord, {
    recordId: '$recordId',
    fields: '$fields'
})
caseVar;
```

### Explanation

- `getRecord` retrieves the requested record.
- `recordId` identifies the record to retrieve.
- `fields` specifies which fields are required.
- `caseVar` is the property that receives the wire result.
- `$recordId` and `$fields` are reactive references to component properties. When their values change, the wire service can provision updated data.

The wire result contains properties such as `data` and `error`. When the request succeeds, the record is available through `caseVar.data`.

## What Is lightning/uiRecordApi?

### Content

`lightning/uiRecordApi` is a Salesforce module that provides functions for working with records through the UI API.

In this example, we import two functions from it:

```javascript
import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';
```

- `getRecord` retrieves the record.
- `getFieldValue` extracts a specific field value from the retrieved record.

Using these functions avoids the need to write an Apex controller for this basic record-retrieval requirement.

## What Is a Schema Import?

### Content

Schema imports let us reference Salesforce objects and fields directly in JavaScript.

Instead of manually typing field names into a string, we import the fields from their Salesforce schema definitions.

### Syntax

```javascript
import CASE_NUMBER
    from '@salesforce/schema/Case.CaseNumber';

import ORIGIN_FIELD
    from '@salesforce/schema/Case.Origin';

import TYPE_FIELD
    from '@salesforce/schema/Case.Type';
```

### Explanation

The import path follows this pattern:

```javascript
@salesforce/schema/ObjectApiName.FieldApiName
```

For example:

```javascript
@salesforce/schema/Case.CaseNumber
```

Here:

- `Case` is the object API name.
- `CaseNumber` is the field API name.
- `CASE_NUMBER` is the local JavaScript identifier used to reference the imported field.

The uppercase local names are a naming convention; they are not mandatory.

### Why Use Schema Imports?

- Field references are easier to maintain.
- Salesforce can validate references during development and deployment.
- Renamed or deleted fields can be easier to identify as development issues.
- The code avoids relying on manually typed field-name strings.

## What Is the fields Array?

### Content

The `fields` array identifies the fields that `getRecord` should retrieve.

### Code

```javascript
fields = [
    CASE_NUMBER,
    ORIGIN_FIELD,
    TYPE_FIELD
];
```

### Explanation

Each element represents an imported field reference.

The array requests these three fields from the Case record. Only the fields needed by the component should be included.

The array is passed to `getRecord` through the wire configuration:

```javascript
@wire(getRecord, {
    recordId: '$recordId',
    fields: '$fields'
})
caseVar;
```

This keeps the record request focused on the information the component actually uses.

## What Is getFieldValue?

### Content

`getFieldValue` is a helper function that extracts the value of a particular field from a record returned by the UI API.

### Syntax

```javascript
getFieldValue(record, field)
```

### Example

```javascript
getFieldValue(this.caseVar.data, CASE_NUMBER);
```

### Explanation

- `this.caseVar.data` provides the retrieved record.
- `CASE_NUMBER` identifies the field whose value is required.
- The function returns the value of that field.

This is useful because the record returned by `getRecord` is structured data rather than a collection of simple JavaScript properties such as `caseVar.data.CaseNumber`.

## What Are Getters in JavaScript?

### Content

A getter is a special class member that allows a method to be accessed like a property.

In LWC, getters are useful when the HTML template needs a value that is calculated from other properties.

### Syntax

```javascript
get propertyName() {
    return someValue;
}
```

### Example from This Component

```javascript
get casenumber() {
    return getFieldValue(
        this.caseVar.data,
        CASE_NUMBER
    );
}
```

The HTML template can reference this getter as:

```html
{casenumber}
```

You do not call it using `casenumber()` in the template.

### Why Use Getters Here?

Each getter extracts a specific field from the record data and exposes the resulting value to the template.

This keeps the HTML readable and separates data retrieval from presentation.

## Understanding the Wire Result

### Content

The `@wire` decorator connects a Salesforce data function to a component property or function.

In this example, the wire result is stored in `caseVar`.

```javascript
@wire(getRecord, {
    recordId: '$recordId',
    fields: '$fields'
})
caseVar;
```

The wire result has two important properties:

| Property | Meaning |
|---|---|
| `caseVar.data` | Contains the retrieved record when successful |
| `caseVar.error` | Contains error information when retrieval fails |

The wire service provisions data asynchronously. Therefore, the record may not be available immediately when the component first renders.

A getter that reads `caseVar.data` should account for this initial state.

## Complete HTML Code

```html
<template>
    <lightning-card title="LDS without Output Field">
        <div class="slds-m-around_medium">
            Case Number: {casenumber}<br>
            Case Origin: {origin}<br>
            Type: {type}<br>
        </div>
    </lightning-card>
</template>
```

### Explanation

**`slds-m-around_medium`**

This SLDS utility class adds medium-sized margin around the container.

**`{casenumber}`, `{origin}`, and `{type}`**

These are template expressions. LWC evaluates them using the corresponding JavaScript getters.

**`<br>`**

This HTML element adds a line break between the displayed values.

In this example, the HTML contains ordinary text and template expressions rather than `lightning-output-field` components.

## Complete JavaScript Code

```javascript
import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';

import {
    LightningElement,
    api,
    wire
} from 'lwc';

import CASE_NUMBER
    from '@salesforce/schema/Case.CaseNumber';

import ORIGIN_FIELD
    from '@salesforce/schema/Case.Origin';

import TYPE_FIELD
    from '@salesforce/schema/Case.Type';

export default class LoadRecordOFField
    extends LightningElement {

    @api recordId;

    fields = [
        CASE_NUMBER,
        ORIGIN_FIELD,
        TYPE_FIELD
    ];

    @wire(getRecord, {
        recordId: '$recordId',
        fields: '$fields'
    })
    caseVar;

    get casenumber() {
        return getFieldValue(
            this.caseVar.data,
            CASE_NUMBER
        );
    }

    get origin() {
        return getFieldValue(
            this.caseVar.data,
            ORIGIN_FIELD
        );
    }

    get type() {
        return getFieldValue(
            this.caseVar.data,
            TYPE_FIELD
        );
    }
}
```

### Code Explanation

**Importing the API functions**

```javascript
import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';
```

Imports the record-retrieval function and field-value helper.

**Defining the requested fields**

```javascript
fields = [
    CASE_NUMBER,
    ORIGIN_FIELD,
    TYPE_FIELD
];
```

Creates an array containing the three field references needed by the component.

**Connecting the wire service**

```javascript
@wire(getRecord, {
    recordId: '$recordId',
    fields: '$fields'
})
caseVar;
```

Requests the current record and stores the wire result in `caseVar`.

**Extracting Case Number**

```javascript
get casenumber() {
    return getFieldValue(
        this.caseVar.data,
        CASE_NUMBER
    );
}
```

Returns the Case Number from the retrieved record.

**Extracting Case Origin**

```javascript
get origin() {
    return getFieldValue(
        this.caseVar.data,
        ORIGIN_FIELD
    );
}
```

Returns the Case Origin field value.

**Extracting Type**

```javascript
get type() {
    return getFieldValue(
        this.caseVar.data,
        TYPE_FIELD
    );
}
```

Returns the Case Type field value.

## Step-by-Step Execution Flow

1. Salesforce loads the component on a Case record page.
2. The platform supplies the current record ID.
3. The `fields` array identifies the three required fields.
4. The wire service invokes `getRecord` with the record ID and field references.
5. Salesforce provisions the record data through Lightning Data Service.
6. The wire result becomes available through `caseVar.data`.
7. Each getter calls `getFieldValue` to extract its field.
8. The HTML template displays the resulting values.

### Flow Diagram

```text
Case Record Page
       |
       v
recordId is provided
       |
       v
fields array identifies required fields
       |
       v
@wire(getRecord, ...)
       |
       v
caseVar.data receives record data
       |
       v
JavaScript getters
       |
       v
getFieldValue(record, field)
       |
       v
HTML template displays values
```

## Handling Data and Errors

### Content

Because record retrieval is asynchronous, the wire result may initially contain neither usable data nor a completed response.

In the supplied code, each getter directly reads `this.caseVar.data`. A safer implementation checks whether data exists before extracting a field.

### Safer Getter Example

```javascript
get casenumber() {
    return this.caseVar.data
        ? getFieldValue(
            this.caseVar.data,
            CASE_NUMBER
        )
        : '';
}
```

Use the same pattern for the other getters if you want to prevent access to missing data during initial rendering.

### Error Handling

The supplied component does not display errors. You can add a getter to expose the error state:

```javascript
get errorMessage() {
    return this.caseVar.error
        ? 'Unable to load Case record.'
        : '';
}
```

Then display it in the HTML:

```html
<template if:true={errorMessage}>
    <p>{errorMessage}</p>
</template>
```

For a production component, consider providing a user-friendly error message and logging or inspecting the actual error during development.
## Comparison: Output Field vs getRecord

| Feature | `lightning-output-field` | `getRecord` with `getFieldValue` |
|---|---|---|
| Field rendering | Salesforce renders the field | Developer controls the HTML presentation |
| Field labels | Automatically rendered by the base component | Must be supplied in the template when desired |
| Data access in JavaScript | Not required for basic display | Available through the wire result |
| Layout customization | Uses form field rendering | Supports custom text, markup, and presentation |
| Best suited for | Standard record field display | Custom record displays and computed presentation |

## Questions

1) What is getRecord in LWC?

It is a function from `lightning/uiRecordApi` that retrieves Salesforce record data and specified fields through Lightning Data Service.

2) What is getFieldValue used for?

It extracts a particular field value from a record returned by the UI API.

3) Why do we use schema imports?

They provide references to Salesforce objects and fields directly in JavaScript and improve maintainability.

4) What does the fields array do?

It specifies which fields should be retrieved by `getRecord`.

5) What is the purpose of @wire?

It connects a Salesforce data function to a component property or function and provisions data reactively.

6) What does the dollar sign mean in `$recordId`?

It identifies a reactive reference to the component property named `recordId` in the wire configuration.

7) What is the difference between caseVar and caseVar.data?

`caseVar` contains the wire result, while `caseVar.data` contains the retrieved record when successful.

8) Why are getters used in this component?

They extract individual field values and expose them as properties that the HTML template can evaluate.

9) Can we use getRecord without Apex?

Yes. `getRecord` retrieves record data through Lightning Data Service without requiring an Apex controller.

10) What happens if the record request fails?

The wire result can expose an error through `caseVar.error`. The component should handle that error if appropriate.
