import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphDashboardComponent } from './graph/graph-dashboard/graph-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: GraphDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
