# Edit Record with Custom Layout in LWC

## Introduction

`lightning-record-edit-form` is a Salesforce base component that allows developers to create a customized form for editing or creating Salesforce records.

Unlike `lightning-record-form`, which automatically arranges its fields, `lightning-record-edit-form` lets developers control the placement of individual fields and buttons.

In this example, we create a custom Case editing form containing:

- Case Number
- Origin
- Reason
- Status
- Subject
- Type
- SLA Violation (`SLAViolation__c`)

The layout uses SLDS grid classes. The form also includes validation messages, a Reset button, a Save button, and a success handler.

## What Is lightning-record-edit-form?

### Content

`lightning-record-edit-form` provides a customizable form for creating or editing a Salesforce record.

It works with components such as `lightning-input-field` and supports standard record submission.

### Syntax

```html
<lightning-record-edit-form
    record-id={recordId}
    object-api-name={objectName}
    onsuccess={handleSuccess}>

    <lightning-messages></lightning-messages>

    <lightning-input-field
        field-name="Subject">
    </lightning-input-field>

    <lightning-button
        label="Save"
        type="submit">
    </lightning-button>

</lightning-record-edit-form>
```

### Explanation

- `record-id`: Identifies the record being edited.
- `object-api-name`: Specifies the Salesforce object.
- `onsuccess`: Calls a JavaScript handler after a successful save.
- `lightning-messages`: Displays supported validation and record-save error messages.
- `lightning-input-field`: Renders an individual Salesforce field.
- `type="submit"`: Submits the form.

## What Is lightning-input-field?

### Content

`lightning-input-field` renders an input control for a field associated with the record form.

The control type depends on the field's metadata. For example, a picklist field is rendered as a picklist, while a text field is rendered as a text input.

### Syntax

```html
<lightning-input-field
    field-name="Origin">
</lightning-input-field>
```

### Fields Used in This Component

| Field API Name | Purpose |
|---|---|
| `CaseNumber` | Identifies the Case |
| `Origin` | Records where the Case originated |
| `Reason` | Records the reason for the Case |
| `Status` | Tracks the Case's current status |
| `Subject` | Describes the Case |
| `Type` | Categorizes the Case |
| `SLAViolation__c` | Custom field intended to track SLA violation |

**Important:** `CaseNumber` is normally a system-generated, read-only field. Including it in the form does not make it editable. The custom field `SLAViolation__c` must exist in the org, and the current user must have appropriate access to it.

## Understanding Custom Layout with SLDS

### Content

The Salesforce Lightning Design System (SLDS) provides CSS utility classes for arranging fields and controlling spacing.

This example uses:

```html
<div class="slds-grid slds-wrap slds-m-around_medium">
```

- `slds-grid`: Creates a grid layout.
- `slds-wrap`: Allows columns to wrap onto another line.
- `slds-m-around_medium`: Adds medium-sized margin around the container.

### Column Sizes

```html
<div class="slds-size_2-of-2">
```

This occupies the full available width.

```html
<div class="slds-size_1-of-2">
```

This occupies half the available width.

Therefore, the Case Number field is intended to use a full-width row, while the remaining fields are arranged in half-width columns.

## What Is lightning-messages?

### Content

`lightning-messages` displays supported error messages associated with a Lightning record form.

It is useful when a record cannot be saved because of issues such as validation rules or invalid field values.

### Syntax

```html
<lightning-messages></lightning-messages>
```

### Explanation

Place `lightning-messages` inside the `lightning-record-edit-form`. Salesforce can then display relevant messages associated with the form.

This component does not replace custom error handling for every possible application error, but it provides standard form-level feedback.

## Understanding Save and Reset Buttons

### Save Button

```html
<lightning-button
    label="Save"
    type="submit"
    variant="brand">
</lightning-button>
```

- `label="Save"` sets the button text.
- `type="submit"` submits the record-edit form.
- `variant="brand"` gives the button the brand styling.

The form handles the standard submission process; a separate JavaScript save function is not required for this basic workflow.

### Reset Button

```html
<lightning-button
    label="Reset"
    type="reset"
    variant="brand">
</lightning-button>
```

The reset button resets the form's input fields to their initial values according to the form's reset behavior.

It does not save the record. For a reliable reset action, use the standard reset behavior supported by the form and its fields.

## What Is the onsuccess Event?

### Content

`onsuccess` is an event handler attribute supported by `lightning-record-edit-form`.

It invokes a JavaScript method after the record has been saved successfully.

### Syntax

```html
<lightning-record-edit-form
    onsuccess={handleSuccess}>
</lightning-record-edit-form>
```

JavaScript:

```javascript
handleSuccess(event) {
    // Run logic after a successful save.
}
```

### Explanation

In this component, `handleSuccess` is intended to reset the form after a successful save.

The success event provides information about the saved record. The handler can also be used for actions such as displaying a toast message or performing additional UI updates.

## Complete HTML Code

```html
<template>
    <lightning-card
        title="Record form with custom layout to edit">

        <lightning-record-edit-form
            record-id={recordId}
            object-api-name={objectName}
            onsuccess={handleSuccess}>

            <lightning-messages></lightning-messages>

            <div class="slds-grid slds-wrap slds-m-around_medium">

                <div class="slds-size_2-of-2">
                    <lightning-input-field
                        field-name="CaseNumber">
                    </lightning-input-field>
                </div>

                <div class="slds-size_1-of-2">
                    <lightning-input-field
                        field-name="Origin">
                    </lightning-input-field>
                </div>

                <div class="slds-size_1-of-2">
                    <lightning-input-field
                        field-name="Reason">
                    </lightning-input-field>
                </div>

                <div class="slds-size_1-of-2">
                    <lightning-input-field
                        field-name="Status">
                    </lightning-input-field>
                </div>

                <div class="slds-size_1-of-2">
                    <lightning-input-field
                        field-name="Subject">
                    </lightning-input-field>
                </div>

                <div class="slds-size_1-of-2">
                    <lightning-input-field
                        field-name="Type">
                    </lightning-input-field>
                </div>

                <div class="slds-size_1-of-2">
                    <lightning-input-field
                        field-name="SLAViolation__c">
                    </lightning-input-field>
                </div>

                <div class="slds-m-around_medium">
                    <lightning-button
                        class="slds-p-left_small"
                        label="Reset"
                        type="reset"
                        variant="brand">
                    </lightning-button>

                    <lightning-button
                        class="slds-p-left_small"
                        label="Save"
                        type="submit"
                        variant="brand">
                    </lightning-button>
                </div>

            </div>
        </lightning-record-edit-form>
    </lightning-card>
</template>
```

## Complete JavaScript Code

The supplied code uses the selector `lightning-record-form-edit`, which does not match the actual component name. The corrected selector is `lightning-record-edit-form`.

```javascript
import { LightningElement, api } from 'lwc';

export default class EditRecordWithCustomLayout
    extends LightningElement {

    @api recordId;

    objectName = 'Case';

    handleSuccess() {
        const formElement =
            this.template.querySelector(
                'lightning-record-edit-form'
            );

        if (formElement) {
            const inputFields =
                formElement.querySelectorAll(
                    'lightning-input-field'
                );

            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}
```

### Why Is the JavaScript Corrected?

The `handleSuccess` method runs after the save succeeds.

- `querySelector` locates the record-edit form.
- `querySelectorAll` finds the input-field components within it.
- `field.reset()` resets each field to its initial value.
- The `if` check prevents an error if the form cannot be found.

**Behavior note:** Resetting after a successful save is usually unnecessary because the record has already been saved. If your goal is to show the saved values after submission, you may prefer to let the form display the updated record or refresh the relevant UI. A reset returns fields to their initial values; it is not a second save operation.

## Understanding the Metadata XML

The XML configures this component for both Record pages and Home pages:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle
    xmlns="http://soap.sforce.com/2006/04/metadata">

    <apiVersion>67.0</apiVersion>
    <isExposed>true</isExposed>

    <targets>
        <target>lightning__HomePage</target>
        <target>lightning__RecordPage</target>
    </targets>

</LightningComponentBundle>
```

A Record page can supply the current record ID. A Home page does not automatically supply a particular Case record ID, so this component needs another way to obtain a valid ID if used on the Home page.

## Step-by-Step Execution Flow

1. Salesforce loads the component on a supported Lightning page.
2. The component receives a Case record ID when one is supplied by the page.
3. `lightning-record-edit-form` loads the specified Case.
4. `lightning-input-field` renders the selected fields.
5. SLDS classes arrange the fields into a custom layout.
6. The user changes the fields they are allowed to edit.
7. The user clicks Save.
8. The form submits the changes through Salesforce's standard record APIs.
9. If the save succeeds, `handleSuccess` runs.
10. If the save fails, supported error messages can appear through `lightning-messages`.

## lightning-record-form vs lightning-record-edit-form

| Feature | `lightning-record-form` | `lightning-record-edit-form` |
|---|---|---|
| Field rendering | Automatically renders the specified fields | Uses explicitly placed field components |
| Custom field layout | More limited | More flexible |
| Custom buttons and markup | Less control over the internal form | Greater control over the form's markup |
| Standard save behavior | Built in | Built in |
| Best suited for | Quick standard forms | Customized record-edit layouts |

## Questions

1. **What is `lightning-record-edit-form`?**

   A Salesforce base component for creating or editing records with a customizable layout.

2. **What is the purpose of `lightning-input-field`?**

   It renders an input control for a Salesforce field within a supported record form.

3. **What does `onsuccess` do?**

   It invokes a handler after the record is saved successfully.

4. **Why do we use `lightning-messages`?**

   It displays supported form-level error and validation messages.

5. **What does `type="submit"` do?**

   It submits the record-edit form.

6. **What does `type="reset"` do?**

   It triggers the form's reset behavior rather than saving changes.

7. **Why are SLDS grid classes used?**

   They control field widths, alignment, wrapping, and spacing.

8. **Why is `CaseNumber` normally read-only?**

   Salesforce generates the Case Number automatically.

9. **What was incorrect in the original `handleSuccess` method?**

   The selector `lightning-record-form-edit` was incorrect; the component is named `lightning-record-edit-form`.

10. **Does resetting a field save the record?**

    No. Resetting changes the field's displayed or input state; saving requires form submission.
