export class EquipmentInputsEchartData {
  public name: string;
  public parsedDataSeries: [number, number][];

  constructor(
    name: string,
    parsedDataSeries: [number, number][],
  ) {
    this.name = name;
    this.parsedDataSeries = parsedDataSeries.slice()
  }
}
