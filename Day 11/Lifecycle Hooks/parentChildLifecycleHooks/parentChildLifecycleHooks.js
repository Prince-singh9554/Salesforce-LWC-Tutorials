import { LightningElement } from 'lwc';

export default class ParentChildLifecycleHooks extends LightningElement {
    constructor(){
        super();
        console.log("Parent - this is a constructor function");
    }

    connectedCallback(){
        console.log("Parent - This function name is connectedCallback");
    }

    renderedCallback(){
        console.log("Parent - This function name is renederedCallback");
    }

    disconnectedCallback(){
        console.log("Parent - This function's name is disconnectedCallback");
    }

    errorCallback(stack, trace){
        console.log(stack + '---' +trace);
    }
}