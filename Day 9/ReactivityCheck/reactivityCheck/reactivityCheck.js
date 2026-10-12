import { LightningElement, track } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    emailChange() {
        this.template
            .querySelector('c-reactivity-within-child')
            .changeFirstCustomerEmail();

        this.myProductDetails = this.myProductDetails.map((product, index) => {
            if (index === 1) {
                return { ...product, customerEmail: this.email2 };
            }

            return product;
        });
    }

    email2 = "change1.wilson@company.org";

    @track myProductDetails = [

        {
            orderId: "ORD-974481",

            customerId:
                "f7c1f023-2b21-41d0-9a19-175f870db452",

            customerEmail:
                "sandra.taylor@gmail.com",

            items: [
                {
                    productId:
                        "d7b5a5b9-f3f3-4e3e-9cca-3f141ceec66b",

                    name: "Slim Watch",

                    quantity: 1,

                    price: 134.76,

                    total: 134.76
                }
            ],

            subtotal: 134.76,

            tax: 10.78,

            shipping: 18.97,

            total: 164.51,

            currency: "USD",

            status: "pending",

            shippingAddress: {
                street: "2343 Oak Ave",
                city: "Houston",
                country: "Germany",
                zipCode: "22010"
            },

            paymentMethod: "paypal",

            createdAt:
                "2026-09-26T23:30:05Z",

            updatedAt:
                "2026-10-06T23:30:05Z"
        },


        {
            orderId: "ORD-712703",

            customerId:
                "fa269414-3922-4b5c-8222-6e1fefaa478a",

            customerEmail:
                "susan.wilson@company.org",

            items: [
                {
                    productId:
                        "604d7bc4-ad55-4753-a6b3-7e5f0e6a1c68",

                    name: "Slim Tablet",

                    quantity: 1,

                    price: 65.66,

                    total: 65.66
                }
            ],

            subtotal: 65.66,

            tax: 5.25,

            shipping: 12.13,

            total: 83.04,

            currency: "USD",

            status: "pending",

            shippingAddress: {
                street: "2382 Oak Ave",
                city: "San Antonio",
                country: "Canada",
                zipCode: "96331"
            },

            paymentMethod: "crypto",

            createdAt:
                "2026-07-24T23:30:05Z",

            updatedAt:
                "2026-10-07T23:30:05Z"
        }
    ];
}