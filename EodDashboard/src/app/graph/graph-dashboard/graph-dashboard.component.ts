import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphPaperComponent } from '../graph-paper/graph-paper.component';
import { ChartDatasetConfigModel } from '../../../models/chart-models/chart.dataset.config.model';

@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styles: []
})
export class GraphDashboardComponent implements OnInit {
  @ViewChild(GraphPaperComponent) chart;

  sensor = {
    electrical:true,
    naturalgas:true,
    outsidetemperature:true
  };
  constructor() { }

  ngOnInit() {
    
    this.chart.chartBuild();
  }

  testbutton(){
    this.chart.addDataset(this.getSensorDatasets("EIB")[0]);
    this.chart.chartUpdate();
  }

  toggleButton(value){
    this.sensor.electrical = value == "electrical" ? !this.sensor.electrical : this.sensor.electrical;
    this.sensor.naturalgas = value == "naturalgas" ? !this.sensor.naturalgas : this.sensor.naturalgas;
    this.sensor.outsidetemperature = value == "outsidetemperature" ? !this.sensor.outsidetemperature : this.sensor.outsidetemperature ;
  }


  getSensorDatasets(buildingId: string):ChartDatasetConfigModel[]{
      let ds: ChartDatasetConfigModel[] = [{
        label: 'Electrical Demand',
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor:'rgba(255, 205, 86,1)',
        fill: false,
        data: [5, 6, 3, 4],
        yAxisID: 'electrical_demand',
        hidden: false
      }];
      return ds;
  }
}
