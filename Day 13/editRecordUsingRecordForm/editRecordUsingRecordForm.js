import { LightningElement, api } from 'lwc';
const FIELDS = ['CaseNumber', 'Origin', 'Type'];

export default class EditRecordUsingRecordForm extends LightningElement {
    @api recordId;
    fields = FIELDS;
}