import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from './ticker.component';
import { TickerTableComponent } from './ticker-table/ticker-table.component';
import { ColorPipe } from './color.pipe';
import { ColorDirective } from './color.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TickerComponent, TickerTableComponent, ColorPipe, ColorDirective],
  exports: [TickerComponent]
})
export class TickerModule {}
