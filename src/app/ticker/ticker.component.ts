import { Component, OnInit } from '@angular/core';
import { CoinOneApiService } from '../share/coin-one-api.service';
import { Tickers, currency, Ticker } from './ticker.model';
import { SearchFilterService } from './search-filter.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
  providers: [SearchFilterService]
})
export class TickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
