import { Routes } from "@angular/router";
import { AdminNewsComponent } from "./admin-news.component";
import { SignInComponent } from "../auth/signin.component";
import { LogoutComponent } from "../auth/logout.component";

export const ADMIN_ROUTES: Routes= [
    { path:"", redirectTo:"news", pathMatch:"full" },
    { path:"news", component: AdminNewsComponent },
    { path: "createDummy", component: SignInComponent },
    { path: "signin", component: SignInComponent}
];