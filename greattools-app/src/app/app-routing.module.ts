import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaGironiComponent } from './crea-gironi/crea-gironi.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'crea-gironi', component: CreaGironiComponent
  },
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
