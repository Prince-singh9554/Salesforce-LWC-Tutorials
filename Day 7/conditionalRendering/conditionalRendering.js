import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;

    displaySettings = true;
    displayFirst = false;
    displaySecond = false;
    displayThird = false;


    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] = !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }


    handleClick(event){
        // console.log(event.target.name);
        if(event.target.name == "option1"){
            if(this.displayFirst === false){
                this.displayFirst = true;
            }
            else{
                this.displayFirst = false;
            }
        }
        else if(event.target.name == "option2"){
            if(this.displaySecond === false){
                this.displaySecond = true;
            }
            else{
                this.displaySecond = false;
            }
        }
        else if(event.target.name == "option3"){
            if(this.displayThird === false){
                this.displayThird = true;
            }
            else{
                this.displayThird = false;
            }
        }
       
    }
}