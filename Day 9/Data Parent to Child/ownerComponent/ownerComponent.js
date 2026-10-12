import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {

    productFound = true;

    productItem = [
        {id:"1", name:"Laptop", rating:"3/5"},
        {id:"2", name:"Mackbook", rating:"4/5"},
        {id:"3", name:"Mobile", rating:"3/5"}
    ];


    callChildMethod(){
        this.template.querySelector('c-container-component').handleParentCall();
    }

}