import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tickers } from '../ticker/ticker.model';
import { Observable } from 'rxjs/Observable';
import { retry, timeInterval } from 'rxjs/operators';

@Injectable()
export class CoinOneApiService {
  private API_URL = 'https://api.coinone.co.kr/ticker?currency=all';

  constructor(private http: HttpClient) {}

  /**
   * getTickers
   */
  public getTickers(): Observable<Tickers> {
    return this.http.get<Tickers>(this.API_URL);
  }
}
