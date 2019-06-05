import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSimpleComponent } from './home-simple.component';

describe('HomeSimpleComponent', () => {
  let component: HomeSimpleComponent;
  let fixture: ComponentFixture<HomeSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
