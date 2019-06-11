import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsMainChartComponent } from './nps-main-chart.component';

describe('NpsMainChartComponent', () => {
  let component: NpsMainChartComponent;
  let fixture: ComponentFixture<NpsMainChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsMainChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsMainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
