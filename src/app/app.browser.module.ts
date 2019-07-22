import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { RecentlyJoinMemberComponent } from './recently-join-member/recently-join-member.component';
import { NgbdCarouselConfig } from './carousel-banner/carousel-banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppModule } from './app.module';



@NgModule({
  imports: [
    
    AppRoutingModule,
    NgbModule.forRoot(),
    AppModule,
    BrowserTransferStateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
