import { LightningElement, track} from 'lwc';

export default class ZodiocSignMessanger extends LightningElement {

    username;
    dob;
    displayDetail = false;

    @track userdetails = {};


    handleName(event){
        this.username = event.target.value;
    }

    handleDOB(event){
        this.dob = event.target.value;
    }

    handleClickReset(event){
        this.username = '';
        this.dob = '';
        this.userdetails = {};
        this.displayDetail = false;
    }

    handleClick(){
        // console.log("Username : " + this.username);
        // console.log("Username : " + this.dob);

        let userdob = new Date(this.dob);

        const userMonth = userdob.getMonth() + 1;
        const userDate = userdob.getDate();

        this.userdetails = this.checkZodiocSign(userMonth, userDate);
    }


    checkZodiocSign(month, day){
        // console.log("your month : " + month + " and date : " + day);

        for(let sign of this.zodiacSigns){

            const [fromMonth, fromDate] = sign.from.split('-').map(Number);
            const [toMonth, toDate] = sign.to.split('-').map(Number);

            if((month===fromMonth && day>=fromDate) || (month===toMonth && day<=toDate)){
                // console.log(JSON.stringify(sign));
                this.displayDetail = true;
                return sign;
            }

        }

    }


    
    zodiacSigns = [
        {
            sign: "Aries",
            from: "03-21",
            to: "04-19",
            emoji: "♈",
            trait: "You are bold, energetic, and fearless. You love taking the lead and starting new adventures."
        },
        {
            sign: "Taurus",
            from: "04-20",
            to: "05-20",
            emoji: "♉",
            trait: "You are reliable, patient, and grounded. You appreciate comfort, beauty, and stability."
        },
        {
            sign: "Gemini",
            from: "05-21",
            to: "06-20",
            emoji: "♊",
            trait: "You are curious, intelligent, and social. You enjoy learning new things and connecting with people."
        },
        {
            sign: "Cancer",
            from: "06-21",
            to: "07-22",
            emoji: "♋",
            trait: "You are caring, emotional, and deeply connected to the people you love."
        },
        {
            sign: "Leo",
            from: "07-23",
            to: "08-22",
            emoji: "♌",
            trait: "You are confident, passionate, and naturally charismatic. You love inspiring others."
        },
        {
            sign: "Virgo",
            from: "08-23",
            to: "09-22",
            emoji: "♍",
            trait: "You are thoughtful, practical, and detail-oriented. You notice things others often miss."
        },
        {
            sign: "Libra",
            from: "09-23",
            to: "10-22",
            emoji: "♎",
            trait: "You are the peacemaker who sees both sides. You value balance, harmony, and fairness."
        },
        {
            sign: "Scorpio",
            from: "10-23",
            to: "11-21",
            emoji: "♏",
            trait: "You feel everything with intensity. You are determined, mysterious, passionate, and deeply intuitive."
        },
        {
            sign: "Sagittarius",
            from: "11-22",
            to: "12-21",
            emoji: "♐",
            trait: "You were born to explore. Adventure, freedom, honesty, and discovering new things excite you."
        },
        {
            sign: "Capricorn",
            from: "12-22",
            to: "01-19",
            emoji: "♑",
            trait: "You are ambitious, disciplined, and responsible. You work hard to achieve your goals."
        },
        {
            sign: "Aquarius",
            from: "01-20",
            to: "02-18",
            emoji: "♒",
            trait: "You are independent, innovative, and open-minded. You think differently and value freedom."
        },
        {
            sign: "Pisces",
            from: "02-19",
            to: "03-20",
            emoji: "♓",
            trait: "You are compassionate, imaginative, and deeply intuitive. Your creativity and emotions are powerful."
        }
        ];

}