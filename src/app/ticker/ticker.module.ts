import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from './ticker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TickerComponent],
  exports: [TickerComponent]
})
export class TickerModule {}
