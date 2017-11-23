import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";



@Component({
    selector: "app-signin",
    templateUrl: "./signin.component.html"
})
export class SignInComponent {
    myForm: FormGroup;
    
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }

    onSubmit() {
        this.myForm.reset();
    }
}