//This is a model for labeling the YAxes in chart.js.  
export interface ChartYaxisConfigModel{
        
    display: boolean, //will be true to show the scale, false to turn off.
    position: string, //ether 'left' or 'right'
    id: string, //the id for the scale
    scaleLabel: {
        display: boolean, //normally will be true to show the scale lable
        labelString: string //the name displayed on the label. 'Electrical Demand (kwh)
    },
    //normally turn off gridlines unless only one axis is being displayed.
    gridLines: {
        drawOnChartArea: boolean,
    }
      
}