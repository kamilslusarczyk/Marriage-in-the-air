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
<<<<<<< db6efcfce2f759cdde2bfc1eb615bef49f349d41
    
=======
    showError: boolean;

    constructor(private router: Router, private authService: AuthService) {

    }

>>>>>>> Authenthication done
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }

    onSubmit() {
<<<<<<< db6efcfce2f759cdde2bfc1eb615bef49f349d41
        this.myForm.reset();
=======
        this.showError = false;
        const user = new User(this.myForm.value.email, this.myForm.value.password);

        this.signInUser(user);
        this.myForm.reset();
    }

    signInUser(user: User) {
        this.authService.signin(user).subscribe(data => {

            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);

            this.router.navigateByUrl('/');
        },
        error => {
                this.showError = true;
        });
>>>>>>> Authenthication done
    }
}