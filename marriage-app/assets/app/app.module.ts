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
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignInComponent } from "./auth/signin.component";
import { AdminHomeComponent } from "./admin/admin-home.component";
import { AdminNewsComponent } from "./admin/admin-news.component";
import { AuthService } from "./auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        NewsListComponent,
        NewsItemComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignInComponent,
        AdminHomeComponent,
        AdminNewsComponent
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule,  ReactiveFormsModule, HttpModule, routing],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}