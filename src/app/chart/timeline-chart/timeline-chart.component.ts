import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoinOneApiService } from '../../share/coin-one-api.service';
import * as shape from 'd3-shape';
import { Subscription } from 'rxjs/Subscription';
import { take } from 'rxjs/operators';

export const single = [
  {
    name: 'BTC',
    value: 8940000
  },
  {
    name: 'BTG',
    value: 5000000
  },
  {
    name: 'XRP',
    value: 7200000
  }
];

export const multi = [
  {
    name: 'eth',
    series: [
     
    ]
  }
];

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent implements OnInit, OnDestroy {
  single: any[];
  multi: any[];

  view: any[] = [1400, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '시간';
  showYAxisLabel = true;
  yAxisLabel = '가격';
  timeline = false;
  curve = shape.curveCardinal;
  xScaleMin = new Date();
  yScaleMin = 1;
  yScaleMax = 1;
  intervalId;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private coinOneApiService: CoinOneApiService) {
    // Object.assign(this, { single, multi }); 해당 객체로 객체 프로퍼티 COPY
    this.single = single;
    this.multi = multi;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.getTickers();
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  onSelect(event) {
    console.log(event);
  }

  getTickers(): Subscription {
    return this.coinOneApiService
      .getTickers()
      .pipe(take(1))
      .subscribe(dataSet => {
        this.yScaleMin = dataSet['eth'].last * 0.99;
        this.yScaleMax = dataSet['eth'].last * 1.01;
        console.log(new Date(<number>dataSet.timestamp * 1000));

        const data = {
          name: new Date(<number>dataSet.timestamp * 1000),
          value: dataSet['eth'].last
        };

        this.multi[0].series.push(data);
        this.multi[0].series.slice(-10);
        this.multi = [...this.multi];
      });
  }
}
