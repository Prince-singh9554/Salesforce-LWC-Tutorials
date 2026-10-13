# Import Utility in Salesforce LWC

## Introduction

In Salesforce Lightning Web Components (LWC), an Import Utility is a reusable JavaScript module that contains functions, variables, or other logic that can be imported and used by different components.

When multiple components need the same functionality, writing the same code repeatedly makes the project harder to maintain.

Instead, we can write the common logic once in a utility module and reuse it wherever required.

For example, suppose three LWC components need to format an email address or calculate a total. We can create a utility function and import it into each component.

**Main idea:** Write reusable code once and use it in multiple places.

## What Is a JavaScript Module?

A JavaScript module is a file that can export functionality for other JavaScript files to use.

For example:

```text
importUtility/
│
├── utility.js
├── componentOne.js
└── componentTwo.js
```

In this example:

- `utility.js` contains reusable functions.
- `componentOne.js` imports and uses those functions.
- `componentTwo.js` can import and use the same functions.

In Salesforce LWC, reusable code can be organized in additional JavaScript files within a component bundle or exposed through a dedicated API module component when other components need to share it.

## Understanding `export`

The `export` keyword makes a function, variable, or other supported declaration available to another JavaScript module.

There are two common export types:

- Named export
- Default export

### Named Export

A named export allows a module to export one or more functions or variables by name.

#### Utility File

```javascript
export function addNumbers(a, b) {
    return a + b;
}

export function multiplyNumbers(a, b) {
    return a * b;
}
```

Here, `addNumbers` and `multiplyNumbers` are named exports.

#### Importing the Functions

```javascript
import {
    addNumbers,
    multiplyNumbers
} from './utility';
```

The importing module uses the names provided by the utility module.

**Important:** In a Salesforce LWC bundle, relative imports to local JavaScript files use the appropriate relative module path. The exact path depends on the location of the files.

### Default Export

A default export allows a module to export one main value or function as its default export.

#### Utility File

```javascript
export default function greetUser(name) {
    return `Hello, ${name}!`;
}
```

#### Importing the Function

```javascript
import greetUser from './utility';
```

The importing module can choose a local name for a default export.

For example:

```javascript
import welcomeMessage from './utility';
```

This works because the module is importing the default export, not a named export.

## Difference Between Named Export and Default Export

| Named Export | Default Export |
|---|---|
| Can export multiple named declarations. | A module can have one default export. |
| Import the exported name using braces. | Import without braces. |
| Imported name normally matches the exported name unless aliased. | The importing module can choose its local name. |
| Example: `export function addNumbers() {}` | Example: `export default function greetUser() {}` |

## Creating a Reusable Utility Function

Let's create a utility function that converts text to uppercase.

### Utility JavaScript

```javascript
export function convertToUpperCase(value) {
    return value ? value.toUpperCase() : '';
}
```

### Explanation

- `export` makes the function available to other modules.
- `convertToUpperCase` is the function name.
- `value` is the input parameter.
- `value.toUpperCase()` converts the string to uppercase.
- The conditional expression returns an empty string if the value is falsy.

For example:

```javascript
convertToUpperCase('salesforce');
```

Output:

```text
SALESFORCE
```

## Sharing Utility Code Inside One LWC Bundle

An LWC component folder can contain additional JavaScript files for its own internal use.

Example structure:

```text
force-app/
└── main/
    └── default/
        └── lwc/
            └── myComponent/
                ├── myComponent.html
                ├── myComponent.js
                ├── myComponent.js-meta.xml
                └── utility.js
```

The main component can import the additional file using a relative path.

### `utility.js`

```javascript
export function getGreeting(name) {
    return `Hello, ${name}!`;
}
```

### `myComponent.js`

```javascript
import { LightningElement } from 'lwc';
import { getGreeting } from './utility';

export default class MyComponent extends LightningElement {

    username = 'Prince';

    get greeting() {
        return getGreeting(this.username);
    }
}
```

### `myComponent.html`

```html
<template>
    <lightning-card title="Utility Example">
        <p>{greeting}</p>
    </lightning-card>
</template>
```

### Output

```text
Utility Example

Hello, Prince!
```

**Important:** The relative-path approach shown above is for sharing code inside the same component bundle. Other components cannot directly import that private utility file.

## Sharing Utility Code Between Multiple LWC Components

When several LWC components need the same JavaScript functionality, create a dedicated API module component.

An API module component is a JavaScript module designed to expose reusable code. It doesn't need an HTML template when it is used only as a library.

For example, create a component bundle named `sharedUtility`.

### Folder Structure

```text
force-app/
└── main/
    └── default/
        └── lwc/
            ├── sharedUtility/
            │   └── sharedUtility.js
            │
            ├── componentOne/
            │   ├── componentOne.html
            │   ├── componentOne.js
            │   └── componentOne.js-meta.xml
            │
            └── componentTwo/
                ├── componentTwo.html
                ├── componentTwo.js
                └── componentTwo.js-meta.xml
```

### `sharedUtility.js`

```javascript
export function calculateTotal(price, quantity) {
    return price * quantity;
}

export function formatName(name) {
    return name
        ? name.trim().toUpperCase()
        : '';
}
```

### Importing into `componentOne.js`

```javascript
import { LightningElement } from 'lwc';

import {
    calculateTotal,
    formatName
} from 'c/sharedUtility';

export default class ComponentOne extends LightningElement {

    productName = ' laptop ';
    price = 1000;
    quantity = 2;

    get formattedName() {
        return formatName(this.productName);
    }

    get totalPrice() {
        return calculateTotal(this.price, this.quantity);
    }
}
```

### `componentOne.html`

```html
<template>
    <lightning-card title="Component One">
        <p>Product: {formattedName}</p>
        <p>Total: {totalPrice}</p>
    </lightning-card>
</template>
```

### Output

```text
Component One

Product: LAPTOP
Total: 2000
```

### Explanation

- `sharedUtility.js` contains reusable functions.
- `export` exposes those functions.
- `import` makes them available to `componentOne.js`.
- `c/sharedUtility` references the API module component.
- `formatName()` prepares the product name.
- `calculateTotal()` calculates the total price.
- The component's getters provide values for the HTML template.

`componentTwo.js` can import the same utility functions, so the calculation and formatting logic doesn't have to be rewritten.

## Understanding the Import Path

Two common import paths are used in these examples.

### Relative Import

```javascript
import { getGreeting } from './utility';
```

Use a relative import to access an additional JavaScript module within the same component bundle.

### API Module Import

```javascript
import { calculateTotal } from 'c/sharedUtility';
```

Use the `c/` module path to import from a custom API module component in the default namespace.

The folder name and its main JavaScript filename must match the API module's name.

For example:

```text
sharedUtility/
└── sharedUtility.js
```

Import it using:

```javascript
import { calculateTotal } from 'c/sharedUtility';
```

Don't add the `.js` extension to this module path.

## Importing a Default Export from an API Module

An API module can also expose a default export.

### `sharedUtility.js`

```javascript
export default function greetUser(name) {
    return `Welcome, ${name}!`;
}
```

### Component JavaScript

```javascript
import { LightningElement } from 'lwc';
import greetUser from 'c/sharedUtility';

export default class GreetingComponent extends LightningElement {

    username = 'Prince';

    get greeting() {
        return greetUser(this.username);
    }
}
```

Here, `greetUser` is imported without curly braces because it is the default export.

## Importing and Re-Exporting Additional Utility Files

An API module component can also contain additional JavaScript files.

Suppose the structure is:

```text
sharedUtility/
├── sharedUtility.js
└── numberUtils.js
```

### `numberUtils.js`

```javascript
export function squareNumber(number) {
    return number * number;
}
```

To make this function available through the API module's main entry point, re-export it from `sharedUtility.js`.

### `sharedUtility.js`

```javascript
export {
    squareNumber
} from './numberUtils';
```

A component can then import it through the API module:

```javascript
import { squareNumber } from 'c/sharedUtility';
```

This makes the main module the public entry point for the shared functionality.

## Common Mistakes

### Forgetting `export`

If a function is not exported, another module cannot import it as a named export.

Incorrect:

```javascript
function calculateTotal(a, b) {
    return a * b;
}
```

Correct:

```javascript
export function calculateTotal(a, b) {
    return a * b;
}
```

### Using Braces Incorrectly

Named export:

```javascript
export function greetUser(name) {
    return `Hello, ${name}`;
}
```

Import:

```javascript
import { greetUser } from './utility';
```

Default export:

```javascript
export default function greetUser(name) {
    return `Hello, ${name}`;
}
```

Import:

```javascript
import greetUser from './utility';
```

The import syntax must match the type of export.

### Using the Wrong API Module Path

If the module folder is named `sharedUtility`, use:

```javascript
import { calculateTotal } from 'c/sharedUtility';
```

The module must exist and expose the requested function from its main JavaScript file.

### Circular Imports

A circular import occurs when module A imports module B and module B imports module A, directly or indirectly.

Circular dependencies can cause imported values to be unavailable during module initialization. Avoid circular imports by extracting shared logic into a separate utility module.

---
---
---

## Special Imports in Salesforce LWC

In Salesforce LWC, we can import more than JavaScript functions. Salesforce provides special modules to access static resources, custom labels, the current user's information, device details, language settings, and currency settings.

These modules provide information and resources that are already available in the Salesforce environment.

The following imports are useful when building real-world LWC applications.

## Importing Static Resources

### Import Statement

```javascript
import MYLOGO from "@salesforce/resourceUrl/staticResource";
```

Another example:

```javascript
import LOGO from "@salesforce/resourceUrl/logo";
```

### What Is a Static Resource?

A Static Resource is a file or collection of files uploaded to Salesforce that can be used in an application.

Examples include:

- Logo images
- Background images
- CSS files
- JavaScript libraries
- Fonts
- ZIP files containing multiple resources

### Understanding the Syntax

```javascript
import MYLOGO from "@salesforce/resourceUrl/staticResource";
```

- `import` imports a resource reference.
- `MYLOGO` is the local JavaScript variable name. You can choose another valid name.
- `@salesforce/resourceUrl` is the Salesforce-provided module used to reference a static resource.
- `staticResource` is the name of the Static Resource in Salesforce Setup.

Similarly:

```javascript
import LOGO from "@salesforce/resourceUrl/logo";
```

This imports the Static Resource named `logo`.

**Important:** `staticResource` and `logo` are examples of resource names. The corresponding Static Resources must exist in your Salesforce org, and the names must match their actual API names.

### Practical Example

```javascript
import { LightningElement } from 'lwc';
import LOGO from '@salesforce/resourceUrl/logo';

export default class LogoExample extends LightningElement {
    logoUrl = LOGO;
}
```

HTML:

```html
<template>
    <lightning-card title="Company Logo">
        <img src={logoUrl} alt="Company Logo" />
    </lightning-card>
</template>
```

### How It Works

1. Salesforce resolves the Static Resource named `logo`.
2. The imported resource URL is stored in `LOGO`.
3. The component assigns that URL to `logoUrl`.
4. The HTML uses `logoUrl` as the image source.
5. The logo appears in the component if the resource contains a valid image.

### When to Use It

Use Static Resource imports when you want to display your company logo, load custom styles, or use supported third-party libraries in an LWC.

## Importing Custom Labels

### Import Statement

```javascript
import abc from "@salesforce/label/c.Show_in_production";
```

### What Is a Custom Label?

A Custom Label is a reusable text value stored in Salesforce Setup. It can be referenced by different components instead of repeating the same text throughout the application.

For example, a label might contain:

```text
Show in production
```

### Understanding the Syntax

```javascript
import abc from "@salesforce/label/c.Show_in_production";
```

- `abc` is the local JavaScript variable name.
- `@salesforce/label` is the Salesforce module for importing custom labels.
- `c` identifies the custom namespace used in this example.
- `Show_in_production` is the Custom Label API name.

The variable name `abc` is not required. You can use a meaningful name such as `SHOW_IN_PRODUCTION`.

### Practical Example

```javascript
import { LightningElement } from 'lwc';
import SHOW_IN_PRODUCTION
    from '@salesforce/label/c.Show_in_production';

export default class LabelExample extends LightningElement {
    productionLabel = SHOW_IN_PRODUCTION;
}
```

HTML:

```html
<template>
    <lightning-card title="Custom Label Example">
        <p>{productionLabel}</p>
    </lightning-card>
</template>
```

### How It Works

1. Salesforce retrieves the value of the `Show_in_production` Custom Label.
2. The imported value is assigned to `SHOW_IN_PRODUCTION`.
3. The component exposes that value through `productionLabel`.
4. The HTML displays the label text.

### When to Use It

Custom Labels are useful for:

- Reusable messages
- Button labels and headings
- Error messages
- Instructions and help text
- Supporting translated text for different languages

**Important:** A Custom Label is not the same as a custom field. A label stores reusable text, whereas a field stores data associated with Salesforce records.

## Importing the Current User ID

### Import Statement

```javascript
import USER_ID from "@salesforce/user/Id";
```

### Purpose

This import provides the ID of the current Salesforce user in the component's execution context.

### Practical Example

```javascript
import { LightningElement } from 'lwc';
import USER_ID from '@salesforce/user/Id';

export default class CurrentUserExample extends LightningElement {
    userId = USER_ID;
}
```

HTML:

```html
<template>
    <lightning-card title="Current User">
        <p>User ID: {userId}</p>
    </lightning-card>
</template>
```

### How It Works

1. Salesforce provides the current user's ID through the platform module.
2. The value is imported into `USER_ID`.
3. The component stores the value in `userId`.
4. The HTML displays the ID.

### When to Use It

This import is useful when you need to:

- Associate an operation with the current user.
- Filter records by owner or user.
- Pass the current user ID to supported Apex or data operations.
- Build user-specific features.

**Important:** A user ID is an identifier, not an authorization mechanism. Always enforce appropriate access controls in Apex and Salesforce data operations. Do not assume that knowing a record or user ID grants permission to access it.

## Importing the Device Form Factor

### Import Statement

```javascript
import DEVICE_INFO from "@salesforce/client/formFactor";
```

### Purpose

The `@salesforce/client/formFactor` module provides information about the form factor of the client running the component.

The returned value indicates the general device category.

Common values are:

- `Large` — desktop-class form factor.
- `Medium` — tablet-class form factor.
- `Small` — phone-class form factor.

### Practical Example

```javascript
import { LightningElement } from 'lwc';
import DEVICE_INFO from '@salesforce/client/formFactor';

export default class DeviceExample extends LightningElement {
    deviceType = DEVICE_INFO;

    get deviceMessage() {
        if (this.deviceType === 'Small') {
            return 'You are using a phone-sized device.';
        }

        if (this.deviceType === 'Medium') {
            return 'You are using a tablet-sized device.';
        }

        return 'You are using a desktop-sized device.';
    }
}
```

HTML:

```html
<template>
    <lightning-card title="Device Information">
        <p>Form Factor: {deviceType}</p>
        <p>{deviceMessage}</p>
    </lightning-card>
</template>
```

### How It Works

1. Salesforce determines the client's form factor.
2. The module returns the corresponding value.
3. The component stores it in `deviceType`.
4. The getter selects an appropriate message.
5. The template displays the device information.

### When to Use It

Use form-factor information when you need to adapt a component's behavior for desktop, tablet, or phone experiences.

For layout and styling, responsive CSS is generally preferable to relying only on the form factor.

## Importing the Current Language

### Import Statement

```javascript
import LANG from "@salesforce/i18n/lang";
```

### Purpose

The `@salesforce/i18n/lang` module provides the language setting associated with the current Salesforce user or execution context.

The value is a language code or locale-related language identifier, depending on the Salesforce context.

For example, a language identifier might be:

```text
en
```

### Practical Example

```javascript
import { LightningElement } from 'lwc';
import LANG from '@salesforce/i18n/lang';

export default class LanguageExample extends LightningElement {
    currentLanguage = LANG;
}
```

HTML:

```html
<template>
    <lightning-card title="Language Information">
        <p>Current Language: {currentLanguage}</p>
    </lightning-card>
</template>
```

### How It Works

1. Salesforce provides the language setting.
2. The component imports it through `LANG`.
3. The value is assigned to `currentLanguage`.
4. The template displays the language identifier.

### When to Use It

This import can help when you need to:

- Display language information.
- Select language-specific behavior.
- Format or present information according to the user's language.
- Build localized user experiences.

**Important:** Importing `LANG` does not automatically translate hardcoded text. Use Custom Labels and Salesforce localization features for translated content.

## Importing the Currency Setting

### Import Statement

```javascript
import CURRENCY from "@salesforce/i18n/currency";
```

### Purpose

The `@salesforce/i18n/currency` module provides the currency code associated with the current Salesforce user's locale settings.

For example, the value might be:

```text
USD
```

or:

```text
INR
```

The actual value depends on the Salesforce user's settings and context.

### Practical Example

```javascript
import { LightningElement } from 'lwc';
import CURRENCY from '@salesforce/i18n/currency';

export default class CurrencyExample extends LightningElement {
    currencyCode = CURRENCY;
}
```

HTML:

```html
<template>
    <lightning-card title="Currency Information">
        <p>Currency Code: {currencyCode}</p>
    </lightning-card>
</template>
```

### How It Works

1. Salesforce provides the relevant currency setting.
2. The component imports the value into `CURRENCY`.
3. The value is stored in `currencyCode`.
4. The template displays the currency code.

### When to Use It

This import is useful for:

- Displaying the currency setting.
- Formatting monetary values.
- Building locale-aware user interfaces.
- Selecting an appropriate currency display.

**Important:** The user's currency setting is not necessarily the currency of every Salesforce record. In a multi-currency org, a record's `CurrencyIsoCode` may be different from the imported user currency.

## Using `CURRENCY` to Format a Monetary Value

For actual currency display, JavaScript's `Intl.NumberFormat` can format a number according to the currency code.

```javascript
import { LightningElement } from 'lwc';
import CURRENCY from '@salesforce/i18n/currency';

export default class CurrencyFormatExample extends LightningElement {
    amount = 1500;

    get formattedAmount() {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: CURRENCY
        }).format(this.amount);
    }
}
```

HTML:

```html
<template>
    <lightning-card title="Formatted Amount">
        <p>{formattedAmount}</p>
    </lightning-card>
</template>
```

The output uses the currency code and locale formatting supported by the runtime. For example, if the currency code is `INR`, the amount is formatted as Indian rupees.

## Summary of All Imports

| Import | Purpose | Example use |
|---|---|---|
| `@salesforce/resourceUrl/staticResource` | Access a Static Resource URL | Load an image or library |
| `@salesforce/resourceUrl/logo` | Access the resource named `logo` | Display a company logo |
| `@salesforce/label/c.Show_in_production` | Access a Custom Label | Display reusable text |
| `@salesforce/user/Id` | Get the current user ID | User-specific operations |
| `@salesforce/client/formFactor` | Get the client form factor | Adapt device behavior |
| `@salesforce/i18n/lang` | Get the language setting | Language-aware UI |
| `@salesforce/i18n/currency` | Get the currency setting | Currency display and formatting |

## Complete Example Combining Multiple Imports

The following example demonstrates how several of these modules can be used in one LWC.

### JavaScript

```javascript
import { LightningElement } from 'lwc';

import LOGO from '@salesforce/resourceUrl/logo';
import SHOW_IN_PRODUCTION
    from '@salesforce/label/c.Show_in_production';
import USER_ID from '@salesforce/user/Id';
import DEVICE_INFO from '@salesforce/client/formFactor';
import LANG from '@salesforce/i18n/lang';
import CURRENCY from '@salesforce/i18n/currency';

export default class ImportUtilityExample extends LightningElement {

    logoUrl = LOGO;
    productionLabel = SHOW_IN_PRODUCTION;
    userId = USER_ID;
    deviceType = DEVICE_INFO;
    currentLanguage = LANG;
    currencyCode = CURRENCY;
}
```

### HTML

```html
<template>
    <lightning-card title="Salesforce Import Utility">

        <img src={logoUrl} alt="Company Logo" />

        <p>Label: {productionLabel}</p>
        <p>Current User ID: {userId}</p>
        <p>Device Type: {deviceType}</p>
        <p>Language: {currentLanguage}</p>
        <p>Currency: {currencyCode}</p>

    </lightning-card>
</template>
```

### Important Requirements

Before using this example, confirm that:

- A Static Resource named `logo` exists in the org and contains an image.
- A Custom Label named `Show_in_production` exists in the default namespace.
- The component has the appropriate metadata configuration for the way you intend to use it.

The example displays imported information. It does not itself change a user's language, currency setting, or permissions.

## Best Practices

- Use meaningful local variable names, such as `LOGO` and `USER_ID`.
- Make sure Static Resource names match the names defined in Salesforce.
- Store reusable text in Custom Labels instead of hardcoding it repeatedly.
- Do not use a user ID as proof of authorization.
- Use responsive CSS for layout and use form-factor information only when necessary.
- Use the correct record currency when formatting multi-currency record values.
- Remember that the language import does not translate hardcoded strings automatically.

## Conclusion

Salesforce LWC provides special modules for accessing platform resources and contextual information.

Static Resource imports provide URLs for files uploaded to Salesforce. Custom Label imports provide reusable text. The user ID import identifies the current user, while the form-factor, language, and currency imports provide information that can help components adapt their behavior and presentation.

These imports make it easier to build reusable, context-aware Lightning Web Components.
