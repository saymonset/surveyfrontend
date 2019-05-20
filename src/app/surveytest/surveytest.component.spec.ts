import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveytestComponent } from './surveytest.component';

describe('SurveytestComponent', () => {
  let component: SurveytestComponent;
  let fixture: ComponentFixture<SurveytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
