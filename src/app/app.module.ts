import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { ToastrModule } from "ngx-toastr";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AdvanceSearchComponent } from "./advance-search/advance-search.component";
import { RecentlyJoinMemberComponent } from "./recently-join-member/recently-join-member.component";
import { NgbdCarouselConfig } from "./carousel-banner/carousel-banner.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { CommonModule } from "@angular/common";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { HttpClientModule } from "@angular/common/http";
import { NgtUniversalModule } from "@ng-toolkit/universal";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FileuploadComponent } from "./features/fileupload/fileupload.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { LoginComponent } from "./Authentication/login/login.component";
import { RegistrationComponentNew } from "./user/registration/registration.component";

import { MaterialModulesModule } from "./shared/material-modules/material-modules.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvanceSearchComponent,
    RecentlyJoinMemberComponent,
    NgbdCarouselConfig,
    ContactUsComponent,
    RoutingComponents,
    PageNotFoundComponent,
    FileuploadComponent,
    UserDetailComponent,
    LoginComponent,
    RegistrationComponentNew
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    NgbModule.forRoot(),
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,

    // MatCheckboxModule,
    // MatButtonModule,
    MaterialModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
