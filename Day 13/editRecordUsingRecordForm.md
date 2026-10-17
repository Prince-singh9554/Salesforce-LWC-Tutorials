# Edit Record Using lightning-record-form in LWC


## Introduction

`lightning-record-form` is a standard Lightning Web Component base component that allows developers to view, create, and edit Salesforce records with minimal JavaScript code.

In this example, we use `lightning-record-form` in **edit mode** to display fields from an existing Case record and allow users to edit them.

The component uses these fields:

- Case Number
- Origin
- Type

The fields are supplied through a JavaScript array, and the form is configured with `mode="edit"`.

## What Is lightning-record-form?

### Content

`lightning-record-form` is a Salesforce base component that provides a ready-made form for creating, viewing, or editing records.

It handles much of the standard form behavior, including field rendering and record submission.

### Syntax

```html
<lightning-record-form
    record-id={recordId}
    object-api-name="Case"
    fields={fields}
    mode="edit">
</lightning-record-form>
```

### Explanation

- `record-id`: Identifies the existing record to edit.
- `object-api-name`: Specifies the Salesforce object.
- `fields`: Specifies which fields appear in the form.
- `mode`: Determines whether the form is displayed in view or edit mode.

### Real-Life Example

A support agent opens a Case record and needs to update its Origin or Type. Instead of building a custom form with individual input components, the developer can use `lightning-record-form` to provide a standard editing interface.

## Understanding the mode Attribute

### Content

The `mode` attribute controls how the form displays record fields.

### Available Modes

| Mode | Purpose |
|---|---|
| `view` | Displays record fields in read-only mode |
| `edit` | Displays editable fields for an existing record |
| `readonly` | Displays record information without editing controls |

### Example

```html
<lightning-record-form
    record-id={recordId}
    object-api-name="Case"
    fields={fields}
    mode="edit">
</lightning-record-form>
```

### Explanation

In this example:

```html
mode="edit"
```

The form opens in edit mode, allowing the user to modify fields they have permission to edit.

**Important:** The `CaseNumber` field is normally system-generated and read-only. Although it is included in the requested field list, users generally cannot edit its value.

## Understanding the fields Attribute

### Content

The `fields` attribute defines the fields that the form should display.

In this example, the HTML references a JavaScript property named `fields`.

```html
fields={fields}
```

The value is supplied by the JavaScript controller.

### JavaScript Example

```javascript
const FIELDS = [
    'CaseNumber',
    'Origin',
    'Type'
];
```

### Explanation

Each string represents a field API name on the Case object.

- `CaseNumber`: Displays the Case number.
- `Origin`: Displays the channel or source from which the Case originated.
- `Type`: Displays the Case type.

The `fields` attribute accepts an array of field names or field references.

## Why Use a Constant for Fields?

### Content

The code defines the field list outside the component class:

```javascript
const FIELDS = [
    'CaseNumber',
    'Origin',
    'Type'
];
```

This constant stores the field names in one place.

Inside the component, the array is assigned to a property:

```javascript
fields = FIELDS;
```

This makes the list available to the HTML template.

Using a constant can improve organization when the field list is fixed and does not need to change dynamically.

## Complete HTML Code

```html
<template>
    <lightning-card title="Record form for Edit">
        <lightning-record-form
            record-id={recordId}
            object-api-name="Case"
            fields={fields}
            mode="edit">
        </lightning-record-form>
    </lightning-card>
</template>
```

### Explanation

**`lightning-card`**

Provides the container with the title `Record form for Edit`.

**`record-id={recordId}`**

Passes the existing record's ID to the form so that Salesforce knows which record to edit.

**`object-api-name="Case"`**

Identifies the record as a Case.

**`fields={fields}`**

Connects the form to the field array defined in JavaScript.

**`mode="edit"`**

Configures the form for editing the existing record.

No individual `lightning-input-field` elements are required in this example because `lightning-record-form` renders the specified fields automatically.

## Complete JavaScript Code

```javascript
import { LightningElement, api } from 'lwc';

const FIELDS = [
    'CaseNumber',
    'Origin',
    'Type'
];

export default class EditRecordUsingRecordForm
    extends LightningElement {

    @api recordId;

    fields = FIELDS;
}
```

### Explanation

**Importing LightningElement and api**

These imports provide the base class for the component and the decorator used to expose the `recordId` property.

**Defining FIELDS**

The constant contains the API names of the fields to display.

**Using @api recordId**

Salesforce supplies the current record ID when the component is used on a supported record page.

**Assigning fields**

```javascript
fields = FIELDS;
```

Makes the constant available through the component's public template interface.

The component does not need a custom JavaScript save method because the base form handles the standard record-editing workflow.

## Understanding the Metadata XML

### Complete XML Code

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle
    xmlns="http://soap.sforce.com/2006/04/metadata">

    <apiVersion>67.0</apiVersion>
    <isExposed>true</isExposed>

    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>

</LightningComponentBundle>
```

### Explanation

The component has two configured targets:

- `lightning__RecordPage`: Allows the component to be added to a Lightning record page.
- `lightning__HomePage`: Allows the component to be added to a Lightning Home page.

**Note:** The component is designed to edit an existing Case record. A Home page does not automatically provide a Case `recordId`. To use this component on the Home page, you would need another way to supply a valid record ID.

## How Record Editing Works

### Execution Flow

1. The user opens a Case record page.
2. Salesforce supplies the record ID to the component.
3. The `fields` array identifies the fields to display.
4. `lightning-record-form` loads the selected record.
5. The form displays editable fields according to the user's permissions.
6. The user changes one or more editable values.
7. The user submits the form using the standard form controls.
8. Salesforce processes the update through the supported record APIs.
9. The form provides its standard success or error behavior.

## lightning-record-form vs lightning-record-edit-form

| Feature | `lightning-record-form` | `lightning-record-edit-form` |
|---|---|---|
| Form setup | Minimal configuration | Requires more markup |
| Field rendering | Automatically renders specified fields | Uses field components such as `lightning-input-field` |
| Layout customization | Less control over individual field layout | Greater control over field arrangement |
| Standard submit behavior | Built in | Can use built-in submission or custom handling |
| Best use case | Quick standard record forms | Forms requiring more customized layouts or behavior |

## Common Mistakes

**Including a read-only field in edit mode**

`CaseNumber` is typically read-only. Including it in `fields` does not make it editable.

**Using an incorrect field API name**

Each field name must match a field on the specified Salesforce object.

**Forgetting to supply a valid record ID**

Editing an existing record requires the correct `recordId`.

**Expecting the Home page to provide a record ID**

A Home page does not inherently identify a particular Case record. Additional logic is needed if the component is placed there.

**Assuming every field is editable**

Field-level security, record access, field configuration, and standard Salesforce restrictions determine whether a field can be edited.

**Building a custom save function unnecessarily**

For a basic edit form, `lightning-record-form` already handles the standard submission workflow.

## Questions

1. **What is `lightning-record-form`?**

   It is a Salesforce base component used to create, view, or edit records with minimal code.

2. **What is the purpose of `mode="edit"`?**

   It configures the form to edit an existing record.

3. **What does the `fields` attribute do?**

   It identifies which fields should appear in the form.

4. **Why is the `FIELDS` constant declared outside the class?**

   It stores the fixed field list in one place so the component can reuse it.

5. **Can `lightning-record-form` edit an existing Case?**

   Yes, when supplied with a valid Case record ID and the user has the necessary permissions.

6. **Is a custom JavaScript save method required?**

   Not for the standard form submission workflow.

7. **Can Case Number be edited in this form?**

   Normally not. Salesforce generates the Case Number and treats it as a read-only field.

8. **What is the difference between `lightning-record-form` and `lightning-record-edit-form`?**

   `lightning-record-form` automatically renders the specified fields, while `lightning-record-edit-form` offers more control over individual fields and layout.

9. **Why might this component not work as expected on a Home page?**

   The Home page does not automatically provide a specific Case record ID.

10. **Does the form bypass Salesforce permissions?**

    No. Salesforce's record access and field-level security rules still apply.
