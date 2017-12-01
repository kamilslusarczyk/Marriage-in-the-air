import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { NewsComponent } from "./news/news.component";
import { NewsListComponent } from './news/news-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsItemComponent } from "./news/news-item.component";

import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { SignInComponent } from "./auth/signin.component";
import { AdminHomeComponent } from "./admin/admin-home.component";
import { AdminNewsComponent } from "./admin/admin-news.component";
import { AuthService } from "./auth/auth.service";
import { MarriageDetailsComponent } from "./marriage-details/marriage-details.component";
import { MarriageDetailsService } from "./marriage-details/marriage-details.service";

@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        NewsListComponent,
        NewsItemComponent,
        HeaderComponent,
        SignInComponent,
        AdminHomeComponent,
        AdminNewsComponent,
        MarriageDetailsComponent
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule,  ReactiveFormsModule, HttpModule, routing],
    providers: [AuthService, MarriageDetailsService],
    bootstrap: [AppComponent]
})
export class AppModule {

}