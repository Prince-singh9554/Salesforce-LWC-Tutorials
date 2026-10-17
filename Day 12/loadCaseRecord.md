# Load Case Record in LWC

---

## Introduction


In Salesforce, a **Case** represents a customer question, complaint, problem, or support request.

Lightning Web Components (LWC) can be used to retrieve Case records and display them in a user interface.

The main concepts involved in loading Case records are:

- Salesforce Case object
- LWC HTML and JavaScript
- Retrieving Salesforce records
- Displaying records in the UI
- Handling data and errors

### Real-Life Example

Suppose a customer reports a payment issue.

A Case record can contain:

- Case Number: 00001001
- Subject: Payment Issue
- Status: New
- Priority: High

A support agent can view the Case record and work on resolving the issue.

---

## Salesforce Case Object


The Case object is a standard Salesforce object used to manage customer service issues.

### Important Fields

| Field Name | Description |
|---|---|
| `Id` | Unique record ID |
| `CaseNumber` | Case number |
| `Subject` | Short description of the issue |
| `Status` | Current status |
| `Priority` | Priority of the issue |
| `Origin` | Source of the Case |
| `Description` | Detailed issue description |
| `OwnerId` | ID of the record owner |

### Example

```javascript
const caseRecord = {
    CaseNumber: "00001001",
    Subject: "Payment Issue",
    Status: "New",
    Priority: "High"
};

console.log(caseRecord.Subject);
```

### Output

```text
Payment Issue
```

### Explanation

1. `caseRecord` is an object.
2. The object stores information about a Case.
3. `caseRecord.Subject` accesses the Subject property.
4. `console.log()` displays its value.

---

## Lightning Web Component Structure


A typical LWC component contains HTML, JavaScript, and metadata files.

| File | Purpose |
|---|---|
| `loadCaseRecord.html` | Defines the user interface |
| `loadCaseRecord.js` | Contains JavaScript logic |
| `loadCaseRecord.js-meta.xml` | Defines component metadata |
| `loadCaseRecord.css` | Contains optional CSS styling |

An Apex class may also be used if the component retrieves data through custom Apex logic.

### Syntax

```text
loadCaseRecord
│
├── loadCaseRecord.html
├── loadCaseRecord.js
├── loadCaseRecord.js-meta.xml
└── loadCaseRecord.css
```

### Explanation

- HTML determines how the records are displayed.
- JavaScript handles data and component logic.
- Metadata determines where the component can be used.
- CSS controls the component's appearance.

The exact files present in the repository should be checked before assuming that all these files exist.

---

## LightningElement


`LightningElement` is the base class used to create an LWC component.

### Syntax

```javascript
import { LightningElement } from 'lwc';

export default class LoadCaseRecord extends LightningElement {

}
```

### Explanation

**Step 1: Import LightningElement**

```javascript
import { LightningElement } from 'lwc';
```

This imports the base class from the LWC module.

**Step 2: Create the component class**

```javascript
export default class LoadCaseRecord extends LightningElement
```

- `class` defines a JavaScript class.
- `extends` inherits from another class.
- `export default` exports the component class.

### Real-Life Example

Think of `LightningElement` as a basic structure that provides the foundation for creating a Lightning Web Component.

---

## Loading Case Records


To display Case records, an LWC must obtain data through an appropriate Salesforce data access mechanism.

Common approaches include:

- Apex methods
- Lightning Data Service
- Salesforce UI API adapters

The correct approach depends on the implementation in the GitHub project.

### General Flow

```text
Salesforce Case Object
          |
          v
Data Retrieval Mechanism
          |
          v
LWC JavaScript
          |
          v
LWC HTML
          |
          v
Display Case Records
```

### Explanation

1. Case records are stored in Salesforce.
2. The component requests the required data.
3. Salesforce returns records or an error.
4. JavaScript exposes or assigns the retrieved data.
5. HTML renders the available records.

---

## @wire Decorator


The `@wire` decorator connects an LWC component to a Salesforce wire adapter or an Apex method.

The wire service provisions data reactively.

### Syntax

```javascript
import { LightningElement, wire } from 'lwc';
```

### Example

```javascript
@wire(getCases)
cases;
```

Here, `getCases` represents an imported Apex method or another valid wire-compatible function.

This is a conceptual example; the actual import and implementation must match the project.

### Explanation

- `@wire` connects the component to a data source.
- `getCases` identifies the method supplying the data.
- `cases` is the property receiving the wire result.

### Important Point

The actual structure of the result depends on whether the wire is connected to an Apex method or a Salesforce data adapter.

**Official Documentation:** https://developer.salesforce.com/docs/platform/lwc/guide/data-wire-service.html

---

## Displaying Records Using HTML


LWC templates can use directives such as `for:each` to display multiple records.

### Syntax

```html
<template for:each={cases} for:item="caseRecord">
    <p key={caseRecord.Id}>
        {caseRecord.Subject}
    </p>
</template>
```

### Explanation

**Step 1: Iterate through the array**

```html
for:each={cases}
```

This iterates through the records stored in `cases`.

**Step 2: Define the current record**

```html
for:item="caseRecord"
```

The current item is available through `caseRecord`.

**Step 3: Provide a unique key**

```html
key={caseRecord.Id}
```

The key identifies each rendered record.

**Step 4: Display the Subject**

```html
{caseRecord.Subject}
```

This displays the Subject field of the current Case record.

### Output

If the array contains three Case records, their subjects will be displayed as three separate paragraphs.

### Important Point

The JavaScript property must contain the expected records and fields for this example to work.

---

## Apex and SOQL


Apex is Salesforce's server-side programming language.

SOQL stands for Salesforce Object Query Language. It retrieves records and fields from Salesforce objects.

### Syntax

```sql
SELECT Field1, Field2
FROM ObjectName
```

### Example

```sql
SELECT Id, CaseNumber, Subject, Status
FROM Case
```

### Explanation

- `SELECT` specifies which fields to retrieve.
- `FROM` identifies the Salesforce object.
- `Case` is the object being queried.

### Example with Sorting

```sql
SELECT Id, CaseNumber, Subject, Status
FROM Case
ORDER BY CreatedDate DESC
LIMIT 10
```

This query retrieves up to ten Case records, sorted by creation date from newest to oldest.

### Real-Life Example

A support team wants to display its ten newest Case records in a dashboard.

A suitable SOQL query can retrieve those records for display in the LWC.

**Note:** These queries are learning examples and should not be assumed to match the exact query in the GitHub project.

---

## Handling Data and Errors


When retrieving records, a component should account for both successful and unsuccessful requests.

### Example

```javascript
@wire(getCases)
wiredCases({ data, error }) {

    if (data) {
        this.cases = data;
    } else if (error) {
        this.cases = [];
    }

}
```

### Explanation

1. `wiredCases()` receives the wire result.
2. `data` contains the result when the request succeeds.
3. `error` contains error information when the request fails.
4. The component stores the records in `cases`.
5. On failure, the example clears the records.

A production component should also provide an appropriate error message.

### Real-Life Example

If Salesforce cannot retrieve the Case records because of a permissions issue, the component should communicate that the records could not be loaded instead of silently displaying a blank screen.

---

## Step-by-Step Execution Flow


A typical Case-loading component follows this process:

```text
1. Salesforce loads the LWC
             |
             v
2. Data request is initiated
             |
             v
3. Salesforce processes the request
             |
             v
4. Data or error is returned
             |
             v
5. JavaScript handles the result
             |
             v
6. HTML renders the records
             |
             v
7. User sees the Case information
```

### Explanation

**Step 1:** The LWC component is created.

**Step 2:** The component requests Case records using its configured data mechanism.

**Step 3:** Salesforce retrieves the requested data, subject to applicable permissions and access rules.

**Step 4:** The component receives the data or an error.

**Step 5:** JavaScript makes the result available to the template.

**Step 6:** The template renders the available records.

**Step 7:** The user views the Case information.

The actual method calls and timing depend on the project's code.

---

## Common Mistakes

- Using an incorrect field API name.
- Referencing fields that were not requested.
- Forgetting the `key` attribute in list rendering.
- Not handling errors.
- Assuming that `recordId` automatically retrieves records.
- Using `cacheable=true` on an Apex method that modifies data.
- Ignoring Salesforce permissions and sharing.
- Forgetting to configure the component's metadata correctly.

---

## Questions & Answers

### Q1. What is the Case object?

The Case object is a standard Salesforce object used to manage customer service issues and support requests.

### Q2. What is LWC?

Lightning Web Components is a Salesforce framework for building reusable user interfaces using HTML, JavaScript, and CSS.

### Q3. What is @wire?

`@wire` connects an LWC component to a Salesforce wire adapter or an Apex method and provisions data reactively.

### Q4. What is SOQL?

SOQL stands for Salesforce Object Query Language. It retrieves records and fields from Salesforce objects.

### Q5. What is the purpose of the key attribute?

The `key` attribute provides a unique identity for each item rendered in a list.

### Q6. Why is error handling necessary?

Error handling helps the component respond appropriately when a data request fails.

### Q7. What is the difference between @wire and imperative Apex?

`@wire` provisions data reactively. Imperative Apex is invoked explicitly from JavaScript, such as when a user clicks a button.

---
