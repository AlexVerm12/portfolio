import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
