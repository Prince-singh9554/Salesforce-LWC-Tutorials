import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {

    itemList = [
        {itemId : 1, itemName : "sweets", itemPriority : "High", itemprice : 2000},
        {itemId : 2, itemName : "snacks", itemPriority : "low", itemprice : 100},
        {itemId : 3, itemName : "cloths", itemPriority : "medium", itemprice : 1000}
    ];
}