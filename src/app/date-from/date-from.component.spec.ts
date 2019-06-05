import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFromComponent } from './date-from.component';

describe('DateFromComponent', () => {
  let component: DateFromComponent;
  let fixture: ComponentFixture<DateFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
