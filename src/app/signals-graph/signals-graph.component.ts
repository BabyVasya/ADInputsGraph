import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import {EChartsOption} from "echarts";
import * as data from '../signals-graph/jsons/data.json'
import {EquipmentInputsEchartData} from "./Dto/EquipmentInputsEchartData";


@Component({
  selector: 'app-signals-graph',
  standalone: true,
  imports: [NgxEchartsDirective, CommonModule],
  templateUrl: './signals-graph.component.html',
  styleUrl: './signals-graph.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class SignalsGraphComponent {

  public seriesData: EquipmentInputsEchartData[] = [];
  public options: EChartsOption[] = [];


  constructor() {
    this.setSeriesArray(data.analogChannels)
    this.setSeriesArray(data.statusChannels)

    this.seriesData.forEach((series) => {
      this.options.push(
        {
          title: {
            text: series.name,
            left: 'center'
          },
          xAxis: {
            type: 'time',
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              type: 'line',
              data: series.parsedDataSeries,
              color: '#25dbb4'
            }
          ]
        }
      )

    })

  }

  public setSeriesArray(channels:Array<any>) {
    channels.forEach((channel:any) => {
      this.seriesData.push(
        new EquipmentInputsEchartData(
          channel.name,
          data.time.map((date:string, index:number) => {
            return [new Date(date).getTime(),
              channel.hasOwnProperty("multiplier")?channel.values[index]*channel.multiplier:channel.values[index]];
          }),
        ))
    })
  }

}
