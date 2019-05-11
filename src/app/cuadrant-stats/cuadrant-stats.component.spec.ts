import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantStatsComponent } from './cuadrant-stats.component';

describe('CuadrantStatsComponent', () => {
  let component: CuadrantStatsComponent;
  let fixture: ComponentFixture<CuadrantStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
