import {LightningElement, api} from 'lwc';

export default class EditRecordWithCustomLayout extends LightningElement {
    @api recordId;
    objectName = 'Case';

    handleSuccess(){
        const formElement = this.template.querySelector('lightning-record-form-edit')
        formElement.reset();
    }
}