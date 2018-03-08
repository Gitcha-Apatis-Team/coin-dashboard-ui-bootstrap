import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-main/app-content/app-content.component';
import { TickerComponent } from './ticker/ticker.component';

const routes: Routes = [
  { path: '', component: AppContentComponent },
  { path: 'ticker', component: TickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
