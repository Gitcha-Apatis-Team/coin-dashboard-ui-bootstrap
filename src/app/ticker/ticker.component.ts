import { Component, OnInit } from '@angular/core';
import { CoinOneApiService } from '../share/coin-one-api.service';
import { Tickers, currency, Ticker } from './ticker.model';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {
  public tickers: Array<Ticker> = [];

  constructor(private coinOneApiService: CoinOneApiService) {}

  ngOnInit() {
    this.coinOneApiService.getTickers().subscribe(data => {
      for (let i = 0; i < currency.length; i++) {
        this.tickers.push(data[currency[i]]);
      }
      console.log(this.tickers);
    });
  }
}
