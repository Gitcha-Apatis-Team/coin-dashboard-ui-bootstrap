import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-main/app-content/app-content.component';
import { TickerComponent } from './ticker/ticker.component';
import { TimelineChartComponent } from './chart/timeline-chart/timeline-chart.component';
import { TimelieChart2Component } from './chart/timelie-chart2/timelie-chart2.component';

const routes: Routes = [
  { path: '', component: AppContentComponent },
  { path: 'ticker', component: TickerComponent },
  { path: 'ticker-chart', component: TimelineChartComponent },
  { path: 'ticker-chart2' , component : TimelieChart2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
