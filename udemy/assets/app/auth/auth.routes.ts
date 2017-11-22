import { Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SignInComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: "signup", pathMatch: "full"},
    {path: "signup", component: SignupComponent},
    {path: "signin", component: SignInComponent},
    {path: "logout", component: LogoutComponent},
];