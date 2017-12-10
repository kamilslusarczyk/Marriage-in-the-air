import { Routes } from "@angular/router";
import { AdminNewsComponent } from "./news/admin-news.component";
import { SignInComponent } from "../auth/signin.component";
import { StatisticsComponent } from "./stats/admin-stats.component";
import { TodoComponent } from "../toDo/toDo.component";
import { AdminMarriageDetailsComponent } from "./admin-marriage-details.component";
import { ParticipantsComponent } from "../participants/participants.component";
import { AdminGalleryComponent } from "./gallery/admin-gallery.component";
import { AdminNewsAddComponent } from "./news/admin-news-add.component";
import { AdminNewsArchiveComponent } from "./news/admin-news-archive.component";
import { AdminWelcomeComponent } from "./home/admin-welcome.component";
import { AdminPlannerComponent } from "./planner/admin-planner.component";

export const ADMIN_ROUTES: Routes= [
    { path:"", component: AdminWelcomeComponent },
    { path: "news", component: AdminNewsComponent},
    { path: "news/add", component: AdminNewsAddComponent},
    { path: "news/archive", component: AdminNewsArchiveComponent},
    { path: "planner", component: AdminPlannerComponent},
    { path: "gallery", component: AdminGalleryComponent},
    { path: "createDummy", component: SignInComponent },
    { path: "stats", component: StatisticsComponent},
    { path: "todos", component: TodoComponent},
    { path: "details", component: AdminMarriageDetailsComponent},
    { path: "participants", component: ParticipantsComponent}
];


