import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartService } from '../services/chart.service';
import { LineChartComponent } from './chart/chart-type/line-chart.component';
import { ChartDashboardComponent } from './chart/chart-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    ChartDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
