import { Injectable } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';


@Injectable()
export class ChartService {

  //gets the info for the datasets for the chart. 
  getSensorsForBuilding(buildingId: number){
    
    return DEFAULT_SENSORS.filter(sensor => sensor.buildingId === buildingId);
  } 

  //get all the sensors datasets avalible in the array
  getSensors(){
    return DEFAULT_SENSORS;
  }

  //get a particular sensor
  getSensor(sensorId: number){
    return DEFAULT_SENSORS.find(sensor => sensor.id === sensorId);
  }

  //get all the building info
  getBuildings(){
    return DEFAULT_BUILDINGS;
  }

  //get info for only one building
  getBuilding(buildingId: number){
    return DEFAULT_BUILDINGS.find(building => building.id === buildingId);
  }

  //get randomly generarte lables based off the request config
  getLabels(config?:IRequestConfig){
    if(config === undefined)
      config = {};
    
    this.checkRequestConfig(config);

    return this.createRandomLabelArray(config);
  }

  getData(sensorId: number, config?:IRequestConfig){
    let sensor = DEFAULT_SENSORS.find(sensor => sensor.id === sensorId);

    if(config === undefined)
      config = {};
    this.checkRequestConfig(config);

    return this.createRandomNumberArray(config);

  }

  //get the y axes information from the default array
  getYAxesConfigForSensor(sensorId: number){
    let sensor = DEFAULT_SENSORS.find(pSensor => pSensor.id == sensorId);

    console.log(sensor);

    if(sensor != undefined)
    { 
      let result = DEFAULT_Y_AXES.find(yAxes => yAxes.id == sensor.yAxisID);
      return result;
    }
    //else
    return undefined;
  }

  //private method to make sure the config object has proper label properties
  private checkRequestConfig(config:IRequestConfig){
    //make sure config has number of points
    if(config['numOfPoints'] === undefined)
      config['numOfPoints'] = DEFAULT_NUMBER_POINTS;

    //make sure config has an end time otherwise use default
    if(config['timeInterval'] === undefined)
      config['timeInterval'] = DEFAULT_TIME_INTERVAL;
    
    if(config['endTime'] === undefined){
      let now = new Date;
      now.setMinutes(0);
      now.setSeconds(0);
      now.setMilliseconds(0);
      config['endTime'] = now.valueOf();
    }

    if(config['maxDataValue'] === undefined)
      config['maxDataValue'] = DEFAUT_MAX_DATA_VALUE;

    if(config['minDataValue'] === undefined)
      config['minDataValue'] = DEFAULT_MIN_DATA_VALUE;

  }

  //create an array of random numbers used to test the sensor displays
  createRandomNumberArray(config:IRequestConfig):number[]{
    let numberArray = [];
    

    for(let i = 0; i < config.numOfPoints; i++){
        numberArray.push(Math.floor(Math.random()*(config.minDataValue - config.maxDataValue + 1)) + config.minDataValue);
       
    }

    return numberArray;
  }
  //create a random array of dates
  createRandomLabelArray(config:IRequestConfig):number[]{
        let dateArray = [];
        let MS_PER_MINUTE = 60000;
        

        for(let i = 0; i < config.numOfPoints; i++){
           dateArray.push(config.endTime - (i * MS_PER_MINUTE * config.timeInterval));
        }

        dateArray.reverse()
    return dateArray;
  }

}

export interface IRequestConfig {
  numOfPoints?: number,
  minDataValue?: number,
  maxDataValue?: number,
  endTime?: number,
  timeInterval?: number
}

const DEFAULT_MIN_DATA_VALUE = 1;
const DEFAUT_MAX_DATA_VALUE = 100;
const DEFAULT_END_TIME = new Date("7/7/2018 12:00:00"); //should be changed to now minus the minutes
const DEFAULT_TIME_INTERVAL = 15; //fifteen minutes
const DEFAULT_NUMBER_POINTS = 101; 

const DEFAULT_BUILDINGS = [{
  id: 1,
  fullName: "Engineering and Industry Building",
  shortName: "EIB",
  iconPath:'../assets/img/EIB-small.jpg'
},{
  id: 2,
  fullName: 'Eugene Short Hall',
  shortName: "ESH",
  iconPath: "../asset/img/EIB-small.jpg"
}]

//default configurates for the sensors. 
//todo: move this to database adventurally so it can be changed on the server.    
const DEFAULT_SENSORS  = 
  [{
    id: 1,
    buildingId: 1,
    label: 'Electrical Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgb(255, 205, 86)',
    minDataValue: 50,
    maxDataValue: 100,
    fill: false,
    yAxisID: 1,
    iconPath: '../assets/img/Electrical.png'
  }, {
    id: 2,
    buildingId: 1,
    label: 'Natural Gas Demand',
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor:'rgb(255, 99, 132)',
    minDataValue: 200,
    maxDataValue: 300,
 
    fill: false,
    yAxisID: 2,
    iconPath: '../assets/img/NaturalGas.png'
  }, {
    id: 3,
    buildingId: 1,
    label: 'Outside Temperature',
    borderColor: 'rgb(201, 203, 207)',
    backgroundColor:'rgb(201, 203, 207)',
    minDataValue: 50,
    maxDataValue: 70,

    fill: false,
    yAxisID: 3,
    iconPath: '../assets/img/OutsideTemperature.png'
  }, {
    id: 4,
    buildingId: 2,
    label: 'Electrical Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgb(255, 205, 86)',
    minDataValue: 25,
    maxDataValue: 75,
    units: 'kW',
    fill: false,
    yAxisID: 1,
    iconPath: '../assets/img/Electrical.png'
  }
];

const DEFAULT_Y_AXES = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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