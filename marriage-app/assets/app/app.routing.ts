
import {Routes} from "@angular/router";
import { ADMIN_ROUTES } from "./admin/admin.routes";
import { AdminHomeComponent } from "./admin/admin-home.component";
import { RouterModule } from "@angular/router";
import { NewsComponent } from "./news/news.component";

const APP_ROUTES: Routes = [
    {path: "administration", component: AdminHomeComponent, children: ADMIN_ROUTES},
    {path: "", redirectTo: "/", pathMatch: "full"},
];

export const routing = RouterModule.forRoot(APP_ROUTES);