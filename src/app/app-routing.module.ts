import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecentlyJoinMemberComponent } from "./recently-join-member/recently-join-member.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { LoginComponent } from "./Authentication/login/login.component";

import { RegistrationComponentNew } from "./user/registration/registration.component";
import { NewLoginComponent } from "./Authentication/new-login/new-login.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { NewContactusComponent } from "./new-contactus/new-contactus.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: NewLoginComponent },
  { path: "home", component: HomeComponent },
  { path: "members", component: RecentlyJoinMemberComponent },
  { path: "userDetail/:id", component: UserDetailComponent },
  { path: "registration", component: RegistrationComponentNew },
  { path: "contactUs", component: ContactUsComponent },
  { path: "newcontactUs", component: NewContactusComponent },
  // { path: "oldlogin", component: LoginComponent },
  // { path: "old", component: RegistrationComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingComponents = [
  HomeComponent,
  RegistrationComponentNew,
  PageNotFoundComponent,
  NewLoginComponent,
  RecentlyJoinMemberComponent,
  UserDetailComponent,
  ContactUsComponent
];
