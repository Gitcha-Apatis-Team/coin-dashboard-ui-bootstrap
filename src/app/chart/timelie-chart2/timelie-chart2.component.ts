import { Component, OnInit } from '@angular/core';
import {
  line,
  svg,
  tsv,
  selectAll,
  interpolate,
  curveLinear,
  curveBasis ,
  Line
} from 'd3';

export class RowData {
  date: number;
  temperature: number;
  constructor(data: number, temperature: number) {
    this.date = data;
    this.temperature = temperature;
  }
}

@Component({
  selector: 'app-timelie-chart2',
  templateUrl: './timelie-chart2.component.html',
  styleUrls: ['./timelie-chart2.component.scss']
})
export class TimelieChart2Component implements OnInit {
  margin: any;
  width: number;
  hight: number;
  transform;
  _line;

  pathBelow = ['line', 'below'];
  pathAbove = ['line', 'above'];
  clipPathAbove = 'url(#clip-above)';
  clipPathBelow = 'url(#clip-below)';
  d;
  constructor() {
    this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
    this.width = 960 - this.margin.left - this.margin.right;
    this.hight = 500 - this.margin.top - this.margin.bottom;
    this.transform = `translate( ${this.margin.left},${this.margin.top})`;
  }

  ngOnInit() {
    const mline = line<RowData>()
      .x(x => x.date)
      .y(y => y.temperature)
      .curve(curveBasis);

    tsv('assets/data.tsv').then(data => {
      // console.log(data);
      const rowData = data.map(row => {
        //    console.log(row);
        return new RowData( parseInt(row['date']), parseFloat(row['temperature'])
        );
      });
      console.log(rowData);

      this.d = mline(rowData);
      // svg
      //   .append('clipPath')
      //   .attr('id', 'clip-above')
      //   .append('rect')
      //   .attr('width', this.width)
      //   .attr('height', '231.70212765957444');

      // svg
      //   .append('clipPath')
      //   .attr('id', 'clip-below')
      //   .append('rect')
      //   .attr('y', y(55))
      //   .attr('width', width)
      //   .attr('height', height - y(55));

      // svg
      //   .append('g')
      //   .attr('class', 'x axis')
      //   .attr('transform', 'translate(0,' + height + ')')
      //   .call(xAxis);

      // svg
      //   .append('g')
      //   .attr('class', 'y axis')
      //   .call(yAxis)
      //   .append('text')
      //   .attr('transform', 'rotate(-90)')
      //   .attr('y', 6)
      //   .attr('dy', '.71em')
      //   .style('text-anchor', 'end')
      //   .text('Temperature (ºF)');

      // selectAll('.line')
      //   .data(['above', 'below'])
      //   .enter()
      //   .append('path')
      //   .attr('class', function(d) {
      //     return 'line ' + d;
      //   })
      // .attr('clip-path', function(d) {
      //   return 'url(#clip-' + d + ')';
      // })
      // .datum(data)
      //.attr('d', this._line);
    });
  }
}
