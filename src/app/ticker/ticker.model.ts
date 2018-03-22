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

export const currencyKoreanNames: Object = {
  btc: '비트코인',
  bch: '비트코인캐시',
  eth: '이더리움',
  etc: '이더리움클래식',
  xrp: '리플',
  qtum: '퀀텀',
  ltc: '라이트코인',
  iota: '아이오타',
  btg: '비트코인골드'
};

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
  timestamp: number;

  btc: Ticker;
  bch: Ticker;
  eth: Ticker;
  xrp: Ticker;
  etc: Ticker;
  qtum: Ticker;
  iota: Ticker;
  btg: Ticker;
}
