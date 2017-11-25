import {Routes} from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { RouterModule } from "@angular/router";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { ADMIN_ROUTES } from "./admin/admin.routes";
import { AdminHomeComponent } from "./admin/admin-home.component";

const APP_ROUTES: Routes = [
    {path: "auth", component: AuthenticationComponent, children: AUTH_ROUTES},
    {path: "administration", component: AdminHomeComponent, children: ADMIN_ROUTES},
    {path: "", redirectTo: "/", pathMatch: "full"},
];

export const routing = RouterModule.forRoot(APP_ROUTES);