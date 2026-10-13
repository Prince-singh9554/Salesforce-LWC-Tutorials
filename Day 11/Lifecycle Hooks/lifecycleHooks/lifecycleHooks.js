import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = "Ram Chand";

    nameChangeHandler(){
        this.userName = "Shiv Shakti";
    }

    constructor(){
        super();
        console.log("this is a constructor function");
    }

    connectedCallback(){
        console.log("This function name is connectedCallback");
    }

    renderedCallback(){
        console.log("This function name is renederedCallback");
    }

    disconnectedCallback(){
        console.log("This function's name is disconnectedCallback");
    }

    errorCallback(stack, trace){
        console.log(stack + '---' +trace);
    }
}