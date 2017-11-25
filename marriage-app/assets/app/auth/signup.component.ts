import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html"
})
export class SignupComponent {
    myForm: FormGroup;
    
    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }

    onSubmit() {
        this.myForm.reset();
    }
}