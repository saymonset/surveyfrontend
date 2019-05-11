import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantNewsComponent } from './cuadrant-news.component';

describe('CuadrantNewsComponent', () => {
  let component: CuadrantNewsComponent;
  let fixture: ComponentFixture<CuadrantNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
