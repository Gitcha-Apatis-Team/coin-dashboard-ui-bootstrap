import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [CommonModule, RouterModule, NgxChartsModule],
  declarations: [TimelineChartComponent],
  exports: [TimelineChartComponent]
})
export class ChartModule {}
