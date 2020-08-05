import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyComponent } from './apply/apply.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingComponent,
    FooterComponent,
    ApplyComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
