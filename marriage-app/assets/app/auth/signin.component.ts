import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { Router } from "@angular/router";



@Component({
    selector: "app-signin",
    templateUrl: "./signin.component.html"
})
export class SignInComponent {
    myForm: FormGroup;
    showError: boolean;

    constructor(private router: Router, private authService: AuthService) {

    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
        // var u = new User("a", "b", "c", "d");
        // this.authService.signup(u).subscribe(data => {
        //     console.log(data)
        // },
        //     error => {
        //         console.log(error);
        //     });
    }

    onSubmit() {
        this.showError = false;
        const user = new User(this.myForm.value.email, this.myForm.value.password);

        this.signInUser(user);
        this.myForm.reset();
    }

    signInUser(user: User) {
        this.authService.signin(user).subscribe(data => {

            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.authService.signInEvent.emit(true);

            this.router.navigateByUrl('/');
        },
        error => {
                this.showError = true;
        });
    }
}
