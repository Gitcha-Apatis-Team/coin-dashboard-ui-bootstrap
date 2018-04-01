import { Component, OnInit } from '@angular/core';
import { line, curveBasis, area } from 'd3';

export interface RowData {
  x: number;
  y: number;
}

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  d: string;
  ad: string;
  stroke = 'blue';
  strokeWidth = 0.5;
  fill = 'none';

  width = 400;
  height = 100;

  constructor() {}

  ngOnInit() {
    const lineData = [
      { x: 1, y: 5 },
      { x: 20, y: 20 },
      { x: 41, y: 10 },
      { x: 42, y: 10 },
      { x: 43, y: 10 },
      { x: 44, y: 10 },
      { x: 50, y: 10 },
      { x: 60, y: 40 },
      { x: 80, y: 5 },
      { x: 100, y: 60 },
      { x: 120, y: 40 },
      { x: 140, y: 60 },
      { x: 160, y: 40 },
      { x: 180, y: 60 },
      { x: 200, y: 6 },
      { x: 220, y: 60 },
      { x: 240, y: 30 },
      { x: 260, y: 60 },
      { x: 280, y: 20 },
      { x: 300, y: 10 }
    ];

    const areaFun = area<RowData>()
      .x(d => {
        return d.x;
      })
      .y1(d => {
        return d.y;
      })
      .y0(this.height)
      .curve(curveBasis);

    const lineFun = line<RowData>()
      .x(d => {
        return d.x;
      })
      .y(d => {
        return d.y;
      })
      .curve(curveBasis);

    this.d = lineFun(lineData);
    this.ad = areaFun(lineData);
  }
}
