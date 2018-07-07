import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphPaperComponent } from '../graph-paper/graph-paper.component';
import { IChartDatasetConfigModel } from '../../../models/chart-models/chart.dataset.config.model';
import { ChartService } from '../../../services/chart.service';

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
  constructor(private _chartService: ChartService) { }

  ngOnInit() {
    let numArray: number[];
    let dateArray: Date [];

    this.chart.chartBuild();
    numArray = this._chartService.createRandomNumberArray(5, 1, 100);
    dateArray = this._chartService.createRandomDateArray(5, new Date('7/7/2018'), 15);

    console.log(numArray);
    console.log(dateArray);
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


  getSensorDatasets(buildingId: string):IChartDatasetConfigModel[]{
      let ds: IChartDatasetConfigModel[] = [{
        id: "1",
        label: 'Electrical Demand',
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor:'rgba(255, 205, 86,1)',
        fill: false,
        yAxisID: 'electrical_demand',
        hidden: false
      }];
      return ds;
  }
}