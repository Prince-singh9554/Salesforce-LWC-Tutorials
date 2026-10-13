import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {
    selectedProduct = {};
    isClicked = false;

    handleFiringEvent(){
        this.selectedProduct = {id:1, name:'tea'};
        this.isClicked = true;

        const event = new CustomEvent('sendproductselected',{
            detail : {
                selectedProducts : this.selectedProduct,
                timeStamp : new Date().toISOString().split('T')[0],
                selectedBy : 'Prince Singh'
            }
        });

        this.dispatchEvent(event);
    }
}