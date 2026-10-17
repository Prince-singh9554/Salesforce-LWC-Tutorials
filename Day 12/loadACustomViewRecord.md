# LDS with Custom View in Lightning Web Components (LWC)

## Introduction

Lightning Data Service (LDS) is a Salesforce feature that allows Lightning Web Components to access, display, create, update, and delete Salesforce records without writing Apex code for standard record operations.

In this example, we use `lightning-record-view-form` to display selected fields of a Case record in a custom layout.

The component displays the following Case fields:

- Case Number
- Reason
- Type
- Status

The fields are arranged using the Salesforce Lightning Design System (SLDS) grid classes.

## What Is Lightning Data Service (LDS)?

### Content

Lightning Data Service provides access to Salesforce records while handling many underlying data operations automatically.

It helps developers:
- Retrieve Salesforce record data without writing an Apex controller.
- Respect Salesforce sharing rules and field-level security.
- Use standard Lightning components to display and edit record information.
- Benefit from client-side caching and record synchronization.

### Syntax

```html
<lightning-record-view-form
    record-id={recordId}
    object-api-name={objectApiName}>
</lightning-record-view-form>
```

### Explanation

- `lightning-record-view-form` creates a form for viewing a Salesforce record.
- `record-id` specifies which record should be displayed.
- `object-api-name` specifies the Salesforce object to which the record belongs.

In this example, the record ID comes from the current Salesforce record page, and the object is `Case`.

### Real-Life Example

Suppose a support agent opens a Case record in Salesforce. The component displays selected information about that Case without requiring a custom Apex query.

## What Is lightning-record-view-form?

### Content

`lightning-record-view-form` is a base Lightning component used to display fields from a single Salesforce record.

It works with `lightning-output-field` components to show individual field values.

### Syntax

```html
<lightning-record-view-form
    record-id={recordId}
    object-api-name="Case">

    <lightning-output-field
        field-name="CaseNumber">
    </lightning-output-field>

</lightning-record-view-form>
```

### Explanation

- `record-id` identifies the Case record.
- `object-api-name` identifies the object.
- `lightning-output-field` displays a particular field from that record.
- `field-name` accepts the field's API name.

**Important:** `lightning-record-view-form` is intended for viewing records. For editing, Salesforce provides `lightning-record-edit-form`.

## What Is lightning-output-field?

### Content

`lightning-output-field` displays the value of a Salesforce field inside a supported record form.

It uses Salesforce field metadata to render the field label and value.

### Syntax

```html
<lightning-output-field
    field-name="Status">
</lightning-output-field>
```

### Explanation

The `field-name` attribute specifies which field to display.

For example:

```html
<lightning-output-field
    field-name="CaseNumber">
</lightning-output-field>
```

This displays the Case Number for the record specified by `record-id`.

### Fields Used in This Example

| Field API Name | Purpose |
|---|---|
| `CaseNumber` | Displays the Case number |
| `Reason` | Displays the reason for the Case |
| `Type` | Displays the Case type |
| `Status` | Displays the current Case status |

## Understanding the HTML Template

### Complete HTML Code

```html
<template>
    <lightning-card title="LDS with Custom View">
        <lightning-record-view-form
            record-id={recordId}
            object-api-name={objectApiName}>

            <div class="slds-grid slds-wrap"
                 style="padding: 20px;">

                <div class="slds-col slds-size_2-of-6">
                    <lightning-output-field
                        field-name="CaseNumber">
                    </lightning-output-field>
                </div>

                <div class="slds-col slds-size_2-of-6">
                    <lightning-output-field
                        field-name="Reason">
                    </lightning-output-field>
                </div>

                <div class="slds-col slds-size_2-of-6">
                    <lightning-output-field
                        field-name="Type">
                    </lightning-output-field>
                </div>

                <div class="slds-col slds-size_2-of-6">
                    <lightning-output-field
                        field-name="Status">
                    </lightning-output-field>
                </div>

            </div>
        </lightning-record-view-form>
    </lightning-card>
</template>
```

### Explanation

**`<template>`**

The root element of an LWC HTML template. It contains the component's markup.

**`<lightning-card>`**

Creates a card-style container with the title `LDS with Custom View`.

**`<lightning-record-view-form>`**

Connects the displayed fields to a specific Salesforce record.

**`<div class="slds-grid slds-wrap">`**

Creates an SLDS grid layout.

- `slds-grid` enables grid-based layout.
- `slds-wrap` allows columns to move onto another row when necessary.
- `padding: 20px` adds space inside the layout.

**`<div class="slds-col slds-size_2-of-6">`**

Creates a grid column that occupies two of the six SLDS grid units, equivalent to one-third of the available width.

With four columns, each field container is designed to occupy approximately one-third of the row. Therefore, the fourth field can wrap to another row.

## Understanding the JavaScript Controller

### Complete JavaScript Code

```javascript
import { LightningElement, api } from 'lwc';

export default class LoadACustomViewRecord
    extends LightningElement {

    @api recordId;

    objectApiName = 'Case';
}
```

### Explanation

**Importing LightningElement**

```javascript
import { LightningElement } from 'lwc';
```

`LightningElement` is the base class for Lightning Web Components. A component extends this class to use the LWC framework.

**Importing api**

```javascript
import { api } from 'lwc';
```

The `api` decorator makes a property public so that it can receive a value from the component's parent or the Salesforce platform.

**Using @api recordId**

```javascript
@api recordId;
```

The `recordId` property receives the ID of the current record when the component is placed on a supported Salesforce record page.

For example, when the component is placed on a Case record page, Salesforce can supply that Case's record ID.

**Defining objectApiName**

```javascript
objectApiName = 'Case';
```

This property identifies the Salesforce object used by the component.

The HTML template references it through:

```html
object-api-name={objectApiName}
```

### Why Is recordId Public?

The component needs to know which record to display. The `@api` decorator allows Salesforce to provide that record ID to the component.

Without the correct record ID, the component cannot identify the intended record to display.

## Understanding the Metadata XML File

### Complete XML Code

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle
    xmlns="http://soap.sforce.com/2006/04/metadata">

    <apiVersion>67.0</apiVersion>
    <isExposed>true</isExposed>

    <targets>
        <target>lightning__RecordPage</target>
    </targets>

</LightningComponentBundle>
```

### Explanation

**`apiVersion`**

```xml
<apiVersion>67.0</apiVersion>
```

Specifies the Salesforce API version used by the component metadata.

**`isExposed`**

```xml
<isExposed>true</isExposed>
```

Makes the component available for use in supported Salesforce setup and builder experiences.

**`targets`**

```xml
<targets>
    <target>lightning__RecordPage</target>
</targets>
```

Specifies that the component can be placed on a Lightning record page using Lightning App Builder.

Because the target is `lightning__RecordPage`, this component is configured for record pages rather than Home or App pages.

## Step-by-Step Execution Flow

The component works in the following sequence:

1. The user opens a Case record page in Salesforce.
2. Salesforce loads the LWC component placed on that page.
3. Salesforce supplies the current record ID to the public `recordId` property.
4. The `objectApiName` property identifies the object as `Case`.
5. `lightning-record-view-form` receives the record ID and object API name.
6. Lightning Data Service retrieves the accessible record data.
7. Each `lightning-output-field` requests its corresponding field for display.
8. The SLDS grid arranges the fields inside the card.

### Flow Diagram

```text
User opens a Case record page
              |
              v
Salesforce loads the LWC
              |
              v
@api recordId receives the record ID
              |
              v
objectApiName = 'Case'
              |
              v
lightning-record-view-form
              |
              v
Lightning Data Service
              |
              v
Case record fields are displayed
              |
              v
Custom SLDS grid layout
```


All three filenames must use the same component name.

## How to Use the Component in Salesforce

1. Create the `loadACustomViewRecord` LWC in VS Code.
2. Add the HTML, JavaScript, and XML code.
3. Save the files.
4. Deploy the component to your Salesforce org.
5. Open a Case record in Salesforce.
6. Select **Edit Page** to open Lightning App Builder.
7. Find the custom LWC in the component list.
8. Drag it onto the record page.
9. Save and activate the page if required.
10. Open a Case record to verify that the fields are displayed.

## Difference Between LDS and Apex

| Lightning Data Service | Apex |
|---|---|
| Can retrieve records without custom Apex code | Requires an Apex method for custom server-side logic |
| Uses supported Lightning base components and adapters | Allows custom SOQL, business logic, and processing |
| Handles supported record operations and caching | Requires developers to manage their method's behavior and security appropriately |
| Useful for standard record forms and field display | Useful for complex queries and operations not covered by standard LDS features |

## Difference Between Record View and Record Edit Forms

| Component | Purpose |
|---|---|
| `lightning-record-view-form` | Displays record fields |
| `lightning-record-edit-form` | Creates or edits record fields |
| `lightning-output-field` | Displays a field value |
| `lightning-input-field` | Provides an editable field inside a supported form |
