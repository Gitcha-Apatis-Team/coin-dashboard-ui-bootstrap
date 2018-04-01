import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TimelieChart2Component } from './timelie-chart2/timelie-chart2.component';
import { ShapeComponent } from '../shape/shape.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgxChartsModule],
  declarations: [TimelineChartComponent, TimelieChart2Component , ShapeComponent],
  exports: [TimelineChartComponent]
})
export class ChartModule {}
