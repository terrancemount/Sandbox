import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from '../../../../node_modules/chart.js/dist/chart.min.js';
import { IChartDatasetConfigModel } from '../../model/chart.dataset.config.model.js';


@Component({
  selector: 'graph-paper',
  templateUrl: './line-chart.component.html' 
})
export class LineChartComponent {

 
  chart;
  config = DEFAULT_CHART_CONFIG;

  constructor() { }

  
  
}

const DEFAULT_CHART_CONFIG = {
  type: 'line',
  data: {
    labels: [],
    datasets: [],
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
      text: ''
    },
    scales: {
      yAxes: []
      }
    }
  };

