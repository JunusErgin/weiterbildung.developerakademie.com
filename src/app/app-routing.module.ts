import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ApplyComponent } from './apply/apply.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';


const routes: Routes = [{
  path: '',
  component: LandingComponent,
},
{
  path: 't',
  component: LandingComponent,
},
{
  path: 'ya',
  component: LandingComponent,
},
{
  path: 'y',
  component: LandingComponent,
}, {
  path: 'g',
  component: LandingComponent,
},
{
  path: 'info',
  component: LandingComponent,
},
{
  path: 'f',
  component: LandingComponent,
},
{
  path: 'termin',
  component: ApplyComponent,
}, {
  path: 'bewerbung-eingegangen',
  component: ThankYouPageComponent,
}, {
  path: '**',
  component: LandingComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
