import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateToComponent } from './date-to.component';

describe('DateToComponent', () => {
  let component: DateToComponent;
  let fixture: ComponentFixture<DateToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
