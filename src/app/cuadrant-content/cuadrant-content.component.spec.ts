import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantContentComponent } from './cuadrant-content.component';

describe('CuadrantContentComponent', () => {
  let component: CuadrantContentComponent;
  let fixture: ComponentFixture<CuadrantContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
