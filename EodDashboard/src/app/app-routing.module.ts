import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDashboardComponent } from './chart/chart-dashboard.component';



const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: ChartDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
