import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-main/app-content/app-content.component';
import { TickerComponent } from './ticker/ticker.component';
import { TimelineChartComponent } from './chart/timeline-chart/timeline-chart.component';
import { TimelieChart2Component } from './chart/timelie-chart2/timelie-chart2.component';
import { ShapeComponent } from './shape/shape.component';
import { CandleStickChartComponent } from './chart/candle-stick-chart/candle-stick-chart.component';


const routes: Routes = [
  { path: '', component: AppContentComponent },
  { path: 'ticker', component: TickerComponent },
  { path: 'ticker-chart', component: TimelineChartComponent },
  { path: 'ticker-chart2' , component : TimelieChart2Component},
  { path: 'shape', component : ShapeComponent },
  { path: 'candleStickChart', component : CandleStickChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
