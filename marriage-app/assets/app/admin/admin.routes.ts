import { Routes } from "@angular/router";
import { AdminNewsComponent } from "./news/admin-news.component";
import { SignInComponent } from "../auth/signin.component";
import { StatisticsComponent } from "./stats/admin-stats.component";
import { AdminMarriageDetailsComponent } from "./admin-marriage-details.component";
import { ParticipantsComponent } from "../participants/participants.component";
import { AdminGalleryComponent } from "./gallery/admin-gallery.component";
import { AdminNewsAddComponent } from "./news/admin-news-add.component";
import { AdminNewsArchiveComponent } from "./news/admin-news-archive.component";
import { AdminWelcomeComponent } from "./home/admin-welcome.component";
import { AdminAddPlannerComponent } from "./planner/admin-add-planner.component";
import { AdminPlannerAllComponent } from "./planner/admin-planner-all.component";

export const ADMIN_ROUTES: Routes= [
    { path:"", component: AdminWelcomeComponent },
    { path: "news", component: AdminNewsComponent},
    { path: "news/add", component: AdminNewsAddComponent},
    { path: "news/archive", component: AdminNewsArchiveComponent},
    { path: "planner/add", component: AdminAddPlannerComponent},
    { path: "planner/all", component: AdminPlannerAllComponent},
    { path: "gallery", component: AdminGalleryComponent},
    { path: "createDummy", component: SignInComponent },
    { path: "stats", component: StatisticsComponent},
    { path: "details", component: AdminMarriageDetailsComponent},
    { path: "participants", component: ParticipantsComponent}
];


