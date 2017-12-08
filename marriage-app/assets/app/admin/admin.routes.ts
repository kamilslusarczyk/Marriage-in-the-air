import { Routes } from "@angular/router";
import { AdminNewsComponent } from "./news/admin-news.component";
import { SignInComponent } from "../auth/signin.component";
import { StatisticsComponent } from "./stats/admin-stats.component";
import { TodoComponent } from "../toDo/toDo.component";
import { AdminMarriageDetailsComponent } from "./admin-marriage-details.component";
import { ParticipantsComponent } from "../participants/participants.component";
import { AdminGalleryComponent } from "./gallery/admin-gallery.component";

export const ADMIN_ROUTES: Routes= [
    { path:"", redirectTo:"news", pathMatch:"full" },
    { path: "news", component: AdminNewsComponent, children: ADMIN_NEWS_ROUTES},
    { path: "gallery", component: AdminGalleryComponent, children: ADMIN_GALLERY_ROUTES},
    { path: "createDummy", component: SignInComponent },
    { path: "signin", component: SignInComponent},
    { path: "stats", component: StatisticsComponent},
    { path: "todos", component: TodoComponent},
    { path: "details", component: AdminMarriageDetailsComponent},
    { path: "participants", component: ParticipantsComponent}
];

const ADMIN_NEWS_ROUTES : Routes =
[
    {path:"add", component:AdminNewsComponent},
    {path:"edit", component:AdminNewsComponent},
];

const ADMIN_GALLERY_ROUTES : Routes = [
    {path:"add", component:AdminNewsComponent},
    {path:"add-group", component:AdminNewsComponent},
    {path:"edit", component:AdminNewsComponent},
];