
import {Routes} from "@angular/router";
import { ADMIN_ROUTES } from "./admin/admin.routes";
import { AdminHomeComponent } from "./admin/admin-home.component";
import { RouterModule } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { MarriageDetailsComponent } from "./marriage-details/marriage-details.component";
import { MARRIAGE_DETAILS_ROUTES } from "./marriage-details/marriage-details.routes";

const APP_ROUTES: Routes = [
    {path: "administration", component: AdminHomeComponent, children: ADMIN_ROUTES},
    {path: "details", component: MarriageDetailsComponent, children: MARRIAGE_DETAILS_ROUTES},
    {path: "", redirectTo: "/", pathMatch: "full"},
];

export const routing = RouterModule.forRoot(APP_ROUTES);