import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from '../../../../node_modules/chart.js/dist/chart.min.js';
import { DatasetConfigModel } from '../../../models/graph-models/dataset-config.model';


@Component({
  selector: 'graph-paper',
  template: `
      <div>
        <h3>Plot Graph below</h3>
        <canvas id='canvas'>{{chart}}</canvas>
      </div>
    `
})
export class GraphPaperComponent implements OnInit, OnChanges {
@Input() dateTimeData;
@Input() electrialData;
@Input() naturalGasData;
@Input() outsideTemperaturData;

@Input() showElectrical: boolean;
@Input() showNaturalgas: boolean;
@Input() showOutsidetemperature: boolean;
 
chart;
config;

  constructor() { }

  

  ngOnInit() {
    this.config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
          label: 'Electrical Demand',
          borderColor: 'rgb(255, 205, 86)',
          backgroundColor:'rgba(255, 205, 86,1)',
          fill: false,
          data: [5, 6, 3, 4],
          yAxisID: 'electrical_demand',
          hidden: false
        }, {
          label: 'Natural Gas Demand',
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor:'rgba(255, 99, 132,1)',
          fill: false,
          data: [50, 66, 75, 25],
          yAxisID: 'naturalgas_demand',
          hidden: false
        },{
          label: 'Outside Temperature',
          borderColor: 'rgb(201, 203, 207)',
          backgroundColor:'rgb(201, 203, 207)',
          fill: false,
          data: [75, 30, 40, 55],
          yAxisID: 'oustside_temperature',
          hidden: false
          }
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
          text: 'EIB Sensor Readings'
        },
        scales: {
          yAxes: [{
            display: true,
            position: 'left',
            id: 'electrical_demand',
            scaleLabel: {
              display: true,
              labelString: 'Electrical Demand kW'
            },
            gridLines: {
              drawOnChartArea: false,
            }
          }, {
            display: true,
            position: 'left',
            id: 'naturalgas_demand',
            scaleLabel: {
              display: true,
              labelString: 'Natural Gas Demand (BTU)'
            },
            gridLines: {
              drawOnChartArea: false, 
            }
          },{
            display: true,
            position: 'right',
            id: 'oustside_temperature',
            scaleLabel: {
              display: true,
              labelString: 'Outside Temperature'
            },
            gridLines: {
              drawOnChartArea: false,
            }
          }],
          }
        }
      };
      this.chart = new Chart('canvas', this.config); 
  }


  //todo: make this function.
  addDataset(dataset: number[], datasetConfig: DatasetConfigModel, ){

  }


  ngOnChanges(){

    if(this.chart != undefined){
      this.config.data.datasets[0].hidden = !this.showElectrical;
      this.config.data.datasets[1].hidden = !this.showNaturalgas;
      this.config.data.datasets[2].hidden = !this.showOutsidetemperature;
      this.chart.update();
    }
  }  
}
 
