export interface DatasetConfigModel{
    datasetConfigId: string;
    label: string,
    borderColor: string,
    backgroundColor: string,
    fill: boolean,
    data: number[],
    yAxisID: string,
    hidden: boolean
}