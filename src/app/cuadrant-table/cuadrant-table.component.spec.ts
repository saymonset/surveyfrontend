import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantTableComponent } from './cuadrant-table.component';

describe('CuadrantTableComponent', () => {
  let component: CuadrantTableComponent;
  let fixture: ComponentFixture<CuadrantTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
