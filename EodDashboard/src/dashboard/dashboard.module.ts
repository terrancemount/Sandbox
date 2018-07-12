import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './charts/line/line-chart.component';
import { ChartService } from './service/chart.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    LineChartComponent
  ],
  providers:[
    ChartService
  ]
})
export class DashboardModule { }
