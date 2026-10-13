import { LightningElement } from 'lwc';

export default class ChildToParentEvent extends LightningElement {
   
    isClicked = false;

    selectedProducts = {};
    timeStamp ;
    selectedBy;

    handleproductselecttion(event){
        this.isClicked = true;

        const {selectedProducts,timeStamp,selectedBy} = event.detail;
        this.selectedProducts = selectedProducts;
        this.timeStamp = timeStamp;
        this.selectedBy = selectedBy;
    }
}