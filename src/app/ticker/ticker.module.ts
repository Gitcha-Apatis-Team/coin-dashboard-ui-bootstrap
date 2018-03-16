import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from './ticker.component';
import { TickerTableComponent } from './ticker-table/ticker-table.component';
import { TickerSearchComponent } from './ticker-search/ticker-search.component';
import { TickerCurrencyPipe } from './ticker-currency.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TickerComponent,
    TickerTableComponent,
    TickerSearchComponent,
    TickerCurrencyPipe
  ],
  exports: [TickerComponent]
})
export class TickerModule {}
