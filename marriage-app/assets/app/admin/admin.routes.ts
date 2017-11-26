import { Routes } from "@angular/router";
import { AdminNewsComponent } from "./admin-news.component";
import { HeaderComponent } from "../header.component";

export const ADMIN_ROUTES: Routes= [
    { path:"", redirectTo:"news", pathMatch:"full" },
    { path:"news", component: AdminNewsComponent }];