import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartService } from '../../../shared/chart.service';
import { Chart } from '../../../../../node_modules/chart.js';


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html' 
})
export class LineChartComponent implements OnInit {
 
 
  chart;
  config = DEFAULT_CHART_CONFIG;

  buildingId
  sensors;
  

  constructor(private _chartService: ChartService) { }

  ngOnInit() {

    //let date = new Date;

    //console.log(date.toLocaleDateString('en-US',{month:"short", day: "numeric"}));
    
    this.buildingId = 1; //this will be set by the route adventurally
    this.config.data.datasets = this._chartService.getSensorsForBuilding(this.buildingId);
    this.config.data.labels = this._chartService.getLabels().map(date => {
      let newDate = new Date(date);
      return [newDate.toLocaleDateString('en-US',{month:"short", day: "numeric"}), newDate.toLocaleTimeString('en-US',{hour:"numeric", minute: "numeric"})];
    });

    


    
    this.config.data.datasets.forEach(sensor => {
      sensor.data = this._chartService.getData(sensor.id, {maxDataValue: sensor.maxDataValue, minDataValue: sensor.minDataValue});

      this.config.options.scales.yAxes.push(this._chartService.getYAxesConfigForSensor(sensor.id));
    });

    console.log(this.config.options.scales.yAxes);
    this.chart = new Chart('canvas', this.config);
    
  }
}

const DEFAULT_CHART_CONFIG = {
  type: 'line',
  data: {
    labels: [],
    datasets: [

    ],
  }, 
  options: {
    lineHeight: 1,
    responsive: true,
    hover:{ 
      mode:'nearest',
      intersect:true
    },
    stacked: false,
    title: {
      display: true,
      text: 'Test'
    },
    scales: {
      yAxes:[],
      xAxes:[{
        display: true,
        distribution: 'series',
          scaleLabel: {
              display: true,
              labelString: 'Date & Time',
              fontStyle: 'bold'
          },
          ticks: {
              // callback: function(value, index, values) {
              //     return parseFloat(value).toFixed(2);
              // },
              autoSkip: true,
              maxTicksLimit: 6,
             // stepSize: .2
          }
      }]
      }
    }
  };

