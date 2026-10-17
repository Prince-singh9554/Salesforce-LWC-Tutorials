import { LightningElement } from 'lwc';

export default class CreateRecordWithCustomLayout extends LightningElement {
    handleSuccess() {
        alert("Your case is created succesfully");
        // const resetData = this.template.querySelector("lightning-record-edit-form");
        // resetData.reset();

        const inputFields = this.template.querySelectorAll('lightning-input-field');

        inputFields.forEach(field => {
            field.reset();
        });
    }
}