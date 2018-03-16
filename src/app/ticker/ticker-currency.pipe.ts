import { Pipe, PipeTransform } from '@angular/core';
import { currencyKoreanNames } from './ticker.model';

@Pipe({
  name: 'tickerCurrency'
})
export class TickerCurrencyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    for (const key in currencyKoreanNames) {
      if (value === key) {
        return currencyKoreanNames[key]  + `(${value})`;
      }
    }
  }
}
