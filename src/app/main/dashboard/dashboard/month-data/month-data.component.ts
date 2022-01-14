import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Color, LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import {  languageData } from './language-data';
import{frameworkData }from './framework-data';
@Component({
  selector: 'app-month-data',
  templateUrl: './month-data.component.html',
  styleUrls: ['./month-data.component.scss']
})
export class MonthDataComponent {

  languageData: PieData[] = [];
  frameworkData: PieData[] = [];
  view: [number, number] = [700, 400];
  language_amount : number;
  framework_amount : number;


  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;


  colorScheme : Color = { name: 'color' , selectable: false, group: ScaleType.Linear,
    domain: ['#003f5c', '#665191', '#2f4b7c',  '#d45087' , '#a05195' ,   '#ff7c43' , '#f95d6a' , '#ffa600']
  };

  constructor() {
    Object.assign(this, { languageData });
    Object.assign(this, { frameworkData });
    this.language_amount = languageData.reduce((sum, current)=> sum + current.value, 0);
    this.framework_amount = frameworkData.reduce((sum, current)=> sum + current.value, 0);
  }

  onSelect(data : PieData): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data  : PieData): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data  : PieData): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

export interface PieData {
  name : string;
  value : number;
}
