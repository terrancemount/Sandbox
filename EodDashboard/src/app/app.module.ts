import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphDashboardComponent } from './graph/graph-dashboard/graph-dashboard.component';
import { GraphPaperComponent } from './graph/graph-paper/graph-paper.component';
import { ChartService } from '../services/chart.service';


@NgModule({
  declarations: [
    AppComponent,
    GraphDashboardComponent,
    GraphPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
