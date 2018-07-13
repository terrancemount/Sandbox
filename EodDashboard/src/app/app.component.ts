import { Component } from '@angular/core';
import { ChartService } from './shared/chart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _chartService:ChartService){
    
  }
}
