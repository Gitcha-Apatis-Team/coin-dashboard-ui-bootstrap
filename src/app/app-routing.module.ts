import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-main/app-content/app-content.component';
import { TickerComponent } from './ticker/ticker.component';
import { TimelineChartComponent } from './chart/timeline-chart/timeline-chart.component';

const routes: Routes = [
  { path: '', component: AppContentComponent },
  { path: 'ticker', component: TickerComponent },
  { path: 'ticker-chart', component: TimelineChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
