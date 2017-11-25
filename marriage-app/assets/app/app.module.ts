import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { SignInComponent } from './auth/signin.component';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SignInComponent
    ],
    imports: [BrowserModule, FormsModule,  routing, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}