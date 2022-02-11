import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PapelComponent } from './papel/papel.component';
import { HomeComponent } from './home/home.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'papel',
    component: PapelComponent,
   // canActivate: [OktaAuthGuard]
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }