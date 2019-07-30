import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecentlyJoinMemberComponent } from "./recently-join-member/recently-join-member.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { LoginComponent } from "./Authentication/login/login.component";

import { RegistrationComponentNew } from "./user/registration/registration.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "members", component: RecentlyJoinMemberComponent },
  { path: "userDetail/:id", component: UserDetailComponent },
  { path: "registration", component: RegistrationComponentNew },
  { path: "old", component: RegistrationComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingComponents = [
  HomeComponent,
  RegistrationComponent,
  PageNotFoundComponent
];