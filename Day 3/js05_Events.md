# **Events in JavaScript**

- Events are actions that occur in the browser, such as clicking a button, submitting a form, or resizing the window. In JavaScript, you can listen for these events and execute code when they happen.

  #  Events which is used in JavaScript

    JavaScript mein events ko different categories mein divide kiya ja sakta hai.

    | #  | Event Type                  | Events                                                                                                                       | Description                                                       |
    | -- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
    | 1  | **Mouse Events**            | `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `contextmenu` | Mouse ke actions ko handle karne ke liye                          |
    | 2  | **Keyboard Events**         | `keydown`, `keyup`, `keypress`                                                                                               | Keyboard ke actions ko handle karne ke liye                       |
    | 3  | **Form Events**             | `submit`, `change`, `input`, `focus`, `blur`, `reset`, `invalid`                                                             | Form aur input fields ke actions ko handle karne ke liye          |
    | 4  | **Clipboard Events**        | `copy`, `cut`, `paste`                                                                                                       | Copy, cut aur paste actions ko handle karne ke liye               |
    | 5  | **Drag & Drop Events**      | `drag`, `dragstart`, `dragend`, `dragenter`, `dragleave`, `dragover`, `drop`                                                 | Elements ko drag aur drop karne ke liye                           |
    | 6  | **Touch Events**            | `touchstart`, `touchmove`, `touchend`, `touchcancel`                                                                         | Touch-screen interactions ko handle karne ke liye                 |
    | 7  | **Pointer Events**          | `pointerdown`, `pointerup`, `pointermove`, `pointerover`, `pointerout`, `pointerenter`, `pointerleave`                       | Mouse, pen aur touch pointer interactions ko handle karne ke liye |
    | 8  | **Focus Events**            | `focus`, `blur`, `focusin`, `focusout`                                                                                       | Element ke focus mein aane ya focus lose karne par                |
    | 9  | **Window / Browser Events** | `load`, `beforeunload`, `unload`, `resize`, `scroll`, `online`, `offline`                                                    | Browser/window ke state ya actions ko handle karne ke liye        |
    | 10 | **Media Events**            | `play`, `pause`, `ended`, `volumechange`, `timeupdate`, `loadeddata`, `canplay`                                              | Audio aur video elements ke liye                                  |
    | 11 | **Animation Events**        | `animationstart`, `animationiteration`, `animationend`, `animationcancel`                                                    | CSS animations ko handle karne ke liye                            |
    | 12 | **Transition Events**       | `transitionrun`, `transitionstart`, `transitionend`, `transitioncancel`                                                      | CSS transitions ko handle karne ke liye                           |

    ## Most Commonly Used Events

    | Event       | Used For                                     |
    | ----------- | -------------------------------------------- |
    | `click`     | User kisi element par click karta hai        |
    | `dblclick`  | User kisi element par double-click karta hai |
    | `mouseover` | Mouse element ke upar aata hai               |
    | `mouseout`  | Mouse element se bahar jata hai              |
    | `keydown`   | Keyboard key press hoti hai                  |
    | `keyup`     | Keyboard key release hoti hai                |
    | `input`     | Input field ki value change hoti hai         |
    | `change`    | Input/select ki value change hone ke baad    |
    | `submit`    | Form submit hota hai                         |
    | `focus`     | Element focus mein aata hai                  |
    | `blur`      | Element focus lose karta hai                 |
    | `load`      | Page/resource load hota hai                  |
    | `scroll`    | Page ya element scroll hota hai              |


### **Simple Event Handling Example**
```javascript
// HTML
<button id="myButton">Click Me!</button>

// JavaScript
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    alert("Button clicked!");
});
```


### **Another Example: Form Submission**
```javascript
// HTML
<input type="text" id="emailAddress" name="email">
<button onclick="buttonValidator()">
  Click me!
</button>
</input>

// JavaScript
function buttonValidator(){
  let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  let emailValue = document.getElementById("emailAddress").value;
  if(emailPattern.test(emailValue)){
    console.log('Valid Email');
    alert('your email is correct');
  }
  else{
    console.log("Invalid Email");
  }
  console.log(emailValue);
}
```


### Use of **innerHTML** property in JavaScript allows you to change the content of an HTML element dynamically. It can be used to update the text, HTML structure, or even add new elements within a specified element.

```javascript
// HTML
<p id="message">Hey, This is a original message </p>
<button onclick="messageChange()">
  Click me!
</button>
</input>

// JavaScript
function messageChange(){
  document.getElementById("message").innerHTML = 'This is updated message'; 
}
```


### **Event Listeners**
- Event listeners are functions that wait for a specific event to occur on an element and then execute a specified function in response. They provide a way to handle events in a more organized and flexible manner.

```javascript
// HTML
<input type="text" id="userInput" placeholder="Type something">

// JavaScript
const userInput = document.getElementById("userInput");
userInput.addEventListener("input", function() {
    console.log("Input value:", userInput.value);
});
```

### **Removing Event Listeners**
- You can remove an event listener using the `removeEventListener` method. This is useful when you want to stop listening for an event after a certain condition is met.

```javascript
// HTML
<button id="myButton">Click Me!</button>

// JavaScript
function buttonClicked() {
    console.log("Button clicked!");
    button.removeEventListener("click", buttonClicked);
}
let button = document.getElementById("myButton");
button.addEventListener("click", buttonClicked);
```

### **Add a hover effect to an image that changes its border colour.**
```javascript
// HTML
<img id="myImage" src="https://github.com/Prince-singh9554/Salesforce-LWC-Tutorials/blob/main/Day%203/radha-krishna.jpg" alt="Sample Image" style="border: 2px solid black;">

// JavaScript
const myImage = document.getElementById("myImage");
myImage.addEventListener("mouseenter", function() {
    this.style.border = "5px solid blue";
});
myImage.addEventListener("mouseleave", function() {
    this.style.border = "2px solid black";
});
```
---
---
# **Code for understanding the working of all Events**

### 1) **Mouse Events**
```javascript
// HTML
<div id="box">
  Move or Click Your Mouse Here
</div>

//CSS
#box {
    width: 300px;
    height: 150px;
    border: 2px solid black;
    margin: 50px;
    padding: 20px;
    text-align: center;
}

// JavaScript
let box = document.getElementById("box");

box.addEventListener("click", function() {      // 1. click :- when user click on the box
    console.log("click");
});

box.addEventListener("dblclick", function() {       // 2. dblclick :- when user double click on the box
    console.log("dblclick");
});

box.addEventListener("mousedown", function() {      // 3. mousedown :- when user press the mouse button down on the box
    console.log("mousedown");
});

box.addEventListener("mouseup", function() {        // 4. mouseup :- when user release the mouse button on the box
    console.log("mouseup");
});

box.addEventListener("mousemove", function() {      // 5. mousemove :- when user move the mouse over the box
    console.log("mousemove");
});

box.addEventListener("mouseover", function() {      // 6. mouseover :- when user move the mouse over the box
    console.log("mouseover");
});

box.addEventListener("mouseout", function() {       // 7. mouseout :- when user move the mouse out of the box
    console.log("mouseout");
});

box.addEventListener("mouseenter", function() {         // 8. mouseenter :- when user move the mouse over the box
    console.log("mouseenter");
});

// 9. mouseleave
box.addEventListener("mouseleave", function() {         // 9. mouseleave :- when user move the mouse out of the box
    console.log("mouseleave");
});

box.addEventListener("contextmenu", function(event) {       // 10. contextmenu :- when user right click on the box
    event.preventDefault();
    console.log("contextmenu");
});
```

# 2) **Keyboard Events**
```javascript
// HTML
<input type="text" id="inputBox" placeholder="Type something">


// CSS
#inputBox {
    width: 300px;
    height: 30px;
    margin: 50px;
    padding: 10px;
}


// JavaScript
let inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keydown", function() {       // 1. keydown :- when user press a key down
    console.log("keydown");
});

inputBox.addEventListener("keyup", function() {        // 2. keyup :- when user release a key
    console.log("keyup");
});

inputBox.addEventListener("keypress", function() {      // 3. keypress :- when user press a key
    console.log("keypress");
});
```


# 3) **Form Events**
```javascript
// HTML
<form id="myForm">

    <input
        type="text"
        id="nameInput"
        placeholder="Enter your name"
        required
    >

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>

</form>


/* CSS */
#myForm {
    width: 300px;
    margin: 50px;
}

#nameInput {
    width: 250px;
    padding: 10px;
}


// JavaScript
let form = document.getElementById("myForm");
let nameInput = document.getElementById("nameInput");

form.addEventListener("submit", function(event) {       // 1. submit :- when user submit the form
    event.preventDefault();
    console.log("submit");
});

nameInput.addEventListener("change", function() {       // 2. change :- when user changes the value and then leaves the input
    console.log("change");
});

nameInput.addEventListener("input", function() {        // 3. input :- when user types or changes the input value
    console.log("input");
});

nameInput.addEventListener("focus", function() {        // 4. focus :- when user clicks inside the input
    console.log("focus");
});

nameInput.addEventListener("blur", function() {         // 5. blur :- when user leaves the input
    console.log("blur");
});

form.addEventListener("reset", function() {             // 6. reset :- when user clicks the reset button
    console.log("reset");
});

nameInput.addEventListener("invalid", function() {      // 7. invalid :- when input value does not satisfy validation
    console.log("invalid");
});
```
