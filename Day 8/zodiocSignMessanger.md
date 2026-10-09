# Zodiac Sign Messenger(Mini Project)

## Overview

The Zodiac Sign Messenger is a Lightning Web Component that determines a user's zodiac sign based on their date of birth.

The user enters their name and date of birth (DOB). After clicking the **Get Info** button, the component calculates the birth month and day, checks the zodiac date ranges, and displays the corresponding zodiac sign, emoji, and personality trait.

The component also provides a **Reset** button to clear the entered details and hide the result card.

## Project Structure

```text
zodiocSignMessanger/
│
├── zodiocSignMessanger.html
├── zodiocSignMessanger.js
├── zodiocSignMessanger.css
└── zodiocSignMessanger.js-meta.xml
```

The main logic is implemented in two files:

* `zodiocSignMessanger.html` — Defines the input fields, buttons, and result display.
* `zodiocSignMessanger.js` — Stores user input, determines the zodiac sign, and controls the component's behavior.

## HTML Template

### Purpose of the HTML File

The HTML file defines the user interface. It contains two input fields, two buttons, and a conditional result card.

### Input Fields

```html
<lightning-input
    class="slds-m-around_medium"
    type="text"
    value={username}
    label="Enter your name"
    onchange={handleName}>
</lightning-input>
```

This input field accepts the user's name.

* `type="text"` allows the user to enter text.
* `value={username}` displays the value stored in the `username` property.
* `label="Enter your name"` displays the field label.
* `onchange={handleName}` calls the `handleName()` method when the input changes.

The second input field captures the date of birth:

```html
<lightning-input
    class="slds-m-around_medium"
    type="date"
    value={dob}
    label="Enter your DOB"
    onchange={handleDOB}>
</lightning-input>
```

Here, `type="date"` displays a date input control. The selected date is stored in the `dob` property through the `handleDOB()` method.

The `slds-m-around_medium` class adds spacing around each input using Salesforce Lightning Design System (SLDS).

## Buttons

The component contains two buttons.

### Reset Button

```html
<lightning-button
    variant="destructive"
    class="slds-m-around_medium"
    label="Reset"
    onclick={handleClickReset}>
</lightning-button>
```

When the user clicks Reset, the `handleClickReset()` method executes.

Its purpose is to clear the name, date of birth, and previously calculated zodiac details.

The `destructive` variant gives the button a destructive-style appearance.

### Get Info Button

```html
<lightning-button
    variant="success"
    class="slds-m-around_medium"
    label="Get Info"
    onclick={handleClick}>
</lightning-button>
```

When the user clicks Get Info, the `handleClick()` method executes.

This method reads the date of birth, extracts the month and day, calls the zodiac calculation method, and stores the returned result.

The `success` variant gives the button a success-style appearance.

### SLDS Grid Classes

```html
<div class="slds-grid slds-align_absolute-center">
```

These SLDS classes arrange the buttons using a grid layout and align the content toward the center.

## Conditional Rendering

```html
<template lwc:if={displayDetail}>
    <lightning-card
        title="Your Zodioc Detals :)"
        icon-name="standard:account">

        <p class="slds-m-left_medium">
            Your Sign : {userdetails.sign}
        </p>

        <p class="slds-m-left_medium">
            Your Emoji : {userdetails.emoji}
        </p>

        <p class="slds-m-left_medium">
            Your Trait : {userdetails.trait}
        </p>

    </lightning-card>
</template>
```

The `lwc:if` directive controls whether the result card appears.

* When `displayDetail` is `true`, the result card is rendered.
* When `displayDetail` is `false`, the result card is not rendered.

The following expressions display properties of the `userdetails` object:

* `{userdetails.sign}` displays the zodiac sign.
* `{userdetails.emoji}` displays the zodiac symbol.
* `{userdetails.trait}` displays the personality description.

For example, if the object contains Aries information, the template displays Aries, ♈, and the corresponding trait.

**Important:** The `username` property is captured in the JavaScript code, but your current HTML does not display the name in the result card.

## JavaScript Logic

### Import LightningElement and track

```javascript
import { LightningElement, track } from 'lwc';
```

* `LightningElement` is the base class used to create an LWC component.
* `track` is a decorator that enables deep observation of changes to an object or array's internal properties when needed.

Your code uses `@track` with `userdetails`:

```javascript
@track userdetails = {};
```

This property stores the zodiac information returned by the calculation method.

Because your code replaces the entire `userdetails` object when the user clicks Get Info, `@track` is not strictly necessary for that object assignment in modern LWC. The reassignment itself is reactive.

### Component Properties

```javascript
username;
dob;
displayDetail = false;

@track userdetails = {};
```

These properties maintain the component's state.

| Property        | Purpose                                     | Initial value |
| --------------- | ------------------------------------------- | ------------- |
| `username`      | Stores the entered name                     | `undefined`   |
| `dob`           | Stores the selected date of birth           | `undefined`   |
| `displayDetail` | Controls whether the result card is visible | `false`       |
| `userdetails`   | Stores the calculated zodiac information    | `{}`          |

The `displayDetail` property starts as `false`, so the result card is initially hidden.

The `userdetails` property starts as an empty object because no zodiac sign has been calculated yet.

## Handling the Name Input

```javascript
handleName(event) {
    this.username = event.target.value;
}
```

This method runs when the name input changes.

### Step-by-step working

1. The user types a name into the input field.
2. The `onchange` event calls `handleName(event)`.
3. The `event` parameter contains information about the input event.
4. `event.target` refers to the input component that triggered the event.
5. `event.target.value` provides the current input value.
6. `this.username` stores that value.

For example, if the user enters `Prince`, the property becomes:

```javascript
this.username = 'Prince';
```

The `this` keyword refers to the current component instance, so `this.username` accesses the component's `username` property.

## Handling the Date of Birth

```javascript
handleDOB(event) {
    this.dob = event.target.value;
}
```

This method captures the selected date.

### Step-by-step working

1. The user selects a date in the DOB field.
2. The `onchange` event calls `handleDOB(event)`.
3. `event.target.value` retrieves the selected date as a string.
4. `this.dob` stores the date string.

For example, the selected date might be:

```javascript
this.dob = '2002-04-10';
```

The date input generally provides its value in `YYYY-MM-DD` format, regardless of how the date is displayed in the browser.

At this stage, the component has stored the date. It has not yet calculated the zodiac sign.

## Reset Functionality

```javascript
handleClickReset(event) {
    this.username = '';
    this.dob = '';
    this.userdetails = {};
    this.displayDetail = false;
}
```

This method resets the component state.

### Step-by-step working

**Step 1: Clear the name**

```javascript
this.username = '';
```

The `username` property becomes an empty string.

**Step 2: Clear the DOB**

```javascript
this.dob = '';
```

The `dob` property becomes an empty string.

**Step 3: Clear the zodiac details**

```javascript
this.userdetails = {};
```

The previously calculated zodiac sign, emoji, and trait are removed from the stored result.

**Step 4: Hide the result card**

```javascript
this.displayDetail = false;
```

Since the HTML uses `lwc:if={displayDetail}`, the result card is no longer rendered.

**Note:** The `event` parameter is not used inside this method, so it can be removed without changing the method's behavior.

## Get Info Button Logic

```javascript
handleClick() {
    let userdob = new Date(this.dob);

    const userMonth = userdob.getMonth() + 1;
    const userDate = userdob.getDate();

    this.userdetails = this.checkZodiocSign(userMonth, userDate);
}
```

This is the main method that starts the zodiac calculation.

### Step 1: Convert the DOB string into a Date object

```javascript
let userdob = new Date(this.dob);
```

The `dob` property contains the selected date as a string.

`new Date(this.dob)` creates a JavaScript `Date` object from that string.

For example:

```javascript
this.dob = '2002-04-10';

let userdob = new Date(this.dob);
```

The `userdob` variable now represents that date.

### Step 2: Extract the month

```javascript
const userMonth = userdob.getMonth() + 1;
```

JavaScript's `getMonth()` returns a zero-based month index.

| Month     | `getMonth()` | `getMonth() + 1` |
| --------- | -----------: | ---------------: |
| January   |            0 |                1 |
| February  |            1 |                2 |
| March     |            2 |                3 |
| April     |            3 |                4 |
| May       |            4 |                5 |
| June      |            5 |                6 |
| July      |            6 |                7 |
| August    |            7 |                8 |
| September |            8 |                9 |
| October   |            9 |               10 |
| November  |           10 |               11 |
| December  |           11 |               12 |

The `+ 1` converts the zero-based result into the conventional month number.

For April, the resulting `userMonth` is `4`.

### Step 3: Extract the day

```javascript
const userDate = userdob.getDate();
```

The `getDate()` method returns the day of the month, from 1 to 31.

For the date `2002-04-10`, the intended values are:

```javascript
userMonth = 4;
userDate = 10;
```

### Step 4: Call the zodiac calculation method

```javascript
this.userdetails = this.checkZodiocSign(userMonth, userDate);
```

The method passes the month and day to `checkZodiocSign()`.

That method searches the `zodiacSigns` array and returns the matching zodiac object.

The returned object is assigned to `this.userdetails`.

## The checkZodiocSign() Method

```javascript
checkZodiocSign(month, day) {
    for (let sign of this.zodiacSigns) {

        const [fromMonth, fromDate] =
            sign.from.split('-').map(Number);

        const [toMonth, toDate] =
            sign.to.split('-').map(Number);

        if (
            (month === fromMonth && day >= fromDate) ||
            (month === toMonth && day <= toDate)
        ) {
            this.displayDetail = true;
            return sign;
        }
    }
}
```

This method contains the main zodiac matching logic.

It receives two arguments:

* `month`: The user's birth month.
* `day`: The user's birth day.

It then checks the birth date against each zodiac sign's date range.

### Understanding the for...of loop

```javascript
for (let sign of this.zodiacSigns)
```

The `zodiacSigns` property contains an array of 12 objects.

Each object stores:

* `sign`
* `from`
* `to`
* `emoji`
* `trait`

The `for...of` loop processes one object at a time.

During the first iteration, `sign` refers to Aries. During the second iteration, it refers to Taurus, and so on.

The loop stops when a matching zodiac sign is found and returned.

### Understanding split() and map(Number)

Consider the Aries date range:

```javascript
{
    sign: "Aries",
    from: "03-21",
    to: "04-19"
}
```

The `from` and `to` values are strings.

```javascript
sign.from.split('-')
```

For `"03-21"`, the result is:

```javascript
["03", "21"]
```

Next:

```javascript
sign.from.split('-').map(Number)
```

The `map(Number)` method converts the string values into numbers:

```javascript
[3, 21]
```

Finally, array destructuring assigns the two values to separate variables:

```javascript
const [fromMonth, fromDate] =
    sign.from.split('-').map(Number);
```

The result is equivalent to:

```javascript
fromMonth = 3;
fromDate = 21;
```

The same process is performed for `sign.to` to get `toMonth` and `toDate`.

This makes it possible to compare the user's numeric birth month and day with the zodiac date boundaries.

### Understanding the if condition

```javascript
if (
    (month === fromMonth && day >= fromDate) ||
    (month === toMonth && day <= toDate)
)
```

This condition checks whether the user's birthday falls within the current zodiac sign's range.

It contains two parts connected by the logical OR operator (`||`).

**Part 1: Check the starting month and day**

```javascript
month === fromMonth && day >= fromDate
```

This checks whether:

* The user's birth month matches the zodiac's starting month.
* The user's birth day is on or after the starting day.

For Aries, the starting date is March 21.

A birthday of March 25 satisfies this part.

**Part 2: Check the ending month and day**

```javascript
month === toMonth && day <= toDate
```

This checks whether:

* The user's birth month matches the zodiac's ending month.
* The user's birth day is on or before the ending day.

For Aries, the ending date is April 19.

A birthday of April 10 satisfies this part.

**Why is `||` used?**

A zodiac range usually spans two months. A birthday can match either the starting month or the ending month.

Therefore, the condition uses `||` so either part can make the condition true.

### Understanding displayDetail and return

```javascript
this.displayDetail = true;
return sign;
```

When a match is found:

1. `displayDetail` becomes `true`.
2. The `return sign` statement returns the matching zodiac object.
3. The loop and method stop immediately.
4. The returned object is assigned to `this.userdetails` by `handleClick()`.
5. LWC renders the result card and displays its properties.

For example, when the birthday matches Aries, the method returns the entire Aries object, including its sign, emoji, date range, and trait.

**Important limitation in the current code:** The method has no fallback `return` when no date matches. It also does not reset `displayDetail` to `false` before a new search. Therefore, invalid input or a subsequent unmatched search may leave the component in an incorrect state. The code also does not check whether a DOB was entered before calculating.

## The zodiacSigns Array

The `zodiacSigns` property contains all 12 zodiac sign objects.

```javascript
zodiacSigns = [
    {
        sign: "Aries",
        from: "03-21",
        to: "04-19",
        emoji: "♈",
        trait: "You are bold, energetic, and fearless..."
    },
    {
        sign: "Taurus",
        from: "04-20",
        to: "05-20",
        emoji: "♉",
        trait: "You are reliable, patient, and grounded..."
    }
];
```

The actual code contains all 12 signs. The snippet above shows only the first two as an illustration.

Each object contains the date range and information required to display the result.

| Property | Purpose                          | Example                       |
| -------- | -------------------------------- | ----------------------------- |
| `sign`   | Zodiac name                      | `Aries`                       |
| `from`   | Start date in `MM-DD` format     | `03-21`                       |
| `to`     | End date in `MM-DD` format       | `04-19`                       |
| `emoji`  | Zodiac symbol                    | `♈`                           |
| `trait`  | Message associated with the sign | Bold, energetic, and fearless |

The array acts as the data source for the calculation method. Instead of writing a separate `if` statement for every zodiac sign, the method loops through this array.

## Complete Execution Flow

Let's follow the execution when a user enters the name `Prince` and the DOB `2002-04-10`.

**Step 1: Component initialization**

The component initializes its properties:

```javascript
username = undefined;
dob = undefined;
displayDetail = false;
userdetails = {};
```

The result card remains hidden because `displayDetail` is `false`.

**Step 2: User enters the name**

The user types `Prince`.

```javascript
handleName(event) {
    this.username = event.target.value;
}
```

The component stores the name in `username`.

**Step 3: User enters the DOB**

The user selects `2002-04-10`.

```javascript
handleDOB(event) {
    this.dob = event.target.value;
}
```

The component stores the date string in `dob`.

**Step 4: User clicks Get Info**

The button invokes:

```javascript
handleClick()
```

The component creates a `Date` object from the DOB string.

**Step 5: Month and day are extracted**

For this example, the intended values are:

```javascript
userMonth = 4;
userDate = 10;
```

**Step 6: The zodiac method is called**

```javascript
this.checkZodiocSign(4, 10);
```

The method begins iterating over `zodiacSigns`.

**Step 7: Zodiac date ranges are checked**

The method processes the entries until it reaches Aries.

Aries has the date range March 21 to April 19.

The ending-month check is satisfied because the user's month is April (`4`) and the day (`10`) is less than or equal to `19`.

**Step 8: The matching object is returned**

The method sets `displayDetail` to `true` and returns the Aries object.

**Step 9: The result is stored**

The returned object is assigned to `this.userdetails`.

**Step 10: LWC updates the UI**

The condition `lwc:if={displayDetail}` becomes true. The result card appears and displays the sign, emoji, and trait.

## Execution Flow Diagram

```text
Component Loads
       |
       v
Initialize Component Properties
       |
       v
User Enters Name and DOB
       |
       v
handleName() and handleDOB()
       |
       v
User Clicks Get Info
       |
       v
handleClick()
       |
       v
Create Date Object
       |
       v
Extract Month and Day
       |
       v
checkZodiocSign(month, day)
       |
       v
Loop Through zodiacSigns
       |
       v
Convert from/to Dates to Numbers
       |
       v
Check Zodiac Date Range
       |
       +---- Match Found ----> displayDetail = true
       |                             |
       |                             v
       |                       Return Sign Object
       |                             |
       |                             v
       |                       Update userdetails
       |                             |
       |                             v
       |                       Display Result Card
       |
       +---- No Match -------> Current Code Has No Fallback
```

## Expected Output

For a user entering the name `Prince` and DOB `2002-04-10`, the intended result is:

**Your Zodioc Detals :)**

* Your Sign: Aries
* Your Emoji: ♈
* Your Trait: You are bold, energetic, and fearless. You love taking the lead and starting new adventures.

The actual HTML does not currently display the entered name in the result card.
