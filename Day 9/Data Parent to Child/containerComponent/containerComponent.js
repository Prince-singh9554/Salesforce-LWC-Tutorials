import { LightningElement, api} from 'lwc';

export default class ContainerComponent extends LightningElement {
    @api productFound = false;

    @api productItem;

    parentCalled = false;

    get hasProduct(){
        return this.productFound == true ? true: false;
    }


    @api handleParentCall(){
        this.parentCalled = true;
    }
}