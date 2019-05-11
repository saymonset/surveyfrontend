import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantChartComponent } from './cuadrant-chart.component';

describe('CuadrantChartComponent', () => {
  let component: CuadrantChartComponent;
  let fixture: ComponentFixture<CuadrantChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
