import { Injectable } from '@angular/core';
import { IChartDatasetConfigModel } from '../model/chart.dataset.config.model';


@Injectable()
export class ChartService {
  sensorsLables = [];
  sensorData = [];


  constructor() { }

  
  getAllSensorConfig(){
    //this will get the data requested form the server.
    //for testing it will only get it from an array.
    this.sensorData = SensorsDefaults;
  }

  getSensorDataWithLables(sensorIds: string[], numPoints: number){
    //set the data for each sensor
    //this will be replicated with a rsjx call
    sensorIds.forEach(sensorId => {
        let sensor = this.sensorData.find(sensorTemp => sensorTemp.id == sensorId);
        sensor['data'] = this.createRandomNumberArray(numPoints, 50, 150);  
      });

    //add lables for the group of sensors
    //this will overwrite the data so I will need to fix in the future
    //todo: Make this more robust
    this.sensorsLables = this.createRandomDateArray(numPoints, new Date("7/7/2018 12:00:00"), 15);
  }

  getSensorConfig(sensorIds: string[]){
    let selectedSensors =[];

    if (this.sensorData == undefined || this.sensorData == [])
      this.getAllSensorConfig();

    sensorIds.forEach(sensorId => {
      selectedSensors.push(SensorsDefaults.find(x => x.id == sensorId))
    })

    return selectedSensors;
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

  getSensorsForBuilding(buildingId: string){ 

  }
}




const SensorsDefaults: IChartDatasetConfigModel[] = 
  [{
    id: "1",
    buildingId: "1",
    label: 'Electrical Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgb(255, 205, 86)',
    fill: false,
    yAxisID: '1',
    iconPath: '../assets/img/NaturalGas.png'
  }, {
    id: "2",
    buildingId: "1",
    label: 'Natural Gas Demand',
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor:'rgb(255, 99, 132)',
    fill: false,
    yAxisID: '2',
    iconPath: '../assets/img/NaturalGas.png'
  }, {
    id: "3",
    buildingId: "1",
    label: 'Outside Temperature',
    borderColor: 'rgb(201, 203, 207)',
    backgroundColor:'rgb(201, 203, 207)',
    fill: false,
    yAxisID: '3',
    iconPath: '../assets/img/OutsideTemperature.png'
  }
];

const YAxesDefault = [
  {
    id: '1',
    display: true,
    position: 'left',
   
    scaleLabel: {
      display: true,
      labelString: 'Electrical Demand kW'
    },

    gridLines: {
      drawOnChartArea: false,
    }
  }, {
    id: '2',
    display: true,
    position: 'left',
 
    scaleLabel: {
      display: true,
      labelString:  'Natural Gas Demand kBTU'
    },
    
    gridLines: {
      drawOnChartArea: false,
    }
  }, {
    id: '3',
    display: true,
    position: 'right',
 
    scaleLabel: {
      display: true,
      labelString:  'Outside Temperature &#176;F'
    },
    
    gridLines: {
      drawOnChartArea: false,
    }
  }
];