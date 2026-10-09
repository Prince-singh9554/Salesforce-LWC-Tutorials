import { LightningElement ,api} from 'lwc';

export default class VariableSession extends LightningElement {
    receiverName = "Prince";
    details = {
        senderName : "Ram",
        age : 22,
        senderLocation : "Mumbai"
    };
    
    @api favouritePlayer = "Rohit Sharma";
}