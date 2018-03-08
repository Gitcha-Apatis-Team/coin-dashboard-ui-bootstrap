export const currency: Array<string> = [
  'btc',
  'bch',
  'eth',
  'etc',
  'xrp',
  'qtum',
  'ltc',
  'iota',
  'btg'
];

export interface Ticker {
  currency: string;
  first: number;
  high: number;
  last: number;
  low: number;
  volume: number;
  yesterday_first: number;
  yesterday_high: number;
  yesterday_last: number;
  yesterday_low: number;
  yesterday_volume: number;
}
// btc, bch, eth, etc, xrp, qtum, ltc, iota, btg
export interface Tickers {
  result: string;
  errorCode: string;

  btc: Ticker;
  bch: Ticker;
  eth: Ticker;
  xrp: Ticker;
  etc: Ticker;
  qtum: Ticker;
  iota: Ticker;
  btg: Ticker;
}
