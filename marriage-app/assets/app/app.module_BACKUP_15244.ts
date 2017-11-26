import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { NewsComponent } from "./news/news.component";
import { NewsListComponent } from './news/news-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsItemComponent } from "./news/news-item.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
// import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SignInComponent } from "./auth/signin.component";
import { AdminHomeComponent } from "./admin/admin-home.component";
import { AdminNewsComponent } from "./admin/admin-news.component";

@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        NewsListComponent,
        NewsItemComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SignInComponent,
        AdminHomeComponent,
        AdminNewsComponent
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule,  ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}