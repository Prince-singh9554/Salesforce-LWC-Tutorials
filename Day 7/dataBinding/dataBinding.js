import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    name = "";
    age = "";
    email = "";
    mobileNo = "";
    marks = "";
    _setterMarks = "";
    setterResult = "Enter marks to see the result";

    handleChange(event) {
        if (event.target.name === "name") {
            this.name = event.target.value;
        }
        else if (event.target.name === "age") {
            this.age = event.target.value;
        }
        else if (event.target.name === "email") {
            this.email = event.target.value;
        }
        else if (event.target.name === "mobileNo") {
            this.mobileNo = event.target.value;
        }
        else if (event.target.name === "marks") {
            this.marks = event.target.value;
        }
        else if (event.target.name === "setterMarks") {
            this.setterMarks = event.target.value;
        }
    }

    get passOrFail() {
        return this.marks >= 35 ? "Pass" : "Fail";;
    }

    get setterMarks() {
        return this._setterMarks;
    }

    set setterMarks(value) {
        this._setterMarks = value;
        this.setterResult = value === "" ? "Enter marks to see the result" : (value >= 35 ? "Pass" : "Fail");
    }
}