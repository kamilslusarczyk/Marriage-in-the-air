import { AdminNewsAddComponent } from './admin/news/admin-news-add.component';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { NewsComponent } from "./news/news.component";
import { routing } from "./app.routing";
import { SignInComponent } from "./auth/signin.component";
import { AdminHomeComponent } from "./admin/home/admin-home.component";
import { AdminNewsComponent } from "./admin/news/admin-news.component";
import { AuthService } from "./auth/auth.service";
import { MarriageDetailsComponent } from "./marriage-details/marriage-details.component";
import { MarriageDetailsService } from "./marriage-details/marriage-details.service";
import { StatisticsComponent } from "./admin/stats/admin-stats.component";
import { StatisticsService } from "./statistics/statistics.service";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StringExtensionService } from "./common/stringExtensions.service";
import { PrimeNgModule } from "./common/primeng.module";
import { MessageHelperService } from "./common/messageHelper.service";
import { AdminMarriageDetailsComponent } from "./admin/admin-marriage-details.component";
import { ParticipantsComponent } from "./participants/participants.component";
import { ParticipantsService } from "./participants/participants.service";
import { ParticipantItemComponent } from "./participants/participant-item.component";
import { MessageService } from "primeng/components/common/messageservice";
import { AdminGalleryComponent } from "./admin/gallery/admin-gallery.component";
import { DatePipe } from "@angular/common";import { AdminNewsArchiveComponent } from './admin/news/admin-news-archive.component';
import { AdminWelcomeComponent } from './admin/home/admin-welcome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminAddPlannerComponent } from './admin/planner/admin-add-planner.component';
import { AngularMaterialModule } from './common/angular-material.module';
import { ChecklistService } from './admin/planner/checklist.service';


@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        SignInComponent,
        AdminHomeComponent,
        AdminNewsComponent,
        MarriageDetailsComponent,
        AdminMarriageDetailsComponent,
        StatisticsComponent,
        ParticipantsComponent,
        ParticipantItemComponent,
        AdminGalleryComponent,
        AdminNewsAddComponent,
        AdminNewsArchiveComponent,
        AdminWelcomeComponent,
        HomepageComponent,
        AdminAddPlannerComponent

    ],
    imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        NgxChartsModule,
        BrowserAnimationsModule,
        PrimeNgModule,
        AngularMaterialModule],
    providers: [AuthService,
        MarriageDetailsService,
        StatisticsService,
        ChecklistService,
        StringExtensionService,
         MessageHelperService,
         ParticipantsService,
         MessageService,
         DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {

}