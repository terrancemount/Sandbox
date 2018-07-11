export interface IChartDatasetConfigModel{
    id: string,
    buildingId?: string,
    label: string,
    borderColor: string,
    backgroundColor: string,
    data?: number[],
    fill: boolean,
    yAxisID: string,
    hidden?: boolean,
    iconPath?: string
}