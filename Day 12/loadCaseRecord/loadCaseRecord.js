import { LightningElement,api } from 'lwc';

export default class LoadCaseRecord extends LightningElement {
    @api recordId;      // @api makes recordId public so Salesforce can pass the current record's ID to this component
    objectName = "Case";
    fieldList = ['Id','CaseNumber', 'Priority', 'Status','Reason','Type'];
}