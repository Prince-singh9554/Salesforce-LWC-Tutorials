import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {
    constructor(){
        super();
        console.log("Child - this is a constructor function");
    }

    connectedCallback(){
        console.log("Child - This function name is connectedCallback");
    }

    renderedCallback(){
        console.log("Child - This function name is renederedCallback");
    }

    disconnectedCallback(){
        console.log("Child - This function's name is disconnectedCallback");
    }

    errorCallback(stack, trace){
        console.log(stack + '---' +trace);
    }
}