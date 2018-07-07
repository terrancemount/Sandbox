import { Injectable } from '@angular/core';
import { IChartDatasetConfigModel } from '../models/chart-models/chart.dataset.config.model';

@Injectable()
export class ChartService {
  sensorsLables: Date[];
  sensorsData;

  constructor() { }

  getDataset(sensorId: string){
      //
  }

  getSensorDatasetObject(sensorId: string ){
       
  }

  //create an array of random numbers used to test the sensor displays
  createRandomNumberArray(numValues: number, minValue: number, maxValue: number):number[]{
    let numberArray = [];

    for(let i = 0; i < numValues; i++){
        numberArray.push(Math.floor(Math.random()*(maxValue - minValue + 1)) + minValue);
       
    }

    return numberArray;
  }
  //create a random array of dates
  createRandomDateArray(numValues: number, endDate:Date, intervalInMinutes: number ):Date[]{
        let dateArray = [];
        let MS_PER_MINUTE = 60000;

        for(let i = 0; i < numValues; i++){
           dateArray.push(new Date(endDate.getTime() - MS_PER_MINUTE * intervalInMinutes * i ))
        }


    return dateArray;
  }

}




const SensorConfig: IChartDatasetConfigModel[] = 
  [{
    id: "1",
    label: 'Electrical Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgba(255, 205, 86,1)',
    fill: false,
    yAxisID: 'electrical_demand',
    hidden: false
  }, {
    id: "2",
    label: 'Natural Gas Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgba(255, 205, 86,1)',
    fill: false,
    yAxisID: 'electrical_demand',
    hidden: false
  }
];

const Sensors = [{
   id: '1',
   buildingId: '1',
   iconPath: '../assets/sensor/icon/EIB-small.jpg'
}];