import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphDashboardComponent } from './graph/graph-dashboard/graph-dashboard.component';
import { GraphPaperComponent } from './graph/graph-paper/graph-paper.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
