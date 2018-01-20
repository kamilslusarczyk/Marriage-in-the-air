
import {Routes} from "@angular/router";
import { ADMIN_ROUTES } from "./admin/admin.routes";
import { AdminHomeComponent } from "./admin/home/admin-home.component";
import { RouterModule } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { MarriageDetailsComponent } from "./marriage-details/marriage-details.component";
import { MARRIAGE_DETAILS_ROUTES } from "./marriage-details/marriage-details.routes";
import { HomepageComponent } from "./homepage/homepage.component";
import { SignInComponent } from "./auth/signin.component";
import { AppointmentConfirmation } from "./appointment-confirmation/appointment-confirmation";

const APP_ROUTES: Routes = [
    {path: "administration", component: AdminHomeComponent, children: ADMIN_ROUTES},
    {path: "details", component: MarriageDetailsComponent, children: MARRIAGE_DETAILS_ROUTES},
    {path: "news", component: NewsComponent},
    {path: "appointment-confirmation", component: AppointmentConfirmation},
    {path: "signin", component: SignInComponent},
    {path: "", component:HomepageComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);