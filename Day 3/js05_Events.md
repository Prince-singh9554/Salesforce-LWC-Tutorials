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