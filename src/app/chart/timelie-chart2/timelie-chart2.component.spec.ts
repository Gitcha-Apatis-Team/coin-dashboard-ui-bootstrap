import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelieChart2Component } from './timelie-chart2.component';

describe('TimelieChart2Component', () => {
  let component: TimelieChart2Component;
  let fixture: ComponentFixture<TimelieChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelieChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelieChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
