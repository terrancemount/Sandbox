import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from './chart.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers:[
    ChartService
  ]
})
export class SharedModule { }
