# **Events in JavaScript**

- Events are actions that occur in the browser, such as clicking a button, submitting a form, or resizing the window. In JavaScript, you can listen for these events and execute code when they happen.

  #  Events which is used in JavaScript

    JavaScript mein events ko different categories mein divide kiya ja sakta hai.

# JavaScript Events

| # | Event Type | Events | Description |
|---|---|---|---|
| 1 | **Mouse Events** | `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `contextmenu` | Used to handle mouse actions |
| 2 | **Keyboard Events** | `keydown`, `keyup`, `keypress` | Used to handle keyboard actions |
| 3 | **Form Events** | `submit`, `change`, `input`, `focus`, `blur`, `reset`, `invalid` | Used to handle form and input field actions |
| 4 | **Clipboard Events** | `copy`, `cut`, `paste` | Used to handle copy, cut, and paste actions |
| 5 | **Drag & Drop Events** | `drag`, `dragstart`, `dragend`, `dragenter`, `dragleave`, `dragover`, `drop` | Used to handle drag and drop operations |
| 6 | **Touch Events** | `touchstart`, `touchmove`, `touchend`, `touchcancel` | Used to handle touch-screen interactions |
| 7 | **Pointer Events** | `pointerdown`, `pointerup`, `pointermove`, `pointerover`, `pointerout`, `pointerenter`, `pointerleave` | Used to handle mouse, pen, and touch pointer interactions |
| 8 | **Focus Events** | `focus`, `blur`, `focusin`, `focusout` | Triggered when an element gains or loses focus |
| 9 | **Window / Browser Events** | `load`, `beforeunload`, `unload`, `resize`, `scroll`, `online`, `offline` | Used to handle browser or window state and actions |
| 10 | **Media Events** | `play`, `pause`, `ended`, `volumechange`, `timeupdate`, `loadeddata`, `canplay` | Used with audio and video elements |
| 11 | **Animation Events** | `animationstart`, `animationiteration`, `animationend`, `animationcancel` | Used to handle CSS animations |
| 12 | **Transition Events** | `transitionrun`, `transitionstart`, `transitionend`, `transitioncancel` | Used to handle CSS transitions |

## Most Commonly Used Events

| Event | Used For |
|---|---|
| `click` | When the user clicks an element |
| `dblclick` | When the user double-clicks an element |
| `mouseover` | When the mouse moves over an element |
| `mouseout` | When the mouse moves out of an element |
| `keydown` | When a keyboard key is pressed |
| `keyup` | When a keyboard key is released |
| `input` | When the value of an input field changes |
| `change` | When the value of an input or select element changes |
| `submit` | When a form is submitted |
| `focus` | When an element receives focus |
| `blur` | When an element loses focus |
| `load` | When a page or resource finishes loading |
| `scroll` | When the page or an element is scrolled |

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

box.addEventListener("mouseleave", function() {         // 9. mouseleave :- when user move the mouse out of the box
    console.log("mouseleave");
});

box.addEventListener("contextmenu", function(event) {       // 10. contextmenu :- when user right click on the box
    event.preventDefault();
    console.log("contextmenu");
});
```

### 2) **Keyboard Events**
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


### 3) **Form Events**
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


// CSS
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


### 4) **Clipboard Events**
```javascript
// HTML
<input
    type="text"
    id="textBox"
    value="JavaScript Clipboard Events"
>

<p id="message"></p>


// CSS
#textBox {
    width: 300px;
    padding: 10px;
    margin: 50px;
}

#message {
    margin-left: 50px;
}


// JavaScript
let textBox = document.getElementById("textBox");
let message = document.getElementById("message");

textBox.addEventListener("copy", function() {       // 1. copy :- when user copies the text
    console.log("copy");
    message.innerHTML = "Text copied";
});

textBox.addEventListener("cut", function() {        // 2. cut :- when user cuts the text
    console.log("cut");
    message.innerHTML = "Text cut";
});

textBox.addEventListener("paste", function() {      // 3. paste :- when user pastes the text
    console.log("paste");
    message.innerHTML = "Text pasted";
});
```


---
---
---

### 5) **Drag & Drop Events**

``` javascript
// HTML

<div id="dragBox">
    Drag Me
</div>

<div id="dropBox">
    Drop Here
</div>


// CSS

#dragBox {
    width: 150px;
    padding: 20px;
    margin: 30px;
    background: lightblue;
    text-align: center;
    cursor: grab;
}

#dropBox {
    width: 200px;
    height: 100px;
    margin: 30px;
    border: 2px dashed black;
    text-align: center;
    padding-top: 50px;
}


// JavaScript

let dragBox = document.getElementById("dragBox");
let dropBox = document.getElementById("dropBox");

dragBox.addEventListener("drag", function() {                 // 1. drag :- when user drags the element
    console.log("drag");
});

dragBox.addEventListener("dragstart", function() {            // 2. dragstart :- when user starts dragging the element
    console.log("dragstart");
});

dragBox.addEventListener("dragend", function() {              // 3. dragend :- when user stops dragging the element
    console.log("dragend");
});

dropBox.addEventListener("dragenter", function() {            // 4. dragenter :- when dragged element enters the drop area
    console.log("dragenter");
});

dropBox.addEventListener("dragleave", function() {            // 5. dragleave :- when dragged element leaves the drop area
    console.log("dragleave");
});

dropBox.addEventListener("dragover", function(event) {        // 6. dragover :- when dragged element is moved over the drop area
    event.preventDefault();
    console.log("dragover");
});

dropBox.addEventListener("drop", function(event) {            // 7. drop :- when user drops the dragged element
    event.preventDefault();
    console.log("drop");
});
```

### 6) **Touch Events**

``` javascript
// HTML

<div id="touchBox">
    Touch Here
</div>


// CSS

#touchBox {
    width: 300px;
    height: 150px;
    border: 2px solid black;
    margin: 50px;
    padding: 20px;
    text-align: center;
}


// JavaScript

let touchBox = document.getElementById("touchBox");

touchBox.addEventListener("touchstart", function() {           // 1. touchstart :- when user starts touching the element
    console.log("touchstart");
});

touchBox.addEventListener("touchmove", function() {            // 2. touchmove :- when user moves the finger while touching
    console.log("touchmove");
});

touchBox.addEventListener("touchend", function() {             // 3. touchend :- when user removes the finger from the element
    console.log("touchend");
});

touchBox.addEventListener("touchcancel", function() {          // 4. touchcancel :- when the touch action is interrupted or cancelled
    console.log("touchcancel");
});
```

### 7) **Pointer Events**

``` javascript
// HTML

<div id="pointerBox">
    Move or Click Pointer Here
</div>


// CSS

#pointerBox {
    width: 300px;
    height: 150px;
    border: 2px solid black;
    margin: 50px;
    padding: 20px;
    text-align: center;
}


// JavaScript

let pointerBox = document.getElementById("pointerBox");

pointerBox.addEventListener("pointerdown", function() {         // 1. pointerdown :- when user presses a pointer on the element
    console.log("pointerdown");
});

pointerBox.addEventListener("pointerup", function() {           // 2. pointerup :- when user releases the pointer
    console.log("pointerup");
});

pointerBox.addEventListener("pointermove", function() {         // 3. pointermove :- when user moves the pointer over the element
    console.log("pointermove");
});

pointerBox.addEventListener("pointerover", function() {         // 4. pointerover :- when pointer moves over the element
    console.log("pointerover");
});

pointerBox.addEventListener("pointerout", function() {          // 5. pointerout :- when pointer moves out of the element
    console.log("pointerout");
});

pointerBox.addEventListener("pointerenter", function() {        // 6. pointerenter :- when pointer enters the element
    console.log("pointerenter");
});

pointerBox.addEventListener("pointerleave", function() {        // 7. pointerleave :- when pointer leaves the element
    console.log("pointerleave");
});
```

### 8) **Focus Events**

``` javascript
// HTML

<input
    type="text"
    id="focusInput"
    placeholder="Enter something"
>


// CSS

#focusInput {
    width: 300px;
    padding: 10px;
    margin: 50px;
}


// JavaScript

let focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", function() {               // 1. focus :- when the element receives focus
    console.log("focus");
});

focusInput.addEventListener("blur", function() {                // 2. blur :- when the element loses focus
    console.log("blur");
});

focusInput.addEventListener("focusin", function() {             // 3. focusin :- when the element or its child receives focus
    console.log("focusin");
});

focusInput.addEventListener("focusout", function() {            // 4. focusout :- when the element or its child loses focus
    console.log("focusout");
});
```

### 9) **Window / Browser Events**

``` javascript
// HTML

<body>

    <h2>Window / Browser Events</h2>

    <div style="height: 1000px;">
        Scroll the page
    </div>

</body>


// CSS

body {
    margin: 0;
}


// JavaScript

window.addEventListener("load", function() {                    // 1. load :- when the page and its resources finish loading
    console.log("load");
});

window.addEventListener("beforeunload", function() {            // 2. beforeunload :- when the user is about to leave or reload the page
    console.log("beforeunload");
});

window.addEventListener("unload", function() {                  // 3. unload :- when the document is being unloaded
    console.log("unload");
});

window.addEventListener("resize", function() {                  // 4. resize :- when the browser window size changes
    console.log("resize");
});

window.addEventListener("scroll", function() {                  // 5. scroll :- when the user scrolls the page
    console.log("scroll");
});

window.addEventListener("online", function() {                  // 6. online :- when the browser gets an internet connection
    console.log("online");
});

window.addEventListener("offline", function() {                 // 7. offline :- when the browser loses the internet connection
    console.log("offline");
});
```

### 10) **Media Events**

``` javascript
// HTML

<video id="myVideo" width="400" controls>
    <source src="video.mp4" type="video/mp4">
</video>


// CSS

#myVideo {
    margin: 50px;
}


// JavaScript

let video = document.getElementById("myVideo");

video.addEventListener("play", function() {                     // 1. play :- when the video starts playing
    console.log("play");
});

video.addEventListener("pause", function() {                    // 2. pause :- when the video is paused
    console.log("pause");
});

video.addEventListener("ended", function() {                    // 3. ended :- when the video reaches the end
    console.log("ended");
});

video.addEventListener("volumechange", function() {              // 4. volumechange :- when the volume or mute state changes
    console.log("volumechange");
});

video.addEventListener("timeupdate", function() {               // 5. timeupdate :- when the playback time changes
    console.log("timeupdate");
});

video.addEventListener("loadeddata", function() {               // 6. loadeddata :- when the current media frame is loaded
    console.log("loadeddata");
});

video.addEventListener("canplay", function() {                  // 7. canplay :- when the browser can start playing the media
    console.log("canplay");
});
```

### 11) **Animation Events**

``` javascript
// HTML

<div id="animationBox">
    Animation
</div>


// CSS

#animationBox {
    width: 100px;
    height: 100px;
    border: 2px solid black;
    animation: moveBox 3s;
}

@keyframes moveBox {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(300px);
    }
}


// JavaScript

let animationBox = document.getElementById("animationBox");

animationBox.addEventListener("animationstart", function() {       // 1. animationstart :- when the animation starts
    console.log("animationstart");
});

animationBox.addEventListener("animationiteration", function() {   // 2. animationiteration :- when one animation iteration completes
    console.log("animationiteration");
});

animationBox.addEventListener("animationend", function() {         // 3. animationend :- when the animation finishes
    console.log("animationend");
});

animationBox.addEventListener("animationcancel", function() {      // 4. animationcancel :- when the animation is cancelled
    console.log("animationcancel");
});
```

### 12) **Transition Events**

``` javascript
// HTML

<div id="transitionBox">
    Hover Over Me
</div>


// CSS

#transitionBox {
    width: 200px;
    height: 100px;
    border: 2px solid black;
    margin: 50px;
    padding: 20px;
    transition: width 2s, height 2s;
}

#transitionBox:hover {
    width: 300px;
    height: 150px;
}


// JavaScript

let transitionBox = document.getElementById("transitionBox");

transitionBox.addEventListener("transitionrun", function() {       // 1. transitionrun :- when the transition starts running
    console.log("transitionrun");
});

transitionBox.addEventListener("transitionstart", function() {     // 2. transitionstart :- when the transition actually starts
    console.log("transitionstart");
});

transitionBox.addEventListener("transitionend", function() {       // 3. transitionend :- when the transition finishes
    console.log("transitionend");
});

transitionBox.addEventListener("transitioncancel", function() {    // 4. transitioncancel :- when the transition is cancelled
    console.log("transitioncancel");
});
```
