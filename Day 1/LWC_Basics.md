# Lightning Web Components (LWC)

## Lightning Web Component (LWC)

1. **LWC** is a modern, lightweight, and high-performance framework for building custom components in Salesforce.

2. It is designed to replace **Aura Components** for creating Lightning applications and user interfaces.

3. LWC is mainly built using:

   * **HTML** – Structure
   * **CSS** – Styling
   * **JavaScript** – Logic and functionality

4. Existing functionality built using Aura is gradually being migrated to **LWC** where appropriate.

5. LWC supports modern JavaScript features such as:

   * Modules
   * Classes
   * Decorators
   * Arrow functions
   * Promises
   * Async/Await

   These features help developers write cleaner, reusable, and efficient code.

---

# LWC vs JavaScript

## JavaScript

1. JavaScript is a **programming language**.

2. It is used for **general web development**.

3. JavaScript can work independently without Salesforce.

### Example

```javascript
function hello() {
    console.log("Hello World");
}
```

---

## LWC

1. **LWC (Lightning Web Components)** is a **Salesforce framework**.

2. It is used to build **UI components in Salesforce**.

3. LWC uses:

   * HTML
   * CSS
   * JavaScript

### Example

```javascript
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
}
```

### In Short

> **JavaScript = Programming Language**
> **LWC = Salesforce Framework that uses JavaScript**

---

# LWC vs Aura

## LWC

1. LWC is based on **modern web standards**.

2. LWC is a **Salesforce framework**.

3. It is used to build **Salesforce UI components**.

4. LWC uses:

   * HTML
   * CSS
   * JavaScript

5. LWC is generally **faster and more lightweight** than Aura because it is built on modern web standards and uses native browser capabilities.

### Example

```javascript
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
}
```

---

## Aura

1. Aura is based on a **Salesforce-specific framework** developed before LWC.

2. Aura is a **Salesforce framework**.

3. It is used to build **Salesforce UI components**.

4. Aura uses:

   * Components
   * JavaScript
   * CSS
   * Aura-specific markup

5. Aura generally has **more framework overhead** compared with LWC.

### Example

```xml
<aura:component>
</aura:component>
```

---

## LWC vs Aura — Quick Comparison

| Feature                         | LWC                         | Aura                                  |
| ------------------------------- | --------------------------- | ------------------------------------- |
| Framework                       | Modern Salesforce framework | Older Salesforce framework            |
| Foundation                      | Web standards               | Salesforce-specific framework         |
| Markup                          | HTML                        | Aura markup                           |
| Logic                           | JavaScript                  | JavaScript + Aura framework           |
| Performance                     | Generally faster            | Generally more framework overhead     |
| Modern JavaScript               | Strong support              | More framework-specific               |
| Recommended for new development | Yes                         | Mainly for existing/legacy components |

---

# Lightning Web Security (LWS) & Locker Security

Both **Locker Security** and **Lightning Web Security (LWS)** are Salesforce security architectures designed to provide **isolation between components** and prevent unauthorized access to resources.

---

## Locker Security

1. Locker Security is the **older Salesforce security architecture**.

2. It provides **isolation between Lightning components**.

3. It restricts components from directly accessing another component's DOM and JavaScript objects.

4. It uses **security wrappers and restrictions** to enforce isolation.

5. It can be more restrictive for certain JavaScript operations.

6. It introduces additional framework overhead because of its security mechanisms.

### Simple Example

```text
Component A  ───X───>  Component B
                 |
          Access Restricted
```

---

## Lightning Web Security (LWS)

1. **Lightning Web Security (LWS)** is the newer Salesforce security architecture.

2. It is designed for modern Lightning development, including **LWC**.

3. It uses modern web security mechanisms and JavaScript features.

4. It provides **isolation between components**.

5. It provides better compatibility with standard JavaScript compared with the older Locker model.

6. It reduces some of the restrictions and overhead associated with Locker Security while maintaining component isolation.

### Simple Example

```text
Component A  ───>  Secure Environment

Component B  ───>  Secure Environment
```

Each component operates within its own controlled security environment.

---

## Locker Security vs LWS — Quick Comparison

| Feature                  | Locker Security                  | Lightning Web Security           |
| ------------------------ | -------------------------------- | -------------------------------- |
| Generation               | Older                            | Newer                            |
| Purpose                  | Component security and isolation | Component security and isolation |
| JavaScript compatibility | More restrictive                 | Better compatibility             |
| Security approach        | Wrappers and restrictions        | Modern web security mechanisms   |
| Framework overhead       | Higher in some scenarios         | Generally lower                  |
| Modern LWC development   | Older approach                   | Preferred modern approach        |

---

## Easy Way to Remember

```text
Locker Security
      ↓
Older Security Model
      ↓
More Restrictions
      ↓
Lightning Web Security
      ↓
Modern Security Model
      ↓
Better JavaScript Compatibility
```
