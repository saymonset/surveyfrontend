import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSurveyComponent } from './send-survey.component';

describe('SendSurveyComponent', () => {
  let component: SendSurveyComponent;
  let fixture: ComponentFixture<SendSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
