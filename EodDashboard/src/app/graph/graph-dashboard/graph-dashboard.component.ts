import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styles: []
})
export class GraphDashboardComponent implements OnInit {
  sensor = {
    electrical:true,
    naturalgas:true,
    outsidetemperature:true
  };
  constructor() { }

  ngOnInit() {
  }

  toggleButton(value){
    this.sensor.electrical = value == "electrical" ? !this.sensor.electrical : this.sensor.electrical;
    this.sensor.naturalgas = value == "naturalgas" ? !this.sensor.naturalgas : this.sensor.naturalgas;
    this.sensor.outsidetemperature = value == "outsidetemperature" ? !this.sensor.outsidetemperature : this.sensor.outsidetemperature ;
  }

}
