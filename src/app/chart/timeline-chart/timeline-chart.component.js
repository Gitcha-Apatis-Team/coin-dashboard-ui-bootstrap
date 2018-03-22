"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
exports.single = [
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
exports.multi = [
    {
        name: 'XRP',
        series: [
            {
                name: '2010',
                value: 100
            },
            {
                name: '2011',
                value: 200
            }
        ]
    }
];
var TimelineChartComponent = /** @class */ (function () {
    function TimelineChartComponent(coinOneApiService) {
        this.coinOneApiService = coinOneApiService;
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = '시간';
        this.showYAxisLabel = true;
        this.yAxisLabel = '';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        // Object.assign(this, { single, multi }); 해당 객체로 객체 프로퍼티 COPY
        this.single = exports.single;
        this.multi = exports.multi;
    }
    TimelineChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () { return _this.getTickers(); }, 2000);
    };
    TimelineChartComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    TimelineChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    TimelineChartComponent.prototype.getTickers = function () {
        var _this = this;
        this.coinOneApiService.getTickers().subscribe(function (dataSet) {
            var data = {
                name: dataSet.timestamp,
                value: dataSet['xrp'].last
            };
            _this.multi[0].series.push(data);
            _this.multi = _this.multi.slice();
        });
    };
    TimelineChartComponent.prototype.getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    TimelineChartComponent = __decorate([
        core_1.Component({
            selector: 'app-timeline-chart',
            templateUrl: './timeline-chart.component.html',
            styleUrls: ['./timeline-chart.component.scss']
        })
    ], TimelineChartComponent);
    return TimelineChartComponent;
}());
exports.TimelineChartComponent = TimelineChartComponent;
