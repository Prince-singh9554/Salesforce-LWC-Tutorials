# Salesforce LWC

## 📌 Overview

This folder contains my Salesforce Lightning Web Components (LWC) learning practice. It demonstrates how an LWC component is organized and how its different files work together.

## 🎯 Learning Objectives

* Understand the structure of an LWC component bundle.
* Learn the purpose of HTML, JavaScript, and CSS files.
* Understand how a component's template and JavaScript work together.
* Learn how to use Lightning base components.
* Understand parent-child component composition.
* Practice using slots to display content inside a child component.

## 📂 LWC Component Bundle Structure

A Lightning Web Component is organized into a bundle containing related files.

```text
bundleShowcase/
│
├── bundleShowcase.html
├── bundleShowcase.js
├── bundleShowcase.css
└── bundleShowcase.js-meta.xml
```

### 1. HTML File

**File:** `bundleShowcase.html`

* Defines the component's user interface.
* Uses Lightning base components and HTML elements.
* Displays data and content in the component.

### 2. JavaScript File

**File:** `bundleShowcase.js`

* Contains the component's JavaScript logic.
* Defines properties, methods, and event handlers.
* Handles user interactions and data changes.

### 3. CSS File

**File:** `bundleShowcase.css`

* Defines the component's custom styles.
* Controls spacing, alignment, colors, and layout.
* Helps customize the appearance of the component.

### 4. Metadata Configuration File

**File:** `bundleShowcase.js-meta.xml`

* Defines the component's metadata.
* Controls where the component can be used in Salesforce.
* Specifies its API version and exposure settings.

## 🧩 Important LWC Concepts

### Component Composition

Component composition means building a user interface by combining multiple reusable components.

A parent component can include a child component using its custom HTML tag.

Example:

```html
<template>
    <lightning-card title="Parent Component">
        <c-child-component></c-child-component>
    </lightning-card>
</template>
```


**Expected result:** The heading appears in the named slot, while the paragraph appears in the default slot.

## 📚 Key Takeaways

* An LWC bundle groups the files associated with a component.
* HTML defines the template, JavaScript handles logic, and CSS provides styling.
* The metadata file controls the component's configuration and availability.
* Parent and child components can be combined to create reusable interfaces.


