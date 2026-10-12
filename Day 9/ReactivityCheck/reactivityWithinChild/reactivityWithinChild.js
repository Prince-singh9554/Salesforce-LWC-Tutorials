import { LightningElement, api } from 'lwc';

export default class ReactivityWithinChild extends LightningElement {

    @api myProductDetails;

    @api emailChange;

    firstCustomerEmail;

    @api
    changeFirstCustomerEmail() {
        this.firstCustomerEmail = "change.taylor@gmail.com";
    }

    get displayProductDetails() {
        return (this.myProductDetails || []).map((product, index) => ({
            ...product,
            customerEmail:
                index === 0 && this.firstCustomerEmail
                    ? this.firstCustomerEmail
                    : product.customerEmail
        }));
    }

}