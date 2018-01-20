import { Component, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Guest } from "./appointment-confirmation.models";


@Component({
    selector:"appointment-confirmation",
    styleUrls:["./appointment-confirmation.css"],
    templateUrl:"./appointment-confirmation.html",
    encapsulation: ViewEncapsulation.None
})
export class AppointmentConfirmation{
    
    private stepperConfig : { 
        activeIndex: 0,
        stepItems:{
            label:string
        }[]
    };

    private guest : Guest;

    constructor(){
        this.guest = new Guest();

        this.stepperConfig = {
            activeIndex: 0,
            stepItems : [{
                label:"Weryfikacja"
            },{
                label:"Zgodność"
            },
            {
            label:"Preferencje"
            },
            {
                label:"Potwierdzenie"
            }]
        }

    }

    canProceed(currentIndex : number) : boolean{
        console.log("Can proceed index: ", currentIndex);
        return true;
    }

    verifyCode(code : string) : void{
        
    }


}