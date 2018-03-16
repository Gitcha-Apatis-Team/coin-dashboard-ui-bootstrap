import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticker, currency } from '../ticker.model';
import { CoinOneApiService } from '../../share/coin-one-api.service';
import { SearchFilterService } from '../search-filter.service';

@Component({
  selector: 'app-ticker-table',
  templateUrl: './ticker-table.component.html',
  styleUrls: ['./ticker-table.component.scss']
})
export class TickerTableComponent implements OnInit, OnDestroy {
  public tickers: Array<Ticker> = [];
  public interval: any;
  constructor(
    private coinOneApiService: CoinOneApiService,
    private searchFilterService: SearchFilterService
  ) {}

  ngOnInit() {
    this.interval = setInterval(() => this.getTickers(), 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getTickers() {
    this.coinOneApiService.getTickers().subscribe(data => {
      this.tickers = [];

      if (this.findCureeucy() !== -1) {
        this.tickers.push(data[currency[this.findCureeucy()]]);
      } else {
        for (let i = 0; i < currency.length; i++) {
          this.tickers.push(data[currency[i]]);
        }
      }

      // console.log(this.tickers);
    });
  }

  findCureeucy(): number {
    const seachKeyword: string = this.searchFilterService.getSearchWord();
    return currency.findIndex(word => word === seachKeyword);
  }
}
