import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api productItem;
    @api productId;
    @api productRating;
}