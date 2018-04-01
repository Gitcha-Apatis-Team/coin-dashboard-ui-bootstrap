import { Component, OnInit } from '@angular/core';
import { svg, scaleOrdinal, scaleBand, scaleLinear, min, max } from 'd3';

export const dummyData = [
  {
    TIMESTAMP: '2016-01-13T15:00:00.000Z',
    OPEN: 1050.15,
    HIGH: 1057.4,
    LOW: 1039.5,
    CLOSE: 1049.75,
    TURNOVER: 164.74,
    VOLATILITY: 20.07
  },
  {
    TIMESTAMP: '2016-01-14T15:00:00.000Z',
    OPEN: 1048,
    HIGH: 1055.45,
    LOW: 1038.1,
    CLOSE: 1042.15,
    TURNOVER: 141.88,
    VOLATILITY: 20.57
  },
  {
    TIMESTAMP: '2016-01-17T15:00:00.000Z',
    OPEN: 1035.65,
    HIGH: 1041.45,
    LOW: 1021,
    CLOSE: 1025.85,
    TURNOVER: 167.73,
    VOLATILITY: 23.92
  },
  {
    TIMESTAMP: '2016-01-18T15:00:00.000Z',
    OPEN: 1027.2,
    HIGH: 1037.55,
    LOW: 1026.3,
    CLOSE: 1035.8,
    TURNOVER: 165.44,
    VOLATILITY: 21.63
  },
  {
    TIMESTAMP: '2016-01-19T15:00:00.000Z',
    OPEN: 1025,
    HIGH: 1108,
    LOW: 1007.9,
    CLOSE: 1018.3,
    TURNOVER: 242.84,
    VOLATILITY: 23.75
  },
  {
    TIMESTAMP: '2016-01-20T15:00:00.000Z',
    OPEN: 1021,
    HIGH: 1033.25,
    LOW: 1013.4,
    CLOSE: 1023,
    TURNOVER: 160.89,
    VOLATILITY: 24.03
  },
  {
    TIMESTAMP: '2016-01-21T15:00:00.000Z',
    OPEN: 1025.7,
    HIGH: 1044.25,
    LOW: 1022.05,
    CLOSE: 1030.3,
    TURNOVER: 109.41,
    VOLATILITY: 25.53
  },
  {
    TIMESTAMP: '2016-01-24T15:00:00.000Z',
    OPEN: 1039.95,
    HIGH: 1046.7,
    LOW: 1033.05,
    CLOSE: 1041.15,
    TURNOVER: 263.54,
    VOLATILITY: 23.61
  },
  {
    TIMESTAMP: '2016-01-26T15:00:00.000Z',
    OPEN: 1048.45,
    HIGH: 1048.7,
    LOW: 1033,
    CLOSE: 1035.65,
    TURNOVER: 104.97,
    VOLATILITY: 28.57
  },
  {
    TIMESTAMP: '2016-01-27T15:00:00.000Z',
    OPEN: 1039,
    HIGH: 1046.9,
    LOW: 1030,
    CLOSE: 1031.7,
    TURNOVER: 257.75,
    VOLATILITY: 18.9
  },
  {
    TIMESTAMP: '2016-01-28T15:00:00.000Z',
    OPEN: 1035.2,
    HIGH: 1054.95,
    LOW: 1035.2,
    CLOSE: 1049.85,
    TURNOVER: 140.07,
    VOLATILITY: 18.57
  },
  {
    TIMESTAMP: '2016-01-31T15:00:00.000Z',
    OPEN: 1058,
    HIGH: 1067,
    LOW: 1053.7,
    CLOSE: 1059.75,
    TURNOVER: 122.25,
    VOLATILITY: 18.43
  },
  {
    TIMESTAMP: '2016-02-01T15:00:00.000Z',
    OPEN: 1065,
    HIGH: 1065.25,
    LOW: 1050.2,
    CLOSE: 1053.8,
    TURNOVER: 173.09,
    VOLATILITY: 17.75
  },
  {
    TIMESTAMP: '2016-02-02T15:00:00.000Z',
    OPEN: 1044.5,
    HIGH: 1051.4,
    LOW: 1042,
    CLOSE: 1043.85,
    TURNOVER: 126.82,
    VOLATILITY: 18.69
  },
  {
    TIMESTAMP: '2016-02-03T15:00:00.000Z',
    OPEN: 1048,
    HIGH: 1054.9,
    LOW: 1045.55,
    CLOSE: 1049.2,
    TURNOVER: 149.11,
    VOLATILITY: 18.27
  },
  {
    TIMESTAMP: '2016-02-04T15:00:00.000Z',
    OPEN: 1052.8,
    HIGH: 1063.8,
    LOW: 1045.6,
    CLOSE: 1055.25,
    TURNOVER: 198.63,
    VOLATILITY: 17.58
  },
  {
    TIMESTAMP: '2016-02-07T15:00:00.000Z',
    OPEN: 1055,
    HIGH: 1058,
    LOW: 1030.3,
    CLOSE: 1035.85,
    TURNOVER: 91.26,
    VOLATILITY: 19.24
  },
  {
    TIMESTAMP: '2016-02-08T15:00:00.000Z',
    OPEN: 1026.7,
    HIGH: 1031.55,
    LOW: 1020.65,
    CLOSE: 1026.05,
    TURNOVER: 141.96,
    VOLATILITY: 20.29
  },
  {
    TIMESTAMP: '2016-02-09T15:00:00.000Z',
    OPEN: 1023.9,
    HIGH: 1030.15,
    LOW: 1010.1,
    CLOSE: 1012.95,
    TURNOVER: 195.49,
    VOLATILITY: 21.85
  },
  {
    TIMESTAMP: '2016-02-10T15:00:00.000Z',
    OPEN: 1010,
    HIGH: 1013,
    LOW: 968.2,
    CLOSE: 975.3,
    TURNOVER: 218.21,
    VOLATILITY: 26.5
  },
  {
    TIMESTAMP: '2016-02-11T15:00:00.000Z',
    OPEN: 979,
    HIGH: 986.45,
    LOW: 966,
    CLOSE: 971.4,
    TURNOVER: 306.5,
    VOLATILITY: 25.11
  },
  {
    TIMESTAMP: '2016-02-14T15:00:00.000Z',
    OPEN: 980,
    HIGH: 988.25,
    LOW: 971.1,
    CLOSE: 973.6,
    TURNOVER: 267.08,
    VOLATILITY: 25.44
  },
  {
    TIMESTAMP: '2016-02-15T15:00:00.000Z',
    OPEN: 981.5,
    HIGH: 982,
    LOW: 962,
    CLOSE: 973.45,
    TURNOVER: 173.3,
    VOLATILITY: 24.77
  },
  {
    TIMESTAMP: '2016-02-16T15:00:00.000Z',
    OPEN: 976.9,
    HIGH: 979.9,
    LOW: 959,
    CLOSE: 974.9,
    TURNOVER: 181.87,
    VOLATILITY: 23.93
  },
  {
    TIMESTAMP: '2016-02-17T15:00:00.000Z',
    OPEN: 986,
    HIGH: 991.25,
    LOW: 977,
    CLOSE: 989.45,
    TURNOVER: 167.29,
    VOLATILITY: 20.21
  },
  {
    TIMESTAMP: '2016-02-18T15:00:00.000Z',
    OPEN: 988.75,
    HIGH: 992.6,
    LOW: 973.5,
    CLOSE: 989.3,
    TURNOVER: 81.77,
    VOLATILITY: 20.73
  },
  {
    TIMESTAMP: '2016-02-21T15:00:00.000Z',
    OPEN: 983,
    HIGH: 996,
    LOW: 983,
    CLOSE: 988.75,
    TURNOVER: 99.1,
    VOLATILITY: 22.65
  },
  {
    TIMESTAMP: '2016-02-22T15:00:00.000Z',
    OPEN: 984.9,
    HIGH: 985.5,
    LOW: 966,
    CLOSE: 970.05,
    TURNOVER: 147.7,
    VOLATILITY: 26.02
  },
  {
    TIMESTAMP: '2016-02-23T15:00:00.000Z',
    OPEN: 960,
    HIGH: 962.9,
    LOW: 946.4,
    CLOSE: 949.6,
    TURNOVER: 154.05,
    VOLATILITY: 37.02
  },
  {
    TIMESTAMP: '2016-02-24T15:00:00.000Z',
    OPEN: 954,
    HIGH: 957.25,
    LOW: 938.2,
    CLOSE: 942.65,
    TURNOVER: 200.62,
    VOLATILITY: 21.74
  },
  {
    TIMESTAMP: '2016-02-25T15:00:00.000Z',
    OPEN: 950,
    HIGH: 971,
    LOW: 945,
    CLOSE: 961,
    TURNOVER: 149.16,
    VOLATILITY: 21.39
  },
  {
    TIMESTAMP: '2016-02-28T15:00:00.000Z',
    OPEN: 961.1,
    HIGH: 982.6,
    LOW: 928,
    CLOSE: 971.85,
    TURNOVER: 212.96,
    VOLATILITY: 22.73
  },
  {
    TIMESTAMP: '2016-02-29T15:00:00.000Z',
    OPEN: 974.95,
    HIGH: 986.75,
    LOW: 971.85,
    CLOSE: 984.15,
    TURNOVER: 105.95,
    VOLATILITY: 21.63
  },
  {
    TIMESTAMP: '2016-03-01T15:00:00.000Z',
    OPEN: 998,
    HIGH: 1010.9,
    LOW: 995,
    CLOSE: 1007.2,
    TURNOVER: 159.69,
    VOLATILITY: 21.44
  },
  {
    TIMESTAMP: '2016-03-02T15:00:00.000Z',
    OPEN: 1010.75,
    HIGH: 1020,
    LOW: 1010,
    CLOSE: 1015.85,
    TURNOVER: 116.96,
    VOLATILITY: 19.87
  },
  {
    TIMESTAMP: '2016-03-03T15:00:00.000Z',
    OPEN: 1015.45,
    HIGH: 1024.9,
    LOW: 993.1,
    CLOSE: 1020.55,
    TURNOVER: 144.05,
    VOLATILITY: 19.46
  },
  {
    TIMESTAMP: '2016-03-07T15:00:00.000Z',
    OPEN: 1024,
    HIGH: 1024,
    LOW: 1009.5,
    CLOSE: 1014.15,
    TURNOVER: 48.58,
    VOLATILITY: 21.78
  },
  {
    TIMESTAMP: '2016-03-08T15:00:00.000Z',
    OPEN: 1013,
    HIGH: 1029.9,
    LOW: 1006.75,
    CLOSE: 1024.8,
    TURNOVER: 166.14,
    VOLATILITY: 21.83
  },
  {
    TIMESTAMP: '2016-03-09T15:00:00.000Z',
    OPEN: 1024.8,
    HIGH: 1025.75,
    LOW: 1010.1,
    CLOSE: 1021.25,
    TURNOVER: 68.09,
    VOLATILITY: 21.93
  },
  {
    TIMESTAMP: '2016-03-10T15:00:00.000Z',
    OPEN: 1019.9,
    HIGH: 1030.8,
    LOW: 1013,
    CLOSE: 1028.7,
    TURNOVER: 121.23,
    VOLATILITY: 21.93
  },
  {
    TIMESTAMP: '2016-03-13T15:00:00.000Z',
    OPEN: 1028,
    HIGH: 1037.95,
    LOW: 1025.25,
    CLOSE: 1027.55,
    TURNOVER: 77.5,
    VOLATILITY: 22.07
  },
  {
    TIMESTAMP: '2016-03-14T15:00:00.000Z',
    OPEN: 1027.9,
    HIGH: 1033.4,
    LOW: 1021.65,
    CLOSE: 1026.7,
    TURNOVER: 197.17,
    VOLATILITY: 21.98
  },
  // {
  //   TIMESTAMP: '2016-03-15T15:00:00.000Z',
  //   OPEN: 1027,
  //   HIGH: 1034.25,
  //   LOW: 1018.95,
  //   CLOSE: 1030.45,
  //   TURNOVER: 123.07,
  //   VOLATILITY: 21.76
  // },
  // {
  //   TIMESTAMP: '2016-03-16T15:00:00.000Z',
  //   OPEN: 1034.95,
  //   HIGH: 1039,
  //   LOW: 1011.15,
  //   CLOSE: 1018.4,
  //   TURNOVER: 131.55,
  //   VOLATILITY: 19.55
  // },
  // {
  //   TIMESTAMP: '2016-03-17T15:00:00.000Z',
  //   OPEN: 1022.95,
  //   HIGH: 1032,
  //   LOW: 1015.35,
  //   CLOSE: 1028.4,
  //   TURNOVER: 106.2,
  //   VOLATILITY: 17.75
  // },
  // {
  //   TIMESTAMP: '2016-03-20T15:00:00.000Z',
  //   OPEN: 1033,
  //   HIGH: 1047.35,
  //   LOW: 1032.25,
  //   CLOSE: 1045.6,
  //   TURNOVER: 138.29,
  //   VOLATILITY: 18.22
  // },
  // {
  //   TIMESTAMP: '2016-03-21T15:00:00.000Z',
  //   OPEN: 1046.5,
  //   HIGH: 1056.6,
  //   LOW: 1040.7,
  //   CLOSE: 1053.85,
  //   TURNOVER: 108.01,
  //   VOLATILITY: 17.02
  // },
  // {
  //   TIMESTAMP: '2016-03-22T15:00:00.000Z',
  //   OPEN: 1053.05,
  //   HIGH: 1053.05,
  //   LOW: 1040.55,
  //   CLOSE: 1049.35,
  //   TURNOVER: 221.35,
  //   VOLATILITY: 16.41
  // },
  // {
  //   TIMESTAMP: '2016-03-27T15:00:00.000Z',
  //   OPEN: 1045,
  //   HIGH: 1053,
  //   LOW: 1041.65,
  //   CLOSE: 1047.5,
  //   TURNOVER: 295.47,
  //   VOLATILITY: 22.32
  // },
  // {
  //   TIMESTAMP: '2016-03-28T15:00:00.000Z',
  //   OPEN: 1047.5,
  //   HIGH: 1059.5,
  //   LOW: 1044.25,
  //   CLOSE: 1053.8,
  //   TURNOVER: 177.6,
  //   VOLATILITY: 24.46
  // },
  // {
  //   TIMESTAMP: '2016-03-29T15:00:00.000Z',
  //   OPEN: 1058,
  //   HIGH: 1069.9,
  //   LOW: 1053.9,
  //   CLOSE: 1064.95,
  //   TURNOVER: 207.7,
  //   VOLATILITY: 27.49
  // },
  // {
  //   TIMESTAMP: '2016-03-30T15:00:00.000Z',
  //   OPEN: 1066.85,
  //   HIGH: 1078.9,
  //   LOW: 1065.05,
  //   CLOSE: 1071.15,
  //   TURNOVER: 538.64,
  //   VOLATILITY: 19.86
  // },
  // {
  //   TIMESTAMP: '2016-03-31T15:00:00.000Z',
  //   OPEN: 1068.8,
  //   HIGH: 1076.4,
  //   LOW: 1056.8,
  //   CLOSE: 1064.45,
  //   TURNOVER: 137.08,
  //   VOLATILITY: 20.57
  // },
  // {
  //   TIMESTAMP: '2016-04-03T15:00:00.000Z',
  //   OPEN: 1065.2,
  //   HIGH: 1072.8,
  //   LOW: 1064,
  //   CLOSE: 1069.05,
  //   TURNOVER: 165.03,
  //   VOLATILITY: 20.95
  // },
  // {
  //   TIMESTAMP: '2016-04-04T15:00:00.000Z',
  //   OPEN: 1069,
  //   HIGH: 1076.9,
  //   LOW: 1055.65,
  //   CLOSE: 1057.45,
  //   TURNOVER: 177.26,
  //   VOLATILITY: 19.74
  // },
  // {
  //   TIMESTAMP: '2016-04-05T15:00:00.000Z',
  //   OPEN: 1061,
  //   HIGH: 1066.95,
  //   LOW: 1056.75,
  //   CLOSE: 1061.5,
  //   TURNOVER: 114.14,
  //   VOLATILITY: 18.61
  // },
  // {
  //   TIMESTAMP: '2016-04-06T15:00:00.000Z',
  //   OPEN: 1064,
  //   HIGH: 1064.75,
  //   LOW: 1047.05,
  //   CLOSE: 1055.5,
  //   TURNOVER: 103.3,
  //   VOLATILITY: 17.18
  // },
  // {
  //   TIMESTAMP: '2016-04-07T15:00:00.000Z',
  //   OPEN: 1055,
  //   HIGH: 1063.35,
  //   LOW: 1054.25,
  //   CLOSE: 1059.35,
  //   TURNOVER: 78.38,
  //   VOLATILITY: 16.91
  // },
  // {
  //   TIMESTAMP: '2016-04-10T15:00:00.000Z',
  //   OPEN: 1060.3,
  //   HIGH: 1074.1,
  //   LOW: 1042.85,
  //   CLOSE: 1070.95,
  //   TURNOVER: 106.82,
  //   VOLATILITY: 17.72
  // },
  // {
  //   TIMESTAMP: '2016-04-11T15:00:00.000Z',
  //   OPEN: 1069.6,
  //   HIGH: 1071,
  //   LOW: 1059.25,
  //   CLOSE: 1063,
  //   TURNOVER: 131.38,
  //   VOLATILITY: 17.37
  // },
  // {
  //   TIMESTAMP: '2016-04-12T15:00:00.000Z',
  //   OPEN: 1072,
  //   HIGH: 1084.95,
  //   LOW: 1069.5,
  //   CLOSE: 1081.75,
  //   TURNOVER: 134.16,
  //   VOLATILITY: 16.81
  // },
  // {
  //   TIMESTAMP: '2016-04-17T15:00:00.000Z',
  //   OPEN: 1083.5,
  //   HIGH: 1092,
  //   LOW: 1071.6,
  //   CLOSE: 1087.8,
  //   TURNOVER: 111.83,
  //   VOLATILITY: 20.11
  // },
  // {
  //   TIMESTAMP: '2016-04-19T15:00:00.000Z',
  //   OPEN: 1091.9,
  //   HIGH: 1100,
  //   LOW: 1083.55,
  //   CLOSE: 1097.85,
  //   TURNOVER: 104.5,
  //   VOLATILITY: 21.19
  // }
];

@Component({
  selector: 'app-candle-stick-chart',
  templateUrl: './candle-stick-chart.component.html',
  styleUrls: ['./candle-stick-chart.component.scss']
})
export class CandleStickChartComponent implements OnInit {
  constructor() {}
  public lineData;
  public candleData;
  ngOnInit() {
    const margin = { top: 0, right: 30, bottom: 40, left: 5 },
      width = 620,
      height = 300,
      Bheight = 460;
    // const x = d3.scale.ordinal().rangeBands([0, width]);
    // const y = d3.scale.linear().rangeRound([height, 0]);
    const x = scaleBand().range([0, width]);
    const y = scaleLinear().rangeRound([height, 0]);
    const barwidth = x.bandwidth();
    const candlewidth = Math.floor(min([barwidth * 0.8, 13]) / 2) * 2 + 1;
    const delta = Math.round((barwidth - candlewidth) / 2);

    const minimal = min(dummyData, d => {
      return d.LOW;
    });
    const maximal = max(dummyData, d => {
      return d.HIGH;
    });

    x.domain(
      dummyData.map(d => {
        return d.TIMESTAMP;
      })
    );
    y.domain([minimal, maximal]).nice();

    this.lineData = dummyData.map(row => {
      // console.log(row);
      const temp = row.CLOSE > row.OPEN ? 'rise' : 'fall';
      // const timestamp = new Date(row.TIMESTAMP);
      // console.log(timestamp);

      return {
        x: x(row.TIMESTAMP) + Math.floor(barwidth / 2),
        y: y(row.HIGH),
        class: `sticks ${temp}`,
        height: y(row.LOW) - y(row.HIGH),
        width: 1
        // TURNOVER: ,
        // VOLATILITY:
      };
    });
    //  console.log(this.lineData);

    // .attr("x", function(d) { return x(d.TIMESTAMP) + delta; })
    // .attr("y", function(d) { return y(d3.max([d.OPEN, d.CLOSE])); })
    // .attr("class", function(d, i) { return "candle"+i; })
    // .attr("height", function(d) { return y(d3.min([d.OPEN, d.CLOSE])) - y(d3.max([d.OPEN, d.CLOSE])); })
    // .attr("width", candlewidth)
    // .classed("rise", function(d) { return (d.CLOSE>d.OPEN); })
    // .classed("fall", function(d) { return (d.OPEN>d.CLOSE); });

    this.candleData = dummyData.map(row => {
      const xRow =  x(row.TIMESTAMP) + delta;
      const yRow =  y(max([row.OPEN , row.CLOSE]));
      const riseFall  = row.CLOSE > row.OPEN ? 'rise' : 'fall';
      const rectHeight = y(min([row.OPEN, row.CLOSE])) - y(max([row.OPEN, row.CLOSE]));
      const rectWidth = candlewidth;

      return {
        x : xRow ,
        y : yRow ,
        class  : `candles ${riseFall}` ,
        height : rectHeight,
        width : rectWidth
      };
    });
    console.log(this.candleData);

  }
}
