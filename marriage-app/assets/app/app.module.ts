import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { NewsComponent } from "./news/news.component";
import { NewsListComponent } from "./news/news-list.component";
import {HttpClientModule} from "@angular/common/http";
import { NewsItemComponent } from "./news/news-item.component";

import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { SignInComponent } from "./auth/signin.component";
import { AdminHomeComponent } from "./admin/admin-home.component";
import { AdminNewsComponent } from "./admin/admin-news.component";
import { AuthService } from "./auth/auth.service";
import { MarriageDetailsComponent } from "./marriage-details/marriage-details.component";
import { MarriageDetailsService } from "./marriage-details/marriage-details.service";
import { StatisticsComponent } from "./admin/admin-stats.component";
import { StatisticsService } from "./statistics/statistics.service";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodosService } from "./toDo/toDo.service";
import { StringExtensionService } from "./common/stringExtensions.service";
import { TodoComponent } from "./toDo/toDo.component";
import { TodosListComponent } from "./toDo/todo-list.component";
import { TodoItemComponent } from "./toDo/todo-item.component";
import { PrimeNgModule } from "./common/primeng.module";
import { MessageHelperService } from "./common/messageHelper.service";
import { AdminMarriageDetailsComponent } from "./admin/admin-marriage-details.component";

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
        MarriageDetailsComponent,
        AdminMarriageDetailsComponent,
        StatisticsComponent,
        TodoComponent,
        TodosListComponent,
        TodoItemComponent
    ],
    imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        NgxChartsModule,
        BrowserAnimationsModule,
        PrimeNgModule],
    providers: [AuthService, MarriageDetailsService, StatisticsService, TodosService, StringExtensionService, MessageHelperService],
    bootstrap: [AppComponent]
})
export class AppModule {

}