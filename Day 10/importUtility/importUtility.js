import { LightningElement } from 'lwc';
import MYLOGO from "@salesforce/resourceUrl/staticResource";
import abc from "@salesforce/label/c.Show_in_production";
import LOGO from "@salesforce/resourceUrl/logo";
import USER_ID from "@salesforce/user/Id";
import DEVICE_INFO from "@salesforce/client/formFactor";
import LANG from "@salesforce/i18n/lang"
import CURRENCY from "@salesforce/i18n/currency"

export default class ImportUtility extends LightningElement {
    src = MYLOGO;
    checkLabels = false;
    src1 = LOGO;

    userId = USER_ID;
    deviceInfo = DEVICE_INFO;
    language = LANG;
    currency = CURRENCY;

    // labels = abc;

    get showInProd(){
        return abc == "true" ? true :false;
    }
}